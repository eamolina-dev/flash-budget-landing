import { ContactSection } from "../components/ContactSection";
import { DriveVideoHighlightSection } from "../components/DriveVideoHighlightSection";
import { DynamicImageSection } from "../components/DynamicImage";
import { FaqSection } from "../components/FaqSection";
import { FullImageSection } from "../components/FullImageSection";
import { GalleryMosaic } from "../components/GalleryMosaic";
import { Hero } from "../components/HeroImage";
import { RevealWindow } from "../components/RevealWindow";
import { SplitSection } from "../components/SplitSection";
import { VideoHighlightSection } from "../components/VideoHighlightSection";
import Preloader from '../components/Preloader';

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

// 

const outdoorGallery = [
  // Fotos comentadas
  // "/exteriores/--1.webp",
  // "/exteriores/--1 (2).webp",
  // "/exteriores/--2.webp",
  // "/exteriores/--2 (1).webp",
  // "/exteriores/--3.webp",
  // "/exteriores/--4 (2).webp",
  // "/exteriores/--4 (3).webp",
  // "/exteriores/--6.webp",
  // "/exteriores/--6 (2).webp",
  // "/exteriores/--8.webp",
  // "/exteriores/--13 (1).webp",
  // "/exteriores/--14.webp",
  // "/exteriores/--16.webp",
  // "/exteriores/--18.webp",
  // "/exteriores/--25.webp",
  // "/exteriores/--47.webp",
  // "/exteriores/--53 (2).webp",
  // "/exteriores/--58.webp",
  // "/exteriores/--62.webp",
  // "/exteriores/--63.webp",
  // "/exteriores/--96.webp",
  // "/exteriores/--113.webp",
  // "/exteriores/--125.webp",
  // "/exteriores/--163.webp",
  // "/exteriores/--196.webp",
  // "/exteriores/--197.webp",
  // "/exteriores/--230.webp",
  // "/exteriores/--240.webp",
  // "/exteriores/--246.webp",
  // "/exteriores/--5.webp",
  // "/exteriores/--22.webp",
  // "/exteriores/--37.webp",
  // "/exteriores/--48.webp",
  // "/exteriores/--150.webp",
  // "/exteriores/--179.webp",
  // "/exteriores/--6 (1).webp",
  // "/exteriores/--80.webp",
  // "/exteriores/--21 (1).webp",
  // "/exteriores/--238.webp",
  // "/exteriores/--21.webp",
  // "/exteriores/--254.webp",

  // Fotos activas mezcladas
  "/exteriores/--41.webp",
  "/exteriores/--1 (1).webp",
  "/exteriores/--209.webp",
  "/exteriores/--12.webp",
  "/exteriores/--5 (2).webp",
  "/exteriores/--89.webp",
  "/exteriores/--24.webp",
  "/exteriores/--47 (1).webp",
  "/exteriores/--9.webp",
  "/exteriores/--350.webp",
  "/exteriores/--15.webp",
  "/exteriores/--53.webp",
  "/exteriores/--1 (3).webp",
  "/exteriores/--56.webp",
  "/exteriores/--20.webp",
  "/exteriores/--215.webp",
  "/exteriores/--10.webp",
  "/exteriores/--47 (2).webp",
  "/exteriores/--29.webp",
  "/exteriores/--5 (1).webp",
  "/exteriores/--74.webp",
  "/exteriores/--11.webp",
  "/exteriores/--233.webp",
  "/exteriores/--4.webp",
  "/exteriores/--51.webp",
  "/exteriores/--13.webp",
  "/exteriores/--10 (1).webp",
  "/exteriores/--26.webp",
  "/exteriores/--49.webp",
  "/exteriores/--18 (2).webp",
];


// const makeupGallery = [
//   "/15majo/--113.webp",
//   "/15majo/--118.webp",
//   "/15majo/--120.webp",
//   "/selected/--39.webp",
//   "/selected/--43.webp",
//   "/selected/--22.webp",
//   // "/selected/--22.webp",
// ]

// const prePartyGallery = [
//   "/15zoe/--2.webp",
//   "/15zoe/--26.webp",
//   "/15zoe/--55.webp",
//   "/15zoe/--90.webp",
//   "/15zoe/--116.webp",
//   "/15zoe/--120.webp",
//   "/15zoe/--124.webp",
//   "/15zoe/--137.webp",
// ]

const prePartyGallery = [
  // Fotos comentadas
  // "/selected/--76.webp",
  // "/selected/--106-1.webp",
  // "/selected/--191.webp",
  // "/15zoe/--2.webp",
  // "/15juli/--99.webp",
  // "/15juli/--101.webp",
  // "/15zoe/--15.webp",
  // "/15juli/--366.webp",
  // "/15juli/--79.webp",
  // "/15juli/--84.webp",
  // "/15juli/--205.webp",

  // Galería mezclada y distribuida
  "/selected/--41.webp",
  "/15juli/--105.webp",
  "/15majo/--32.webp",
  "/15marti/--4.webp",
  // "/15juli/--195.webp",
  "/selected/--75.webp",
  "/15zoe/--11.webp",
  "/15juli/--24.webp",
  "/15marti/--10.webp",
  "/15juli/--354.webp",
  "/selected/--112.webp",
  "/15majo/--63.webp",
  "/15juli/--8.webp",
  "/selected/--81.webp",
  "/15marti/--9.webp",
  "/15juli/--133.webp",
  "/selected/--106.webp",
  "/15juli/--60.webp",
  "/selected/--138.webp",
  // "/15juli/--43.webp",
  "/selected/--89.webp",
  "/15juli/--21.webp",
  "/selected/--178.webp",
  "/15juli/--167.webp"
];

const entranceGallery = [
  // Fotos comentadas
  // "/15zoe/--243.webp",
  // "/15marti/--50.webp",
  // "/15juli/--244.webp",
  // "/15zoe/--116.webp",
  // "/15marti/--12.webp",
  // "/15zoe/--39.webp",
  // "/15juli/--249.webp",
  // "/15zoe/--237.webp",
  // "/15marti/--47.webp",
  // "/15juli/--258.webp",
  // "/15zoe/--120.webp",
  // "/15zoe/--126.webp",
  // "/15marti/--65.webp",
  // "/15zoe/--514.webp",

  // Galería mezclada y distribuida
  "/selected/--241.webp",
  "/15majo/--201.webp",
  "/15marti/--285.webp",
  "/15zoe/--26.webp",
  "/15juli/--340.webp",
  "/15zoe/--278.webp",
  "/selected/--335.webp",
  "/15majo/--580.webp",
  "/15marti/--58.webp",
  "/15zoe/--194.webp",
  "/selected/--363.webp",
  "/15majo/--85.webp",
  "/15marti/--74.webp",
  "/15zoe/--493.webp",
  "/15juli/--262.webp",
  "/selected/--377.webp",
  "/15majo/--218.webp",
  "/15marti/--333.webp",
  "/15zoe/--55.webp",
  "/15marti/--24.webp",
  "/15majo/--604.webp",
  "/15majo/--568.webp",
  "/15zoe/--137.webp",
  "/15zoe/--340.webp",
  "/15juli/--372.webp",
  "/15zoe/--508.webp",
  "/15zoe/--204.webp",
  "/15zoe/--246.webp",
];

const partyGallery = [
  // Fotos comentadas (incluyendo las 4 nuevas descartadas)
  // "/selected/--463.webp",
  // "/15zoe/--421.webp",
  // "/15zoe/--445.webp",
  // "/15zoe/--598.webp",
  // "/15marti/--496.webp",
  // "/15marti/--504.webp",
  // "/15marti/--511.webp",
  // "/15marti/--546.webp",
  // "/15marti/--555.webp",
  // "/15marti/--574.webp",
  // "/15marti/--616.webp",
  // "/15marti/--739.webp",
  // "/15juli/--559.webp",
  // "/15juli/--954.webp",
  // "/15zoe/--454.webp", // Descartada para ajuste
  // "/15marti/--537.webp", // Descartada para ajuste
  // "/15marti/--526.webp", // Descartada para ajuste
  // "/15juli/--766.webp", // Descartada para ajuste
  // "/15marti/--656.webp",
  // "/15juli/--903.webp",


  // Fotos activas mezcladas para la fiesta
  "/selected/--913.webp",
  "/15juli/--897.webp",
  "/15marti/--642.webp",
  "/15zoe/--560.webp",
  "/selected/--523.webp",
  "/15juli/--605.webp",
  "/15marti/--409.webp",
  "/15zoe/--626.webp",
  "/selected/--605.webp",
  "/15majo/--842.webp",
  "/15marti/--612.webp",
  "/selected/--954.webp",
  "/15zoe/--388.webp",
  "/15juli/--823.webp",
  "/15marti/--494.webp",
  "/selected/--464.webp",
  "/15zoe/--588.webp",
  "/15juli/--491.webp",
  "/selected/--929.webp",
  "/15majo/--917.webp",
  "/15zoe/--699.webp",
  "/15juli/--899.webp",
  "/15marti/--534.webp",
  "/selected/--654.webp",
  "/15juli/--909.webp",
  "/15marti/--763.webp",
  "/selected/--537.webp",
  "/15marti/--628.webp",
  "/15marti/--665.webp",
];


export const PhotographyBudget_v2 = () => {
  return (
    <Preloader>
      <div className="relative">
        <div
          className="fixed inset-0 w-full h-full bg-cover bg-center -z-50 transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: "url(/15marti/--12.webp)",
          }}
        />
        <div className="bg-[#111115] relative z-10 outline outline-1 outline-[#111115] -mt-[1px] pt-[1px]">
          <Hero
            src="/exteriores/--18.webp"
            title="Tus 15, para siempre"
            subtitle="Lo único que queda... es la fotografía."
            btnText="VER PROPUESTA"
            btnHref="#presupuesto"
          />

          {/* 1. EXTERIORES */}

          <SplitSection
            id="servicios"
            image="/exteriores/--4 (2).webp"
            imageAlt="Sesión de fotos al aire libre"
            eyebrow="Parte 1 · Exteriores"
            title="Donde empieza la historia"
            text="Luz natural, risas y primeros momentos."
          />

          <GalleryMosaic
            title="Exteriores"
            images={outdoorGallery.map((src, index) => ({
              src,
              alt: `Exteriores ${index + 1}`,
            }))}
          />

          <VideoHighlightSection
            eyebrow="Resumen en Video"
            title="La Magia de los Exteriores"
            thumbnail="/exteriores/--113.webp"
            // youtubeUrl="https://www.youtube.com/watch?v=DEw1rgM8SHo"
            youtubeUrl="https://www.youtube.com/watch?v=lKNc0hGVmNw"
            buttonText="VER RESUMEN DE EXTERIORES"
          />

          {/* <DriveVideoHighlightSection
            eyebrow="Resumen en Video"
            title="La Magia de los Exteriores"
            thumbnail="/exteriores/--113.webp"
            driveUrl="https://drive.google.com/file/d/1QStMxd8c36Qtm5GtluflMANuVCArLZ7h/view?usp=sharing"
            buttonText="VER RESUMEN DE EXTERIORES"
          /> */}

          {/* 2. MAQUILLAJE */}

          <SplitSection
            image="/selected/--39.webp"
            imageAlt="Preparación y maquillaje de quinceañera"
            eyebrow="Parte 2 · Preparación"
            title="El backstage"
            text="Detalles, miradas y la emoción previa."
          />

          <DynamicImageSection
            src="/15majo/--118.webp"
            alt="Detalle de maquillaje en preparación"
          />

          <FullImageSection
            src="/selected/--19.webp"
            alt="Momento íntimo en la previa"
          />

          <DynamicImageSection
            src="/15majo/--120.webp"
            alt="Detalle de peinado y preparación"
          />

          {/* HOTELES | PRE-FIESTA */}

          <SplitSection
            reverse
            image="/selected/--12.webp"
            imageAlt="Familia acompañando durante la previa"
            eyebrow="Parte 3 · Pre-Fiesta"
            title="Lista para salir"
            text="Instantes únicos antes de llegar al salón."
          />

          <GalleryMosaic
            title="La previa"
            images={prePartyGallery.map((src, index) => ({
              src,
              alt: `La previa ${index + 1}`,
            }))}
          />

          <FullImageSection
            src="/selected/--191.webp"
            alt="Retrato previo a la fiesta"
          />
          
        </div>

        <RevealWindow />

        <div className="bg-[#111115] relative z-10 outline outline-1 outline-[#111115] -mt-[1px] pt-[1px]">

          {/* ENTRADA */}

          <SplitSection
            image="/15marti/--50.webp"
            imageAlt="Entrada triunfal de quinceañera"
            eyebrow="Parte 4 · La gran entrada"
            title="El gran momento"
            text="Las luces al centro y los primeros abrazos."
          />

          <DynamicImageSection
            src="/15zoe/--116.webp"
            alt="Abrazo emotivo tras la entrada"
          />

          <FullImageSection
            src="/15juli/--244.webp"
            alt="Recepción y saludos de seres queridos"
          />

          <GalleryMosaic
            title="Entrada y saludos"
            images={entranceGallery.map((src, index) => ({
              src,
              alt: `Entrada y saludos ${index + 1}`,
            }))}
          />

          {/* LINK TO VIDEO */}
          <VideoHighlightSection
            eyebrow="Resumen en Video"
            title="La historia de la cumpleañera"
            thumbnail="/15marti/--74.webp"
            youtubeUrl="https://www.youtube.com/watch?v=DEw1rgM8SHo"
            // youtubeUrl="https://www.youtube.com/watch?v=s3O8-vodvKI&list=RDs3O8-vodvKI&start_radio=1"
            buttonText="VER RESUMEN CRONOLÓGICO"
          />

          {/* JODA */}
          <SplitSection
            reverse
            image="/selected/--463.webp"
            imageAlt="Fiesta y baile de quinceañera"
            eyebrow="Parte 5 · La fiesta"
            title="Pista explotada"
            text="Música, baile y energía pura toda la noche."
          />

          <GalleryMosaic
            title="La fiesta"
            images={partyGallery.map((src, index) => ({
              src,
              alt: `La fiesta ${index + 1}`,
            }))}
          />

          {/* LINK TO VIDEO */}
          <VideoHighlightSection
            eyebrow="Resumen en Video"
            title="La fiesta en movimiento"
            thumbnail="/15marti/--616.webp"
            // youtubeUrl="https://www.youtube.com/watch?v=s3O8-vodvKI&list=RDs3O8-vodvKI&start_radio=1"
            youtubeUrl="https://www.youtube.com/watch?v=V6bDdyTmUK0"
            buttonText="VER RESUMEN DE LA FIESTA"
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
                  Elegí la opción que mejor se adapte a tu día.
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
            subtitle="Hablemos directamente por WhatsApp."
            links={[{ label: "WHATSAPP", href: "https://wa.me/5493584111052" }]}
            // 5493584111052
          />
        </div>
      </div>
    </Preloader>
    
  );
};