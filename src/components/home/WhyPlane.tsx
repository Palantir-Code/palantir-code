import { Layout, FileText, Sparkles, Cloud } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { WHY_PLANE } from "@/lib/constants";
import planeLogo from "@/assets/plane-logo-transparent.png";
import aiHero from "@/assets/ai-hero.avif";
import wikiHero from "@/assets/wiki-hero.avif";
import projectsHero from "@/assets/projects-hero.avif";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import FloatingPlanes from "@/components/animations/FloatingPlanes";

const carouselImages = [
  { src: aiHero, alt: "AI Features" },
  { src: wikiHero, alt: "Wiki Features" },
  { src: projectsHero, alt: "Projects Features" },
];

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="h-6 w-6" />,
  FileText: <FileText className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
  Cloud: <Cloud className="h-6 w-6" />,
};

// Matrix stream component for connections between cards
const MatrixStream = ({ delay = 0, left = "50%" }: { delay?: number; left?: string }) => {
  const chars = "アイウエオカキクケコ0123456789";
  const getChar = () => chars[Math.floor(Math.random() * chars.length)];
  
  return (
    <motion.div
      className="absolute flex flex-col items-center text-primary font-mono text-[10px] z-0"
      style={{ left, top: 0 }}
      initial={{ y: "-20px", opacity: 0 }}
      animate={{ 
        y: "100%", 
        opacity: [0, 0.8, 0.8, 0],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[...Array(6)].map((_, i) => (
        <span key={i} className="terminal-glow" style={{ opacity: 1 - i * 0.15 }}>
          {getChar()}
        </span>
      ))}
    </motion.div>
  );
};

const WhyPlane = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      <FloatingPlanes count={3} className="opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <motion.img 
              src={planeLogo} 
              alt="Plane" 
              className="h-16 w-auto terminal-logo-bright"
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

        {/* Three Separate Images */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {carouselImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-primary/30 shadow-lg group-hover:border-primary/60 transition-all">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {/* Terminal overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 scanlines pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity" />
                
                {/* Label */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full text-xs font-medium text-primary border border-primary/30">
                    {image.alt}
                  </span>
                </div>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute -inset-2 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Features Grid with Matrix connections */}
        <div className="mt-16 relative">
          {/* Matrix streams between cards - visible on lg screens */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Streams between card 1 and 2 */}
            <div className="absolute" style={{ left: "22%", top: "20%", height: "60%" }}>
              <MatrixStream delay={0} left="0" />
              <MatrixStream delay={0.7} left="8px" />
              <MatrixStream delay={1.4} left="16px" />
            </div>
            {/* Streams between card 2 and 3 */}
            <div className="absolute" style={{ left: "47%", top: "15%", height: "70%" }}>
              <MatrixStream delay={0.3} left="0" />
              <MatrixStream delay={1} left="8px" />
              <MatrixStream delay={1.7} left="16px" />
            </div>
            {/* Streams between card 3 and 4 */}
            <div className="absolute" style={{ left: "72%", top: "25%", height: "50%" }}>
              <MatrixStream delay={0.5} left="0" />
              <MatrixStream delay={1.2} left="8px" />
              <MatrixStream delay={1.9} left="16px" />
            </div>
          </div>

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10" staggerDelay={0.15}>
            {WHY_PLANE.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg backdrop-blur-sm"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Subtle glow effect on card */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Icon */}
                  <motion.div 
                    className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {iconMap[feature.icon]}
                  </motion.div>

                  {/* Content */}
                  <h3 className="relative mb-2 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="relative text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

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
