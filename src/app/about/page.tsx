import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import ServicesSection from "../home/sections/services";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="flex items-center bg-slate-900 text-white py-24 h-80">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Sobre a Pinciara Martinelli
          </h1>
          <p className="text-slate-300 text-center max-w-2xl mx-auto">
            Seu parceiro de confiança para soluções financeiras estratégicas e
            orientação personalizada
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
                  Na Pinciara Martinelli, somos especializados em oferecer
                  soluções financeiras estratégicas para ajudar empresas e
                  indivíduos a atingirem seus objetivos de forma segura e
                  sustentável. Com mais de 10 anos de experiência no mercado,
                  nossa missão é proporcionar um atendimento personalizado,
                  utilizando conhecimento técnico e uma abordagem prática para
                  garantir que cada cliente faça as melhores escolhas
                  financeiras.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
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
                  Acreditamos que uma boa gestão financeira é a base do sucesso,
                  seja no âmbito pessoal ou empresarial. Nosso compromisso é
                  oferecer orientações claras e estratégias que possibilitem a
                  maximização dos resultados financeiros e a conquista de metas
                  a longo prazo. Trabalhamos para ser o parceiro de confiança
                  que sua empresa ou você precisa, garantindo que as decisões
                  financeiras sejam tomadas com confiança e segurança.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Conheça nossa equipe
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "Antonio Martinelli",
                role: "Mentor",
                image: "/placeholder.svg?height=400&width=400",
                bio: `Sou um gerente de controladoria e finanças com mais de três anos de experiência em gerenciar e otimizar as atividades financeiras e contábeis de empresas de diferentes setores. Atualmente, trabalho na Mafrical, uma empresa de fabricação de produtos alimentícios, onde planejo e confecciono o orçamento e os planos econômico-financeiros, acompanho e elaboro os relatórios contábeis e de performance, e avalio as oportunidades de mercado.

Minha missão é fornecer insights valiosos e estratégicos para a tomada de decisões assertivas e alinhadas com os objetivos da empresa. Para isso, utilizo ferramentas de business intelligence, como Power BI, e aplico os conhecimentos adquiridos na minha pós-graduação em finanças pela Fundace FEARP USP. Tenho forte habilidade em liderança, trabalho em equipe e comunicação eficaz, e sou apaixonado por melhorar os processos, maximizar os resultados e contribuir para o crescimento da empresa.`,
              },
              {
                name: "Daniel Pinciara",
                role: "Mentor",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Sou especialista em marketing digital e inovação com mais de cinco anos de experiência ajudando empresas a construir uma presença online sólida e atrair novos clientes. Minha jornada inclui criar estratégias de marketing orientadas a resultados e implementar campanhas criativas que impulsionaram o crescimento de startups e grandes corporações. Atualmente, atuo como consultora independente, onde auxilio empresas em suas jornadas digitais, desde a definição da marca até o crescimento sustentável. Sou formada em comunicação social com ênfase em marketing e possuo certificações em ferramentas como Google Ads, HubSpot e Meta Ads. Minha missão é ajudar empresas a atingir seu público de forma eficiente, otimizando investimentos e criando conexões reais. Com habilidades em storytelling, análise de dados e gestão de equipes, tenho uma visão estratégica que combina criatividade e desempenho para entregar resultados acima das expectativas.",
              },
            ].map((founder, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <CardHeader>
                  <CardTitle>{founder.name}</CardTitle>
                  <CardDescription>{founder.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{founder.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
