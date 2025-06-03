"use client";

import { Testimonial } from "./types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./testimonial-card";
// import { Card, CardContent } from "@/components/ui/card";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Elaine",
    company: "Tech Solutions Brasil",
    image: "/placeholder.svg?height=100&width=100",

    quote:
      "A consultoria da Pinciara Martinelli transformou completamente nossa gestão financeira. Os resultados foram impressionantes desde o primeiro mês.",
  },
  {
    id: 2,
    name: "Soli",
    company: "Grupo Inovação",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Profissionalismo e dedicação excepcionais. A equipe nos ajudou a reestruturar nossas finanças e alcançar nossas metas de crescimento.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-navy-blue-100 to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          O que nossos clientes dizem?
        </h2>

        <Carousel
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
        </Carousel>
      </div>
    </section>
  );
}
