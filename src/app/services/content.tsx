"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserCheck, Briefcase, GraduationCap, CheckCircle } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import ContactButton from "@/components/common/contact-button";

export default function ServicesPageContent() {
  const services = [
    {
      title: "Mentoria Pessoal",
      description:
        "Realizamos a mentoria pessoal com foco na pessoa física que precisa criar métodos e rotinas de gestão para criar planejamentos futuros e também organizar a vida daqueles que não tem clareza dos seus ganhos e custos mensais.",
      icon: UserCheck,
      content: {
        offerings: [
          {
            title: "Desenvolvimento de Habilidades Pessoais",
            items: [
              "Melhoria da autoestima e autoconfiança",
              "Gestão do tempo e aumento da produtividade",
              "Técnicas para melhorar a comunicação",
              "Construção de uma mentalidade de crescimento",
            ],
          },
          {
            title: "Alinhamento de Vida e Propósito",
            items: [
              "Identificação de valores pessoais e objetivos de vida",
              "Planejamento para alcançar sonhos e metas",
              "Estratégias para encontrar equilíbrio entre vida pessoal e profissional",
            ],
          },
          {
            title: "Superação de Desafios",
            items: [
              "Enfrentamento de mudanças e incertezas",
              "Controle de ansiedade e estresse",
              "Superação de bloqueios emocionais e crenças limitantes",
            ],
          },
          {
            title: "Planejamento e Realização de Metas",
            items: [
              "Definição de metas claras e alcançáveis",
              "Criação de planos de ação personalizados",
              "Acompanhamento contínuo para garantir progresso",
            ],
          },
        ],
        benefits: [
          "Clareza: Descubra o que realmente importa para você",
          "Autoconfiança: Desenvolva uma mentalidade positiva",
          "Foco: Concentre-se no que é essencial",
          "Equilíbrio: Construa uma rotina mais equilibrada",
          "Resultados Tangíveis: Alcance progresso real",
        ],
      },
    },
    {
      title: "Mentoria Empresarial",
      description:
        "A Mentoria Empresarial é realizada para clarificar o negócio por meio da criação e/ou organização dos indicadores da empresa. Utilizamos uma metodologia própria, com a qual analisamos o estado atual do seu negócio, entendemos as ferramentas de gestão utilizadas e sugerimos, quando necessário, sistemas de controle financeiro. Na mentoria, realizamos a criação de de metodologias práticas para rotina de input de dados e criamos BI’s operacionais e financeiros para que você consiga realizar a interpretação dos seus indicadores com mais facilidade. Entenda nossa metodologia:",
      icon: Briefcase,
      content: {
        offerings: [
          {
            title: "Coaching para Líderes e Executivos",
            items: [
              "Desenvolvimento de habilidades de liderança",
              "Gestão de equipes e comunicação eficaz",
              "Planejamento estratégico e tomada de decisões",
              "Gestão do tempo e aumento da produtividade",
            ],
          },
          {
            title: "Coaching para Empreendedores",
            items: [
              "Criação de modelos de negócios sustentáveis",
              "Identificação de oportunidades de mercado",
              "Desenvolvimento de resiliência e mentalidade empreendedora",
              "Planejamento para expansão e crescimento",
            ],
          },
          {
            title: "Coaching de Equipes",
            items: [
              "Melhoria na colaboração e comunicação",
              "Desenvolvimento de uma visão compartilhada",
              "Solução de conflitos internos",
              "Aumento do engajamento e produtividade",
            ],
          },
          {
            title: "Gestão de Mudanças e Inovação",
            items: [
              "Preparação da empresa para mudanças no mercado",
              "Implementação de novas estratégias e processos",
              "Desenvolvimento de uma cultura de inovação",
            ],
          },
        ],
        benefits: [
          "Aumento da confiança e clareza na tomada de decisões",
          "Melhoria da eficiência operacional",
          "Redução de custos e desperdícios",
          "Alinhamento entre objetivos pessoais e organizacionais",
          "Aumento da motivação e do desempenho da equipe",
        ],
      },
    },

    {
      title: "Treinamentos de Equipes",
      description:
        "Treinamos pessoas e equipes visando melhorar o conhecimento e a prática de gestão financeira da empresa e seus colaboradores.",
      icon: GraduationCap,
      content: {
        offerings: [
          {
            title: "Gestão Financeira Corporativa",
            items: [
              "Introdução aos conceitos básicos de finanças empresariais",
              "Análise de custos e estratégias para redução de despesas",
              "Planejamento financeiro e orçamento empresarial",
              "Controle do fluxo de caixa para equipes administrativas",
            ],
          },
          {
            title: "Educação Financeira para Colaboradores",
            items: [
              "Gestão de finanças pessoais dos colaboradores",
              "Dicas para economizar, investir e gerenciar dívidas",
              "Importância do equilíbrio financeiro para o bem-estar",
              "Construção de uma mentalidade financeira saudável",
            ],
          },
          {
            title: "Gestão de Projetos e Recursos Financeiros",
            items: [
              "Planejamento financeiro para projetos específicos",
              "Controle de orçamento durante a execução de projetos",
              "Estratégias para evitar desperdícios e otimizar recursos",
              "Relatórios financeiros claros e objetivos",
            ],
          },
          {
            title: "Treinamento para Equipes de Vendas",
            items: [
              "Alinhamento de metas financeiras com estratégias de vendas",
              "Precificação eficiente e análise de rentabilidade",
              "Acompanhamento de indicadores financeiros de desempenho",
              "Técnicas para negociações financeiras com clientes",
            ],
          },
        ],
        benefits: [
          "Aumento da eficiência na gestão de recursos",
          "Redução de custos através de maior conscientização",
          "Maior engajamento dos colaboradores",
          "Decisões baseadas em dados",
          "Desenvolvimento de uma cultura de crescimento",
        ],
      },
    },
  ];

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSmoothScroll = (id: string) => {
    console.log("id", id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const hash = searchParams.get("hash") || pathname.split("#")[1];
    if (hash) {
      console.log("hash", hash);

      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [pathname, searchParams]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="flex items-center bg-slate-900 text-white py-24 h-80">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Nossos Serviços</h1>
          <p className="text-slate-300 text-center max-w-2xl mx-auto">
            Soluções completas de coaching e treinamento para alcançar suas metas pessoais e profissionais.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <Card
                key={index}
                className={cn(
                  "flex flex-col justify-between h-full hover:shadow-lg transition-shadow",
                  index === 1 ? "md:col-span-2" : ""
                )}
              >
                <CardHeader className="flex items-center">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    className="w-full "
                    onClick={() => handleSmoothScroll(service.title.toLowerCase().replace(/ /g, "-"))}
                  >
                    Saiba Mais
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Detailed Service Sections */}
          {services.map((service, index) => (
            <div key={index} id={service.title.toLowerCase().replace(/ /g, "-")} className="mb-20 scroll-mt-20">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <service.icon className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>

                <Accordion type="single" collapsible className="mb-8">
                  {service.content.offerings.map((offering, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="text-lg font-semibold">{offering.title}</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {offering.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <Card>
                  <CardHeader>
                    <CardTitle>Benefícios</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {service.content.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="mt-8 text-center">
                  <ContactButton text="Agende uma Consulta"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
