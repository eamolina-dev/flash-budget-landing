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
    <section id="contacto" className="w-full py-24 md:py-32 px-6 bg-[#070709] text-[#f2ece3] my-1">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-editorial text-5xl md:text-7xl font-medium mb-6">{title}</h2>

        <p className="text-[#c9c0b4] text-lg mb-12">{subtitle}</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#d7d1c7] px-10 py-3 text-xs tracking-[0.3em] hover:bg-[#efe7db] hover:text-black transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
