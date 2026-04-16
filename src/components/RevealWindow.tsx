import { useEffect, useRef } from "react";

export const RevealWindow = ({
  image,
  onVisible,
}: {
  image: string;
  onVisible: (img: string) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el hueco entra en la pantalla, actualiza la foto de fondo
        if (entry.isIntersecting) {
          onVisible(image);
        }
      },
      { threshold: 0.5 } // Se activa cuando la mitad del hueco es visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [image, onVisible]);

  return (
    // Este div es literalmente invisible. Solo ocupa 100vh para dejar ver el fondo.
    <div
      ref={ref}
      className="h-screen w-full bg-transparent pointer-events-none"
    />
  );
};
