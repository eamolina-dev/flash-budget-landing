type MosaicImage = {
  src: string;
  alt: string;
};

type Props = {
  title?: string;
  images: MosaicImage[];
};

export const GalleryMosaic = ({ title, images }: Props) => {
  return (
    <section className="w-full py-24 md:py-32 px-4 md:px-8 bg-[#09090c] outline outline-1 -outline-offset-1 outline-[#111115]">
      <div className="max-w-6xl mx-auto">
        {title ? (
          <h2 className="font-editorial text-5xl md:text-7xl font-medium mb-12 md:mb-16 tracking-wide text-[#f2ece3]">
            {title}
          </h2>
        ) : null}

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
          {images.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className="mb-4 md:mb-6 break-inside-avoid overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
