import { STATS } from "@/lib/constants";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const Stats = () => {
  return (
    <section className="border-y border-border bg-muted/30 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <motion.div
                className="flex flex-col items-center justify-center text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="mt-2 text-sm text-muted-foreground sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
