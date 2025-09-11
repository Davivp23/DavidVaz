import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

const Projects = forwardRef(({ onHover }, ref) => {
  return (
    <section ref={ref} className="py-10">
      <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400">Proyectos</h2>
      <p className="pl-2 text-gray-300">
        Pulsa en uno para más información o pon el ratón encima para una demo interactiva (solo pc).</p>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/proyecto/${project.id}`}
            onMouseEnter={() => onHover(project)}
            className="block p-4 dark:bg-[#d2d7ee] bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-300" style={{ marginBottom: '1vh' }}>{project.title}</h3>
            <p className="text-gray-300" style={{ marginBottom: '0.5vh' }}>{project.description}</p>
            <p className="text-gray-300" style={{ marginBottom: '0.5vh' }}>{project.technologies.join(', ')}</p>
          </Link>
        ))}
      </div>
    </section>
  );
});

export default Projects;