import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { User, Users, Trophy, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
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
          {[
            {
              title: "Coach Empresarial",
              description:
                "O coaching empresarial é um processo focado em ajudar líderes, equipes e empresas a atingirem seu pleno potencial. Por meio de sessões personalizadas, trabalhamos juntos para melhorar a liderança, otimizar processos e alcançar metas empresariais de maneira eficaz e sustentável.",
              icon: Trophy,
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Coach Pessoal",
              description:
                "O coaching pessoal é um processo de desenvolvimento focado em ajudar você a atingir suas metas e potencializar seu desempenho, tanto no âmbito pessoal quanto profissional. Como seu coach, meu papel é ser seu parceiro de confiança, guiando-o por meio de um processo estruturado que promove mudanças duradouras e positivas.",
              icon: User,
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Treinamentos de Equipe",
              description:
                "O treinamento financeiro de equipe é uma formação personalizada que visa melhorar o conhecimento e a prática de gestão financeira entre seus colaboradores. Através de uma abordagem prática e acessível, capacitamos sua equipe para lidar com orçamentos, custos, investimentos e indicadores financeiros de forma estratégica, impactando diretamente nos resultados da empresa.",
              icon: Users,
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
                  <h3 className="text-xl font-bold text-primary">
                    {service.title}
                  </h3>
                </div>
                <p className="text-primary mb-4 ">{service.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  variant="ghost"
                  className="w-full group-hover:translate-x-2 transition-transform  text-primary"
                >
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
