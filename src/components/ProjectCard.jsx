import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 rounded-2xl border border-blue-600 bg-[#0d1117] shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
      
      {/* Columna texto */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-blue-300 mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
        </div>
        <a
          href={`/proyecto/${project.id}`}
          className="inline-block px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-400 transition-colors w-fit"
        >
          Ver detalles →
        </a>
      </div>

      {/* Columna preview */}
      <div className="md:w-1/2">
        <div className="w-full h-64 md:h-full border-2 border-orange-400 rounded-xl overflow-hidden bg-black">
          <iframe
            src={project.url}
            title={`${project.title} preview`}
            className="w-full h-full"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}
