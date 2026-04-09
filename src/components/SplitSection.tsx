export const SplitSection = () => {
  return (
    <section
      id="servicios"
      className="w-full flex flex-col lg:flex-row lg:min-h-screen my-1"
    >
      {/* MITAD IMAGEN */}
      <div className="w-full lg:w-1/2 aspect-[4/5] lg:h-auto relative order-1">
        <img
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486"
          alt="Sesión de fotos"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* MITAD TEXTO */}
      <div className="w-full lg:w-1/2 relative aspect-[4/5] lg:aspect-auto bg-neutral-100 order-2 flex items-center justify-center px-10 py-16">
        <div className="max-w-md fade-in-right">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
            El Servicio
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Cada boda es única, y mi trabajo es contarla de forma auténtica. <br /><br />
            Me enfoco en capturar los momentos reales: miradas cómplices, risas nerviosas,
            abrazos sinceros y todos esos detalles que muchas veces pasan desapercibidos,
            pero que hacen que el día sea inolvidable.
          </p>

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
