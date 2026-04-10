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
    <section className="w-full py-20 md:py-28 px-4 md:px-8 bg-white my-1">
      <div className="max-w-6xl mx-auto">
        {title ? (
          <h2 className="text-3xl md:text-4xl font-light mb-10 md:mb-14 tracking-wide">{title}</h2>
        ) : null}

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
          {images.map((image, index) => (
            <figure key={`${image.src}-${index}`} className="mb-4 md:mb-6 break-inside-avoid overflow-hidden">
              <img src={image.src} alt={image.alt} className="w-full h-auto object-contain" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
