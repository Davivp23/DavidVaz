import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen font-sans">
      <Header />
      <main className="px-4 md:px-16">
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
