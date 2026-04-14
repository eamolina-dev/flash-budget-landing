import { useEffect, useRef } from "react";

type Props = {
  src: string;
  alt: string;
};

export const DynamicImageSection = ({ src, alt }: Props) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    let current = 0;
    let target = 0;

    const handleScroll = () => {
      if (!imgRef.current) return;

      const section = imgRef.current.closest("section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress = 1 - rect.bottom / (windowHeight + rect.height);
      progress = Math.min(Math.max(progress, 0), 1);

      target = progress;
    };

    const animate = () => {
      // 🔥 suavizado (clave)
      current += (target - current) * 0.06;

      if (imgRef.current) {
        // 🔥 ZOOM MUY NOTORIO
        const scale = 1.6 - current * 0.6;

        // 🔥 PARALLAX FUERTE
        const translateY = (current - 0.5) * 120;

        // 🔥 easing no lineal (más cinematográfico)
        const eased = current * current * (3 - 2 * current); // smoothstep

        imgRef.current.style.transform = `
          scale(${scale})
          translateY(${translateY * eased}px)
        `;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden my-1">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />

      {/* overlay suave para dar profundidad */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
    </section>
  );
};
