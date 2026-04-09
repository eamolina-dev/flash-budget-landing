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
    <section className="w-full py-24 px-6 bg-neutral-100 my-1">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
          {title}
        </h2>

        <div className="space-y-10">
          {items.map((item, i) => (
            <div key={i}>
              <h3 className="text-lg font-medium mb-2">{item.question}</h3>
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
