import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-12 lg:py-16">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[200px] w-[200px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Ready to Transform Your Project Management?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80">
            Join the growing number of teams using Plane to ship faster and collaborate better. Let us help you get started.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="min-w-[200px] bg-white text-primary hover:bg-white/90"
            >
              <Link to="/contact">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Demo
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-w-[200px] border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
