import { Link } from "react-router-dom";
import {
  ArrowRightLeft,
  Wrench,
  Code,
  Shield,
  ArrowRight,
  Check,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  ArrowRightLeft: <ArrowRightLeft className="h-6 w-6" />,
  Wrench: <Wrench className="h-6 w-6" />,
  Code: <Code className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
};

const Services = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Expert Consulting Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From migration to managed services, we provide end-to-end support for your Plane journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
                {/* Icon */}
                <div className="mb-4 inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary lg:mb-0">
                  {iconMap[service.icon]}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
