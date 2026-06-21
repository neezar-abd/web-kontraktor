import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Mulai Proyek Anda Bersama Kami</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tim ahli kami siap mendiskusikan kebutuhan teknis, estimasi biaya, dan jadwal pengerjaan proyek Anda. Hubungi kami melalui form atau detail kontak di bawah ini.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-background border border-gray-100 p-3 rounded-sm">
                    <MapPin className="w-6 h-6 text-cta" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Kantor Pusat</h4>
                    <p className="text-gray-600 text-sm mt-1">Gedung Konstruksi Tower Lt. 12<br/>Jl. Jend. Sudirman Kav. 45<br/>Jakarta Pusat, 10210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-background border border-gray-100 p-3 rounded-sm">
                    <Phone className="w-6 h-6 text-cta" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Telepon</h4>
                    <p className="text-gray-600 text-sm mt-1">+62 21 555 0123 (Hunting)<br/>+62 811 1234 5678 (WhatsApp Business)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-background border border-gray-100 p-3 rounded-sm">
                    <Mail className="w-6 h-6 text-cta" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Email</h4>
                    <p className="text-gray-600 text-sm mt-1">info@ptkonstruksi.com<br/>tender@ptkonstruksi.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-background border border-gray-100 p-3 rounded-sm">
                    <Clock className="w-6 h-6 text-cta" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Jam Operasional</h4>
                    <p className="text-gray-600 text-sm mt-1">Senin - Jumat: 08.00 - 17.00 WIB<br/>Sabtu - Minggu: Tutup</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={150}>
            <div className="bg-background p-8 rounded border border-gray-100 shadow-sm">
              <h4 className="text-2xl font-bold text-primary mb-6">Request Penawaran (RFQ)</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-cta focus:border-cta outline-none transition-colors bg-surface text-gray-800" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Perusahaan</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-cta focus:border-cta outline-none transition-colors bg-surface text-gray-800" placeholder="PT Contoh Corp" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email / No. Telepon</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-cta focus:border-cta outline-none transition-colors bg-surface text-gray-800" placeholder="john@example.com / 0812..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kategori Proyek</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-cta focus:border-cta outline-none transition-colors bg-surface text-gray-800">
                    <option>Konstruksi Gedung</option>
                    <option>Infrastruktur</option>
                    <option>Renovasi / Interior</option>
                    <option>Mechanical Electrical</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pesan / Detail Kebutuhan</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-cta focus:border-cta outline-none transition-colors bg-surface text-gray-800" placeholder="Jelaskan secara singkat mengenai proyek Anda..."></textarea>
                </div>
                <button type="button" className="w-full bg-cta hover:bg-cta-hover text-surface font-bold py-3 px-4 rounded-sm transition-colors cursor-pointer mt-2">
                  Kirim Permintaan
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
