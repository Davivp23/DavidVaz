import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';
import Header from './Header';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p>Proyecto no encontrado.</p>
        <Link to="/" className="text-blue-400 underline mt-4 block">&larr; Volver al inicio</Link>
      </div>
    );
  }

  return (

    <div>
    <Header />
      <main className="container mx-auto flex flex-col md:flex-col px-4">
        <h1 className="pl-2 text-3xl font-bold mt-6 text-blue-400">{project.title}</h1>
        <div className="bg-[#0d1117] text-white min-h-screen px-4 py-10 flex md:flex-row">
          {/* Columna izquierda */}
          <div className="md:w-1/2 w-full md:pr-8">
            <div className="my-6">
              <img src={project.image} alt={`Captura de ${project.title}`} className="border-2 border-orange-500 rounded-xl overflow-hidden shadow-[0_0_20px_#f9731666]" />
            </div>
            <div className="flex flex-row gap-2 mb-4 justify-center">
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition m-6"
              >
                Ver sitio en vivo
              </a>
              <a 
                href="/"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition m-6"
              >
                Volver a todos los proyectos
              </a>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="relative md:w-1/2 w-full flex-col items-center justify-center">
            <p className="text-gray-300 mb-4 mt-5">{project.description}</p>
            <p className="text-gray-400 mb-4">
              <strong>Tecnologías usadas:</strong> {project.technologies.join(', ')}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
