import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Plane } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-primary py-12 lg:py-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[200px] w-[200px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <motion.div className="absolute top-10 left-0 text-white/10"
        animate={{ x: ["0vw", "100vw"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
        <Plane size={40} className="transform -rotate-12" />
      </motion.div>
      <motion.div className="absolute bottom-10 right-0 text-white/10"
        animate={{ x: ["0vw", "-100vw"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 3 }}>
        <Plane size={30} className="transform rotate-[168deg]" />
      </motion.div>
      <motion.div className="absolute top-1/2 left-0 text-white/5"
        animate={{ x: ["0vw", "100vw"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 7 }}>
        <Plane size={60} className="transform -rotate-12" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <motion.h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {t("cta.title")}
          </motion.h2>
          <motion.p className="mt-6 text-lg text-primary-foreground/80"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            {t("cta.description")}
          </motion.p>

          <motion.div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg" variant="secondary" className="min-w-[200px] bg-white text-black hover:bg-white/90">
                <Link to="/contact">
                  <Calendar className="mr-2 h-4 w-4" />
                  {t("cta.scheduleDemo")}
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg" variant="outline" className="min-w-[200px] border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                <Link to="/contact">
                  {t("cta.contactUs")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
