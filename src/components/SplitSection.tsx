import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

type Props = {
  id?: string;
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  text: string;
  ctaText?: string;
  ctaHref?: string;
  reverse?: boolean;
};

export const SplitSection = ({
  id,
  image,
  imageAlt,
  eyebrow,
  title,
  text,
  ctaText,
  ctaHref = "#contacto",
  reverse = false,
}: Props) => {
  const textRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section
      id={id}
      className="relative z-10 bg-[#0f0f13] -mt-[60vh] w-full flex flex-col lg:flex-row lg:min-h-screen my-1 bg-[#0f0f13]"
    >
      <div
        className={`w-full lg:w-1/2 aspect-[4/5] lg:h-auto relative ${
          reverse ? "order-1 lg:order-2" : "order-1"
        }`}
      >
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div
        className={`w-full lg:w-1/2 relative flex items-center justify-center px-8 md:px-16 py-20 md:py-28 ${
          reverse ? "order-2 lg:order-1" : "order-2"
        }`}
      >
        <div ref={textRef} className="max-w-xl reveal-up">
          {eyebrow ? (
            <p className="text-xs tracking-[0.34em] uppercase text-[#9f978b] mb-6">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-editorial text-5xl md:text-7xl font-medium mb-7 leading-[0.95] text-[#f2ece3]">
            {title}
          </h2>

          <p className="text-[#c9c0b4] text-base md:text-lg leading-relaxed whitespace-pre-line">
            {text}
          </p>

          {ctaText ? (
            <a
              href={ctaHref}
              className="mt-10 inline-block border border-[#d7d1c7] px-8 py-3 text-xs tracking-[0.25em] text-[#f2ece3] hover:bg-[#efe7db] hover:text-black transition"
            >
              {ctaText}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
};
