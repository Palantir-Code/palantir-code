import { Award, GraduationCap, Globe, Lock, Plane } from "lucide-react";
import { motion } from "framer-motion";
import { WHY_US } from "@/lib/constants";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="h-6 w-6" />,
  GraduationCap: <GraduationCap className="h-6 w-6" />,
  Globe: <Globe className="h-6 w-6" />,
  Lock: <Lock className="h-6 w-6" />,
};

const WhyUs = () => {
  return (
    <section className="bg-muted/30 py-12 lg:py-16 relative overflow-hidden">
      {/* Animated decorative planes */}
      <motion.div
        className="absolute top-20 right-10 text-primary/10"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane size={60} className="transform -rotate-45" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-10 text-primary/10"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Plane size={40} className="transform rotate-45" />
      </motion.div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose{" "}
            <span className="text-gradient">PALANTIR-CODE</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            As Spain's first certified Plane partner, we bring unmatched expertise and dedication to every project.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.15}>
          {WHY_US.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="text-center"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Icon */}
                <motion.div 
                  className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    boxShadow: "0 10px 30px rgba(0,102,179,0.4)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {iconMap[item.icon]}
                </motion.div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyUs;
