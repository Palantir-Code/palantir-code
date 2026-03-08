import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightLeft, ArrowRight, Check, Search, Map, FileCheck, Box, MessageSquare, CheckCircle2, Layers, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import MatrixRain from "@/components/animations/MatrixRain";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TypewriterTitle from "@/components/animations/TypewriterTitle";
import { Button } from "@/components/ui/button";
import sphereMigration from "@/assets/services/sphere-migration.png";

const MigrationService = () => {
  const { t } = useTranslation();

  const phases = [
    {
      phase: t("enterprise.migration.phase1Label"),
      title: t("enterprise.migration.phase1Title"),
      desc: t("serviceMigration.phase1Desc"),
      steps: [
        { label: t("enterprise.migration.step1"), icon: Search },
        { label: t("enterprise.migration.step2"), icon: FileCheck },
      ],
    },
    {
      phase: t("enterprise.migration.phase2Label"),
      title: t("enterprise.migration.phase2Title"),
      desc: t("serviceMigration.phase2Desc"),
      steps: [
        { label: t("enterprise.migration.step3"), icon: Map },
        { label: t("enterprise.migration.step4"), icon: Layers },
      ],
    },
    {
      phase: t("enterprise.migration.phase3Label"),
      title: t("enterprise.migration.phase3Title"),
      desc: t("serviceMigration.phase3Desc"),
      steps: [
        { label: t("enterprise.migration.step5"), icon: Box },
        { label: t("enterprise.migration.step6"), icon: MessageSquare },
        { label: t("enterprise.migration.step7"), icon: CheckCircle2 },
      ],
    },
  ];

  const sourceTools = ["Jira", "Linear", "ClickUp", "Asana", "Monday.com", "Trello"];

  const guarantees = [
    t("serviceMigration.guarantee1"),
    t("serviceMigration.guarantee2"),
    t("serviceMigration.guarantee3"),
    t("serviceMigration.guarantee4"),
  ];

  return (
    <Layout>
      <SEO
        title={t("serviceMigration.seoTitle")}
        description={t("serviceMigration.seoDesc")}
        canonical="/services/migration"
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary/5 via-background to-background py-20 overflow-hidden">
        <MatrixRain columnCount={20} opacity={0.2} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-6 mx-auto">
                <ArrowRightLeft className="h-8 w-8" />
              </div>
              <TypewriterTitle text={t("serviceMigration.title")} />
              <p className="mt-6 text-lg text-muted-foreground">{t("serviceMigration.heroDesc")}</p>
              <Button asChild size="lg" className="mt-8 gap-2">
                <Link to="/contact">{t("serviceMigration.cta")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <motion.div
                className="mt-10 mx-auto w-48 h-48 md:w-64 md:h-64"
                animate={{ x: [0, 20, 0, -20, 0], y: [0, -8, 0, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={sphereMigration} alt="Migration crystal sphere" className="w-full h-full object-contain rounded-full drop-shadow-[0_0_30px_hsl(280,70%,50%,0.4)]" />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Source Tools */}
      <section className="py-12 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">
              {t("serviceMigration.migrateFrom")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {sourceTools.map((tool) => (
                <div key={tool} className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground">
                  {tool}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Migration Methodology — 3 Phases */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">{t("enterprise.migration.badge")}</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("enterprise.migration.title")}{" "}
                <span className="text-gradient">{t("enterprise.migration.titleHighlight")}</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("enterprise.migration.description")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {phases.map((phase, phaseIndex) => (
              <ScrollReveal key={phaseIndex} delay={phaseIndex * 0.15} direction="up">
                <div className="relative rounded-xl border border-border bg-card p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {phaseIndex + 1}
                    </div>
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">{phase.phase}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{phase.desc}</p>
                  <div className="space-y-3">
                    {phase.steps.map((step, i) => {
                      const Icon = step.icon;
                      return (
                        <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-4 py-3">
                          <Icon className="h-4 w-4 text-primary shrink-0" />
                          <span className="text-sm text-foreground">{step.label}</span>
                        </div>
                      );
                    })}
                  </div>
                  {phaseIndex < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("serviceMigration.guaranteesTitle")}
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="rounded-xl border border-border bg-card p-6 h-full text-center">
                  <div className="flex h-10 w-10 mx-auto items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Shield className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{g}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("serviceMigration.ctaTitle")}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t("serviceMigration.ctaDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">{t("serviceMigration.cta")} <ArrowRight className="h-4 w-4" /></Link>
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

export default MigrationService;
