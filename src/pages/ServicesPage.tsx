import { Link } from "react-router-dom";
import {
  ArrowRightLeft,
  Wrench,
  Code,
  Shield,
  ArrowRight,
  Check,
  Clock,
  Users,
  Zap,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import MatrixRain from "@/components/animations/MatrixRain";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  ArrowRightLeft: <ArrowRightLeft className="h-8 w-8" />,
  Wrench: <Wrench className="h-8 w-8" />,
  Code: <Code className="h-8 w-8" />,
  Shield: <Shield className="h-8 w-8" />,
};

const serviceDetails: Record<string, { benefits: string[]; process: string[] }> = {
  migration: {
    benefits: [
      "Migrate from Jira, Linear, ClickUp, or Asana",
      "Complete data migration with zero loss",
      "Custom field mapping and transformation",
      "User training and adoption support",
    ],
    process: [
      "Assessment & Planning",
      "Data Mapping & Preparation",
      "Migration Execution",
      "Validation & Testing",
      "Training & Handover",
    ],
  },
  implementation: {
    benefits: [
      "Best practices configuration",
      "Custom workflow design",
      "User permissions and governance",
      "Performance optimization",
    ],
    process: [
      "Requirements Discovery",
      "Architecture Design",
      "Configuration & Setup",
      "Testing & Refinement",
      "Go-Live Support",
    ],
  },
  development: {
    benefits: [
      "Custom API integrations",
      "Workflow automation scripts",
      "Third-party tool connectors",
      "Custom reporting solutions",
    ],
    process: [
      "Technical Discovery",
      "Solution Architecture",
      "Development & Testing",
      "Deployment",
      "Documentation & Training",
    ],
  },
  managed: {
    benefits: [
      "24/7 system monitoring",
      "Proactive maintenance",
      "User support helpdesk",
      "Regular health checks and optimization",
    ],
    process: [
      "Onboarding & Setup",
      "Monitoring Configuration",
      "SLA Definition",
      "Ongoing Support",
      "Quarterly Reviews",
    ],
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Software Consulting",
  "provider": {
    "@type": "Organization",
    "name": "PALANTIR-CODE"
  },
  "areaServed": "Spain",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Plane Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Migration Services",
          "description": "Seamless migration from Jira, Asana, Monday.com and other tools"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Implementation & Setup",
          "description": "End-to-end Plane deployment tailored to your organization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Development",
          "description": "Bespoke integrations and workflow automation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Managed Services",
          "description": "Ongoing support, maintenance, and optimization"
        }
      }
    ]
  }
};

const ServicesPage = () => {
  return (
    <Layout>
      <SEO 
        title="Services"
        description="Expert Plane consulting services: migration, implementation, custom development, and managed services. Spain's first certified Plane partner."
        canonical="/services"
        jsonLd={servicesJsonLd}
      />
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary/5 via-background to-background py-20 overflow-hidden">
        <MatrixRain columnCount={20} opacity={0.25} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Expert Consulting Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              From migration to managed services, we provide comprehensive support for your Plane journey. Our certified experts ensure your success every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-20"
              >
                {/* Service Header */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-12">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground flex-shrink-0">
                    {iconMap[service.icon]}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Benefits & Process */}
                <div className="grid gap-8 lg:grid-cols-2">
                  {/* Benefits */}
                  <div className="rounded-2xl border border-border bg-card p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      What's Included
                    </h3>
                    <ul className="space-y-4">
                      {serviceDetails[service.id]?.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div className="rounded-2xl border border-border bg-card p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Our Process
                    </h3>
                    <ol className="space-y-4">
                      {serviceDetails[service.id]?.process.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">
                            {i + 1}
                          </span>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/contact">
                      Get Started with {service.title.split(" ")[0]}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">#1</div>
              <div className="text-muted-foreground">Partner in Spain</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us to discuss your project and learn how we can help you succeed with Plane.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
