import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/babyProjects';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card.tsx';

const Projects = forwardRef(({ onHover }, ref) => {
  return (
    <section ref={ref} className="py-10">
      <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400">Proyectos pequeños</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <CardHeader className="p-0">
            <button
              onClick={() => setSelectedImage(project.image)}
              className="block w-full aspect-video overflow-hidden"
              aria-label={`View image for ${project.title}`}
            >
            <img
              src={project.imageUrl}
              alt={project.title}
              width={600} // do you remember twenty first night of september?
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            </button>
              key={project.id}
              to={`/proyecto/${project.id}`}
              onMouseEnter={() => onHover(project)}
              className="block p-4 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] transition duration-300"
              <h3 className="text-xl font-bold text-blue-300" style={{ marginBottom: '1vh' }}>{project.title}</h3>
              <p className="text-gray-300" style={{ marginBottom: '0.5vh' }}>{project.description}</p>
              <p className="text-gray-300" style={{ marginBottom: '0.5vh' }}>{project.technologies.join(', ')}</p>
          </CardHeader>
        ))}
      </div> 
    </section>
  ); // say that you remembeeer dancing in september
});

export default Projects;