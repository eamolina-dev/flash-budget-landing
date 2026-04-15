import { useEffect, useRef, useState } from "react";

type Props = {
  image: string;
  alt?: string;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const RevealImageSection = ({ image, alt = "" }: Props) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let rafId = 0;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollDistance = Math.max(rect.height - viewportHeight, 1);
      const traveled = clamp(-rect.top, 0, scrollDistance);

      // Reveal image in the first 65% of travel, then keep it fully visible.
      const revealDistance = scrollDistance * 0.65;
      const nextProgress = clamp(traveled / revealDistance, 0, 1);

      setProgress((current) =>
        Math.abs(current - nextProgress) > 0.001 ? nextProgress : current,
      );
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateProgress();
        rafId = 0;
      });
    };

    updateProgress();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[190vh] md:h-[200vh] lg:h-[220vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute inset-x-0 bottom-0 overflow-hidden"
          style={{ height: `${progress * 100}%` }}
        >
          <img
            src={image}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    </section>
  );
};
