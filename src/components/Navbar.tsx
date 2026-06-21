"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, HardHat } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-primary text-surface shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/#" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            <HardHat className="w-9 h-9 md:w-10 md:h-10 text-cta" />
            <span className="font-bold text-2xl tracking-tight font-display">PT Konstruksi</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 text-lg">
            <Link href="/#about" className="hover:text-cta transition-colors">Tentang Kami</Link>
            <Link href="/#services" className="hover:text-cta transition-colors">Layanan</Link>
            <Link href="/#portfolio" className="hover:text-cta transition-colors">Portofolio</Link>
            <Link href="/gallery" className="hover:text-cta transition-colors font-medium">Galeri</Link>
            <Link href="/#team" className="hover:text-cta transition-colors">Tim</Link>
          </div>

          <div className="hidden md:flex">
            <Link href="/#contact" className="bg-cta hover:bg-cta-hover text-surface px-7 py-2.5 rounded-sm font-medium transition-colors text-lg font-display">
              Konsultasi Proyek
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-surface cursor-pointer">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary pb-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4 pt-4">
            <Link href="/#about" className="block hover:text-cta" onClick={() => setIsOpen(false)}>Tentang Kami</Link>
            <Link href="/#services" className="block hover:text-cta" onClick={() => setIsOpen(false)}>Layanan</Link>
            <Link href="/#portfolio" className="block hover:text-cta" onClick={() => setIsOpen(false)}>Portofolio</Link>
            <Link href="/gallery" className="block hover:text-cta font-medium" onClick={() => setIsOpen(false)}>Galeri</Link>
            <Link href="/#team" className="block hover:text-cta" onClick={() => setIsOpen(false)}>Tim</Link>
            <Link href="/#contact" className="block text-cta font-medium" onClick={() => setIsOpen(false)}>Konsultasi Proyek</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
