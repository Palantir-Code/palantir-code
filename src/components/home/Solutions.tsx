import { Link } from "react-router-dom";
import { Megaphone, TrendingUp, Users, Settings, DollarSign, Server, HeadphonesIcon, Lightbulb, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SOLUTIONS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  Megaphone: <Megaphone className="h-6 w-6" />,
  TrendingUp: <TrendingUp className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
  Settings: <Settings className="h-6 w-6" />,
  DollarSign: <DollarSign className="h-6 w-6" />,
  Server: <Server className="h-6 w-6" />,
  HeadphonesIcon: <HeadphonesIcon className="h-6 w-6" />,
  Lightbulb: <Lightbulb className="h-6 w-6" />,
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

const Solutions = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t("solutions.title")}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("solutions.description")}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((solution, index) => (
            <Link key={index} to={`/solutions#${solution.id}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {iconMap[solution.icon]}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {t(solutionTitleKeys[solution.id])}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(solutionDescKeys[solution.id])}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                {t("solutions.learnMore")}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/solutions">
              {t("solutions.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
