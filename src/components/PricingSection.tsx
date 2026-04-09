type Props = {
  title: string;
  description: React.ReactNode;
  price: string;
  image: string;
  reverse?: boolean;
};

export const PricingSection = ({
  title,
  description,
  price,
  image,
  reverse = false,
}: Props) => {
  return (
    <section className="w-full flex flex-col lg:flex-row lg:min-h-screen my-1">
      {/* IMAGEN */}
      <div
        className={`w-full lg:w-1/2 aspect-[4/5] lg:h-auto relative ${
          reverse ? "order-1 lg:order-2" : "order-1"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* TEXTO */}
      <div
        className={`w-full lg:w-1/2 relative aspect-[4/5] lg:aspect-auto bg-neutral-100 flex items-center justify-center px-10 py-16 ${
          reverse ? "order-2 lg:order-1" : "order-2"
        }`}
      >
        <div className={`max-w-md ${reverse ? "fade-in-left" : "fade-in-right"}`}>
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
            {title}
          </h2>

          <div className="text-gray-600 mb-6 leading-relaxed">
            {description}
          </div>

          <div className="mb-8">
            <p className="text-sm uppercase tracking-widest text-gray-500">Desde</p>
            <p className="text-4xl font-light">{price}</p>
          </div>

          <a
            href="#contacto"
            className="inline-block border border-black px-8 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition"
          >
            RESERVAR FECHA
          </a>
        </div>
      </div>
    </section>
  );
};
