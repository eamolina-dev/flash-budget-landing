import { useState } from "react";

type Props = {
  id?: string;
  thumbnail: string;
  thumbnailAlt?: string;
  eyebrow?: string;
  title?: string;
  youtubeUrl: string;
  buttonText?: string;
  openInModal?: boolean;
};

export const VideoHighlightSection = ({
  id,
  thumbnail,
  thumbnailAlt = "Video preview",
  eyebrow,
  title,
  youtubeUrl,
  buttonText = "VER VIDEO COMPLETO",
  openInModal = true,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Convierte URLs estándar de YouTube a formato Embed
  const getEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url;
  };

  const handleAction = (e: React.MouseEvent) => {
    if (openInModal) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <section
        id={id}
        className="w-full relative h-[45vh] min-h-[320px] max-h-[500px] bg-[#0d0d11] my-1 overflow-hidden flex items-center justify-center"
      >
        {/* Imagen de fondo con overlay oscuro */}
        <img
          src={thumbnail}
          alt={thumbnailAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105 hover:scale-100 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d11] via-transparent to-[#0d0d11] opacity-80" />

        {/* Contenido compacto centrado */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
          {eyebrow ? (
            <p className="text-xs tracking-[0.34em] uppercase text-[#9f978b] mb-3">
              {eyebrow}
            </p>
          ) : null}

          {title ? (
            <h2 className="font-editorial text-3xl md:text-5xl font-medium text-[#f2ece3] mb-6 leading-tight">
              {title}
            </h2>
          ) : null}

          <a
            href={youtubeUrl}
            target={openInModal ? "_self" : "_blank"}
            rel="noopener noreferrer"
            onClick={handleAction}
            className="group inline-flex items-center gap-3 border border-[#d7d1c7] bg-[#0d0d11]/60 backdrop-blur-md px-7 py-3 text-xs tracking-[0.25em] text-[#f2ece3] hover:bg-[#efe7db] hover:text-black transition duration-300"
          >
            {/* Ícono Play en SVG */}
            <svg
              className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>{buttonText}</span>
          </a>
        </div>
      </section>

      {/* Modal / Lightbox flotante para no redirigir fuera del sitio */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-[#f2ece3] text-xs tracking-[0.2em] uppercase hover:text-white"
            >
              CERRAR ✕
            </button>
            <iframe
              src={getEmbedUrl(youtubeUrl)}
              title="YouTube video player"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};
