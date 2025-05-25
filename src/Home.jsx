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

  const updateOffset = () => {
    if (!projectsRef.current || !previewRef.current) return;

    const projectBox = projectsRef.current.getBoundingClientRect();
    const previewHeight = previewRef.current.offsetHeight;

    const projectsCenter = projectBox.top + projectBox.height / 2 + window.scrollY;
    const previewTop = projectsCenter - previewHeight / 2;

    setOffset(previewTop);
  };

  useEffect(() => {
    updateOffset();
    window.addEventListener('resize', updateOffset);
    window.addEventListener('scroll', updateOffset);
    return () => {
      window.removeEventListener('resize', updateOffset);
      window.removeEventListener('scroll', updateOffset);
    };
  }, [hoveredProject]); // También lo recalculamos cuando cambia

  return (
    <div className="bg-[#0d1117] text-white min-h-screen font-sans">
      <Header />
      <main className="flex flex-col md:flex-row px-4 md:px-16">
        {/* Columna izquierda */}
        <div className="md:w-1/2 w-full md:pr-8">
          <About />
          <Projects onHover={setHoveredProject} ref={projectsRef} />
          <Contact />
        </div>

        {/* Columna derecha */}
        <div className="hidden md:flex w-1/2 relative">
          <div
            ref={previewRef}
            style={{ position: 'absolute', top: `${offset}px` }}
            className="w-full min-h-[90vh] flex items-center justify-center transition-all duration-300 ease-in-out]"
          >
            <ProjectPreview project={hoveredProject} />
          </div>
        </div>
      </main>
    </div>
  );
}
