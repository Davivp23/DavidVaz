import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../Theme';
import { Github, Mail, Sun, Moon } from 'lucide-react';

export default function Header() {
  const { darkM, setDarkM } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full bg-foreground shadow-md border-b border-background transition-all duration-300 rounded-b-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo o nombre */}
        <a href="/" className="pl-2 flex items-center gap-6 group">
          <span className="text-3xl font-bold text-contraste transition-all duration-300 group-hover:opacity-80">David Vaz</span>
        </a>

        {/* Navegación */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to={'/'}
            className="text-sm font-medium hover:opacity-80 text-contraste transition-all duration-300 relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-contraste after:transition-all hover:after:w-full"
          >
            Portafolio
          </Link>
          <Link
            to={'/cv'}
            className="text-sm font-medium hover:opacity-80 text-contraste transition-all duration-300 relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-contraste after:transition-all hover:after:w-full"
          >
            Currículum
          </Link>
          <a
            href="https://github.com/Davivp23/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-background/10 rounded-full text-contraste transition-all duration-300 hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=davivp23@vivaldi.net&su=Contacto%20desde%20el%20portafolio&body=Hola%20David,"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-background/10 rounded-full text-contraste transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
          <button
            onClick={() => setDarkM(!darkM)}
            className="p-2 ml-2 hover:bg-background/10 rounded-full text-contraste transition-all duration-300 hover:scale-110">
            {darkM ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>
      </div>
    </header>
  );
}
