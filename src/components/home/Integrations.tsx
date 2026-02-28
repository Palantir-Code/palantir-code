import { Link } from "react-router-dom";
import { ArrowRight, Plane } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingPlanes from "@/components/animations/FloatingPlanes";

import integration1 from "@/assets/integrations/github.avif";
import integration2 from "@/assets/integrations/integration-2.avif";
import integration3 from "@/assets/integrations/integration-3.avif";
import integration5 from "@/assets/integrations/jira.avif";
import integration6 from "@/assets/integrations/integration-6.avif";
import integration7 from "@/assets/integrations/vscode.avif";
import integration72 from "@/assets/integrations/drawio.avif";
import integration8 from "@/assets/integrations/integration-8.avif";
import integration9 from "@/assets/integrations/integration-9.avif";
import integration10 from "@/assets/integrations/integration-10.avif";

const integrations = [
  { name: "Integration 1", image: integration1 },
  { name: "Integration 2", image: integration2 },
  { name: "Integration 3", image: integration3 },
  { name: "Integration 5", image: integration5 },
  { name: "Integration 6", image: integration6 },
  { name: "Integration 7", image: integration7 },
  { name: "Integration 7-2", image: integration72 },
  { name: "Integration 8", image: integration8 },
  { name: "Integration 9", image: integration9 },
  { name: "Integration 10", image: integration10 },
];

const Integrations = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      <FloatingPlanes count={4} className="opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <ScrollReveal direction="left" className="flex justify-center">
            <div className="grid grid-cols-5 gap-3">
              {integrations.map((integration, index) => (
                <motion.div key={index}
                  className="group flex h-16 w-16 items-center justify-center rounded-xl bg-card border-2 border-border shadow-lg overflow-hidden"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.15, y: -8, boxShadow: "0 20px 40px rgba(0,255,0,0.15)", borderColor: "hsl(var(--primary))" }}>
                  <img src={integration.image} alt={integration.name} className="h-10 w-10 object-contain transition-transform group-hover:scale-110" />
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <motion.span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4" whileHover={{ scale: 1.05 }}>
              {t("integrations.badge")}
            </motion.span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t("integrations.title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">{t("integrations.description")}</p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <Button asChild size="lg" className="mt-8 group">
                <Link to="/services#development">
                  {t("integrations.cta")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
      
      <motion.div className="absolute bottom-10 left-0 text-primary/20"
        animate={{ x: ["0%", "100vw"], y: [0, -20, 0, 20, 0] }}
        transition={{ x: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}>
        <Plane size={32} className="transform -rotate-12" />
      </motion.div>
    </section>
  );
};

export default Integrations;
