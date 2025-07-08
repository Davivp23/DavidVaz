import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#fa7524] bg-[#0d1117]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo o nombre */}
        <a href="/" className="pl-2 flex items-center gap-6">
          <span className="text-3xl font-bold text-blue-400">David Vaz</span>
        </a>

        {/* Navegación */}
        <nav className="hidden md:flex items-center space-x-4">
          <a
            href="#portafolio"
            className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
          >
            Proyectos
          </a>
          <Link
            to={'/cv'}
            className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
          >
            Currículum
          </Link>
        </nav>
      </div>
    </header>
  );
}





/* export default function Header() {
  return (
    <header className="p-6 text-center text-3xl font-bold text-blue-400">
      <br />
      <br />
      David Vaz
      <p className="text-gray-300 text-xl">
        Desarrollador FullStack
      </p>
    </header>
  );
} */