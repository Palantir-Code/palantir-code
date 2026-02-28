import { Link } from "react-router-dom";
import { ArrowRightLeft, Wrench, Code, Shield, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import FloatingClouds from "@/components/animations/FloatingClouds";

const iconMap: Record<string, React.ReactNode> = {
  ArrowRightLeft: <ArrowRightLeft className="h-6 w-6" />,
  Wrench: <Wrench className="h-6 w-6" />,
  Code: <Code className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
};

const serviceKeys = [
  { id: "migration", icon: "ArrowRightLeft", titleKey: "services.migration", descKey: "services.migrationDesc", featureKeys: ["services.features.zeroDataLoss", "services.features.userTraining", "services.features.postMigration", "services.features.customFieldMapping"] },
  { id: "implementation", icon: "Wrench", titleKey: "services.implementation", descKey: "services.implementationDesc", featureKeys: ["services.features.bestPractices", "services.features.customWorkflow", "services.features.governance", "services.features.performance"] },
  { id: "development", icon: "Code", titleKey: "services.development", descKey: "services.developmentDesc", featureKeys: ["services.features.apiIntegrations", "services.features.customAutomations", "services.features.thirdParty", "services.features.workflowExtensions"] },
  { id: "managed", icon: "Shield", titleKey: "services.managed", descKey: "services.managedDesc", featureKeys: ["services.features.monitoring247", "services.features.proactiveMaintenance", "services.features.userSupport", "services.features.healthChecks"] },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      <FloatingClouds count={3} className="opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("services.description")}
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2" staggerDelay={0.2}>
          {serviceKeys.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                id={service.id}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8"
                whileHover={{ borderColor: "hsl(var(--primary) / 0.5)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
                  <motion.div
                    className="mb-4 inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary lg:mb-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {iconMap[service.icon]}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-foreground">{t(service.titleKey)}</h3>
                    <p className="mb-4 text-muted-foreground">{t(service.descKey)}</p>
                    <ul className="space-y-2">
                      {service.featureKeys.map((fk, fi) => (
                        <motion.li
                          key={fi}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: fi * 0.1 + 0.3 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div whileHover={{ scale: 1.2 }}>
                            <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          </motion.div>
                          {t(fk)}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.5} className="mt-12 text-center">
          <Button asChild size="lg" className="group">
            <Link to="/services">
              {t("services.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
