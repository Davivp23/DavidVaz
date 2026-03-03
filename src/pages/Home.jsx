import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/sharedComponents/Header';
import About from '../components/homeComponents/About';
import Projects from '../components/homeComponents/Projects';
import ProjectPreview from '../components/homeComponents/ProjectPreview';
import BabyProjects from '../components/homeComponents/BabyProjects';
import projectsData from '../data/projects';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TitleBar from '../components/sharedComponents/TitleBar';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(projectsData[0]); // Empezamos con el primero
  const sectionRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');

      // 1. PINNING: Bloqueamos la previsualización solo en esta sección
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: rightColRef.current,
        pinSpacing: false,
      });

      // 2. SNAP Y ACTUALIZACIÓN: 
      // Creamos un trigger por cada carta para detectar cuál está activa
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 40%", // Se activa cuando la carta llega al 40% de la pantalla
          end: "bottom 40%",
          onToggle: (self) => {
            if (self.isActive) {
              setHoveredProject(projectsData[i]);
            }
          },
        });
      });

      // 3. SNAP DEL SCROLL
      // Esto hace que el scroll "busque" la carta más cercana
      // ScrollTrigger.create({
      //   trigger: sectionRef.current,
      //   start: "top top",
      //   end: "bottom bottom",
      //   snap: {
      //     snapTo: 1 / (cards.length - 1),
      //     duration: { min: 0.2, max: 0.5 },
      //     delay: 0.1,
      //     ease: "power1.inOut"
      //   }
      // });
    }, sectionRef);

    return () => ctx.revert(); // Limpieza total de GSAP
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      <Header />

      <main className="container mx-auto px-4">
        <About />
      </main>
      <section
        ref={sectionRef}
        className="container mx-auto flex flex-col md:flex-col px-4 relative mb-20"
      >        <TitleBar>
          <h2 className="text-3xl font-bold text-foreground transition-all duration-300">Proyectos</h2>
        </TitleBar>
        <p className="text-lg leading-relaxed text-foreground transition-all duration-300 max-w-2xl px-2 opacity-90">
          Scrollea para ver una demo de cada proyecto, o pulsa en uno para más información.
        </p>
        <div className="w-full h-auto flex flex-row">
          <div className="md:w-1/2 w-full">
            <Projects onHover={setHoveredProject} />
          </div>
          <div
            ref={rightColRef}
            className="hidden md:flex md:w-1/2 h-screen"
          >
            <div className="w-full h-[80vh] p-4">
              <ProjectPreview project={hoveredProject} />
            </div>
          </div>
        </div>
      </section>
      <main className="container mx-auto px-4">
        <BabyProjects />
      </main>
    </div>
  );
}