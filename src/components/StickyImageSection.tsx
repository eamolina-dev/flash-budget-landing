import type { ReactNode } from "react";

type Props = {
  image: string;
  alt?: string;
  children?: ReactNode;
  height?: string; // opcional para controlar cuánto dura el efecto
};

export const StickyImageSection = ({
  image,
  alt = "",
  children,
  height = "200vh", // clave: más alto = más tiempo visible
}: Props) => {
  return (
    <section className="relative w-full" style={{ height }}>
      {/* Imagen sticky */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* overlay opcional */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Contenido que scrollea */}
      {children && (
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          {children}
        </div>
      )}
    </section>
  );
};
