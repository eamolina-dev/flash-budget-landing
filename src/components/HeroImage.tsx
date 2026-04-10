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
  return (
    <section className="relative w-full h-[72vh] md:h-[88vh] lg:h-screen overflow-hidden my-1">
      <img
        src={src}
        alt="Quinceañera en su celebración"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex items-end h-full text-white px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/80 mb-4">
            Fotografía de 15 años
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] drop-shadow-lg">
            {title}
          </h1>

          <p className="mt-6 text-base md:text-xl text-white/90 max-w-xl">{subtitle}</p>

          <a
            href={btnHref}
            className="mt-10 inline-block border border-white px-8 py-3 text-xs md:text-sm tracking-[0.25em] hover:bg-white hover:text-black transition"
          >
            {btnText}
          </a>
        </div>
      </div>
    </section>
  );
};
