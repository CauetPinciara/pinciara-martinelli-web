import HeroSection from "./sections/hero";
import ServicesSection from "./sections/services";
import AboutSection from "./sections/about";
import TestimonialsSection from "./sections/testimonials";

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
    </main>
  );
}
