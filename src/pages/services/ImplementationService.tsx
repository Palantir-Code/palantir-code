import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wrench, ArrowRight, Check, Clock, Settings, Users, BarChart3, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import MatrixRain from "@/components/animations/MatrixRain";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import sphereImplementation from "@/assets/services/sphere-implementation.png";

const ImplementationService = () => {
  const { t } = useTranslation();

  const processSteps = [
    { icon: Target, titleKey: "serviceImplementation.step1Title", descKey: "serviceImplementation.step1Desc" },
    { icon: Settings, titleKey: "serviceImplementation.step2Title", descKey: "serviceImplementation.step2Desc" },
    { icon: Wrench, titleKey: "serviceImplementation.step3Title", descKey: "serviceImplementation.step3Desc" },
    { icon: Users, titleKey: "serviceImplementation.step4Title", descKey: "serviceImplementation.step4Desc" },
    { icon: BarChart3, titleKey: "serviceImplementation.step5Title", descKey: "serviceImplementation.step5Desc" },
  ];

  const includes = [
    "serviceImplementation.inc1", "serviceImplementation.inc2", "serviceImplementation.inc3",
    "serviceImplementation.inc4", "serviceImplementation.inc5", "serviceImplementation.inc6",
    "serviceImplementation.inc7", "serviceImplementation.inc8",
  ];

  return (
    <Layout>
      <SEO
        title={t("serviceImplementation.seoTitle")}
        description={t("serviceImplementation.seoDesc")}
        canonical="/services/implementation"
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary/5 via-background to-background py-20 overflow-hidden">
        <MatrixRain columnCount={20} opacity={0.2} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-6 mx-auto">
                <Wrench className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {t("serviceImplementation.title")}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">{t("serviceImplementation.heroDesc")}</p>
              <Button asChild size="lg" className="mt-8 gap-2">
                <Link to="/contact">{t("serviceImplementation.cta")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <motion.div
                className="mt-10 mx-auto w-48 h-48 md:w-64 md:h-64"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={sphereImplementation} alt="Implementation crystal sphere" className="w-full h-full object-contain drop-shadow-[0_0_30px_hsl(280,70%,50%,0.4)]" />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">{t("serviceImplementation.processBadge")}</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("serviceImplementation.processTitle")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            <div className="space-y-12">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isLeft = index % 2 === 0;
                return (
                  <ScrollReveal key={index} delay={index * 0.1} direction={isLeft ? "left" : "right"}>
                    <div className={`flex flex-col lg:flex-row items-center gap-8 ${isLeft ? "" : "lg:flex-row-reverse"}`}>
                      <div className={`flex-1 ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                        <div className={`rounded-xl border border-border bg-card p-6 ${isLeft ? "lg:ml-auto lg:mr-8" : "lg:mr-auto lg:ml-8"} max-w-lg`}>
                          <h3 className="text-lg font-semibold text-foreground mb-2">{t(step.titleKey)}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
                        </div>
                      </div>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground z-10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1" />
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("serviceImplementation.includesTitle")}
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
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
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("serviceImplementation.ctaTitle")}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t("serviceImplementation.ctaDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">{t("serviceImplementation.cta")} <ArrowRight className="h-4 w-4" /></Link>
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

export default ImplementationService;
