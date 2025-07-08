import React from 'react';
import { Button } from '@/components/ui/button';
import { PenTool } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <PenTool className="h-6 w-6" />
          <span className="font-bold text-lg font-headline">Oscar Gil</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-2">
          <Button variant="link" asChild>
            <Link href="#portfolio">Portafolio</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="#contact">Contacto</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}