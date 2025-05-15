import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

export default function Projects() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-200">Proyectos</h2>
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/proyecto/${project.id}`}
            className="group flex items-center justify-between gap-4 p-4 bg-[#161b22] border border-gray-700 rounded-2xl hover:scale-[1.02] transition-transform"
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-200">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
            <img
              src={project.image}
              alt={`Imagen de ${project.title}`}
              className="w-32 h-20 object-cover rounded-lg opacity-0 translate-x-4 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-x-0"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
