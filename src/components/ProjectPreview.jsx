import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectPreview({ project }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="max-w-sm p-4 border rounded-2xl bg-[#0d1117]"
        >
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
