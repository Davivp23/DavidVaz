import React, { useState, forwardRef } from 'react';
import projects from '../data/babyProjects';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImagePreviewModal } from './ui/image-preview-modal';


const Projects = forwardRef<HTMLElement, { onHover?: (project: any) => void }>(({ onHover = () => {} }, ref) => {
  // 1. Añadimos el estado para saber qué imagen está seleccionada
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    // Usamos tu <section> y el ref
    <section ref={ref} className="py-10">
      <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400">Proyectos pequeños</h2>
      <p className="pl-2 text-gray-300">
        (Tarjetas no interactivas)<br />
      </p>
      {/* 2. Usamos el grid responsivo para que se vea bien en todas las pantallas */}
      <div className="w-full flex flex-col md:flex-wrap md:flex-row gap-8 p-5">
        {projects.map((project) => (
          // 3. Aplicamos estilo personalizado a cada Card
          // La key y el onMouseEnter van aquí, en el elemento que se repite
          <Card
            key={project.id}
            onMouseEnter={() => onHover(project)}
            className="m-10 min-w-[30%] max-w-[30%] px-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] transition-all duration-300 group overflow-hidden"
          >
            <CardHeader className="p-0">
              {/* 4. El botón ahora abre el modal con la imagen del proyecto */}
              <button
                onClick={() => setSelectedImage(project.imageUrl)}
                className="block w-full aspect-video overflow-hidden"
                aria-label={`Ver imagen de ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400} // I remember, I remember... the 21st night of september 🕺
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            </CardHeader>
            <CardContent className="p-6">
              {/* Asumo que tus proyectos tienen 'title', 'description' y 'tech' */}
              <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <CardDescription className="mt-4 text-sm text-blue-300/80">{project.technologies.join(', ')}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 5. El modal que aparece cuando hay una imagen seleccionada */}
      {selectedImage && (
        <ImagePreviewModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
});

export default Projects;