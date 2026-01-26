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
          <div className="text-center lg:text-left relative">
            {/* Animated dark gradient background for text area */}
            <motion.div
              className="absolute -inset-8 -z-10 rounded-3xl opacity-30"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)/0.2), hsl(220 30% 10%), hsl(var(--primary)/0.1), hsl(240 20% 5%))",
                backgroundSize: "400% 400%",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Partner Badge with shimmer */}
            <motion.div 
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary relative overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <motion.span
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Official Plane Partner
              </motion.span>
              <img src={planeLogo} alt="Plane" className="h-5 w-auto" />
            </motion.div>

            {/* Headline with animated gradient text */}
            <motion.h1 
              className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.span 
                className="inline-block"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--foreground)), hsl(var(--muted-foreground)), hsl(var(--foreground)))",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                Accelerate Your Projects with
              </motion.span>{" "}
              <motion.span 
                className="inline-block"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--primary)), hsl(210 100% 60%), hsl(200 100% 50%), hsl(var(--primary)))",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Plane
              </motion.span>
            </motion.h1>

            {/* Subheadline with fade-in words */}
            <motion.p 
              className="mb-10 max-w-2xl text-lg sm:text-xl lg:mx-0 mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.span
                style={{
                  background: "linear-gradient(90deg, hsl(var(--muted-foreground)), hsl(var(--foreground)/0.7), hsl(var(--muted-foreground)))",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {COMPANY.name} is Spain's first certified Plane partner. We help teams ship faster with expert implementation, migration, and custom solutions for Plane's unified workspace.
              </motion.span>
            </motion.p>

            {/* CTAs with hover glow */}
            <motion.div 
              className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                {/* Button glow */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-400 to-primary rounded-lg opacity-0 group-hover:opacity-70 blur-md transition-opacity"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                />
                <Button asChild size="lg" className="relative min-w-[180px]">
                  <Link to="/solutions">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild variant="outline" size="lg" className="min-w-[180px] relative overflow-hidden group">
                  <Link to="/contact">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <Play className="mr-2 h-4 w-4 relative z-10" />
                    <span className="relative z-10">Schedule a Demo</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators with stagger animation */}
            <motion.div 
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[
                { icon: "✓", text: "Enterprise Ready" },
                { icon: "✓", text: "SOC 2 & GDPR" },
                { icon: "✓", text: "24/7 Support" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-2 relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.15 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.svg 
                    className="h-5 w-5 text-primary" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    animate={{ 
                      filter: ["drop-shadow(0 0 0px hsl(var(--primary)))", "drop-shadow(0 0 6px hsl(var(--primary)))", "drop-shadow(0 0 0px hsl(var(--primary)))"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </motion.svg>
                  <motion.span
                    className="text-muted-foreground"
                    style={{
                      background: "linear-gradient(90deg, hsl(var(--muted-foreground)), hsl(var(--foreground)/0.8), hsl(var(--muted-foreground)))",
                      backgroundSize: "200% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {item.text}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Video with animated frame */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Animated frame container */}
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary via-primary/50 to-primary/20">
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-blue-400 to-primary opacity-75 blur-sm"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
              />
              
              {/* Corner accents */}
              <motion.div
                className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <motion.div
                className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />

              {/* Title header bar */}
              <div className="relative bg-card rounded-t-xl border-b border-border/50">
                <div className="flex items-center gap-3 px-4 py-3">
                  {/* Window controls */}
                  <div className="flex gap-1.5">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-red-500"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-yellow-500"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-green-500"
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                  
                  {/* Title with typing animation */}
                  <motion.div 
                    className="flex-1 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.span 
                      className="text-sm font-medium text-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      <span className="text-primary font-semibold">Plane Compose</span>
                      <span className="text-muted-foreground hidden sm:inline">, the implementation layer of </span>
                      <span className="text-primary font-mono hidden sm:inline">Projects-as-Code</span>
                    </motion.span>
                  </motion.div>
                  
                  {/* Live indicator */}
                  <motion.div 
                    className="flex items-center gap-1.5"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs text-muted-foreground hidden sm:inline">LIVE</span>
                  </motion.div>
                </div>
              </div>

              {/* Video container */}
              <div className="relative bg-card rounded-b-xl overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/rzpc1UVW1Xw?autoplay=1&mute=1&loop=1&playlist=rzpc1UVW1Xw&controls=0&showinfo=0&rel=0&modestbranding=1"
                    title="Plane Demo Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-primary/5 to-transparent"
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ height: "50%" }}
                />
              </div>
            </div>
            
            {/* Decorative glow */}
            <div className="absolute -inset-8 -z-10 bg-primary/20 blur-3xl rounded-full opacity-40" />
            
            {/* Floating particles around frame */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: i < 3 ? "-8px" : "calc(100% + 4px)",
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
