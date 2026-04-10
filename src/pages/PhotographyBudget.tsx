import { ContactSection } from "../components/ContactSection";
import { DynamicImageSection } from "../components/DynamicImage";
import { FaqSection } from "../components/FaqSection";
import { FullImageSection } from "../components/FullImageSection";
import { GalleryMosaic } from "../components/GalleryMosaic";
import { Hero } from "../components/HeroImage";
import { SplitSection } from "../components/SplitSection";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

type Package = {
  name: string;
  price: string;
  details: string[];
};

const packages: Package[] = [
  {
    name: "Esencia",
    price: "USD 650",
    details: [
      "Recepción + ceremonia",
      "Retratos de familia",
      "250+ fotos editadas",
      "Galería privada online",
    ],
  },
  {
    name: "Historia",
    price: "USD 980",
    details: [
      "Cobertura completa",
      "Sesión previa de retratos",
      "Highlights en 72 hs",
      "450+ fotos editadas",
    ],
  },
  {
    name: "Legado",
    price: "USD 1.350",
    details: [
      "Segundo fotógrafo",
      "Sesión editorial pre 15",
      "Caja premium + impresiones",
      "650+ fotos editadas",
    ],
  },
];

export const PhotographyBudget = () => {
  const pricingRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <>
      <Hero
        src="/assets/15_Serena_web/Fiesta%2015%20Serena/--407.webp"
        title="Tus 15, eternos"
        subtitle="Imágenes que se sienten como un recuerdo vivo."
        btnText="VER PRESUPUESTO"
        btnHref="#presupuesto"
      />

      <SplitSection
        id="servicios"
        image="/assets/15_Renata_web/Fiesta%2015%20Renata%20/--1.webp"
        imageAlt="Retrato de quinceañera en exteriores"
        eyebrow="La experiencia"
        title="Una noche que pasa rápido, una historia que queda"
        text={`Cobertura sensible, elegante y real.

Nos quedamos con lo esencial: emoción, familia y fiesta.`}
        ctaText="QUIERO MI FECHA"
      />

      <FullImageSection
        src="/assets/15_Juli_web/Fiesta%2015%20Juli/--267.webp"
        alt="Entrada de quinceañera a su fiesta"
      />

      <DynamicImageSection
        src="/assets/15_Serena_web/Fiesta%2015%20Serena/--689.webp"
        alt="Baile de quinceañera con luces de fiesta"
      />

      <GalleryMosaic
        title="Momentos que merecen quedarse"
        images={[
          {
            src: "/assets/15_Renata_web/Fiesta%2015%20Renata%20/--330.webp",
            alt: "Retrato editorial de quinceañera",
          },
          {
            src: "/assets/15_Juli_web/Fiesta%2015%20Juli/--156.webp",
            alt: "Quinceañera sonriente con vestido de gala",
          },
          {
            src: "/assets/15_Serena_web/Fiesta%2015%20Serena/--596.webp",
            alt: "Celebración de 15 años en pista de baile",
          },
          {
            src: "/assets/15_Renata_web/Fiesta%2015%20Renata%20/--529.webp",
            alt: "Detalle de vestido de quinceañera",
          },
          {
            src: "/assets/15_Juli_web/Fiesta%2015%20Juli/--141.webp",
            alt: "Abrazo familiar en la fiesta de 15",
          },
          {
            src: "/assets/15_Serena_web/Fiesta%2015%20Serena/--144.webp",
            alt: "Retrato íntimo de quinceañera",
          },
          {
            src: "/assets/15_Renata_web/Fiesta%2015%20Renata%20/--381.webp",
            alt: "Quinceañera entrando al salón",
          },
          {
            src: "/assets/15_Juli_web/Fiesta%2015%20Juli/--11.webp",
            alt: "Detalle de decoración y ambientación",
          },
          {
            src: "/assets/15_Serena_web/Fiesta%2015%20Serena/--325.webp",
            alt: "Grupo de amigas celebrando",
          },
        ]}
      />

      <SplitSection
        reverse
        image="/assets/15_Juli_web/Fiesta%2015%20Juli/--330.webp"
        imageAlt="Retrato de quinceañera con luz nocturna"
        eyebrow="Cobertura"
        title="Dirección suave, emoción verdadera"
        text={`Combinamos retrato editorial y mirada documental.

El resultado: una galería elegante, viva y natural.`}
      />

      <section id="presupuesto" className="w-full py-24 md:py-32 px-6 bg-[#111115] my-1">
        <div ref={pricingRef} className="max-w-6xl mx-auto reveal-up">
          <div className="max-w-2xl mb-14 md:mb-20">
            <p className="text-xs uppercase tracking-[0.36em] text-[#a69c90] mb-4">Inversión</p>
            <h2 className="font-editorial text-5xl md:text-7xl font-medium mb-6 text-[#f2ece3]">
              Paquetes para tus 15
            </h2>
            <p className="text-[#c9c0b4] text-lg leading-relaxed">
              Elegí la cobertura ideal y personalizamos cada detalle para tu fecha.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {packages.map((pack) => (
              <article key={pack.name} className="border-t border-[#38332d] pt-7">
                <h3 className="font-editorial text-4xl md:text-5xl text-[#f2ece3] mb-3">{pack.name}</h3>
                <p className="text-3xl font-light text-[#e5dbcd] mb-7">{pack.price}</p>
                <ul className="space-y-3 text-[#c9c0b4]">
                  {pack.details.map((detail) => (
                    <li key={detail}>— {detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        title="Preguntas frecuentes"
        items={[
          {
            question: "¿Cuándo conviene reservar?",
            answer:
              "Entre 4 y 8 meses antes, especialmente para fechas de alta demanda.",
          },
          {
            question: "¿Cuándo se entrega la galería?",
            answer:
              "En 3 a 5 semanas, con un adelanto durante los primeros días.",
          },
          {
            question: "¿Incluye edición?",
            answer:
              "Sí. Todas las imágenes seleccionadas se entregan editadas profesionalmente.",
          },
        ]}
      />

      <ContactSection
        title="Reservá tu fecha"
        subtitle="Escribinos por WhatsApp y armamos una propuesta a medida para tus 15."
        links={[{ label: "WHATSAPP", href: "https://wa.me/5491112345678" }]}
      />
    </>
  );
};
