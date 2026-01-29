import { motion } from "framer-motion";
import { Twitter, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

type Platform = "twitter" | "discord" | "reddit";

interface Testimonial {
  name: string;
  handle?: string;
  content: string;
  platform: Platform;
}

const testimonials: Testimonial[] = [
  {
    name: "Clay Risser",
    handle: "@risserclay",
    content: "Personally I prefer plane.so @planepowers",
    platform: "twitter",
  },
  {
    name: "BogDrakonov.eth 🏴",
    handle: "@BogDrakonov",
    content: "Hey @linear when will multiple assignees on the same ticket be a thing? An open source alternative (@planepowers) has this feature and it's super handy!",
    platform: "twitter",
  },
  {
    name: "wings",
    content: "At this point everything I work on across multiple teams is going to use Plane, so I have now one way of thinking about the world.",
    platform: "discord",
  },
  {
    name: "kelisidupf",
    content: "Thank you for creating great products that my team and I can't live without in my actual work.",
    platform: "discord",
  },
  {
    name: "Albert",
    content: "Hello, Albert here. I am very impressed with the Free Cloud plan. Atlassian better be scared xd",
    platform: "discord",
  },
  {
    name: "lsass.exe",
    content: "I'm personally moving from Atlassian to Plane and the experience has been amazing.",
    platform: "discord",
  },
  {
    name: "MAHcodes",
    content: "Plane is hands down the best project in existence.",
    platform: "discord",
  },
  {
    name: "Niran",
    content: "Hi guys, I am new here. It's been a while using a self hosted plane to manage engineering projects. Already in love with the features and smooth UI. 🤩",
    platform: "discord",
  },
  {
    name: "scottloadablecontent",
    content: "Hello, Scott here! I'm moving to Plane from Linear, thank you so much for making Plane open source.",
    platform: "discord",
  },
  {
    name: "chsasank",
    content: "Hi this app looks amazing! I just selfhosted it and it was so easy.",
    platform: "discord",
  },
  {
    name: "McHectic",
    content: "Yo, how is this free? It's just so good!",
    platform: "discord",
  },
  {
    name: "DrH0rrible",
    content: "I really like the kanban board and overall theme. This looks like a great alternative for someone used to Jira that wants to switch to self-hosted.",
    platform: "reddit",
  },
];

const PlatformIcon = ({ platform }: { platform: Platform }) => {
  switch (platform) {
    case "twitter":
      return <Twitter className="h-4 w-4" />;
    case "discord":
      return <MessageCircle className="h-4 w-4" />;
    case "reddit":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
        </svg>
      );
  }
};

const Testimonials = () => {
  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2 terminal-glow">TESTIMONIALS</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Teams Say About{" "}
            <span className="text-gradient">Plane</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Over 1M+ users trust Plane. Here's what some of them have to say.
          </p>
        </ScrollReveal>

        {/* Testimonials Grid - Masonry style */}
        <StaggerContainer className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4" staggerDelay={0.1}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="break-inside-avoid group relative rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 backdrop-blur-sm"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Header */}
                <div className="relative flex items-center gap-3 mb-3">
                  {/* Avatar placeholder */}
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate">{testimonial.name}</p>
                    {testimonial.handle && (
                      <p className="text-xs text-muted-foreground">{testimonial.handle}</p>
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
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Testimonials;
