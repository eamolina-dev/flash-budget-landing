export const StickyBackgroundSection = ({ image }: { image: string }) => {
  return (
    <section className="relative h-[160vh]">
      <div className="sticky top-0 h-screen">
        <img src={image} className="w-full h-full object-cover" />
      </div>
    </section>
  );
};
