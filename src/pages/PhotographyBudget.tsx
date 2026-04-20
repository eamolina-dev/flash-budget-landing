import { ContactSection } from "../components/ContactSection";
import { DynamicImageSection } from "../components/DynamicImage";
import { FaqSection } from "../components/FaqSection";
import { FullImageSection } from "../components/FullImageSection";
import { GalleryMosaic } from "../components/GalleryMosaic";
import { Hero } from "../components/HeroImage";
import { RevealWindow } from "../components/RevealWindow";
import { SplitSection } from "../components/SplitSection";

type Package = {
  name: string;
  price: string;
  details: string[];
};

const packages: Package[] = [
  {
    name: "Esencial",
    price: "USD 790",
    details: [
      "6 hs de cobertura",
      "1 fotógrafa",
      "350+ fotos editadas",
      "Galería privada online",
    ],
  },
  {
    name: "Historia",
    price: "USD 1.150",
    details: [
      "Preparación + fiesta completa",
      "2 fotógrafos",
      "600+ fotos editadas",
      "Adelanto en 72 hs",
    ],
  },
  {
    name: "Legado",
    price: "USD 1.480",
    details: [
      "Cobertura extendida",
      "Sesión previa",
      "Álbum premium",
      "Entrega express + respaldo",
    ],
  },
];

const previaGallery = [
  "/selected/portrait_of_a_person/--106.webp",
  "/selected/group_of_people/--106.webp",
  "/selected/portrait_of_a_person/--75.webp",
  "/selected/makeup_preparation/--22.webp",
  "/selected/group_of_people/--112.webp",
  "/selected/makeup_preparation/--43.webp",
  "/selected/portrait_of_a_person/--81.webp",
  "/selected/group_of_people/--41.webp",
  "/selected/portrait_of_a_person/--89.webp",
  "/selected/portrait_of_a_person/--13.webp",
  "/selected/party_dancing/--138.webp",
  "/selected/makeup_preparation/--39.webp",
];

const fiestaGallery = [
  "/selected/party_dancing/--231.webp",
  "/selected/party_dancing/--654.webp",
  "/selected/party_dancing/--167.webp",
  "/selected/makeup_preparation/--523.webp",
  "/selected/party_dancing/--929.webp",
  "/selected/party_dancing/--954.webp",
  //
  "/selected/party_dancing/--605.webp",
  "/selected/party_dancing/--537.webp",
  "/selected/party_dancing/--464.webp",

  "/selected/party_dancing/--218.webp",
  "/selected/party_dancing/--377.webp",
  "/selected/group_of_people/--913.webp",
];

export const PhotographyBudget = () => {
  return (
    <div className="relative">
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center -z-50 transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: "url(/selected/portrait_of_a_person/--76.webp)",
        }}
      />
      <div className="bg-[#111115] relative z-10 outline outline-1 outline-[#111115] -mt-[1px] pt-[1px]">
        <Hero
          src="/selected/portrait_of_a_person/--75.webp"
          title="Tus 15, para siempre"
          subtitle="Lo único que queda... es la fotografía."
          btnText="VER PROPUESTA"
          btnHref="#presupuesto"
        />

        <SplitSection
          id="servicios"
          image="/selected/party_dancing/--12.webp"
          imageAlt="Preparación y maquillaje de quinceañera"
          eyebrow="Acto 1 · La previa"
          title="Todo empieza mucho antes de la fiesta"
          text={`Manos, nervios, risas y detalles.

La historia arranca en silencio.`}
        />

        {/* <FullImageSection
          src="/selected/makeup_preparation/--19.webp"
          alt="Detalle de maquillaje en preparación"
        /> */}
        <DynamicImageSection
          src="/selected/makeup_preparation/--19.webp"
          alt="Detalle de maquillaje en preparación"
        />

        <SplitSection
          reverse
          image="/selected/portrait_of_a_person/--178.webp"
          imageAlt="Familia acompañando durante la previa"
          eyebrow="Familia"
          title="Las miradas que más importan"
          text={`La emoción aparece antes del salón.

Se retratan momentos y se reflejan emociones.`}
        />

        <GalleryMosaic
          title="La previa, cuadro por cuadro"
          images={previaGallery.map((src, index) => ({
            src,
            alt: `Momentos de preparación y exteriores ${index + 1}`,
          }))}
        />
      </div>

      <RevealWindow />

      <div className="bg-[#111115] relative z-10 outline outline-1 outline-[#111115] -mt-[1px] pt-[1px]">
        <SplitSection
          image="/selected/portrait_of_a_person/--106.webp"
          imageAlt="Entrada de quinceañera al evento"
          eyebrow="Acto 2 · La fiesta"
          title="La entrada que todos esperan"
          text={`Luces, aplausos y una sola protagonista.

Cada segundo importa.`}
        />

        <FullImageSection
          src="/selected/portrait_of_a_person/--191.webp"
          alt="Entrada de impacto en la fiesta de 15"
        />

        <GalleryMosaic
          title="Cada momento, sin perder ninguno"
          images={fiestaGallery.map((src, index) => ({
            src,
            alt: `Fiesta, baile y abrazos ${index + 1}`,
          }))}
        />

        <SplitSection
          reverse
          image="/selected/party_dancing/--363.webp"
          imageAlt="Cobertura de pista y baile"
          eyebrow="Cobertura"
          title="Presencia discreta, recuerdos intensos"
          text={`Nos movemos con la fiesta.

Retratos, baile y abrazos sin cortar el ritmo.`}
        />

        {/* <FullImageSection
          src="/selected/party_dancing/--905.webp"
          alt="Momento emocional fuerte entre familia"
        /> */}

        <DynamicImageSection
          src="/selected/party_dancing/--463.webp"
          alt="Transición emocional de cierre"
        />

        <SplitSection
          image="/selected/party_dancing/--335.webp"
          imageAlt="Abrazo emocional en la celebración"
          eyebrow="Acto 3 · Valor"
          title="No se trata solo de fotos"
          text={`Se guarda lo que se sintió.

Eso también es parte del servicio.`}
        />

        <FullImageSection
          src="/selected/people_hugging/--182.webp"
          alt="Retrato final de quinceañera"
        />

        <SplitSection
          reverse
          image="/selected/group_of_people/--241.webp"
          imageAlt="Foto grupal de cierre"
          eyebrow="Qué incluye"
          title="Una cobertura completa y simple"
          text={`Dirección suave cuando hace falta.

Mirada documental cuando todo sucede.`}
        />

        <section
          id="presupuesto"
          className="w-full py-24 md:py-32 px-6 bg-[#111115] my-1"
        >
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-14 md:mb-20">
              <p className="text-xs uppercase tracking-[0.36em] text-[#a69c90] mb-4">
                Inversión
              </p>
              <h2 className="font-editorial text-5xl md:text-7xl font-medium mb-6 text-[#f2ece3]">
                Propuestas para tus 15
              </h2>
              <p className="text-[#c9c0b4] text-lg leading-relaxed">
                Elegí la opción que mejor se adapte a tu día. Todo se puede
                personalizar.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-3">
              {packages.map((pack) => (
                <article
                  key={pack.name}
                  className="border-t border-[#38332d] pt-7"
                >
                  <h3 className="font-editorial text-4xl md:text-5xl text-[#f2ece3] mb-3">
                    {pack.name}
                  </h3>
                  <p className="text-3xl font-light text-[#e5dbcd] mb-7">
                    {pack.price}
                  </p>
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
              question: "¿Cuándo reservar la fecha?",
              answer:
                "Lo ideal es entre 4 y 8 meses antes para asegurar disponibilidad.",
            },
            {
              question: "¿Cuándo entregan la galería?",
              answer:
                "Entre 3 y 5 semanas, con un adelanto durante los primeros días.",
            },
            {
              question: "¿Está incluida la edición?",
              answer:
                "Sí. Todas las fotos entregadas tienen edición profesional.",
            },
          ]}
        />

        <ContactSection
          title="Contanos tu fecha"
          subtitle="Si sentís que esta historia es para vos, hablemos por WhatsApp."
          links={[{ label: "WHATSAPP", href: "https://wa.me/5491112345678" }]}
        />
      </div>
    </div>
  );
};
