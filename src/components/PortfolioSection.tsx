export default function PortfolioSection() {
  const projects = [
    {
      name: "Menara Batavia Sentral",
      location: "Jakarta Pusat",
      year: "2024",
      scope: "Konstruksi Utama & MEP",
      image: "https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?q=80&w=2089&auto=format&fit=crop"
    },
    {
      name: "Jembatan Musi Raya",
      location: "Sumatera Selatan",
      year: "2023",
      scope: "Infrastruktur",
      image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Kawasan Industri Terpadu",
      location: "Cikarang",
      year: "2023",
      scope: "Desain & Pembangunan",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
    },
    {
      name: "Rumah Sakit Internasional",
      location: "Surabaya",
      year: "2022",
      scope: "Konstruksi Gedung",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
    },
    {
      name: "Pusat Data Nasional",
      location: "Batam",
      year: "2022",
      scope: "MEP & Server Room",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
    },
    {
      name: "Revitalisasi Stasiun",
      location: "Bandung",
      year: "2021",
      scope: "Renovasi Eksterior",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-cta font-bold tracking-wider uppercase text-sm mb-2">Portofolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Bukti Nyata Dedikasi Kami</h3>
            <p className="text-gray-600">
              Deretan mahakarya yang telah kami wujudkan di berbagai sektor, menjadi tonggak sejarah perjalanan kami dalam membangun infrastruktur negeri.
            </p>
          </div>
          <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-surface px-6 py-3 rounded-sm font-medium transition-colors whitespace-nowrap cursor-pointer">
            Lihat Semua Proyek
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-64 overflow-hidden rounded mb-4 shadow-sm">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${project.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-primary rounded-sm">
                  {project.year}
                </div>
              </div>
              <h4 className="text-xl font-bold text-primary mb-1 group-hover:text-cta transition-colors">{project.name}</h4>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span>{project.location}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{project.scope}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
