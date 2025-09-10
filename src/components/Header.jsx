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
          <Link
            to={'/'}
            className="text-sm font-medium hover:text-orange-400 text-blue-400 transition-colors"
          >
            Portafolio
          </Link>
          <Link
            to={'/cv'}
            className="text-sm font-medium hover:text-orange-400 text-blue-400 transition-colors"
          >
            Currículum
          </Link>
          <a
            href="https://github.com/Davivp23/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-orange-400 text-blue-400 transition-colors"
          >
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=davivp23@vivaldi.net&su=Contacto%20desde%20el%20portafolio&body=Hola%20David,"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-orange-400 text-blue-400 transition-colors"
          >
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
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
