import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { User, Users, Trophy, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Mentoria Pessoal",
      description:
        "Realizamos a mentoria pessoal com foco na pessoa física que precisa criar métodos e rotinas de gestão para criar planejamentos futuros e também organizar a vida daqueles que não tem clareza dos seus ganhos e custos mensais.",
      icon: User,
      id: "coach-pessoal",
      image:
        "https://images.pexels.com/photos/8439694/pexels-photo-8439694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Mentoria Empresarial",
      description:
        "A Mentoria Empresarial é realizada para clarificar o negócio por meio da criação e/ou organização dos indicadores da empresa. Utilizamos uma metodologia própria, com a qual analisamos o estado atual do seu negócio, entendemos as ferramentas de gestão utilizadas e sugerimos, quando necessário, sistemas de controle financeiro. Na mentoria, realizamos a criação de de metodologias práticas para rotina de input de dados e criamos BI’s operacionais e financeiros para que você consiga realizar a interpretação dos seus indicadores com mais facilidade. Entenda nossa metodologia:",
      icon: Trophy,
      id: "coach-empresarial",
      image:
        "https://images.pexels.com/photos/6930542/pexels-photo-6930542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Treinamentos de Equipes",
      description:
        "Treinamos pessoas e equipes visando melhorar o conhecimento e a prática de gestão financeira da empresa e seus colaboradores.",
      icon: Users,
      id: "treinamento-de-equipes",
      image:
        "https://images.pexels.com/photos/8761330/pexels-photo-8761330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-navy-blue-100 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Nossos Serviços</h2>
          <p className="text-primary max-w-4xl mx-auto">
            Soluções personalizadas para dar clareza ao seu negócio, por meio de indicadores operacionais e financeiros.
            Desenvolvemos negócios e pessoas para facilitar a leitura do negócio e as tomadas de decisões no dia a dia.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={cn(
                "flex flex-col group hover:shadow-lg transition-shadow overflow-hidden",
                index === 1 ? "md:col-span-2" : ""
              )}
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
                  <h3 className="text-xl font-bold text-primary">{service.title}</h3>
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
