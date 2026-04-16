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

      // Reveal image during the first part of the section scroll,
      // then keep it fully visible while it remains sticky.
      const revealDistance = scrollDistance * 0.65;
      const nextProgress = clamp(traveled / revealDistance, 0, 1);

      setProgress((current) =>
        Math.abs(current - nextProgress) > 0.001 ? nextProgress : current
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
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[185vh] sm:h-[190vh] lg:h-[210vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          // style={{ clipPath: `inset(${100 - progress * 100}% 0 0 0)` }}
        />
        {/* <div className="absolute inset-0 bg-black/20" /> */}
      </div>
    </section>
  );
};
