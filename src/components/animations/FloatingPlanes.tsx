import { motion } from "framer-motion";
import { Plane } from "lucide-react";

interface FloatingPlanesProps {
  count?: number;
  className?: string;
}

const FloatingPlanes = ({ count = 5, className = "" }: FloatingPlanesProps) => {
  const planes = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 12 + Math.random() * 16,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 20,
    rotation: -45 + Math.random() * 30,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {planes.map((plane) => (
        <motion.div
          key={plane.id}
          className="absolute text-primary/10"
          style={{
            left: `${plane.left}%`,
            top: `${plane.top}%`,
          }}
          initial={{ 
            x: "-100%", 
            y: "100%",
            rotate: plane.rotation,
          }}
          animate={{ 
            x: ["0%", "200%"],
            y: ["0%", "-200%"],
          }}
          transition={{
            duration: plane.duration,
            delay: plane.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Plane 
            size={plane.size} 
            className="transform rotate-[-45deg]"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingPlanes;
