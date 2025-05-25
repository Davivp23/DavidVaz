import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectPreview from './components/ProjectPreview';


export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const projectsRef = useRef(null);
  const previewRef = useRef(null);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      if (!projectsRef.current || !previewRef.current) return; // <- esta línea previene el error

      const projectsRect = projectsRef.current.getBoundingClientRect();
      const projectsCenter = projectsRect.top + projectsRect.height / 2;
      const previewHeight = previewRef.current.offsetHeight;
      const newOffset = projectsCenter - previewHeight / 2 + window.scrollY;
      setOffset(newOffset);
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);
    window.addEventListener('scroll', updateOffset);

    return () => {
      window.removeEventListener('resize', updateOffset);
      window.removeEventListener('scroll', updateOffset);
    };
  }, []);

  console.log('hoveredProject:', hoveredProject);
  return (
    <div className="bg-[#0d1117] text-white min-h-screen font-sans">
      <Header />

      <main className="flex flex-col md:flex-row px-4 md:px-16">
        {/* Columna izquierda: contenido */}
        <div className="md:w-1/2 w-full md:pr-8">
          <About />
          <Projects ref={projectsRef} onHover={setHoveredProject} />
          <Contact />
        </div>

        {/* Columna derecha: imagen dinámica */}
        <div className="relative">
          <div
            ref={previewRef}
            className="hidden md:flex w-full h-[90vh] items-center justify-center absolute"
            style={{ top: `${offset}px` }}
          >
            <ProjectPreview project={hoveredProject} />
          </div>
        </div>
      </main>
    </div>
  );
}
