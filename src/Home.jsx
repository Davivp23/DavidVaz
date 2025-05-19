import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectPreview from './components/ProjectPreview';


export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);
  console.log('hoveredProject:', hoveredProject);
  return (
    <div className="bg-[#0d1117] text-white min-h-screen font-sans">
      <Header />

      <main className="flex flex-col md:flex-row px-4 md:px-16">
        {/* Columna izquierda: contenido */}
        <div className="md:w-1/2 w-full md:pr-8">
          <About />
          <Projects onHover={setHoveredProject} />
          <Contact />
        </div>

        {/* Columna derecha: imagen dinámica */}
        <div className="hidden md:flex w-1/2 h-3/4 items-center justify-center">
          <ProjectPreview project={hoveredProject} />
        </div>
      </main>
    </div>
  );
}
