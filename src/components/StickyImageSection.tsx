export const StickyImageSection = ({ image }: { image: string }) => {
  return (
    <section className="relative h-[220vh]">
      <div className="sticky top-0 h-screen w-full">
        <img src={image} className="w-full h-full object-cover" />
      </div>
    </section>
  );
};
