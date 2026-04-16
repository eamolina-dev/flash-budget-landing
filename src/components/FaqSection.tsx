type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  title?: string;
  items: FaqItem[];
};

export const FaqSection = ({ title = "Preguntas Frecuentes", items }: Props) => {
  return (
    <section className="w-full py-24 md:py-32 px-6 bg-[#0d0d11] outline outline-1 -outline-offset-1 outline-[#111115]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-editorial text-5xl md:text-7xl font-medium text-center mb-16 text-[#f2ece3]">
          {title}
        </h2>

        <div className="space-y-10">
          {items.map((item, i) => (
            <div key={i} className="border-b border-[#2b2823] pb-8">
              <h3 className="text-xl md:text-2xl font-medium mb-3 text-[#ece3d7]">{item.question}</h3>
              <p className="text-[#c8bfb3] leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
