import React, { useState, forwardRef } from 'react';
import projects from '../../data/babyProjects';
import TitleBar from '../sharedComponents/TitleBar';
import { motion } from 'framer-motion';

const BabyProjects = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-12">
      <div className="w-1/2">
        <TitleBar>
          <h2 className="text-3xl font-bold text-foreground transition-all duration-300">Proyectos pequeños</h2>
        </TitleBar>
      </div>
      <p className="text-lg text-foreground transition-all duration-300 mb-8 px-2 opacity-90">
        (Tarjetas no interactivas)<br />
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col bg-foreground rounded-3xl shadow-sm border border-transparent hover:border-contraste/50 hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            <div className="aspect-video w-full overflow-hidden bg-background">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-xl font-bold text-contraste mb-3 transition-all duration-300">{project.title}</h3>
                <p className="text-base text-contraste mb-6 transition-all duration-300 opacity-90 whitespace-pre-line leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-background text-foreground text-xs font-bold tracking-wide rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

export default BabyProjects;