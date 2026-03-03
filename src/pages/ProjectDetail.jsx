import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';
import Header from '../components/sharedComponents/Header';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20 text-foreground transition-all duration-300">
        <p>Proyecto no encontrado.</p>
        <Link to="/" className="text-foreground transition-all duration-300 underline mt-4 block">&larr; Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto flex flex-col px-4 py-12">
        <Link to="/" className="text-foreground hover:opacity-80 transition-all duration-300 mb-8 inline-block max-w-fit">&larr; Volver a todos los proyectos</Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-foreground transition-all duration-300">{project.title}</h1>
        <div className="bg-foreground rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-12">
          {/* Columna izquierda */}
          <div className="md:w-1/2 w-full flex flex-col">
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-contraste/20">
              <img src={project.image} alt={`Captura de ${project.title}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex justify-center">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background text-foreground hover:opacity-90 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Ver sitio en vivo
              </a>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="md:w-1/2 w-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-contraste mb-4">Acerca de este proyecto</h2>
            <p className="text-lg opacity-90 text-contraste leading-relaxed transition-all duration-300 mb-8">{project.description}</p>
            <h3 className="text-xl font-bold text-contraste mb-4">Tecnologías usadas</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map(tech => (
                <span key={tech} className="px-4 py-2 bg-background text-foreground text-sm font-bold tracking-wide rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
