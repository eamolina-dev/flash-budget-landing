import { useEffect, useRef } from "react";

type Props = {
  src: string;
  alt: string;
};

export const DynamicImageSection = ({ src, alt }: Props) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    let current = 0;
    let target = 0;
    let measureRaf = 0;
    let animateRaf = 0;

    const measureProgress = () => {
      measureRaf = 0;

      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const rawProgress = 1 - rect.bottom / (viewportHeight + rect.height);
      const nextTarget = Math.min(Math.max(rawProgress, 0), 1);

      // Small dead-zone to avoid tiny back-and-forth changes during fast scroll.
      if (Math.abs(nextTarget - target) > 0.002) {
        target = nextTarget;
      }
    };

    const queueMeasure = () => {
      if (measureRaf) return;
      measureRaf = window.requestAnimationFrame(measureProgress);
    };

    const animate = () => {
      const delta = target - current;
      current += delta * 0.1;

      // Snap when close enough to eliminate sub-pixel jitter.
      if (Math.abs(delta) < 0.0005) {
        current = target;
      }

      if (imgRef.current) {
        const scale = 1.08 - current * 0.08;
        const translateY = (current - 0.5) * 24;
        imgRef.current.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      }

      animateRaf = window.requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", queueMeasure, { passive: true });
    window.addEventListener("resize", queueMeasure);

    queueMeasure();
    animate();

    return () => {
      window.removeEventListener("scroll", queueMeasure);
      window.removeEventListener("resize", queueMeasure);

      if (measureRaf) {
        window.cancelAnimationFrame(measureRaf);
      }
      if (animateRaf) {
        window.cancelAnimationFrame(animateRaf);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[90vh] md:h-screen overflow-hidden outline outline-1 -outline-offset-1 outline-[#111115]"
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />

      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
    </section>
  );
};
