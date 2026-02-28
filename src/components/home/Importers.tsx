import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import jiraVsPlane from "@/assets/jira-vs-plane-original.png";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FlightPath from "@/components/animations/FlightPath";

const tools = ["Jira", "Linear", "ClickUp", "Asana"];

const Importers = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 lg:py-16 bg-muted/30 relative overflow-hidden">
      <FlightPath className="opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <motion.span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4" whileHover={{ scale: 1.05 }}>
              {t("importers.badge")}
            </motion.span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t("importers.title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">{t("importers.description")}</p>
            
            <ul className="mt-6 space-y-3">
              {tools.map((tool, index) => (
                <motion.li key={tool} className="flex items-center gap-3 text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: index * 0.1 + 0.3 }} whileHover={{ x: 5 }}>
                  <motion.span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10"
                    whileHover={{ scale: 1.2, backgroundColor: "hsl(var(--primary))" }}>
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.span>
                  {t("importers.migrateFrom", { tool })}
                </motion.li>
              ))}
            </ul>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
              <Button asChild size="lg" className="mt-8 group">
                <Link to="/services#migration">
                  {t("importers.cta")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="order-1 lg:order-2 flex justify-center">
            <motion.div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card p-4"
              whileHover={{ scale: 1.02, rotateY: 5 }} transition={{ type: "spring", stiffness: 200 }}>
              <img src={jiraVsPlane} alt="Migrate from Jira to Plane" className="w-full max-w-md rounded-xl" />
              <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2"
                initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                <motion.span className="inline-block rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg"
                  animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                  {t("importers.seamless")}
                </motion.span>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Importers;
