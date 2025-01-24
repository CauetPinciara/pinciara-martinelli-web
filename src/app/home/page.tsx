import { SiteHeader } from "@/components/layout/header";
import HeroSection from "./sections/hero";
import ServicesSection from "./sections/services";
import AboutSection from "./sections/about";
import TestimonialsSection from "./sections/testimonials";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}
