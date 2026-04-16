type MosaicImage = {
  src: string;
  alt: string;
};

type Props = {
  title?: string;
  images: MosaicImage[];
};

const CARD_PATTERNS = [
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[5/4]",
  "aspect-[2/3]",
  "aspect-[4/3]",
] as const;

export const GalleryMosaic = ({ title, images }: Props) => {
  return (
    <section className="w-full py-24 md:py-32 px-4 md:px-8 bg-[#09090c] outline outline-1 -outline-offset-1 outline-[#111115]">
      <div className="max-w-6xl mx-auto">
        {title ? (
          <h2 className="font-editorial text-5xl md:text-7xl font-medium mb-12 md:mb-16 tracking-wide text-[#f2ece3]">
            {title}
          </h2>
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => {
            const aspectClass = CARD_PATTERNS[index % CARD_PATTERNS.length];
            const priorityImage = index < 3;

            return (
              <figure
                key={`${image.src}-${index}`}
                className={`relative overflow-hidden bg-[#141419] ${aspectClass}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={priorityImage ? "eager" : "lazy"}
                  fetchPriority={priorityImage ? "high" : "auto"}
                  decoding="async"
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};
