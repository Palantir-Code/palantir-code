import { motion } from "framer-motion";
import { GitBranch, FileCode, RefreshCw, Copy, Terminal, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";

const features = [
  {
    icon: Terminal,
    title: "plane init",
    description: "Initialize a project scaffold instantly with CLI",
  },
  {
    icon: FileCode,
    title: "YAML Structure",
    description: "Define workflows, states, labels, types & custom fields as code",
  },
  {
    icon: RefreshCw,
    title: "Bi-directional Sync",
    description: "plane schema pull/push & plane pull/push for seamless sync",
  },
  {
    icon: Copy,
    title: "plane clone",
    description: "Clone and replicate project structure across workspaces",
  },
];

const PlaneCompose = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 h-[400px] w-[400px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GitBranch className="h-4 w-4" />
              <span>Projects-as-Code</span>
            </motion.div>
            
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
              Plane for <span className="text-gradient">DevOps</span>
            </h2>
            
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Introducing <span className="font-semibold text-primary">Plane Compose</span>, the implementation layer of Projects-as-Code. 
              A model where a project's structure becomes a first-class artifact: defined in code, versioned in Git, and reviewed like any other change.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video Side */}
          <ScrollReveal delay={0.2}>
            <motion.div 
              className="relative order-2 lg:order-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated frame container */}
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary via-primary/50 to-primary/20">
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-purple-400 to-primary opacity-75 blur-sm"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                />
                
                {/* Corner accents */}
                <motion.div
                  className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />

                {/* Title header bar */}
                <div className="relative bg-card rounded-t-xl border-b border-border/50">
                  <div className="flex items-center gap-3 px-4 py-3">
                    {/* Window controls */}
                    <div className="flex gap-1.5">
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-red-500"
                        whileHover={{ scale: 1.2 }}
                      />
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-yellow-500"
                        whileHover={{ scale: 1.2 }}
                      />
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-green-500"
                        whileHover={{ scale: 1.2 }}
                      />
                    </div>
                    
                    {/* Title */}
                    <div className="flex-1 text-center">
                      <span className="text-sm font-medium text-foreground">
                        <span className="text-primary font-semibold">Plane Compose</span>
                        <span className="text-muted-foreground hidden sm:inline"> — Demo</span>
                      </span>
                    </div>
                    
                    {/* Live indicator */}
                    <motion.div 
                      className="flex items-center gap-1.5"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-xs text-muted-foreground hidden sm:inline">LIVE</span>
                    </motion.div>
                  </div>
                </div>

                {/* Video container */}
                <div className="relative bg-card rounded-b-xl overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/rzpc1UVW1Xw?autoplay=1&mute=1&loop=1&playlist=rzpc1UVW1Xw&controls=0&showinfo=0&rel=0&modestbranding=1"
                      title="Plane Compose Demo Video"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  
                  {/* Scan line effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-primary/5 to-transparent"
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ height: "50%" }}
                  />
                </div>
              </div>
              
              {/* Decorative glow */}
              <div className="absolute -inset-8 -z-10 bg-primary/20 blur-3xl rounded-full opacity-40" />
            </motion.div>
          </ScrollReveal>

          {/* Features Side */}
          <div className="order-1 lg:order-2">
            <ScrollReveal delay={0.3}>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Bring Git-style discipline to project management
              </h3>
              <p className="text-muted-foreground mb-8">
                Version your project configuration, review changes through PRs, and standardize structures across your organization.
              </p>
            </ScrollReveal>

            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
                  whileHover={{ x: 8 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground font-mono text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.5}>
              <div className="mt-8">
                <Button asChild size="lg" className="group">
                  <a href="https://plane.so/plane-compose" target="_blank" rel="noopener noreferrer">
                    Learn about Plane Compose
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaneCompose;
