import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Calendar,
  Users,
  Trophy,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { SiteHeader } from "@/components/layout/site-header";
import HeroSection from "./sections/hero";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <section id="services" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Soluções personalizadas para desenvolver líderes, equipes e
                negócios.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Coach Empresarial",
                  description: "Prepare sua empresa para inovar e crescer.",
                  icon: Trophy,
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Coach Pessoal",
                  description:
                    "Desenvolvimento de liderança e gestão estratégica..",
                  icon: Users,
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Treinamentos de Equipe",
                  description:
                    "Aprimore a colaboração e a produtividade da equipe",
                  icon: Calendar,
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="flex flex-col group hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="flex-grow p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button
                      variant="ghost"
                      className="w-full group-hover:translate-x-2 transition-transform"
                    >
                      Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Foto do Consultor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
                <h3 className="text-2xl font-semibold text-navy-blue-800">
                  João Silva
                </h3>
                <p className="text-lg text-slate-600">
                  Com mais de 15 anos de experiência em consultoria financeira e
                  coaching empresarial, tenho ajudado empresas e indivíduos a
                  alcançarem seus objetivos financeiros e profissionais. Minha
                  abordagem combina estratégias comprovadas com insights
                  personalizados para cada cliente.
                </p>
                <p className="text-lg text-slate-600">
                  Sou formado em Economia pela Universidade de São Paulo, com
                  MBA em Finanças pela FGV e certificações internacionais em
                  coaching e liderança. Minha missão é capacitar pessoas e
                  organizações a atingirem seu máximo potencial financeiro e
                  profissional.
                </p>
                <Button className="bg-salmon-500 font-bold">
                  Conheça Minha Trajetória
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Client Success Stories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-slate-200" />
                      <div>
                        <h4 className="font-bold">Client Name</h4>
                        <p className="text-sm text-slate-600">
                          Position, Company
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-600">
                      &#34;The mentorship program exceeded my expectations. The
                      guidance I received was invaluable for my career
                      growth.&#34;
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Ready to Start Your Journey?
              </h2>
              <p className="text-slate-300 mb-8">
                Book your free consultation session and take the first step
                towards achieving your goals
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>contact@mentorpro.com</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
              <Button size="lg" className="w-full md:w-auto">
                Schedule Your Free Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} MentorPro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
