import { motion } from "framer-motion";
import { Bot, Cpu, Terminal, Plug, Zap, Shield, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";

const clientIcons = [
  { name: "Claude", icon: "🤖" },
  { name: "Cursor", icon: "⚡" },
  { name: "VS Code", icon: "💻" },
  { name: "Windsurf", icon: "🌊" },
  { name: "Zed", icon: "⚙️" },
];

const featureIcons = [Bot, Plug, Shield, Zap];

const PlaneMCP = () => {
  const { t } = useTranslation();

  const features = [
    { titleKey: "planeMCP.feature1Title", descKey: "planeMCP.feature1Desc", icon: featureIcons[0] },
    { titleKey: "planeMCP.feature2Title", descKey: "planeMCP.feature2Desc", icon: featureIcons[1] },
    { titleKey: "planeMCP.feature3Title", descKey: "planeMCP.feature3Desc", icon: featureIcons[2] },
    { titleKey: "planeMCP.feature4Title", descKey: "planeMCP.feature4Desc", icon: featureIcons[3] },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 h-[350px] w-[350px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/3 left-0 h-[250px] w-[250px] rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono text-primary mb-4">
              <Cpu className="h-3.5 w-3.5" />
              {t("planeMCP.badge")}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mt-4">
              {t("planeMCP.title")}{" "}
              <span className="text-gradient">{t("planeMCP.titleHighlight")}</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("planeMCP.description")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Terminal demo */}
          <ScrollReveal direction="left">
            <div className="relative rounded-xl border border-border bg-card overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">mcp-config.json</span>
              </div>

              {/* Code content */}
              <div className="p-5 font-mono text-sm leading-relaxed">
                <div className="text-muted-foreground">{"{"}</div>
                <div className="ml-4">
                  <span className="text-primary">"mcpServers"</span>
                  <span className="text-muted-foreground">: {"{"}</span>
                </div>
                <div className="ml-8">
                  <span className="text-primary">"plane"</span>
                  <span className="text-muted-foreground">: {"{"}</span>
                </div>
                <div className="ml-12">
                  <span className="text-primary">"command"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-green-400">"npx"</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="ml-12">
                  <span className="text-primary">"args"</span>
                  <span className="text-muted-foreground">: [</span>
                </div>
                <div className="ml-16">
                  <span className="text-green-400">"mcp-remote@latest"</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="ml-16">
                  <span className="text-green-400">"https://mcp.plane.so/http/mcp"</span>
                </div>
                <div className="ml-12 text-muted-foreground">]</div>
                <div className="ml-8 text-muted-foreground">{"}"}</div>
                <div className="ml-4 text-muted-foreground">{"}"}</div>
                <div className="text-muted-foreground">{"}"}</div>
              </div>

              {/* Animated cursor */}
              <motion.div
                className="absolute bottom-6 right-6 h-4 w-0.5 bg-primary"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>

            {/* Compatible clients */}
            <div className="mt-6">
              <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-wider">
                {t("planeMCP.compatibleWith")}
              </p>
              <div className="flex flex-wrap gap-3">
                {clientIcons.map((client) => (
                  <motion.div
                    key={client.name}
                    className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground hover:border-primary/40 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>{client.icon}</span>
                    <span>{client.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Features */}
          <div>
            <StaggerContainer className="grid gap-5" staggerDelay={0.1}>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <ScrollReveal key={index} delay={index * 0.1} direction="right">
                    <div className="group flex gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {t(feature.titleKey)}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(feature.descKey)}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </StaggerContainer>

            {/* CTA */}
            <ScrollReveal delay={0.4}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="gap-2">
                  <a href="https://developers.plane.so/dev-tools/mcp-server" target="_blank" rel="noopener noreferrer">
                    {t("planeMCP.cta")}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href="https://github.com/makeplane/plane-mcp-server" target="_blank" rel="noopener noreferrer">
                    {t("planeMCP.ctaGithub")}
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

export default PlaneMCP;
