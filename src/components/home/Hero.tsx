import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";
import planeLogo from "@/assets/plane-logo-transparent.png";
const Hero = () => {
  return <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      {/* Plane logo watermark */}
      <div className="absolute inset-0 -z-5 flex items-center justify-center overflow-hidden pointer-events-none">
        <img src={planeLogo} alt="" className="w-[600px] h-auto opacity-[0.04] select-none" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Partner Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>Official Plane Partner</span>
            <img src={planeLogo} alt="Plane" className="h-5 w-auto" />
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Accelerate Your Projects with{" "}
            <span className="text-gradient">Plane</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {COMPANY.name} is Spain's first certified Plane partner. We help teams ship faster with expert implementation, migration, and custom solutions for Plane's unified workspace.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="group min-w-[180px]">
              <Link to="/solutions">
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[180px]">
              <Link to="/contact">
                <Play className="mr-2 h-4 w-4" />
                Schedule a Demo
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                Talk to an Expert
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Enterprise Ready
            </div>
            <div className="flex items-center gap-2">SOC 2 & GDPR Compliant<svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              SOC 2 & GDPR Compliant
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;