import React from 'react';
import TitleBar from '../sharedComponents/TitleBar';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="my-16"
    >
      <TitleBar>
        <h2 className="text-3xl font-bold text-foreground transition-all duration-300">Sobre mí</h2>
      </TitleBar>

      <div className="w-full h-auto flex flex-row">
        <p className="text-lg leading-relaxed text-foreground transition-all duration-300 max-w-2xl px-2 opacity-90 w-1/2">
          ¡Hola! <br />
          Me llamo David y aquí podrás ver varios de los proyectos que he ido haciendo a lo largo de mi vida. <br />
          Desde pequeño me han gustado las tecnologías en general, pero principalmente la programación.
        </p>
      </div>
    </motion.section>
  );
}