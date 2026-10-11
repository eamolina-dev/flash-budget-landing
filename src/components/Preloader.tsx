import React, { useState, useEffect } from 'react';

// Lista de las imágenes clave o principales que querés precargar obligatoriamente
const criticalImages = [
  // Poné aquí algunas de las rutas a tus .webp principales o de la galería inicial
//   "/exteriores/--18.webp",
//   "/exteriores/--4 (2).webp",
//   "/selected/--19.webp",
//   "/selected/--12.webp",
  // Podés sumar algunas de la previa o entrada si querés que arranquen calentitas
  "/15majo/--12",
  "/exteriors/--18",
  "/exteriors/--4 (2)",
  "/exteriors/--113",
  "/selected/--19",
  "/15majo/--120",
  "/selected/--12",
  "/selected/--191",
  "/15marti/--50",
  "/15zoe/--116",
  "/15juli/--244",
  "/15marti/--74",
  "/selected/--463",
  "/15marti/--616",
];

export default function Preloader({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = criticalImages.length;

    if (totalImages === 0) {
      setIsLoading(false);
      return;
    }

    const updateProgress = () => {
      loadedCount++;
      const percent = Math.round((loadedCount / totalImages) * 100);
      setProgress(percent);

      if (loadedCount >= totalImages) {
        // Un pequeño timeout estético para que no parpadee demasiado rápido
        setTimeout(() => setIsLoading(false), 400);
      }
    };

    // Forzar la precarga en segundo plano
    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress; // Si alguna falla, igual avanza para no trabar al usuario
    });

    // Fallback de seguridad: si tarda más de 4 segundos, destraba la pantalla igual
    const safetyTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(safetyTimer);
  }, []);

  return (
    <>
      {/* Pantalla de carga */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-white transition-opacity duration-700 ${
          isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Contenido visual de carga (Ruedita / Spinner minimalista) */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-zinc-800 border-t-white rounded-full animate-spin"></div>
          <p className="text-sm tracking-widest uppercase font-light text-zinc-400">
            Cargando experiencia... {progress}%
          </p>
        </div>
      </div>

      {/* Contenido de la Landing */}
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
}
