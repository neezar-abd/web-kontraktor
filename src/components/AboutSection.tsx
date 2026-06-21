import { ShieldCheck, CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-surface overflow-hidden">
      {/* Background Image Disguised */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-surface opacity-90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-cta font-bold tracking-wider uppercase text-sm mb-2">Tentang Kami</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Membangun Fondasi yang Kuat untuk Masa Depan</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Didirikan sejak 2011, PT Konstruksi telah menjadi pionir dalam menghadirkan solusi pembangunan infrastruktur yang inovatif dan terpercaya. Kami menggabungkan keahlian teknis dengan manajemen proyek yang efisien untuk menghasilkan karya terbaik.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cta flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary">Visi</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Menjadi perusahaan konstruksi terdepan di Asia Tenggara yang mengutamakan kualitas, keselamatan, dan keberlanjutan lingkungan.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cta flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary">Misi</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Memberikan nilai tambah terbaik bagi klien melalui inovasi, efisiensi waktu, dan sumber daya manusia yang kompeten.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-sm border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="bg-primary/5 p-4 rounded-sm">
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Legalitas Terjamin</h4>
                <p className="text-sm font-medium text-gray-700">SIUJK: 12345/SIUJK/2011 | NIB: 9876543210123</p>
                <p className="text-sm text-gray-500 mt-1">Kami memenuhi seluruh perizinan operasional sesuai standar hukum konstruksi Indonesia.</p>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] rounded overflow-hidden shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
