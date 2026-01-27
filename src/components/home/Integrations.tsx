import { Link } from "react-router-dom";
import { ArrowRight, Github, MessageSquare, Plane, Code, Bug, PenTool, Sparkles, Terminal, FileText, Layers, CheckSquare, ListTodo, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingPlanes from "@/components/animations/FloatingPlanes";

// All integrations from Plane Marketplace
const integrations = [
  // Communication
  { name: "Slack", icon: MessageSquare, color: "#4A154B" },
  // Engineering & DevOps
  { name: "GitHub", icon: Github, color: "#24292F" },
  { name: "GitLab", abbr: "GL", color: "#FC6D26" },
  { name: "Sentry", icon: Bug, color: "#362D59" },
  { name: "VS Code", icon: Code, color: "#007ACC" },
  // Documentation & Design
  { name: "Draw.io", icon: PenTool, color: "#F08705" },
  // AI & Agents
  { name: "Claude", icon: Sparkles, color: "#D97757" },
  // Utility
  { name: "Raycast", icon: Terminal, color: "#FF6363" },
  // Importers
  { name: "Jira", abbr: "JI", color: "#0052CC" },
  { name: "Linear", abbr: "LN", color: "#5E6AD2" },
  { name: "Asana", abbr: "AS", color: "#F06A6A" },
  { name: "ClickUp", abbr: "CU", color: "#7B68EE" },
  { name: "Notion", icon: FileText, color: "#000000" },
  { name: "Confluence", icon: BookOpen, color: "#1868DB" },
  { name: "CSV", icon: Layers, color: "#10B981" },
];

const Integrations = () => {
  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      <FloatingPlanes count={4} className="opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Visual */}
          <ScrollReveal direction="left" className="flex justify-center">
            <div className="grid grid-cols-5 gap-3">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  className="group flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-card border-2 border-border shadow-lg terminal-box-glow"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.05, 
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -8,
                    boxShadow: "0 0 20px hsl(var(--primary) / 0.5)",
                    borderColor: "hsl(var(--primary))"
                  }}
                  title={integration.name}
                >
                  {integration.icon ? (
                    <integration.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary transition-transform group-hover:scale-110" />
                  ) : (
                    <motion.div 
                      className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-primary/20 text-primary text-xs font-bold font-mono"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      {integration.abbr || integration.name.slice(0, 2).toUpperCase()}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <motion.span 
              className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
              whileHover={{ scale: 1.05 }}
            >
              INTEGRATIONS
            </motion.span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Integrate everywhere
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">
              Work from Slack, GitHub, GitLab, or wherever your team lives. 
              We help you connect Plane to your entire workflow.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button asChild size="lg" className="mt-8 group">
                <Link to="/services#development">
                  Connect your stack
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Decorative flying plane */}
      <motion.div
        className="absolute bottom-10 left-0 text-primary/20"
        animate={{ 
          x: ["0%", "100vw"],
          y: [0, -20, 0, 20, 0],
        }}
        transition={{ 
          x: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Plane size={32} className="transform -rotate-12" />
      </motion.div>
    </section>
  );
};

export default Integrations;
