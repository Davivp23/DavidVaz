import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-[#fa7524] bg-[#0d1117]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo o nombre */}
        <a href="/" className="flex items-center gap-6">
          <span></span>
          <span className="text-3xl font-bold text-blue-400">David Vaz</span>
        </a>

        {/* Navegación */}
        <nav className="hidden md:flex items-center space-x-4">
          <a
            href="#portafolio"
            className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
          >
            Contacto
          </a>
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