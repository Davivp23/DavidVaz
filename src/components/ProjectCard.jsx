import React from 'react';

export default function ProjectCard({ title, description, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block p-4 border border-gray-700 rounded-2xl hover:shadow-lg hover:scale-105 transition-transform duration-300 bg-[#161b22]">
      <h3 className="text-xl font-bold text-blue-400">{title}</h3>
      <p className="text-gray-400 whitespace-pre-line">{description}</p>
    </a>
  );
}