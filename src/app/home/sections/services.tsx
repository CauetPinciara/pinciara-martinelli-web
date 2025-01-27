import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { User, Users, Trophy, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Coach Empresarial",
      description:
        "O coaching empresarial é um processo focado em ajudar líderes, equipes e empresas a atingirem seu pleno potencial.",
      icon: Trophy,
      id: "coach-empresarial",
      image:
        "https://images.pexels.com/photos/6930542/pexels-photo-6930542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Coach Pessoal",
      description:
        "O coaching pessoal é um processo de desenvolvimento focado em ajudar você a atingir suas metas e potencializar seu desempenho.",
      icon: User,
      id: "coach-pessoal",
      image:
        "https://images.pexels.com/photos/8439694/pexels-photo-8439694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Treinamentos de Equipes",
      description:
        "O treinamento financeiro de equipe visa melhorar o conhecimento e a prática de gestão financeira entre seus colaboradores.",
      icon: Users,
      id: "treinamento-de-equipes",
      image:
        "https://images.pexels.com/photos/8761330/pexels-photo-8761330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-navy-blue-100 to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Nossos Serviços
          </h2>
          <p className="text-primary max-w-2xl mx-auto">
            Soluções personalizadas para desenvolver líderes, equipes e
            negócios.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
                  placeholder="blur"
                  blurDataURL="/placeholder.svg?height=500&width=400"
                />
              </div>
              <CardContent className="flex-grow p-6">
                <div className="flex items-center gap-4 mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold text-primary">
                    {service.title}
                  </h3>
                </div>
                <p className="text-primary mb-4">{service.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={`/services#${service.id}`}>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:translate-x-2 transition-transform text-primary"
                  >
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
