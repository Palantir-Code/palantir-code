import { motion } from "framer-motion";
import { Twitter, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useEffect, useState, useRef } from "react";

type Platform = "twitter" | "discord" | "reddit";

interface Testimonial {
  name: string;
  handle?: string;
  content: string;
  platform: Platform;
  avatar: string;
}

const testimonials: Testimonial[] = [
  { name: "Clay Risser", handle: "@risserclay", content: "Personally I prefer plane.so @planepowers", platform: "twitter", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
  { name: "Alex Drakonov", handle: "@BogDrakonov", content: "Hey @linear when will multiple assignees on the same ticket be a thing? An open source alternative (@planepowers) has this feature and it's super handy!", platform: "twitter", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
  { name: "Sarah Wings", content: "At this point everything I work on across multiple teams is going to use Plane, so I have now one way of thinking about the world.", platform: "discord", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
  { name: "Michael Chen", content: "Thank you for creating great products that my team and I can't live without in my actual work.", platform: "discord", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
  { name: "Albert Rodriguez", content: "Hello, Albert here. I am very impressed with the Free Cloud plan. Atlassian better be scared xd", platform: "discord", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" },
  { name: "Laura Martinez", content: "I'm personally moving from Atlassian to Plane and the experience has been amazing.", platform: "discord", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
  { name: "Marcus Williams", content: "Plane is hands down the best project in existence.", platform: "discord", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face" },
  { name: "Niran Patel", content: "Hi guys, I am new here. It's been a while using a self hosted plane to manage engineering projects. Already in love with the features and smooth UI. 🤩", platform: "discord", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
  { name: "Scott Thompson", content: "Hello, Scott here! I'm moving to Plane from Linear, thank you so much for making Plane open source.", platform: "discord", avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face" },
  { name: "Elena Kowalski", content: "Hi this app looks amazing! I just selfhosted it and it was so easy.", platform: "discord", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face" },
  { name: "James Parker", content: "Yo, how is this free? It's just so good!", platform: "discord", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop&crop=face" },
  { name: "Dr. Hannah Lee", content: "I really like the kanban board and overall theme. This looks like a great alternative for someone used to Jira that wants to switch to self-hosted.", platform: "reddit", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face" },
];

const PlatformIcon = ({ platform }: { platform: Platform }) => {
  switch (platform) {
    case "twitter": return <Twitter className="h-4 w-4" />;
    case "discord": return <MessageCircle className="h-4 w-4" />;
    case "reddit": return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    );
  }
};

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden bg-muted/20">
      {/* Airplane Silhouette Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large airplane silhouette */}
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] max-w-[1400px] opacity-[0.04]"
          viewBox="0 0 800 400"
          fill="currentColor"
        >
          {/* Airplane body */}
          <path
            d="M750 200 L650 190 L400 180 L380 120 L350 120 L370 175 L150 160 L120 100 L90 100 L115 155 L50 150 L30 140 L20 150 L30 160 L50 160 L50 170 L30 180 L20 170 L30 160 L50 170 L115 175 L90 230 L120 230 L150 170 L370 185 L350 240 L380 240 L400 190 L650 200 L750 200"
            className="text-primary"
          />
          {/* Wing top */}
          <path
            d="M300 180 L280 80 L320 80 L340 175"
            className="text-primary"
          />
          {/* Wing bottom */}
          <path
            d="M300 190 L280 290 L320 290 L340 195"
            className="text-primary"
          />
          {/* Tail */}
          <path
            d="M680 190 L700 130 L720 130 L705 185 M680 200 L700 260 L720 260 L705 205"
            className="text-primary"
          />
        </svg>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2 terminal-glow">{t("testimonials.label")}</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("testimonials.title")}{" "}
            <span className="text-gradient">{t("testimonials.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("testimonials.description")}</p>
        </ScrollReveal>

        {/* Carousel Container */}
        <div 
          ref={containerRef}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Carousel Track */}
          <div className="overflow-hidden px-4">
            <motion.div 
              className="flex gap-6"
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {getVisibleTestimonials().map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.originalIndex}-${currentIndex}`}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 20 
                  }}
                >
                  <div className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 backdrop-blur-sm h-full">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Header with Avatar */}
                    <div className="relative flex items-center gap-4 mb-4">
                      {/* Real Avatar with blur overlay */}
                      <div className="relative">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/30"
                        />
                        {/* Blur overlay */}
                        <div className="absolute inset-0 rounded-full backdrop-blur-[2px] bg-background/20" />
                        {/* Online indicator */}
                        <motion.div 
                          className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-green-500 ring-2 ring-card"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground truncate">{testimonial.name}</p>
                        {testimonial.handle && (
                          <p className="text-xs text-primary/70">{testimonial.handle}</p>
                        )}
                      </div>
                      <div className="text-primary/60">
                        <PlatformIcon platform={testimonial.platform} />
                      </div>
                    </div>

                    {/* Content */}
                    <p className="relative text-sm text-muted-foreground leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Scanline effect on hover */}
                    <div className="absolute inset-0 rounded-xl scanlines opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-card/80 border border-border hover:border-primary/50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-card/80 border border-border hover:border-primary/50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
