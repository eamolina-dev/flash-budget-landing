import { useEffect, useRef } from "react";

type Props = {
  image: string;
  alt?: string;
};

export const ParallaxZoomSection = ({ image, alt = "" }: Props) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // progreso dentro de la sección
      let progress = 1 - rect.bottom / (windowHeight + rect.height);
      progress = Math.min(Math.max(progress, 0), 1);

      // 💣 zoom MUY suave pero visible
      const scale = 1 + progress * 0.25; // 1 → 1.25

      // leve desplazamiento para más profundidad
      const translateY = progress * 40;

      imgRef.current.style.transform = `
        scale(${scale})
        translateY(${translateY}px)
      `;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[180vh]">
      {/* Sticky image */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <img
          ref={imgRef}
          src={image}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
        />

        {/* overlay opcional */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </section>
  );
};
