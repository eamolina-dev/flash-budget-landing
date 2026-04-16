import { useEffect, useRef } from "react";

type Props = {
  src: string;
  title: string;
  subtitle: string;
  btnText: string;
  btnHref?: string;
};

export const Hero = ({
  src,
  title,
  subtitle,
  btnText,
  btnHref = "#servicios",
}: Props) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const offset = Math.min(window.scrollY * 0.2, 120);
      imageRef.current.style.transform = `scale(1.08) translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[80vh] md:h-[94vh] lg:h-screen overflow-hidden my-1 bg-[#08080b]">
      <img
        ref={imageRef}
        src={src}
        alt="Quinceañera en su celebración"
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

      <div className="relative z-10 flex items-end h-full px-6 md:px-14 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#d5cfc5] mb-5">
            Fotografía de 15 años
          </p>
          <h1 className="font-editorial text-7xl md:text-9xl lg:text-[10rem] font-medium leading-[0.82] text-[#f4efe7]">
            {title}
          </h1>

          <p className="mt-6 text-base md:text-xl text-[#d5cfc5] max-w-xl">{subtitle}</p>

          <a
            href={btnHref}
            className="mt-10 inline-block border border-[#d7d1c7] px-8 py-3 text-xs md:text-sm tracking-[0.26em] text-[#f0ebe2] hover:bg-[#f0ebe2] hover:text-black transition"
          >
            {btnText}
          </a>
        </div>
      </div>
    </section>
  );
};
