import { ContactSection } from "../components/ContactSection";
import { DynamicImageSection } from "../components/DynamicImage";
import { FaqSection } from "../components/FaqSection";
import { FullImageSection } from "../components/FullImageSection";
import { GalleryMosaic } from "../components/GalleryMosaic";
import { Hero } from "../components/HeroImage";
import { SplitSection } from "../components/SplitSection";

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
      "Cobertura de recepción + ceremonia",
      "Retratos de la quinceañera y familia",
      "Galería digital privada",
      "Entrega de 250+ fotos editadas",
    ],
  },
  {
    name: "Historia",
    price: "USD 980",
    details: [
      "Cobertura completa del evento",
      "Sesión previa de retratos",
      "Highlights para redes en 72 hs",
      "Entrega de 450+ fotos editadas",
    ],
  },
  {
    name: "Legado",
    price: "USD 1.350",
    details: [
      "Cobertura completa con segundo fotógrafo",
      "Sesión editorial pre 15",
      "Caja premium + 40 impresiones fine art",
      "Entrega de 650+ fotos editadas",
    ],
  },
];

export const PhotographyBudget = () => {
  return (
    <>
      <Hero
        src="/assets/15_Serena_web/Fiesta%2015%20Serena/--407.webp"
        title="Tus 15, eternos"
        subtitle="Una historia visual para volver a sentir cada abrazo, cada lágrima y cada sonrisa."
        btnText="VER PRESUPUESTO"
        btnHref="#servicios"
      />

      <SplitSection
        id="servicios"
        image="/assets/15_Renata_web/Fiesta%2015%20Renata%20/--1.webp"
        imageAlt="Retrato de quinceañera en exteriores"
        eyebrow="La experiencia"
        title="No es solo una fiesta, es un capítulo de familia"
        text={`Cada cobertura está pensada para contar tu noche con sensibilidad y estética editorial.

Nos enfocamos en los detalles que se sienten: la mirada de mamá, las amigas en la pista, el vestido en movimiento y la energía única de tus 15.`}
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
        title="Presencia discreta, resultados inolvidables"
        text={`Trabajamos con dirección suave para que te veas natural y elegante, sin posar todo el tiempo.

Combinamos retrato, documental y fotografía de fiesta para entregar una galería completa, emotiva y coherente.`}
      />

      <section id="presupuesto" className="w-full py-20 md:py-28 px-6 bg-stone-50 my-1">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">Inversión</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Paquetes para tus 15 años</h2>
            <p className="text-stone-600 leading-relaxed">
              Elegí el nivel de cobertura que mejor acompaña tu celebración. Todos los paquetes incluyen
              edición profesional y acompañamiento previo para planificar cada momento.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {packages.map((pack) => (
              <article key={pack.name} className="border-t border-stone-300 pt-6">
                <h3 className="text-2xl font-light mb-3">{pack.name}</h3>
                <p className="text-3xl font-light mb-6">{pack.price}</p>
                <ul className="space-y-3 text-stone-600">
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
            question: "¿Con cuánta anticipación recomiendan reservar?",
            answer:
              "Lo ideal es reservar entre 4 y 8 meses antes, especialmente para fechas de temporada alta."
          },
          {
            question: "¿Cuándo se entrega el material final?",
            answer:
              "La galería final suele entregarse en 3 a 5 semanas, con un adelanto de fotos durante los primeros días."
          },
          {
            question: "¿Las fotos se entregan editadas?",
            answer:
              "Sí. Todas las imágenes seleccionadas se entregan con edición profesional y una estética consistente."
          },
        ]}
      />

      <ContactSection
        title="Hagamos que tus 15 se vean tan increíbles como se sienten"
        subtitle="Consultá disponibilidad por WhatsApp y te enviamos propuestas personalizadas para tu fecha."
        links={[{ label: "WHATSAPP", href: "https://wa.me/5491112345678" }]}
      />
    </>
  );
};
