"use client";

import { Testimonial } from "./types";

// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import TestimonialCard from "./testimonial-card";
// import { Card, CardContent } from "@/components/ui/card";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Elaine",
    company: "Bastos Xavier",
    image: "/placeholder.svg?height=100&width=100",

    quote: `Quero deixar meu feedback sobre a Pinciari Mentoria.
Desde o início, me chamou atenção a forma prática e humanizada com que entenderam a realidade do nosso negócio.
A mentoria superou as expectativas, trazendo clareza, direcionamento e, principalmente AÇÕES que já estão fazendo diferença nos nossos resultados . 
O olhar externo da equipe ajudou a enxergar e destravar prontos que, internamente não estávamos conseguindo resolver,
Recomendo para empresas que buscam crescer com estratégia, propósito e organização.
Esta sendo, sem dúvida, um ótimo investimento!!!!`,
  },
  // {
  //   id: 2,
  //   name: "Soli",
  //   company: "Grupo Inovação",
  //   image: "/placeholder.svg?height=100&width=100",
  //   quote:
  //     "Profissionalismo e dedicação excepcionais. A equipe nos ajudou a reestruturar nossas finanças e alcançar nossas metas de crescimento.",
  // },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-navy-blue-100 to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">O que nossos clientes dizem?</h2>
        <div className="w-full flex justify-center items-center">
          <div className="max-w-7xl">
          <TestimonialCard testimonial={testimonials[0]} />
          </div>
        </div>

        {/* <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-6 flex justify-center">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
      </div>
    </section>
  );
}
