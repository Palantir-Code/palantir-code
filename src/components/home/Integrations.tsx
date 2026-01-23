import { Link } from "react-router-dom";
import { ArrowRight, Github, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const integrations = [
  { name: "Slack", icon: MessageSquare, color: "#4A154B" },
  { name: "GitHub", icon: Github, color: "#24292F" },
  { name: "GitLab", icon: null, color: "#FC6D26" },
  { name: "Discord", icon: null, color: "#5865F2" },
  { name: "Figma", icon: null, color: "#F24E1E" },
  { name: "Notion", icon: null, color: "#000000" },
];

const Integrations = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Visual */}
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-4">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="group flex h-20 w-20 items-center justify-center rounded-2xl bg-card border-2 border-border shadow-lg transition-all hover:border-primary/50 hover:shadow-xl hover:-translate-y-1"
                >
                  {integration.icon ? (
                    <integration.icon className="h-8 w-8" style={{ color: integration.color }} />
                  ) : (
                    <div 
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-white text-xs font-bold"
                      style={{ backgroundColor: integration.color }}
                    >
                      {integration.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              INTEGRATIONS
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Integrate everywhere
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">
              Work from Slack, GitHub, GitLab, or wherever your team lives. 
              We help you connect Plane to your entire workflow.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link to="/services#development">
                Connect your stack
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
