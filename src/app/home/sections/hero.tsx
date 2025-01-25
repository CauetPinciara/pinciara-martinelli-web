"use client";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative  bg-cover bg-center text-white  bg-[url('/background.avif?height=400&width=600')] py-16">
      {/* Overlay for background image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Seja bem-vindo à Pinciara Martinelli
            </h1>
            <p className="text-lg text-slate-300 pt-8">
              A consultoria financeira especializada em atender empresas de
              pequeno e médio porte. Nossa equipe experiente está aqui para
              oferecer os melhores serviços financeiros para o seu negócio.
            </p>

            <div>
              <Button size="lg" className="bg-salmon-500 font-bold mr-4">
                Fale com um Especialista
              </Button>
              <Link href={ROUTES.SERVICES}>
                <Button size="lg" variant="secondary">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
