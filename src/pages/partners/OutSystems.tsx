import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import {
  Zap,
  Shield,
  Cpu,
  Layers,
  Users,
  BarChart3,
  Workflow,
  Globe,
  ArrowRight,
  CheckCircle2,
  Bot,
  Rocket,
} from "lucide-react";

const outsystemsJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "OutSystems - AI-Powered Low-Code Platform | PALANTIR-CODE",
  description:
    "OutSystems: plataforma de desarrollo low-code con IA para construir aplicaciones empresariales. Implementación experta por PALANTIR-CODE.",
  url: "https://www.palantircode.com/experts/outsystems",
};

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Development",
    description:
      "Acelera el desarrollo con IA integrada que genera código, sugiere componentes y automatiza tareas repetitivas.",
  },
  {
    icon: Bot,
    title: "Agentic AI Workbench",
    description:
      "Crea y orquesta agentes de IA personalizados que automatizan operaciones, mejoran experiencias y generan ingresos.",
  },
  {
    icon: Layers,
    title: "Full-Stack Visual Development",
    description:
      "Desarrolla aplicaciones completas con un entorno visual que integra frontend, backend, lógica de negocio y datos.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Seguridad de nivel empresarial integrada desde el diseño, con cumplimiento normativo, auditoría y gobernanza.",
  },
  {
    icon: Workflow,
    title: "Automatización de Procesos",
    description:
      "Automatiza workflows complejos e integra con sistemas core existentes sin las limitaciones de soluciones pre-empaquetadas.",
  },
  {
    icon: Globe,
    title: "Multi-Cloud Deployment",
    description:
      "Despliega en cualquier cloud o on-premises con un solo clic. Escala desde piloto a producción sin fricciones.",
  },
];

const useCases = [
  {
    title: "Eficiencia Operativa",
    description:
      "Automatiza procesos internos complejos con apps y agentes IA que se integran con tus sistemas y datos existentes.",
    icon: BarChart3,
  },
  {
    title: "Experiencias Digitales",
    description:
      "Reimagina experiencias de clientes y empleados con aplicaciones personalizadas que fomentan la colaboración humano-IA.",
    icon: Users,
  },
  {
    title: "Innovación y Revenue",
    description:
      "Acelera el ciclo de innovación y desbloquea nuevos ingresos con aplicaciones diferenciadas y sistemas agénticos.",
    icon: Rocket,
  },
];

const stats = [
  { value: "87%", label: "Reducción tiempo de desarrollo" },
  { value: "3x", label: "Velocidad de entrega" },
  { value: "+1500", label: "Clientes enterprise" },
  { value: "#1", label: "Líder en Gartner & Forrester" },
];

const trustedBy = [
  "HEINEKEN",
  "Bosch",
  "Western Union",
  "Zurich Insurance",
  "Syngenta",
  "Toyota",
];

const OutSystemsPage = () => {
  return (
    <Layout>
      <SEO
        title="OutSystems | AI-Powered Low-Code Platform"
        description="OutSystems: plataforma de desarrollo low-code con IA para construir aplicaciones empresariales. Implementación experta por PALANTIR-CODE."
        canonical="/experts/outsystems"
        jsonLd={outsystemsJsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              OutSystems Expert Partner
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Construye tu futuro{" "}
              <span className="text-primary">agéntico</span> con OutSystems
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Plataforma de desarrollo con IA. Unificada. Ágil. Probada en
              Enterprise. Construye, ejecuta y gobierna apps y agentes en una
              sola plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Solicitar Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://www.outsystems.com/low-code-platform/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explorar Plataforma
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Confianza de empresas líderes a nivel mundial
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {trustedBy.map((company) => (
              <span
                key={company}
                className="text-sm font-semibold text-muted-foreground/60 uppercase tracking-wider"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Una plataforma, infinitas posibilidades
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                OutSystems combina desarrollo visual, IA y gobernanza
                enterprise para entregar aplicaciones de misión crítica.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-border/60 bg-card p-6 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Casos de uso Enterprise
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Resultados transformacionales con soluciones personalizadas de
                IA y agentes que cumplen tus especificaciones exactas.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border/60 bg-card p-8 text-center"
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mb-5">
                  <useCase.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PALANTIR-CODE */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Por qué implementar OutSystems con{" "}
                  <span className="text-primary">PALANTIR-CODE</span>?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Como expertos en plataformas enterprise, maximizamos el
                  potencial de OutSystems para tu organización con
                  implementaciones ágiles, migración y soporte continuo.
                </p>
                <ul className="space-y-4">
                  {[
                    "Implementación acelerada con metodología probada",
                    "Migración desde sistemas legacy sin disrupciones",
                    "Integración con tu ecosistema tecnológico existente",
                    "Formación y capacitación de equipos internos",
                    "Soporte y mantenimiento continuo post-implementación",
                    "Desarrollo de agentes IA personalizados",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 to-primary/10 p-8 lg:p-10">
                <Zap className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Innovación a velocidad de IA
                </h3>
                <p className="text-muted-foreground mb-6">
                  Con OutSystems y PALANTIR-CODE, tu organización puede
                  innovar sin comprometer calidad ni control. Desde la
                  automatización de operaciones hasta la creación de
                  experiencias digitales diferenciadas.
                </p>
                <Button asChild>
                  <Link to="/contact">
                    Hablemos de tu proyecto{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para transformar tu negocio?
              </h2>
              <p className="text-muted-foreground mb-8">
                Descubre cómo OutSystems puede acelerar tu transformación
                digital. Agenda una demo personalizada con nuestro equipo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Solicitar Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">Ver Nuestros Servicios</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default OutSystemsPage;
