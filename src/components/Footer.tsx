import { HardHat } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-surface py-12 border-t border-surface/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <HardHat className="w-8 h-8 text-cta" />
              <span className="font-bold text-xl tracking-tight">PT Konstruksi</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Mitra konstruksi dan infrastruktur terkemuka di Indonesia. Berdedikasi untuk membangun masa depan dengan standar kualitas tinggi, keamanan terjamin, dan komitmen waktu yang presisi.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Tautan</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-cta transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="hover:text-cta transition-colors">Layanan</a></li>
              <li><a href="#portfolio" className="hover:text-cta transition-colors">Portofolio</a></li>
              <li><a href="#team" className="hover:text-cta transition-colors">Tim Kami</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cta transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-cta transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-cta transition-colors">Sertifikasi & Lisensi</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-surface/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} PT Konstruksi. Hak cipta dilindungi undang-undang.</p>
          <p className="mt-2 md:mt-0">Didesain dengan <span className="text-cta">♥</span> untuk Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
