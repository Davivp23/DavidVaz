import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <link href="/" className="flex utems-center gap-2">
          <span className="text-3xl font-bold text-blue-400">David Vaz</span>
        </link>
        <nav className="hidden md:flex items-center space-x-2">
          <button variant="link" asChild>
            <link href="#portafolio">Portafolio</link>
          </button>
          <button variant="link" asChild>
            <link href="#contacto">Contacto</link>
          </button>
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