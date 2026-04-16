import { useEffect, useRef } from "react";

type Props = {
  src: string;
  alt?: string;
};

export const FullImageSection = ({ src, alt = "" }: Props) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const section = imageRef.current.closest("section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const progress = Math.max(
        Math.min(
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
          1
        ),
        0
      );
      const translate = (progress - 0.5) * 30;
      imageRef.current.style.transform = `scale(1.08) translateY(${translate}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[72vh] md:h-[85vh] lg:h-screen overflow-hidden my-1">
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
