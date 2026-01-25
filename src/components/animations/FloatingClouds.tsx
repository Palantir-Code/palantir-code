import { motion } from "framer-motion";
import { Cloud } from "lucide-react";

interface FloatingCloudsProps {
  count?: number;
  className?: string;
}

const FloatingClouds = ({ count = 4, className = "" }: FloatingCloudsProps) => {
  const clouds = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 40 + Math.random() * 60,
    left: -10 + Math.random() * 20,
    top: 10 + (i * 20) + Math.random() * 10,
    delay: i * 3,
    duration: 30 + Math.random() * 20,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute text-muted-foreground/5"
          style={{
            top: `${cloud.top}%`,
          }}
          initial={{ 
            left: "-15%",
          }}
          animate={{ 
            left: "115%",
          }}
          transition={{
            duration: cloud.duration,
            delay: cloud.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Cloud size={cloud.size} strokeWidth={1} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingClouds;
