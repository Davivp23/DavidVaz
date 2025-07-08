import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectPreview({ project }) {
  const [isEmbedded, setIsEmbedded] = useState(false);

  useEffect(() => {
  // Preload el proyecto lento
    const slowProject = {
      id: 'generador',
      url: 'https://generadorlineal.onrender.com',
    };

    const iframe = document.createElement('iframe');
    iframe.src = slowProject.url;
    iframe.style.display = 'none';
    iframe.loading = 'eager';
    iframe.sandbox = "allow-same-origin allow-scripts allow-popups";
    document.body.appendChild(iframe);

    if (window.self !== window.top) {
    setIsEmbedded(true);
    }
    return () => {
      document.body.removeChild(iframe);
    };
  }, []);

  const asciiArt = String.raw`Mejor lo dejamos aquí, ¿no?`
  return (
    <AnimatePresence mode="wait">
      {project ? (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-full h-full md:h-full border-2 border-orange-500 rounded-xl overflow-hidden shadow-[0_0_20px_#f9731666]"
        >
          {isEmbedded && project.id === 'portafolio' ? (
            <pre className="w-full h-full flex items-center justify-center text-blue-400 text-xs md:text-xs font-mono p-4 text-center">
              {asciiArt}
            </pre>
          ) : (
          <iframe
            src={project.url}
            title={`Preview de ${project.title}`}
            className="w-full h-full"
            frameBorder="0"
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-popups"
          />
          )}
        </motion.div>
      ) : (
        <motion.div
          key="placeholder"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="text-gray-600 italic text-center px-4"
        >
          Pasa el cursor por un proyecto para una demo interactiva
        </motion.div>
      )}
    </AnimatePresence>
  );
}
