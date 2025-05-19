import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

export default function Projects({ onHover }) {
  return (
    <section className="py-10">
      <h2 className="p-6 text-left text-3xl font-bold text-blue-400">Proyectos</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/proyecto/${project.id}`}
            onMouseEnter={() => onHover(project)}
            onMouseLeave={() => onHover(null)}
            className="group relative block overflow-hidden rounded-2xl border-2 border-blue-500 bg-gradient-to-br from-[#0a0f1c] to-[#111827] p-4 shadow-xl transition-all duration-300 hover:border-orange-400 hover:shadow-[0_0_20px_#ff6b35aa]"
          >
            <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-orange-500 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none" />

            <div className="relative z-10">
              <img
                src={project.preview || project.image}
                alt={`Preview de ${project.title}`}
                className="mb-4 h-40 w-full object-cover rounded-lg border border-blue-800 shadow-inner group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-2xl font-bold text-blue-400 drop-shadow-md">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
