import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const importerTools = [
  { name: "Jira", color: "#0052CC" },
  { name: "Linear", color: "#5E6AD2" },
  { name: "ClickUp", color: "#7B68EE" },
  { name: "Asana", color: "#F06A6A" },
];

const Importers = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              IMPORTERS
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Switch without the struggle
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">
              Leave Jira, Linear, ClickUp, or Asana without leaving your data behind. 
              Our expert migration ensures zero data loss.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link to="/services#migration">
                Make the switch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Central hub */}
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-primary shadow-xl">
                <svg className="h-12 w-12 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              
              {/* Tool icons orbiting */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-card border-2 border-border shadow-lg">
                  <span className="text-xs font-bold" style={{ color: importerTools[0].color }}>JIRA</span>
                </div>
              </div>
              <div className="absolute top-1/2 -right-16 -translate-y-1/2">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-card border-2 border-border shadow-lg">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill={importerTools[1].color}>
                    <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-card border-2 border-border shadow-lg">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill={importerTools[2].color}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute top-1/2 -left-16 -translate-y-1/2">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-card border-2 border-border shadow-lg">
                  <div className="h-6 w-6 rounded-full" style={{ backgroundColor: importerTools[3].color }}></div>
                </div>
              </div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 -z-10 h-full w-full" style={{ width: '200px', height: '200px', left: '-38px', top: '-38px' }}>
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="70" fill="none" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="8 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Importers;
