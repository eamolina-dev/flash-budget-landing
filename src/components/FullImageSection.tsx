type Props = {
  src: string;
  alt?: string;
};

export const FullImageSection = ({ src, alt = "" }: Props) => {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-screen overflow-hidden my-1">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
};
