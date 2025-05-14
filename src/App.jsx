import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
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

export default App;