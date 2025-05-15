// Home.jsx
import React, { useState } from 'react';
import Projects from './Projects';
import ProjectPreview from './ProjectPreview';
import About from './About';
import Contact from './Contact';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleHover = (project) => {
    setHoveredProject(project);
  };

  return (
    <div className="flex">
      {/* IZQUIERDA */}
      <div className="w-1/2 p-8 space-y-10">
        <About />
        <Projects onHover={handleHover} />
        <Contact />
      </div>

      {/* DERECHA */}
      <div className="w-1/2 p-8 flex items-center justify-center">
        <ProjectPreview project={hoveredProject} />
      </div>
    </div>
  );
}
