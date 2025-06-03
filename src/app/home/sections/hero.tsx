"use client";
import ContactButton from "@/components/common/contact-button";

export default function HeroSection() {
  return (
    <section className="relative  bg-cover bg-center text-white  bg-[url('/background.avif?height=400&width=600')] py-16">
      {/* Overlay for background image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Seja bem-vindo à Pinciara Martinelli</h1>
            <p className="text-lg text-slate-300 pt-8">
              Nossa Mentoria 360º é especializada em atender empresas de pequeno e médio porte, mapeando suas dores e
              identificando as oportunidades de melhoria, nos setores que abrangem seu negócio.
            </p>

            <div>
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
