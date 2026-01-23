import { Layout, FileText, Sparkles, Cloud } from "lucide-react";
import { WHY_PLANE } from "@/lib/constants";
import planeLogo from "@/assets/plane-logo-transparent.png";

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="h-6 w-6" />,
  FileText: <FileText className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
  Cloud: <Cloud className="h-6 w-6" />,
};

const WhyPlane = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <img src={planeLogo} alt="Plane" className="h-10 w-auto" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Teams Choose{" "}
            <span className="text-gradient">Plane</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Plane is the open-source project management platform that gives you everything you need to plan, track, and ship.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_PLANE.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {iconMap[feature.icon]}
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Plane Logo/Link */}
        <div className="mt-12 flex items-center justify-center">
          <a
            href="https://plane.so"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-border bg-muted/50 px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <img src={planeLogo} alt="Plane" className="h-5 w-auto" />
            Powered by Plane
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyPlane;
