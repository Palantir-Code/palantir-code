const TrustedBy = () => {
  // Placeholder logos - can be replaced with actual client logos
  const placeholderLogos = [
    "Enterprise Client",
    "Tech Startup",
    "Global Corp",
    "Innovation Lab",
    "Digital Agency",
    "Scale-up Co",
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-medium text-muted-foreground">
            Trusted by leading organizations across Spain
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {placeholderLogos.map((name, index) => (
            <div
              key={index}
              className="flex h-20 items-center justify-center rounded-lg border border-border bg-card px-4 transition-colors hover:border-primary/30"
            >
              <span className="text-sm font-medium text-muted-foreground">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
