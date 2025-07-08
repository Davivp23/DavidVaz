import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';

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
    <div className="bg-[#0d1117] text-white min-h-screen px-4 md:px-16 py-10">
      <Link to="/" className="text-blue-400 hover:underline">&larr; Volver</Link>
      
      <h1 className="text-3xl font-bold mt-6 text-blue-400">{project.title}</h1>

      <div className="my-6">
        <img src={project.image} alt={`Captura de ${project.title}`} className="rounded-xl shadow-lg" />
      </div>

      <p className="text-gray-300 mb-4">{project.description}</p>

      <p className="text-gray-400 mb-4">
        <strong>Tecnologías usadas:</strong> {project.technologies.join(', ')}
      </p>

      <a 
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition"
      >
        Ver sitio en vivo
      </a>
    </div>
  );
}
