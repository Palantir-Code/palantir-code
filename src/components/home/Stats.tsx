import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { label: t("stats.firstPartner"), value: "#1" },
    { label: t("stats.certified"), value: "100%" },
    { label: t("stats.enterpriseReady"), value: "✓" },
    { label: t("stats.supportAvailable"), value: "24/7" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="border-y border-border bg-muted/30 py-12 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative">
          {/* Animated connecting lines - district0x style */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            style={{ zIndex: 0 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            <motion.line
              x1="12.5%" y1="50%" x2="87.5%" y2="50%"
              stroke="url(#lineGradient)" strokeWidth="2" filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isVisible ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={i} r="4" fill="hsl(var(--primary))" filter="url(#glow)"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: [0, 1, 1, 0], cx: ["12.5%", "87.5%"] } : {}}
                transition={{ duration: 3, delay: i * 1, repeat: Infinity, ease: "linear" }}
                cy="50%"
              />
            ))}
          </svg>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center justify-center text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.08 }}
              >
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300" />
                  <motion.div
                    className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-primary/40"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>
                <motion.div
                  className="relative z-10 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  className="relative z-10 mt-2 text-sm text-muted-foreground sm:text-base max-w-[120px]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
