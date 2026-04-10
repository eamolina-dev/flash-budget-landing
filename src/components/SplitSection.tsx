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
  return (
    <section
      id={id}
      className="w-full flex flex-col lg:flex-row lg:min-h-screen my-1 bg-stone-50"
    >
      <div
        className={`w-full lg:w-1/2 aspect-[4/5] lg:h-auto relative ${
          reverse ? "order-1 lg:order-2" : "order-1"
        }`}
      >
        <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
      </div>

      <div
        className={`w-full lg:w-1/2 relative flex items-center justify-center px-8 md:px-14 py-16 md:py-24 ${
          reverse ? "order-2 lg:order-1" : "order-2"
        }`}
      >
        <div className="max-w-xl">
          {eyebrow ? (
            <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-6">{eyebrow}</p>
          ) : null}
          <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">{title}</h2>

          <p className="text-stone-600 leading-relaxed whitespace-pre-line">{text}</p>

          {ctaText ? (
            <a
              href={ctaHref}
              className="mt-10 inline-block border border-black px-8 py-3 text-xs tracking-[0.25em] hover:bg-black hover:text-white transition"
            >
              {ctaText}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
};
