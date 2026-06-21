import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <ServicesSection />
      <AdvantagesSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
