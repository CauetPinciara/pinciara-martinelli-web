import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, ShieldCheck, Target, Users } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* About Us */}
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
            <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
            <h3 className="text-2xl font-semibold text-primary">
              Pinciara Martinelli
            </h3>
            <p className="text-lg text-slate-600">
              Na Pinciara Martinelli, oferecemos soluções financeiras
              estratégicas, ajudando empresas e indivíduos a alcançarem seus
              objetivos de forma segura. mais de 10 anos de experiência,
              buscamos proporcionar atendimento personalizado para garantir as
              melhores escolhas financeiras.
            </p>
            <p className="text-lg text-slate-600">
              Acredtiamos que uma boa gestão financeira é essencial para o
              sucesso. Nosso compromisso é fornecer orientações claras e
              estratégias para maximizar resultados e conquistar metas de longo
              prazo.
            </p>
            <Button className="bg-salmon-500 font-bold w-full md:w-fit">
              Conheça Nossa Trajetória
            </Button>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mb-16 pt-24">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            O que nos Diferencia
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Abordagem Personalizada",
                description:
                  "Soluções financeiras que atendem às necessidades específicas de cada cliente.",
              },
              {
                icon: Briefcase,
                title: "Equipe de Especialistas",
                description:
                  "Consultores experientes, atualizados com as melhores práticas do mercado.",
              },
              {
                icon: Target,
                title: "Compromisso com Resultados",
                description:
                  "Foco em soluções práticas e viáveis para otimizar a performance financeira.",
              },
              {
                icon: ShieldCheck,
                title: "Transparência e Ética",
                description:
                  "Relacionamento de confiança baseado em transparência e integridade.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
