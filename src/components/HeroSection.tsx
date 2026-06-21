"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center pt-16 overflow-hidden bg-primary">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-15"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')"
        }}
      ></div>



      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-2 sm:px-0"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-surface leading-tight mb-6">
            Mitra Terpercaya Pembangunan <span className="text-cta">Infrastruktur Anda</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Mewujudkan rancangan masa depan dengan standar kualitas tinggi, keamanan terjamin, dan komitmen waktu yang presisi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-cta hover:bg-cta-hover text-surface px-8 py-4 rounded-sm font-semibold text-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              Konsultasi Proyek
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#portfolio" 
              className="bg-transparent border border-surface text-surface hover:bg-surface/10 px-8 py-4 rounded-sm font-semibold text-lg transition-colors flex items-center justify-center cursor-pointer"
            >
              Lihat Portofolio
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative stat banner at bottom of hero */}
      <div className="absolute bottom-0 w-full bg-secondary/95 border-t border-surface/10 py-4 hidden md:block z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-surface">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center px-4 border-r border-surface/20 w-1/3"
          >
            <p className="text-2xl md:text-3xl font-bold mb-0.5">15+</p>
            <p className="text-[10px] md:text-xs text-gray-300 uppercase tracking-widest font-medium">Tahun Pengalaman</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center px-4 border-r border-surface/20 w-1/3"
          >
            <p className="text-2xl md:text-3xl font-bold mb-0.5">250+</p>
            <p className="text-[10px] md:text-xs text-gray-300 uppercase tracking-widest font-medium">Proyek Selesai</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center px-4 w-1/3"
          >
            <p className="text-2xl md:text-3xl font-bold mb-0.5">ISO 9001</p>
            <p className="text-[10px] md:text-xs text-gray-300 uppercase tracking-widest font-medium">Tersertifikasi</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
