import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-200">Proyectos</h2>

      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
        {/* Bloques de proyectos */}
        <div className="flex-1 flex flex-col gap-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/proyecto/${project.id}`}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              className="p-4 bg-[#161b22] border border-gray-700 rounded-2xl hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-xl font-bold text-blue-200">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </Link>
          ))}
        </div>

        {/* Imagen dinámica */}
        <div className="hidden md:flex items-center justify-center flex-1">
          {hoveredProject && (
            <img
              src={hoveredProject.image}
              alt={`Imagen de ${hoveredProject.title}`}
              className="w-full max-w-sm h-auto rounded-xl shadow-lg transition-all duration-500 opacity-100"
            />
          )}
        </div>
      </div>
    </section>
  );
}
