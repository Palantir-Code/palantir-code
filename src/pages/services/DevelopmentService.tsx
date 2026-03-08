import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, ArrowRight, Check, Plug, Workflow, Database, Bot, Blocks, Terminal } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import MatrixRain from "@/components/animations/MatrixRain";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import sphereDevelopment from "@/assets/services/sphere-development.png";

const DevelopmentService = () => {
  const { t } = useTranslation();

  const capabilities = [
    { icon: Plug, titleKey: "serviceDevelopment.cap1Title", descKey: "serviceDevelopment.cap1Desc" },
    { icon: Workflow, titleKey: "serviceDevelopment.cap2Title", descKey: "serviceDevelopment.cap2Desc" },
    { icon: Database, titleKey: "serviceDevelopment.cap3Title", descKey: "serviceDevelopment.cap3Desc" },
    { icon: Bot, titleKey: "serviceDevelopment.cap4Title", descKey: "serviceDevelopment.cap4Desc" },
    { icon: Blocks, titleKey: "serviceDevelopment.cap5Title", descKey: "serviceDevelopment.cap5Desc" },
    { icon: Terminal, titleKey: "serviceDevelopment.cap6Title", descKey: "serviceDevelopment.cap6Desc" },
  ];

  return (
    <Layout>
      <SEO
        title={t("serviceDevelopment.seoTitle")}
        description={t("serviceDevelopment.seoDesc")}
        canonical="/services/development"
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary/5 via-background to-background py-20 overflow-hidden">
        <MatrixRain columnCount={20} opacity={0.2} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-6 mx-auto">
                <Code className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {t("serviceDevelopment.title")}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">{t("serviceDevelopment.heroDesc")}</p>
              <Button asChild size="lg" className="mt-8 gap-2">
                <Link to="/contact">{t("serviceDevelopment.cta")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">{t("serviceDevelopment.capBadge")}</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("serviceDevelopment.capTitle")}
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t("serviceDevelopment.capDesc")}</p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <ScrollReveal key={index} delay={index * 0.08}>
                  <div className="group rounded-xl border border-border bg-card p-6 h-full transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{t(cap.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(cap.descKey)}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("serviceDevelopment.techTitle")}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-xl border border-border bg-card p-8 max-w-3xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {["REST APIs", "GraphQL", "Webhooks", "PostgreSQL", "Redis", "RabbitMQ", "Kubernetes", "Docker", "Python", "TypeScript", "YAML/CLI", "OAuth 2.0"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2">
                    <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("serviceDevelopment.ctaTitle")}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t("serviceDevelopment.ctaDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">{t("serviceDevelopment.cta")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">{t("serviceMigration.backToServices")}</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default DevelopmentService;
