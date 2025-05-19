import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-4 text-blue-300">Proyectos</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
