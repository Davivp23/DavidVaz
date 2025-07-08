import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectPreview from './components/ProjectPreview';
import BabyProjects from './components/BabyProjects';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [offset, setOffset] = useState(0);
  const projectsRef = useRef(null);
  const previewRef = useRef(null);

  useEffect(() => {
    const updateOffset = () => {
      if (!projectsRef.current || !previewRef.current) return;

      const projectsRect = projectsRef.current.getBoundingClientRect();
      const previewHeight = previewRef.current.offsetHeight;
      const projectsCenter = projectsRect.top + projectsRect.height / 2;
      const newOffset = window.scrollY + projectsCenter - previewHeight / 2;


      setOffset(newOffset);
    };

    // Observa cambios de tamaño y zoom
    const resizeObserver = new ResizeObserver(updateOffset);
    if (projectsRef.current) resizeObserver.observe(projectsRef.current);
    if (previewRef.current) resizeObserver.observe(previewRef.current);

    window.addEventListener('scroll', updateOffset);
    window.addEventListener('resize', updateOffset);
    updateOffset();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', updateOffset);
      window.removeEventListener('resize', updateOffset);
    };
  }, []);

  return (
    <div className="bg-[#0d1117] text-white min-h-screen font-sans">
      <Header />
      <main className="container mx-auto flex flex-col md:flex-row px-4">
        {/* Columna izquierda */}
        <div className="md:w-1/2 w-full md:pr-8">
          <About />
          <Projects ref={projectsRef} onHover={setHoveredProject} />
        </div>

        {/* Columna derecha */}
        <div className="relative md:w-1/2 w-full flex items-center justify-center">
          <div
            ref={previewRef}
            className="hidden md:flex w-full h-full items-center justify-center absolute"
            style={{ top: `${100}px` }}
          >
            <ProjectPreview project={hoveredProject} />
          </div>
        </div>
      </main>
      <main className="container mx-auto flex flex-col md:flex-col px-4">
        {/* No más columnas */}
        <div className="w-full md:pr-8">
          <BabyProjects ref={projectsRef} />
          <Contact />
        </div>
      </main>
    </div>
  );
}
