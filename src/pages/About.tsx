import { Link } from "react-router-dom";
import { Award, Users, Globe, Shield, Target, Heart, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import MatrixRain from "@/components/animations/MatrixRain";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project, ensuring our clients receive the best possible solutions.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside our clients as true partners, invested in their long-term success.",
  },
  {
    icon: Heart,
    title: "Dedication",
    description: "Our team is dedicated to understanding and solving our clients' unique challenges.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "We build trust through transparency, reliability, and consistent delivery.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Spain's First Plane Partner",
    description: "Became the first certified Plane partner in Spain, establishing our expertise in the platform.",
  },
  {
    year: "2023",
    title: "Company Founded",
    description: "PALANTIR-CODE was founded with a mission to help organizations transform their project management.",
  },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About PALANTIR-CODE",
  "description": "Learn about PALANTIR-CODE, Spain's first certified Plane partner. Our mission, values, and team.",
  "url": "https://www.palantircode.com/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "PALANTIR-CODE",
    "foundingDate": "2023",
    "description": "Spain's first certified Plane partner",
  }
};

const About = () => {
  return (
    <Layout>
      <SEO 
        title="About Us"
        description="Learn about PALANTIR-CODE, Spain's first certified Plane partner. Our mission is to empower organizations with modern project management solutions."
        canonical="/about"
        jsonLd={aboutJsonLd}
      />
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary/5 via-background to-background py-20 overflow-hidden">
        <MatrixRain columnCount={20} opacity={0.25} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Award className="h-4 w-4" />
              Spain's First Certified Plane Partner
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About {COMPANY.name}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We are a team of project management experts dedicated to helping organizations unlock the full potential of Plane. As Spain's first certified partner, we bring unmatched expertise and commitment to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At PALANTIR-CODE, our mission is to empower organizations to work more efficiently and effectively through modern project management solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that the right tools, properly implemented, can transform how teams collaborate and deliver value. That's why we've partnered with Plane – a powerful, open-source platform that gives teams the flexibility and control they need.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team combines deep technical expertise with a genuine passion for helping our clients succeed. Whether you're migrating from another tool or starting fresh, we're here to guide you every step of the way.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground mx-auto mb-6">
                    <span className="text-3xl font-bold">P</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{COMPANY.name}</h3>
                  <p className="text-muted-foreground mt-2">{COMPANY.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Our Journey</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Key milestones in our story.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Work With Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Certified Expertise</h3>
                    <p className="text-muted-foreground">Spain's first and only certified Plane partner.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Bilingual Support</h3>
                    <p className="text-muted-foreground">Full support in English and Spanish.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Enterprise Security</h3>
                    <p className="text-muted-foreground">SOC 2, GDPR, and ISO27001 compliant solutions.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Dedicated Team</h3>
                    <p className="text-muted-foreground">A committed team focused on your success.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card p-6 text-center">
                  <div className="text-3xl font-bold text-primary">#1</div>
                  <div className="text-sm text-muted-foreground mt-1">Partner in Spain</div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground mt-1">Certified</div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground mt-1">Support</div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 text-center">
                  <div className="text-3xl font-bold text-primary">EN/ES</div>
                  <div className="text-sm text-muted-foreground mt-1">Bilingual</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help you succeed with Plane.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
