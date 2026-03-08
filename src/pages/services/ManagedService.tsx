import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Check, Monitor, Wrench, HeadphonesIcon, BarChart3, Clock, Server, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import MatrixRain from "@/components/animations/MatrixRain";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TypewriterTitle from "@/components/animations/TypewriterTitle";
import { Button } from "@/components/ui/button";
import sphereManaged from "@/assets/services/sphere-managed.png";

const ManagedService = () => {
  const { t } = useTranslation();

  const pillars = [
    { icon: Monitor, titleKey: "serviceManaged.pillar1Title", descKey: "serviceManaged.pillar1Desc" },
    { icon: Wrench, titleKey: "serviceManaged.pillar2Title", descKey: "serviceManaged.pillar2Desc" },
    { icon: HeadphonesIcon, titleKey: "serviceManaged.pillar3Title", descKey: "serviceManaged.pillar3Desc" },
    { icon: BarChart3, titleKey: "serviceManaged.pillar4Title", descKey: "serviceManaged.pillar4Desc" },
  ];

  const slaItems = [
    { metric: "99.9%", label: t("serviceManaged.sla1") },
    { metric: "< 15min", label: t("serviceManaged.sla2") },
    { metric: "24/7", label: t("serviceManaged.sla3") },
    { metric: "Quarterly", label: t("serviceManaged.sla4") },
  ];

  const includes = [
    "serviceManaged.inc1", "serviceManaged.inc2", "serviceManaged.inc3",
    "serviceManaged.inc4", "serviceManaged.inc5", "serviceManaged.inc6",
  ];

  return (
    <Layout>
      <SEO
        title={t("serviceManaged.seoTitle")}
        description={t("serviceManaged.seoDesc")}
        canonical="/services/managed"
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary/5 via-background to-background py-20 overflow-hidden">
        <MatrixRain columnCount={20} opacity={0.2} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-6 mx-auto">
                <Shield className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {t("serviceManaged.title")}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">{t("serviceManaged.heroDesc")}</p>
              <Button asChild size="lg" className="mt-8 gap-2">
                <Link to="/contact">{t("serviceManaged.cta")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <motion.div
                className="mt-10 mx-auto w-48 h-48 md:w-64 md:h-64"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={sphereManaged} alt="Managed services crystal sphere" className="w-full h-full object-contain rounded-full drop-shadow-[0_0_30px_hsl(280,70%,50%,0.4)]" />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SLA Stats */}
      <section className="py-12 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {slaItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{item.metric}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">{t("serviceManaged.pillarsBadge")}</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("serviceManaged.pillarsTitle")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="group rounded-xl border border-border bg-card p-8 h-full transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{t(pillar.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(pillar.descKey)}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("serviceManaged.includesTitle")}
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {includes.map((key, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{t(key)}</span>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("serviceManaged.ctaTitle")}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t("serviceManaged.ctaDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">{t("serviceManaged.cta")} <ArrowRight className="h-4 w-4" /></Link>
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

export default ManagedService;
