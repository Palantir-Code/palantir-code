import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import jiraVsPlane from "@/assets/jira-vs-plane-original.png";

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
            
            {/* Migration tools list */}
            <ul className="mt-6 space-y-3">
              {["Jira", "Linear", "ClickUp", "Asana"].map((tool) => (
                <li key={tool} className="flex items-center gap-3 text-muted-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Migrate from {tool}
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="mt-8">
              <Link to="/services#migration">
                Make the switch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Visual - Jira vs Plane image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card p-4">
              <img 
                src={jiraVsPlane} 
                alt="Migrate from Jira to Plane" 
                className="w-full max-w-md rounded-xl"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <span className="inline-block rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg">
                  Seamless Migration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Importers;
