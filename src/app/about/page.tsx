import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import ServicesSection from "../home/sections/services";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="flex items-center bg-slate-900 text-white py-24 h-80">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Sobre a Pinciara Martinelli</h1>
          <p className="text-slate-300 text-center max-w-2xl mx-auto">
            Seu parceiro de confiança para soluções financeiras estratégicas e orientação personalizada
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
                <p className="text-slate-600">
                  Na Pinciara Martinelli, somos especializados em oferecer soluções financeiras estratégicas para ajudar
                  empresas e indivíduos a atingirem seus objetivos de forma segura e sustentável. Com mais de 10 anos de
                  experiência no mercado, nossa missão é proporcionar um atendimento personalizado, utilizando
                  conhecimento técnico e uma abordagem prática para garantir que cada cliente faça as melhores escolhas
                  financeiras.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://images.pexels.com/photos/4960335/pexels-photo-4960335.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2"
                  alt="Our Story"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Nossa Visão</h2>
                <p className="text-slate-600">
                  Acreditamos que uma boa gestão financeira é a base do sucesso, seja no âmbito pessoal ou empresarial.
                  Nosso compromisso é oferecer orientações claras e estratégias que possibilitem a maximização dos
                  resultados financeiros e a conquista de metas a longo prazo. Trabalhamos para ser o parceiro de
                  confiança que sua empresa ou você precisa, garantindo que as decisões financeiras sejam tomadas com
                  confiança e segurança.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://images.pexels.com/photos/7979605/pexels-photo-7979605.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2"
                  alt="Our Vision"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">O que nos Diferencia</h2>
              <ul className="space-y-4">
                {[
                  "Abordagem Personalizada: Entendemos que cada cliente é único, por isso oferecemos soluções financeiras que atendem às suas necessidades específicas, seja na gestão de investimentos, planejamento tributário, estruturação de fluxo de caixa, ou qualquer outro aspecto financeiro.",
                  "Equipe de Especialistas: Nossa equipe é composta por consultores experientes, com ampla expertise nas mais diversas áreas financeiras, sempre atualizados com as melhores práticas do mercado para garantir o melhor desempenho para nossos clientes.",
                  "Compromisso com Resultados: Nosso foco é ajudar você a alcançar resultados reais. Oferecemos soluções financeiras práticas, viáveis e de fácil implementação, sempre com o objetivo de otimizar a performance financeira e garantir a saúde financeira de nossos clientes.",
                  "Transparência e Ética: Acreditamos que um relacionamento de confiança é fundamental para o sucesso de qualquer consultoria financeira. Por isso, mantemos um compromisso constante com a transparência, a ética e a integridade em todas as nossas interações.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conheça nossa equipe</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "Antonio Martinelli",
                role: "Mentor",
                image: "/antonio.png?height=400&width=400",
                bio: `Sou um gerente de controladoria e finanças com mais de três anos de experiência em gerenciar e otimizar as atividades financeiras e contábeis de empresas de diferentes setores. Atualmente, trabalho na Mafrical, uma empresa de fabricação de produtos alimentícios, onde planejo e confecciono o orçamento e os planos econômico-financeiros, acompanho e elaboro os relatórios contábeis e de performance, e avalio as oportunidades de mercado.

Minha missão é fornecer insights valiosos e estratégicos para a tomada de decisões assertivas e alinhadas com os objetivos da empresa. Para isso, utilizo ferramentas de business intelligence, como Power BI, e aplico os conhecimentos adquiridos na minha pós-graduação em finanças pela Fundace FEARP USP. Tenho forte habilidade em liderança, trabalho em equipe e comunicação eficaz, e sou apaixonado por melhorar os processos, maximizar os resultados e contribuir para o crescimento da empresa.`,
              },
              {
                name: "Daniel Pinciara",
                role: "Mentor",
                image: "/russo.png?height=400&width=400",
                bio: "Sou mentor de negócios há mais de 10 anos, com ampla experiência apoiando empreendedores e empresas na estruturação de processos e tomada de decisões estratégicas. Minha trajetória combina habilidades em storytelling, análise de dados e gestão de equipes, o que me permite enxergar além dos números e conectar pessoas, estratégias e objetivos de forma clara e eficaz. Tenho uma visão estratégica que equilibra criatividade e foco em resultados, sempre buscando soluções práticas que gerem impacto real e sustentável para os negócios.",
              },
            ].map((founder, index) => (
              <Card key={index} className="flex flex-col md:flex-row overflow-hidden">
                <Image
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  width={200}
                  height={200}
                  className="object-cover w-full md:w-64 h-64 md:h-auto"
                />
                <div className="flex flex-col p-6">
                  <CardHeader className="p-0 mb-2">
                    <CardTitle>{founder.name}</CardTitle>
                    <CardDescription>{founder.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-slate-600">{founder.bio}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
