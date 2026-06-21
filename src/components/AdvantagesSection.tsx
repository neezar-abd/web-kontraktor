import { Users, PenTool, Clock, DollarSign, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function AdvantagesSection() {
  const advantages = [
    {
      title: "Tim Tersertifikasi",
      description: "Didukung oleh tenaga ahli, insinyur, dan manajemen proyek yang memiliki sertifikasi nasional dan internasional.",
      icon: <Users className="w-6 h-6 text-surface" />
    },
    {
      title: "Peralatan Canggih",
      description: "Menggunakan alat berat dan teknologi konstruksi mutakhir untuk efisiensi dan kepresisian tinggi.",
      icon: <PenTool className="w-6 h-6 text-surface" />
    },
    {
      title: "Tepat Waktu",
      description: "Manajemen timeline yang ketat memastikan serah terima proyek sesuai dengan kesepakatan awal.",
      icon: <Clock className="w-6 h-6 text-surface" />
    },
    {
      title: "Biaya Kompetitif",
      description: "Optimalisasi sumber daya untuk memberikan penawaran harga terbaik tanpa mengorbankan kualitas material.",
      icon: <DollarSign className="w-6 h-6 text-surface" />
    },
    {
      title: "Garansi Konstruksi",
      description: "Setiap pengerjaan dilindungi masa pemeliharaan dan garansi struktur jangka panjang.",
      icon: <Award className="w-6 h-6 text-surface" />
    }
  ];

  return (
    <section className="relative py-24 bg-primary text-surface overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop')"
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <ScrollReveal className="lg:col-span-1">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Mengapa Memilih Kami?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Kami tidak sekadar membangun struktur, kami memberikan peace of mind (ketenangan pikiran). Komitmen kami pada transparansi dan kualitas menjadikan kami mitra jangka panjang yang dapat diandalkan.
              </p>
            </div>
          </ScrollReveal>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {advantages.map((adv, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="flex gap-4 items-start">
                  <div className="bg-cta p-3 rounded-sm flex-shrink-0">
                    {adv.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{adv.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{adv.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
