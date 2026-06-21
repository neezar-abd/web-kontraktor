import { Building2, Pickaxe, Ruler, Zap } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Konstruksi Gedung",
      description: "Pembangunan gedung komersial, perkantoran, apartemen, dan fasilitas publik dengan standar keamanan tertinggi.",
      icon: <Building2 className="w-8 h-8 text-cta" />,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Infrastruktur",
      description: "Perancangan dan pembangunan jalan raya, jembatan, dan fasilitas tata air terintegrasi.",
      icon: <Pickaxe className="w-8 h-8 text-cta" />,
      image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Renovasi & Interior",
      description: "Revitalisasi bangunan eksisting dan perancangan interior presisi untuk memaksimalkan fungsi ruang.",
      icon: <Ruler className="w-8 h-8 text-cta" />,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Mechanical Electrical",
      description: "Pemasangan instalasi listrik, tata udara (HVAC), plumbing, dan sistem proteksi kebakaran.",
      icon: <Zap className="w-8 h-8 text-cta" />,
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cta font-bold tracking-wider uppercase text-sm mb-2">Bidang Usaha</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Layanan Konstruksi Terintegrasi</h3>
          <p className="text-gray-600">
            Kami menyediakan layanan konstruksi ujung ke ujung yang dikelola oleh tenaga ahli tersertifikasi untuk memastikan setiap proyek selesai tepat waktu dengan kualitas tanpa kompromi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-surface rounded-sm overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
              <div className="h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${service.image}')` }}
                ></div>
              </div>
              <div className="p-6">
                <div className="mb-4 bg-background w-16 h-16 rounded-sm flex items-center justify-center border border-gray-100">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
