import { Building2, Pickaxe, Ruler, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ServicesSection() {
  const services = [
    {
      title: "Konstruksi Gedung",
      description: "Pembangunan gedung komersial, perkantoran, apartemen, dan fasilitas publik dengan standar keamanan tertinggi.",
      icon: <Building2 className="w-6 h-6 text-cta" />,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Infrastruktur",
      description: "Perancangan dan pembangunan jalan raya, jembatan, dan fasilitas tata air terintegrasi.",
      icon: <Pickaxe className="w-6 h-6 text-cta" />,
      image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Renovasi & Interior",
      description: "Revitalisasi bangunan eksisting dan perancangan interior presisi untuk memaksimalkan fungsi ruang.",
      icon: <Ruler className="w-6 h-6 text-cta" />,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Mechanical Electrical",
      description: "Pemasangan instalasi listrik, tata udara (HVAC), plumbing, dan sistem proteksi kebakaran.",
      icon: <Zap className="w-6 h-6 text-cta" />,
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-background overflow-hidden">
      {/* Background Image Disguised */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=1974&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-background opacity-90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Layanan Konstruksi Terintegrasi</h3>
          <p className="text-gray-600">
            Kami menyediakan layanan konstruksi ujung ke ujung yang dikelola oleh tenaga ahli tersertifikasi untuk memastikan setiap proyek selesai tepat waktu dengan kualitas tanpa kompromi.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100} className="flex">
              <div className="bg-surface border border-gray-200 hover:border-cta/50 p-6 hover:bg-primary/[0.01] transition-all duration-300 group cursor-pointer flex flex-col justify-between rounded-sm w-full">
                <div>
                  <div className="h-40 overflow-hidden rounded-sm mb-6 relative">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/5 transition-colors duration-500"></div>
                  </div>
                  <div className="mb-4 bg-background w-12 h-12 rounded-sm flex items-center justify-center border border-gray-100 group-hover:border-cta/30 transition-colors duration-300">
                    <div className="transform group-hover:scale-105 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-cta transition-colors duration-300">{service.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1 text-xs font-bold text-cta opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
                  <span>Info Detail</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
