import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-semibold mb-6 text-blue-300">Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard title="Autoprofe" description="Página web para organizar horarios de alumnos de una autoescuela" link="autoprofe.pages.dev" />
        {/* Agrega más ProjectCard aquí */}
      </div>
    </section>
  );
}