import { STATS } from "@/lib/constants";

const Stats = () => {
  return (
    <section className="border-y border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
