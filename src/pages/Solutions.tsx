import { Link } from "react-router-dom";
import {
  Megaphone,
  TrendingUp,
  Users,
  Settings,
  DollarSign,
  Server,
  HeadphonesIcon,
  Lightbulb,
  ArrowRight,
  Check,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { SOLUTIONS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Megaphone: <Megaphone className="h-8 w-8" />,
  TrendingUp: <TrendingUp className="h-8 w-8" />,
  Users: <Users className="h-8 w-8" />,
  Settings: <Settings className="h-8 w-8" />,
  DollarSign: <DollarSign className="h-8 w-8" />,
  Server: <Server className="h-8 w-8" />,
  HeadphonesIcon: <HeadphonesIcon className="h-8 w-8" />,
  Lightbulb: <Lightbulb className="h-8 w-8" />,
};

const solutionDetails: Record<string, string[]> = {
  marketing: [
    "Campaign planning and execution tracking",
    "Content calendar management",
    "Creative asset workflows",
    "Marketing analytics dashboards",
    "Cross-team collaboration",
  ],
  sales: [
    "Visual sales pipeline management",
    "Deal tracking and forecasting",
    "CRM workflow integration",
    "Sales team performance metrics",
    "Automated follow-up reminders",
  ],
  hr: [
    "New employee onboarding workflows",
    "Performance review cycles",
    "Training program management",
    "Employee feedback systems",
    "HR request ticketing",
  ],
  operations: [
    "Process automation templates",
    "Resource allocation tracking",
    "Vendor management workflows",
    "Operational reporting",
    "Cross-department coordination",
  ],
  finance: [
    "Budget approval workflows",
    "Expense tracking and reporting",
    "Financial planning cycles",
    "Audit trail management",
    "Compliance tracking",
  ],
  it: [
    "Incident management and response",
    "Service desk ticketing",
    "Infrastructure change management",
    "DevOps pipeline integration",
    "Security compliance tracking",
  ],
  support: [
    "Customer support ticketing",
    "SLA management and tracking",
    "Knowledge base integration",
    "Customer feedback loops",
    "Support team analytics",
  ],
  rd: [
    "Product roadmap planning",
    "Innovation tracking",
    "Research project management",
    "Prototype and testing workflows",
    "Patent and IP tracking",
  ],
};

const solutionsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Plane Solutions by Team",
  "description": "Pre-built accelerators and templates for different teams",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Marketing Teams" },
    { "@type": "ListItem", "position": 2, "name": "Sales Teams" },
    { "@type": "ListItem", "position": 3, "name": "HR Teams" },
    { "@type": "ListItem", "position": 4, "name": "Operations" },
    { "@type": "ListItem", "position": 5, "name": "Finance" },
    { "@type": "ListItem", "position": 6, "name": "IT" },
    { "@type": "ListItem", "position": 7, "name": "Customer Support" },
    { "@type": "ListItem", "position": 8, "name": "R&D" }
  ]
};

const SolutionsPage = () => {
  return (
    <Layout>
      <SEO 
        title="Solutions"
        description="Pre-built Plane accelerators and templates for Marketing, Sales, HR, Operations, Finance, IT, Support, and R&D teams. Get started quickly with customizable workflows."
        canonical="/solutions"
        jsonLd={solutionsJsonLd}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 via-background to-background py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Solutions for Every Team
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Pre-built accelerators and templates designed to get your team up and running with Plane quickly. Each solution is customizable to fit your unique workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {SOLUTIONS.map((solution, index) => (
              <div
                key={solution.id}
                id={solution.id}
                className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                    {iconMap[solution.icon]}
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {solutionDetails[solution.id]?.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className="aspect-video rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                    <div className="text-primary/30">
                      {iconMap[solution.icon]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team can build custom workflows and integrations tailored to your specific needs.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionsPage;
