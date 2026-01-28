import { Layout, FileText, Sparkles, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import { WHY_PLANE } from "@/lib/constants";
import planeLogo from "@/assets/plane-logo-transparent.png";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import FloatingPlanes from "@/components/animations/FloatingPlanes";

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="h-6 w-6" />,
  FileText: <FileText className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
  Cloud: <Cloud className="h-6 w-6" />,
};

const WhyPlane = () => {
  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      <FloatingPlanes count={3} className="opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <motion.img 
              src={planeLogo} 
              alt="Plane" 
              className="h-10 w-auto terminal-logo-bright"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Teams Choose{" "}
            <span className="text-gradient">Plane</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Plane is the open-source project management platform that gives you everything you need to plan, track, and ship.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.15}>
          {WHY_PLANE.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Icon */}
                <motion.div 
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {iconMap[feature.icon]}
                </motion.div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Plane Logo/Link */}
        <ScrollReveal delay={0.5} className="mt-12 flex items-center justify-center">
          <motion.a
            href="https://plane.so"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-border bg-muted/50 px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={planeLogo} alt="Plane" className="h-5 w-auto terminal-logo-bright" />
            Powered by Plane
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyPlane;
