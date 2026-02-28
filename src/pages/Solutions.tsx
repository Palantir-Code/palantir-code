import { Link } from "react-router-dom";
import { Megaphone, TrendingUp, Users, Settings, DollarSign, Server, HeadphonesIcon, Lightbulb, ArrowRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
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

const solutionTitleKeys: Record<string, string> = {
  marketing: "solutions.marketing", sales: "solutions.sales", hr: "solutions.hr",
  operations: "solutions.operations", finance: "solutions.finance", it: "solutions.it",
  support: "solutions.support", rd: "solutions.rd",
};
const solutionDescKeys: Record<string, string> = {
  marketing: "solutions.marketingDesc", sales: "solutions.salesDesc", hr: "solutions.hrDesc",
  operations: "solutions.operationsDesc", finance: "solutions.financeDesc", it: "solutions.itDesc",
  support: "solutions.supportDesc", rd: "solutions.rdDesc",
};

const solutionsJsonLd = {
  "@context": "https://schema.org", "@type": "ItemList",
  "name": "Plane Solutions by Team",
};

const SolutionsPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title="Solutions" description="Pre-built Plane accelerators and templates for every team." canonical="/solutions" jsonLd={solutionsJsonLd} />

      <section className="bg-gradient-to-b from-primary/5 via-background to-background py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{t("solutionsPage.title")}</h1>
            <p className="mt-6 text-lg text-muted-foreground">{t("solutionsPage.heroDesc")}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {SOLUTIONS.map((solution, index) => {
              const details = t(`solutionsPage.details.${solution.id}`, { returnObjects: true }) as string[];
              return (
                <div key={solution.id} id={solution.id}
                  className={`flex flex-col gap-12 lg:flex-row lg:items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="flex-1">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                      {iconMap[solution.icon]}
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{t(solutionTitleKeys[solution.id])}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{t(solutionDescKeys[solution.id])}</p>
                    <ul className="space-y-3 mb-8">
                      {Array.isArray(details) && details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link to="/contact">{t("solutionsPage.getStarted")}<ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                  <div className="flex-1">
                    <div className="aspect-video rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                      <div className="text-primary/30">{iconMap[solution.icon]}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("solutionsPage.customTitle")}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t("solutionsPage.customDesc")}</p>
            <Button asChild size="lg"><Link to="/contact">{t("solutionsPage.contactUs")}</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionsPage;
