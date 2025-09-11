import React, { useState, forwardRef } from 'react';
import projects from '../data/babyProjects';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImagePreviewModal } from './ui/image-preview-modal';


const Projects = forwardRef<HTMLElement, { onHover?: (project: any) => void }>(({ onHover = () => {} }, ref) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section ref={ref} className="py-10">
      <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400 dark:text-blue-500 transition-all duration-300">Proyectos pequeños</h2>
      <p className="pl-2 text-gray-300 dark:text-gray-600 transition-all duration-300">
        (Tarjetas no interactivas)<br />
      </p>
      <div className="w-full flex flex-col md:flex-wrap md:flex-row gap-8 p-5">
        {projects.map((project) => (
          <Card
            key={project.id}
            onMouseEnter={() => onHover(project)}
            className="dark:bg-[#d2d7ee] m-10 min-w-[30%] max-w-[30%] px-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] transition-all duration-300 group overflow-hidden"
          >
            <CardHeader className="p-0">
              <button
                onClick={() => setSelectedImage(project.imageUrl)}
                className="block w-full aspect-video overflow-hidden"
                aria-label={`Ver imagen de ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400} // Do you remember, 21st night of september 🕺
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            </CardHeader>
            <CardContent className="p-6">
              {/* Gracias Chage */}
              <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <CardDescription className="mt-4 text-sm text-blue-300/80 dark:text-blue-400 transition-all duration-300">{project.technologies.join(', ')}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
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