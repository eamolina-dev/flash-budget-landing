type ContactLink = {
  label: string;
  href: string;
};

type Props = {
  title: string;
  subtitle: string;
  links: ContactLink[];
};

export const ContactSection = ({ title, subtitle, links }: Props) => {
  return (
    <section id="contacto" className="w-full py-24 px-6 bg-black text-white my-1">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-6">{title}</h2>

        <p className="text-gray-300 mb-12">{subtitle}</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
