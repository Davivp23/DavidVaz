import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

export default function Projects({ onHover }) {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-4 text-blue-300">Proyectos</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/proyecto/${project.id}`}
            onMouseEnter={() => onHover(project)}
            onMouseLeave={() => onHover(null)}
            className="block p-4 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] transition duration-300">
            <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}