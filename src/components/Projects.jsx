import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-semibold mb-6 text-blue-300">Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard title="Proyecto Ejemplo" description="Descripción de ejemplo" link="#" />
        {/* Agrega más ProjectCard aquí */}
      </div>
    </section>
  );
}