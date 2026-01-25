import { motion } from "framer-motion";

interface FlightPathProps {
  className?: string;
}

const FlightPath = ({ className = "" }: FlightPathProps) => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Dotted flight path */}
      <motion.path
        d="M -10,80 Q 30,60 50,50 T 110,20"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.3"
        strokeDasharray="2,2"
        className="text-primary/20"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 2,
        }}
      />
      
      {/* Secondary path */}
      <motion.path
        d="M 110,90 Q 70,70 50,55 T -10,30"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
        strokeDasharray="1.5,1.5"
        className="text-primary/10"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 4,
          delay: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 3,
        }}
      />
    </svg>
  );
};

export default FlightPath;
