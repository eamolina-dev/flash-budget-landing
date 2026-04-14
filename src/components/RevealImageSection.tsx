import type { ReactNode } from "react";

type Props = {
  image: string;
  alt?: string;
};

export const RevealImageSection = ({ image, alt = "" }: Props) => {
  return (
    <section className="relative w-full h-[160vh]">
      {/* Contenedor sticky */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Imagen */}
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* overlay opcional */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
};
