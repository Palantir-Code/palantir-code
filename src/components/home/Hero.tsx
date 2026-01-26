import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";
import planeLogo from "@/assets/plane-logo-transparent.png";
import FloatingPlanes from "@/components/animations/FloatingPlanes";
import FloatingClouds from "@/components/animations/FloatingClouds";
import FlightPath from "@/components/animations/FlightPath";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Animated plane elements */}
      <FloatingPlanes count={6} className="z-0 opacity-60" />
      <FloatingClouds count={4} className="z-0" />
      <FlightPath className="z-0 opacity-40" />
      
      {/* Plane logo watermark with Matrix effect */}
      <div className="absolute inset-0 -z-5 flex items-center justify-center overflow-hidden pointer-events-none">
        {/* Matrix rain effect */}
        <div className="absolute inset-0 opacity-[0.08]">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 text-primary font-mono text-xs animate-matrix-rain"
              style={{
                left: `${5 + i * 5}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              {[...Array(15)].map((_, j) => (
                <div key={j} className="opacity-70" style={{ animationDelay: `${j * 0.1}s` }}>
                  {String.fromCharCode(0x30A0 + Math.random() * 96)}
                </div>
              ))}
            </div>
          ))}
        </div>
        <motion.img 
          src={planeLogo} 
          alt="" 
          className="w-[600px] h-auto opacity-[0.04] select-none" 
          aria-hidden="true"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.04 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            {/* Partner Badge */}
            <motion.div 
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>Official Plane Partner</span>
              <img src={planeLogo} alt="Plane" className="h-5 w-auto" />
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Accelerate Your Projects with{" "}
              <span className="text-gradient">Plane</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl lg:mx-0 mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {COMPANY.name} is Spain's first certified Plane partner. We help teams ship faster with expert implementation, migration, and custom solutions for Plane's unified workspace.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
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
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Enterprise Ready
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SOC 2 & GDPR
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                24/7 Support
              </div>
            </motion.div>
          </div>

          {/* Right side - Video */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/rzpc1UVW1Xw?autoplay=1&mute=1&loop=1&playlist=rzpc1UVW1Xw&controls=0&showinfo=0&rel=0&modestbranding=1"
                  title="Plane Demo Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 -z-10 bg-primary/20 blur-3xl rounded-full opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
