import React from 'react';

export default function ProjectCard({ title, description, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block p-4 border border-gray-700 rounded-2xl hover:shadow-lg hover:scale-105 transition-transform duration-300 bg-[#161b22]">
      <h3 className="text-xl font-bold text-blue-400 dark:text-blue-500 transition-all duration-300">{title}</h3>
      <p className="dark:text-gray-600 transition-all duration-300 text-gray-300 whitespace-pre-line">{description}</p>
    </a>
  );
}