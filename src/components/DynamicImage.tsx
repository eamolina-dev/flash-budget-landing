import { useEffect, useRef } from "react";

type Props = {
  src: string;
  alt: string;
};

export const DynamicImageSection = ({ src, alt }: Props) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;

      const section = imgRef.current.closest("section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress = 1 - rect.bottom / (windowHeight + rect.height);
      progress = Math.min(Math.max(progress, 0), 1);

      const scale = 1.18 - progress * 0.18;
      const shift = (progress - 0.5) * 26;
      imgRef.current.style.transform = `scale(${scale}) translateY(${shift}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] lg:h-screen overflow-hidden my-1">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
    </section>
  );
};
