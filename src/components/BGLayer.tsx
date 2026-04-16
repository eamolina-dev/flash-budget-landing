const images = [
  "/images/party_dancing/--79.jpg",
  "/images/portrait_of_a_person/--106.jpg",
  "/images/makeup_preparation/--19.jpg",
];

export const BackgroundLayer = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <div className="fixed inset-0 -z-10">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};
