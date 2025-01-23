"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch"; // Import the Switch component from shadcn/ui
import Image from "next/image";

export default function HeroSection() {
  const [isDesignSwitched, setIsDesignSwitched] = useState(false);

  const toggleDesign = () => {
    setIsDesignSwitched(!isDesignSwitched);
  };

  return (
    <section
      className={`relative ${
        isDesignSwitched ? "bg-cover bg-center" : "bg-navy-blue-800"
      } text-white`}
      style={{
        backgroundImage: isDesignSwitched
          ? "url('/background.avif?height=400&width=600')"
          : undefined,
      }}
    >
      {/* Overlay for background image */}
      {isDesignSwitched && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        {/* Switch Toggle */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Trocar design</span>
            <Switch checked={isDesignSwitched} onCheckedChange={toggleDesign} />
          </div>
        </div>

        <div
          className={`${
            isDesignSwitched
              ? "text-center max-w-2xl mx-auto"
              : "grid md:grid-cols-2 gap-12 items-center"
          }`}
        >
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Simplificamos Suas Finanças, Potencializamos Seu Futuro
            </h1>
            <p className="text-lg text-slate-300">
              Consultoria financeira personalizada para transformar desafios em
              oportunidades. Planeje, organize e cresça com segurança.
            </p>
            <div
              className={`flex gap-4 ${
                isDesignSwitched ? "justify-center" : ""
              }`}
            >
              <Button size="lg" className="bg-salmon-500 font-bold">
                Fale com um Especialista
              </Button>
              <Button size="lg" variant="secondary">
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Image (only shown in original design) */}
          {!isDesignSwitched && (
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/background.avif?height=400&width=600"
                alt="Consultoria Financeira"
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
