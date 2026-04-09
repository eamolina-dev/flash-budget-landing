import { useEffect, useRef } from "react";

export const DynamicImageSection = () => {
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

      const scale = 1.5 - progress * 0.5;
      imgRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-screen overflow-hidden my-1">
      <img
        ref={imgRef}
        src="/assets/photography-page/couple-8176869_1280.jpg"
        alt="Fotografía artística"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
};
