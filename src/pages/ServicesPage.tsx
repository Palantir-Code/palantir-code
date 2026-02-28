import { Link } from "react-router-dom";
import { ArrowRightLeft, Wrench, Code, Shield, ArrowRight, Check, Clock, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import MatrixRain from "@/components/animations/MatrixRain";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  ArrowRightLeft: <ArrowRightLeft className="h-8 w-8" />,
  Wrench: <Wrench className="h-8 w-8" />,
  Code: <Code className="h-8 w-8" />,
  Shield: <Shield className="h-8 w-8" />,
};

const serviceDetailKeys: Record<string, { benefits: string[]; process: string[] }> = {
  migration: {
    benefits: ["servicesPage.benefits.migrateFrom", "servicesPage.benefits.completeData", "servicesPage.benefits.customField", "servicesPage.benefits.userTraining"],
    process: ["servicesPage.process.assessment", "servicesPage.process.dataMapping", "servicesPage.process.migrationExecution", "servicesPage.process.validation", "servicesPage.process.trainingHandover"],
  },
  implementation: {
    benefits: ["servicesPage.benefits.bestPractices", "servicesPage.benefits.customWorkflow", "servicesPage.benefits.userPermissions", "servicesPage.benefits.performanceOpt"],
    process: ["servicesPage.process.requirements", "servicesPage.process.architectureDesign", "servicesPage.process.configSetup", "servicesPage.process.testingRefinement", "servicesPage.process.goLive"],
  },
  development: {
    benefits: ["servicesPage.benefits.customApi", "servicesPage.benefits.workflowAutomation", "servicesPage.benefits.thirdPartyConnectors", "servicesPage.benefits.customReporting"],
    process: ["servicesPage.process.technicalDiscovery", "servicesPage.process.solutionArchitecture", "servicesPage.process.devTesting", "servicesPage.process.deployment", "servicesPage.process.docTraining"],
  },
  managed: {
    benefits: ["servicesPage.benefits.monitoring247", "servicesPage.benefits.proactiveMaintenance", "servicesPage.benefits.userSupportHelpdesk", "servicesPage.benefits.regularHealthChecks"],
    process: ["servicesPage.process.onboarding", "servicesPage.process.monitoringConfig", "servicesPage.process.slaDefinition", "servicesPage.process.ongoingSupport", "servicesPage.process.quarterlyReviews"],
  },
};

const serviceTitleKeys: Record<string, string> = {
  migration: "services.migration", implementation: "services.implementation",
  development: "services.development", managed: "services.managed",
};
const serviceDescKeys: Record<string, string> = {
  migration: "services.migrationDesc", implementation: "services.implementationDesc",
  development: "services.developmentDesc", managed: "services.managedDesc",
};

const servicesJsonLd = {
  "@context": "https://schema.org", "@type": "Service", "serviceType": "Software Consulting",
  "provider": { "@type": "Organization", "name": "PALANTIR-CODE" }, "areaServed": "Spain",
};

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title="Services" description="Expert Plane consulting services." canonical="/services" jsonLd={servicesJsonLd} />
      
      <section className="relative bg-gradient-to-b from-primary/5 via-background to-background py-20 overflow-hidden">
        <MatrixRain columnCount={20} opacity={0.25} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{t("servicesPage.title")}</h1>
            <p className="mt-6 text-lg text-muted-foreground">{t("servicesPage.heroDesc")}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-12">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground flex-shrink-0">
                    {iconMap[service.icon]}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{t(serviceTitleKeys[service.id])}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">{t(serviceDescKeys[service.id])}</p>
                  </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-card p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />{t("servicesPage.whatsIncluded")}
                    </h3>
                    <ul className="space-y-4">
                      {serviceDetailKeys[service.id]?.benefits.map((bk, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{t(bk)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />{t("servicesPage.ourProcess")}
                    </h3>
                    <ol className="space-y-4">
                      {serviceDetailKeys[service.id]?.process.map((pk, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">{i + 1}</span>
                          <span className="text-muted-foreground">{t(pk)}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild>
                    <Link to="/contact">
                      {t("servicesPage.getStartedWith", { service: t(serviceTitleKeys[service.id]).split(" ")[0] })}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div><div className="text-4xl font-bold text-primary mb-2">#1</div><div className="text-muted-foreground">{t("servicesPage.partnerInSpain")}</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">100%</div><div className="text-muted-foreground">{t("servicesPage.successRate")}</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">24/7</div><div className="text-muted-foreground">{t("servicesPage.supportAvailable")}</div></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("servicesPage.readyTitle")}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t("servicesPage.readyDesc")}</p>
            <Button asChild size="lg"><Link to="/contact">{t("servicesPage.scheduleConsultation")}</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
