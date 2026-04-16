export const StickyRevealBlock = ({
  image,
  children,
}: {
  image: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="relative h-[220vh]">
      {/* Imagen sticky */}
      <div className="sticky top-0 h-screen">
        <img src={image} className="w-full h-full object-cover" />
      </div>

      {/* Contenido que pasa por arriba */}
      <div className="relative z-10 -mt-[100vh]">{children}</div>
    </section>
  );
};
