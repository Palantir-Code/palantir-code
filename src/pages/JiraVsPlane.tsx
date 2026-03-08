import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MatrixRain from "@/components/animations/MatrixRain";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight, Check, X, Zap, Layout as LayoutIcon, Shield, Globe,
  FileText, DollarSign, Server, Users, Bot, Clock, Layers,
  Cloud, Lock, CheckCircle2, ArrowRightLeft
} from "lucide-react";
import jiraVsPlaneImg from "@/assets/jira-vs-plane.png";
import planeLogo from "@/assets/plane-logo.svg";
import jiraLogo from "@/assets/integrations/jira.avif";

const comparisonData = [
  {
    category: "Speed",
    plane: "Snappy, low-friction UI that stays fast as projects grow",
    jira: "Can feel heavy in large projects and complex workflows",
    planeWins: true,
  },
  {
    category: "Setup",
    plane: "Up and running in minutes — cloud & self-hosted",
    jira: "Admin-heavy setup; EOL announced for self-hosting",
    planeWins: true,
  },
  {
    category: "Usability",
    plane: "Clean, modern, keyboard-driven interface",
    jira: "Powerful but cluttered, steep learning curve",
    planeWins: true,
  },
  {
    category: "Structure",
    plane: "Workspaces → Projects → Work Items — intuitive hierarchy",
    jira: "Projects, schemes, screens, fields — easy to over-configure",
    planeWins: true,
  },
  {
    category: "Docs & Wiki",
    plane: "Built-in Pages/Wiki next to your projects",
    jira: "Confluence is a separate subscription",
    planeWins: true,
  },
  {
    category: "AI & Automation",
    plane: "Native AI assist + lightweight rules included",
    jira: "Powerful, but often needs paid add-ons/Marketplace",
    planeWins: true,
  },
  {
    category: "Cost to Scale",
    plane: "Lower TCO, no unpredictable add-on costs",
    jira: "Higher TCO, add-ons add up quickly at scale",
    planeWins: true,
  },
  {
    category: "Deployment",
    plane: "Cloud, self-hosted, and air-gapped — open-source",
    jira: "Cloud only; Data Centre sales end March 2026",
    planeWins: true,
  },
];

const featureTable = [
  { feature: "Layouts", plane: "List, Board, Calendar, Gantt, Kanban — all included", jira: "Basic views in free tier", planeWins: true },
  { feature: "Project Management", plane: "Unified workspace — no add-ons needed", jira: "Fragmented across multiple products", planeWins: true },
  { feature: "Docs & Wiki", plane: "Built-in, out-of-the-box", jira: "Confluence (separate product)", planeWins: true },
  { feature: "Custom Fields", plane: "Unlimited in Pro+ — text, number, date, dropdown, boolean & more", jira: "Limited in Standard, full access requires Premium", planeWins: true },
  { feature: "Time Tracking", plane: "Native time-tracking", jira: "Basic built-in, advanced via add-ons", planeWins: true },
  { feature: "Admin Overhead", plane: "Minimal by design", jira: "Very high, customization adds complexity", planeWins: true },
  { feature: "Dashboards", plane: "Modern, point-and-click customization", jira: "Requires complex JQL, outdated interface", planeWins: true },
  { feature: "Intake & Approvals", plane: "Built-in", jira: "Marketplace forms and apps", planeWins: true },
  { feature: "Self-hosting", plane: "Complete self-hosted option", jira: "Server discontinued, DC sales ending", planeWins: true },
  { feature: "Pricing Transparency", plane: "Simple plans, more features included", jira: "Seat tiers and plugins = unpredictable costs", planeWins: true },
];

const migrationSteps = [
  { step: "1", title: "Connect Jira", desc: "Authenticate, select projects, and choose scope" },
  { step: "2", title: "Map Your World", desc: "Map fields, statuses, and workflows to Plane" },
  { step: "3", title: "Import & Verify", desc: "Dry run import, validate data integrity" },
  { step: "4", title: "Go Live", desc: "Full migration with Jira in read-only during cutover" },
];

const whatMovesOver = [
  "Projects and active/backlog issues",
  "Assignees, labels, and priorities",
  "Sprints mapped into Plane Cycles",
  "Issue types, statuses and custom fields",
  "Comments and attachments (via Jira's API)",
];

const experienceAfterSwitch = [
  {
    title: "Unified Workspace",
    desc: "Pages, Wiki and Issues live together — no more split context across Jira, Confluence and plug-ins.",
    icon: Layers,
  },
  {
    title: "Speed at Scale",
    desc: "Boards open fast, issue details appear in-place. No full-page navigations or slow board loads.",
    icon: Zap,
  },
  {
    title: "Admin Simplicity",
    desc: "Guided rules and shared schemas replace schemes, screens and permission sprawl.",
    icon: Shield,
  },
  {
    title: "Cost Clarity",
    desc: "Wiki, automations, analytics and dashboards included — no paying extra for Confluence or reporting apps.",
    icon: DollarSign,
  },
  {
    title: "Built-in Intake & Approvals",
    desc: "Native Intake and Approvals turn requests into issues with guardrails — no JSM forms or marketplace add-ons.",
    icon: CheckCircle2,
  },
  {
    title: "Deployment Sovereignty",
    desc: "Run the same product in cloud, self-hosted, or fully air-gapped to meet security and residency policies.",
    icon: Lock,
  },
];

const editions = [
  {
    name: "Cloud",
    desc: "Fully managed, lowest-friction path. Provision a secure workspace in minutes.",
    icon: Cloud,
    tag: "Fastest Setup",
  },
  {
    name: "Self-hosted",
    desc: "Full control on your infrastructure. Same product model as cloud.",
    icon: Server,
    tag: "Full Control",
  },
  {
    name: "Airgapped",
    desc: "Completely offline deployment for maximum security and compliance.",
    icon: Lock,
    tag: "Maximum Security",
  },
];

const JiraVsPlane = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Jira vs Plane — Why Teams Switch | PALANTIR-CODE",
    "description": "Compare Jira vs Plane: speed, usability, cost, deployment options, and migration path. See why teams switch to Plane.",
    "url": "https://www.palantircode.com/jira-vs-plane",
  };

  return (
    <Layout>
      <SEO
        title="Jira vs Plane | Complete Comparison & Migration Guide"
        description="Compare Jira vs Plane: speed, usability, cost, deployment. See why teams switch to Plane and how PALANTIR-CODE makes migration seamless."
        canonical="/jira-vs-plane"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <MatrixRain columnCount={25} opacity={0.2} />
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/6 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono text-primary mb-6">
                <ArrowRightLeft className="h-3.5 w-3.5" />
                PLANE VS JIRA
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Switch from Jira to{" "}
                <span className="text-gradient">Plane</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Unify projects, docs, intake, approvals, and analytics in one place.
                Run it on cloud, self-hosted, or fully air-gapped.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/contact">
                    Talk to a Migration Expert
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services/migration">Our Migration Services</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero image */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 max-w-4xl mx-auto">
              <img
                src={jiraVsPlaneImg}
                alt="Jira vs Plane comparison"
                className="w-full rounded-xl border border-border shadow-2xl shadow-primary/10"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">// COMPARISON</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why do teams move to{" "}
                <span className="text-gradient">Plane?</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left text-sm font-mono text-muted-foreground w-1/5"></th>
                    <th className="py-4 px-4 text-left text-sm font-semibold text-primary w-2/5">
                      <span className="flex items-center gap-2">
                        <Check className="h-4 w-4" />
                        Plane
                      </span>
                    </th>
                    <th className="py-4 px-4 text-left text-sm font-semibold text-muted-foreground w-2/5">Jira</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <motion.tr
                      key={row.category}
                      className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <td className="py-4 px-4 text-sm font-semibold text-foreground">{row.category}</td>
                      <td className="py-4 px-4 text-sm text-foreground bg-primary/5 rounded-l-none">
                        <span className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {row.plane}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">
                        <span className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive/50 shrink-0 mt-0.5" />
                          {row.jira}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 lg:py-28 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">// MIGRATION</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Switch to Plane in{" "}
                <span className="text-gradient">4 Simple Steps</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Most teams finish a first dry run in under three hours; larger workspaces pilot a few projects, then migrate the rest over 3–7 days.
              </p>
            </div>
          </ScrollReveal>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {migrationSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group rounded-xl border border-border bg-card p-6 h-full transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* What moves over */}
          <ScrollReveal delay={0.3}>
            <div className="max-w-2xl mx-auto rounded-xl border border-border bg-card p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <ArrowRightLeft className="h-5 w-5 text-primary" />
                What Moves Over
              </h3>
              <ul className="space-y-3">
                {whatMovesOver.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience After Switch */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">// AFTER THE SWITCH</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What Jira Users{" "}
                <span className="text-gradient">Immediately Experience</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceAfterSwitch.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="group rounded-xl border border-border bg-card p-8 h-full transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editions */}
      <section className="py-20 lg:py-28 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">// EDITIONS</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Run Plane{" "}
                <span className="text-gradient">Your Way</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Choose between fully managed cloud, self-hosted or completely offline airgapped.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {editions.map((ed, i) => {
              const Icon = ed.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group rounded-xl border border-border bg-card p-8 h-full transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-mono text-primary/70 bg-primary/5 rounded-full px-3 py-1">
                        {ed.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{ed.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ed.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">// PRICING</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Keep Costs in{" "}
                <span className="text-gradient">Control</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Issues, sprints, roadmaps, and docs in one place — at a fraction of the cost.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="rounded-xl border-2 border-primary bg-card p-8 relative">
                <div className="absolute -top-3 left-6">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Plane Pro</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-primary">$8</span>
                  <span className="text-sm text-muted-foreground">/ user / month</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> All layouts included</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Built-in Wiki & Pages</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Unlimited custom fields</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Native AI & Automations</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 1TB storage</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="text-xl font-bold text-foreground mb-1">Jira + Confluence Standard</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-muted-foreground">$16</span>
                  <span className="text-sm text-muted-foreground">/ user / month</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><X className="h-4 w-4 text-destructive/50" /> Basic views only in free tier</li>
                  <li className="flex items-center gap-2"><X className="h-4 w-4 text-destructive/50" /> Confluence is separate cost</li>
                  <li className="flex items-center gap-2"><X className="h-4 w-4 text-destructive/50" /> Limited custom fields</li>
                  <li className="flex items-center gap-2"><X className="h-4 w-4 text-destructive/50" /> Add-ons needed for automation</li>
                  <li className="flex items-center gap-2"><X className="h-4 w-4 text-destructive/50" /> 250GB storage</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <p className="text-center text-xs text-muted-foreground mt-6">
              *Have fewer than 12 users? Take advantage of Plane's Free Plan with all core features included.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Full Feature Table */}
      <section className="py-20 lg:py-28 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">// FULL COMPARISON</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Plane is the Best{" "}
                <span className="text-gradient">Jira Alternative</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto rounded-xl border border-border bg-card">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="py-4 px-6 text-left text-sm font-mono text-muted-foreground w-1/4">Feature</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-primary w-[37.5%]">Plane</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-muted-foreground w-[37.5%]">Jira</th>
                  </tr>
                </thead>
                <tbody>
                  {featureTable.map((row, i) => (
                    <tr key={i} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-6 text-sm font-medium text-foreground">{row.feature}</td>
                      <td className="py-3 px-6 text-sm text-foreground">
                        <span className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {row.plane}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-sm text-muted-foreground">
                        <span className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive/50 shrink-0 mt-0.5" />
                          {row.jira}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-primary/8 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-primary/5 p-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                Switch from Jira Without Starting Over
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Import a live project, keep Jira read-only for a week, and see how
                work feels when boards, docs, and analytics live in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/contact">
                    Talk to a Migration Expert
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://app.plane.so/sign-up" target="_blank" rel="noopener noreferrer">
                    Get Started Free
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default JiraVsPlane;
