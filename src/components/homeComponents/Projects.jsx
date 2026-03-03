import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import projects from '../../data/projects';
import TitleBar from '../sharedComponents/TitleBar';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Projects = forwardRef(({ onHover }, ref) => {
  return (
    <section ref={ref} className="py-4">
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              to={`/proyecto/${project.id}`}
              onMouseEnter={() => onHover(project)}
              className="mb-8 md:mb-[80vh] group flex flex-col justify-between p-8 bg-foreground rounded-3xl shadow-sm border border-transparent hover:border-contraste/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-duration-300 transform translate-x-4 group-hover:translate-x-0">
                <ChevronRight className="w-8 h-8 text-contraste" />
              </div>
              <h3 className="text-2xl font-bold text-contraste mb-4 transition-all duration-300 group-hover:opacity-80">
                {project.title}
              </h3>
              <p className="text-base text-contraste mb-6 max-w-lg transition-all duration-300 opacity-90 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-background text-foreground text-xs font-bold tracking-wide rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

export default Projects;