import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

// Matrix rain column component
const MatrixColumn = ({ delay, left, speed }: { delay: number; left: string; speed: number }) => {
  const chars = "アイウエオカキクケコサシスセソタチツテト0123456789ABCDEFPLANE";
  
  const characters = useMemo(() => {
    return [...Array(20)].map(() => chars[Math.floor(Math.random() * chars.length)]);
  }, []);
  
  return (
    <motion.div
      className="absolute top-0 flex flex-col font-mono text-xs text-primary/60"
      style={{ left }}
      initial={{ y: "-100%" }}
      animate={{ y: "100%" }}
      transition={{
        duration: speed,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {characters.map((char, i) => (
        <span 
          key={i} 
          className="leading-tight"
          style={{ 
            opacity: Math.max(0.1, 1 - i * 0.05),
            textShadow: i === 0 ? '0 0 10px hsl(280 70% 60%)' : 'none',
            color: i === 0 ? 'hsl(280 70% 70%)' : undefined
          }}
        >
          {char}
        </span>
      ))}
    </motion.div>
  );
};

interface MatrixRainProps {
  columnCount?: number;
  opacity?: number;
}

const MatrixRain = ({ columnCount = 30, opacity = 0.4 }: MatrixRainProps) => {
  // Randomised decoration: render on the client only so the server HTML and
  // the first client render stay identical (no hydration mismatch).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const columns = useMemo(() => {
    return [...Array(columnCount)].map((_, i) => ({
      id: i,
      left: `${(i / columnCount) * 100}%`,
      delay: Math.random() * 5,
      speed: 4 + Math.random() * 4,
    }));
  }, [columnCount]);

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }} />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      {columns.map((col) => (
        <MatrixColumn key={col.id} left={col.left} delay={col.delay} speed={col.speed} />
      ))}
    </div>
  );
};

export default MatrixRain;
