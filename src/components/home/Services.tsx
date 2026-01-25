import { Link } from "react-router-dom";
import {
  ArrowRightLeft,
  Wrench,
  Code,
  Shield,
  ArrowRight,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
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

const Services = () => {
  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      <FloatingClouds count={3} className="opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Expert Consulting Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From migration to managed services, we provide end-to-end support for your Plane journey.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2" staggerDelay={0.2}>
          {SERVICES.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                id={service.id}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8"
                whileHover={{ 
                  borderColor: "hsl(var(--primary) / 0.5)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
                  {/* Icon */}
                  <motion.div 
                    className="mb-4 inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary lg:mb-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {iconMap[service.icon]}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1 + 0.3 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                          >
                            <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          </motion.div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Hover gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal delay={0.5} className="mt-12 text-center">
          <Button asChild size="lg" className="group">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
