"use client";

import { motion } from "framer-motion";

export default function ClientsSection() {
  const clients = ["Waskita Karya", "Adhi Karya", "Pelindo", "Angkasa Pura", "BCA", "Pertamina", "PLN", "Gudang Garam"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative py-24 border-y border-gray-100 overflow-hidden bg-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-background opacity-95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-sm bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase border border-primary/10 mb-4">
            Kemitraan Strategis
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Dipercaya Oleh Mitra Korporat & BUMN
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Komitmen kami terhadap kualitas dan ketepatan waktu telah membuahkan kepercayaan dari berbagai institusi terkemuka di Indonesia.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center items-center gap-10 md:gap-x-20 md:gap-y-12"
        >
          {clients.map((client, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group relative flex items-center justify-center cursor-default"
            >
              <span className="text-2xl md:text-3xl font-extrabold text-gray-300 select-none transition-all duration-500 group-hover:text-primary group-hover:scale-105">
                {client}
              </span>
              <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-cta transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
