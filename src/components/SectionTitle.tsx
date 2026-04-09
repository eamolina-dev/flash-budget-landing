type Props = {
  title: string;
};

export const SectionTitle = ({ title }: Props) => {
  return (
    <section className="w-full bg-white py-24 px-6 flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          {title}
        </h2>
      </div>
    </section>
  );
};
