import { Layout, FileText, Sparkles, Cloud, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import planeLogo from "@/assets/plane-logo-transparent.png";
import aiHero from "@/assets/ai-hero.avif";
import wikiHero from "@/assets/wiki-hero.avif";
import projectsHero from "@/assets/projects-hero.avif";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import FloatingPlanes from "@/components/animations/FloatingPlanes";
import MatrixRain from "@/components/animations/MatrixRain";

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

const featureKeys = [
  { icon: "Layout", titleKey: "whyPlane.projects", descKey: "whyPlane.projectsDesc" },
  { icon: "FileText", titleKey: "whyPlane.wiki", descKey: "whyPlane.wikiDesc" },
  { icon: "Sparkles", titleKey: "whyPlane.ai", descKey: "whyPlane.aiDesc" },
  { icon: "Cloud", titleKey: "whyPlane.deployment", descKey: "whyPlane.deploymentDesc" },
];

const MatrixStream = ({ delay = 0, left = "50%" }: { delay?: number; left?: string }) => {
  const chars = "アイウエオカキクケコ0123456789";
  const getChar = () => chars[Math.floor(Math.random() * chars.length)];
  return (
    <motion.div className="absolute flex flex-col items-center text-primary font-mono text-[10px] z-0" style={{ left, top: 0 }}
      initial={{ y: "-20px", opacity: 0 }}
      animate={{ y: "100%", opacity: [0, 0.8, 0.8, 0] }}
      transition={{ duration: 2, delay, repeat: Infinity, ease: "linear" }}>
      {[...Array(6)].map((_, i) => (
        <span key={i} className="terminal-glow" style={{ opacity: 1 - i * 0.15 }}>{getChar()}</span>
      ))}
    </motion.div>
  );
};

const WhyPlane = () => {
  const { t } = useTranslation();
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      <MatrixRain columnCount={25} opacity={0.3} />
      <FloatingPlanes count={3} className="opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Pyramid Background */}
        <div className="absolute inset-x-0 top-0 h-[600px] md:h-[700px] pointer-events-none overflow-visible">
          
          {/* Dark Pyramid Shape */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 top-12 md:top-16 w-full max-w-4xl h-[550px] md:h-[650px]"
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMin slice"
          >
            {/* Pyramid gradient definition */}
            <defs>
              <linearGradient id="pyramidGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="hsl(280 70% 60%)" stopOpacity="0.3" />
                <stop offset="50%" stopColor="hsl(280 70% 40%)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="hsl(240 10% 6%)" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="pyramidEdge" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(280 70% 60%)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(185 80% 55%)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            {/* Main pyramid face */}
            <polygon
              points="400,0 100,600 700,600"
              fill="url(#pyramidGradient)"
            />
            
            {/* Left edge line */}
            <line
              x1="400" y1="0"
              x2="100" y2="600"
              stroke="url(#pyramidEdge)"
              strokeWidth="1.5"
            />
            
            {/* Right edge line */}
            <line
              x1="400" y1="0"
              x2="700" y2="600"
              stroke="url(#pyramidEdge)"
              strokeWidth="1.5"
            />
            
            {/* Horizontal lines for depth */}
            <line x1="175" y1="150" x2="625" y2="150" stroke="hsl(280 70% 60%)" strokeOpacity="0.1" strokeWidth="1" />
            <line x1="150" y1="300" x2="650" y2="300" stroke="hsl(280 70% 60%)" strokeOpacity="0.08" strokeWidth="1" />
            <line x1="125" y1="450" x2="675" y2="450" stroke="hsl(280 70% 60%)" strokeOpacity="0.05" strokeWidth="1" />
          </svg>
          
          {/* Glow at apex */}
          <div className="absolute left-1/2 -translate-x-1/2 top-16 md:top-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <ScrollReveal className="mx-auto max-w-2xl text-center relative z-10 pt-28 md:pt-36">
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
            {t("whyPlane.title")}{" "}
            <span className="text-gradient">{t("whyPlane.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("whyPlane.description")}
          </p>
        </ScrollReveal>

        {/* Three Separate Images */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {carouselImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.03 }}
              onClick={() => setZoomedImage(image)}
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
                
                {/* Zoom indicator */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 bg-card/80 backdrop-blur-sm rounded-full border border-primary/30">
                    <ZoomIn className="w-4 h-4 text-primary" />
                  </div>
                </div>
                
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

        {/* Lightbox/Zoom Modal */}
        <AnimatePresence>
          {zoomedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomedImage(null)}
            >
              {/* Close button */}
              <button
                className="absolute top-6 right-6 p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors z-10"
                onClick={() => setZoomedImage(null)}
              >
                <X className="w-6 h-6 text-foreground" />
              </button>

              {/* Image container */}
              <motion.div
                className="relative max-w-[90vw] max-h-[85vh]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-2xl overflow-hidden border border-primary/40 shadow-2xl">
                  <img
                    src={zoomedImage.src}
                    alt={zoomedImage.alt}
                    className="max-w-full max-h-[85vh] object-contain"
                  />
                  {/* Scanline effect */}
                  <div className="absolute inset-0 scanlines pointer-events-none opacity-20" />
                </div>
                
                {/* Label */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/30">
                    {zoomedImage.alt}
                  </span>
                </div>
              </motion.div>

              {/* Instruction text */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground text-sm">
                {t("whyPlane.clickToClose")}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
            {featureKeys.map((feature, index) => (
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
                    {t(feature.titleKey)}
                  </h3>
                  <p className="relative text-sm text-muted-foreground leading-relaxed">
                    {t(feature.descKey)}
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
            {t("whyPlane.poweredBy")}
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyPlane;
