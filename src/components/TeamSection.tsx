export default function TeamSection() {
  const team = [
    {
      name: "Ir. Hendra Wijaya, MT.",
      role: "Direktur Utama",
      background: "25+ tahun pengalaman di konstruksi sipil dan manajemen strategis. Mantan VP BUMN Karya.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Budi Santoso, ST.",
      role: "Direktur Operasional",
      background: "Spesialis struktur bangunan tinggi. Telah memimpin lebih dari 50 mega proyek nasional.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Siti Rahmawati, MBA",
      role: "Direktur Keuangan",
      background: "Pakar corporate finance dan risk management untuk pembiayaan proyek infrastruktur.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
      name: "Tomy Setiawan, ST.",
      role: "Head of Engineering",
      background: "Ahli di bidang geoteknik dan inovasi metode kerja efisien. Tersertifikasi Internasional.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="team" className="py-24 bg-background border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cta font-bold tracking-wider uppercase text-sm mb-2">Manajemen</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tim Kepemimpinan</h3>
          <p className="text-gray-600">
            Kekuatan utama kami terletak pada pengalaman dan integritas jajaran direksi serta manajemen yang terus membawa standar baru dalam industri.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((person, index) => (
            <div key={index} className="bg-surface rounded-sm overflow-hidden shadow-sm border border-gray-100 group">
              <div className="h-64 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-top transform group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url('${person.image}')` }}
                ></div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-lg font-bold text-primary mb-1">{person.name}</h4>
                <p className="text-cta text-sm font-medium mb-3">{person.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {person.background}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
