import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);
  console.log('hoveredProject:', hoveredProject);
  return (
    <div className="bg-[#0d1117] text-white min-h-screen font-sans">
      <Header />

      <main className="flex flex-col md:flex-row px-4 md:px-16">
        {/* Columna izquierda: contenido */}
        <div className="md:w-2/3 w-full md:pr-8">
          <About />
          <Projects onHover={setHoveredProject} />
          <Contact />
        </div>

        {/* Columna derecha: imagen dinámica */}
        <div className="hidden md:flex w-1/3 items-center justify-center">
          {hoveredProject ? (
            <img
              src={hoveredProject.image}
              alt={hoveredProject.title}
              className="w-full max-w-xs rounded-xl shadow-xl transition-all duration-500"
            />
          ) : (
            <div className="text-gray-600 italic">Pasa el cursor por un proyecto</div>
          )}
        </div>
      </main>
    </div>
  );
}
