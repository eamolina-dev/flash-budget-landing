import { useEffect, useRef } from "react";

type Props = {
  src: string;
  alt?: string;
};

export const FullImageSection = ({ src, alt = "" }: Props) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    let rafId = 0;

    const updateTransform = () => {
      rafId = 0;
      if (!imageRef.current || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(
        Math.min(
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
          1
        ),
        0
      );

      const translate = (progress - 0.5) * 30;
      imageRef.current.style.transform = `translate3d(0, ${translate}px, 0) scale(1.08)`;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateTransform);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[72vh] md:h-[85vh] lg:h-screen overflow-hidden outline outline-1 -outline-offset-1 outline-[#111115]"
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-black/15" />
    </section>
  );
};
