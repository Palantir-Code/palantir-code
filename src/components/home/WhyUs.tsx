import { Award, GraduationCap, Globe, Lock } from "lucide-react";
import { WHY_US } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="h-6 w-6" />,
  GraduationCap: <GraduationCap className="h-6 w-6" />,
  Globe: <Globe className="h-6 w-6" />,
  Lock: <Lock className="h-6 w-6" />,
};

const WhyUs = () => {
  return (
    <section className="bg-muted/30 py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose{" "}
            <span className="text-gradient">PALANTIR-CODE</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            As Spain's first certified Plane partner, we bring unmatched expertise and dedication to every project.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item, index) => (
            <div
              key={index}
              className="text-center"
            >
              {/* Icon */}
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                {iconMap[item.icon]}
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
