import { motion } from "framer-motion";

interface GridBackgroundProps {
  className?: string;
}

const GridBackground = ({ className = "" }: GridBackgroundProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Base grid pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(280 70% 60% / 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(280 70% 60% / 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated expanding grid circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
          initial={{ width: 0, height: 0, opacity: 0.8 }}
          animate={{ 
            width: [0, 1200, 2000],
            height: [0, 1200, 2000],
            opacity: [0.6, 0.3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2.5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Animated grid lines - horizontal */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          style={{ top: `${(i + 1) * 12}%` }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: [0, 1, 1, 0],
            opacity: [0, 0.5, 0.5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated grid lines - vertical */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent"
          style={{ left: `${(i + 1) * 8}%` }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ 
            scaleY: [0, 1, 1, 0],
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Perspective grid floor effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[40%] opacity-30"
        style={{
          background: `
            linear-gradient(to top, hsl(240 10% 6%) 0%, transparent 100%)
          `,
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[40%]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(280 70% 60% / 0.15) 1px, transparent 1px),
            linear-gradient(to top, hsl(280 70% 60% / 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        }}
        animate={{
          backgroundPositionY: ['0px', '-40px'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glowing corner nodes */}
      {[
        { top: '20%', left: '15%' },
        { top: '30%', right: '20%' },
        { bottom: '35%', left: '25%' },
        { bottom: '25%', right: '15%' },
        { top: '50%', left: '10%' },
        { top: '40%', right: '30%' },
      ].map((pos, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            ...pos,
            background: i % 2 === 0 
              ? 'hsl(280 70% 60%)' 
              : 'hsl(185 80% 55%)',
            boxShadow: i % 2 === 0
              ? '0 0 20px hsl(280 70% 60% / 0.8), 0 0 40px hsl(280 70% 60% / 0.4)'
              : '0 0 20px hsl(185 80% 55% / 0.8), 0 0 40px hsl(185 80% 55% / 0.4)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connecting lines between nodes */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.line
          x1="15%" y1="20%" x2="80%" y2="30%"
          stroke="url(#gridGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="25%" y1="65%" x2="85%" y2="75%"
          stroke="url(#gridGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
        />
        <motion.line
          x1="10%" y1="50%" x2="70%" y2="40%"
          stroke="url(#gridGradientAccent)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(280 70% 60%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(280 70% 60%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(280 70% 60%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gridGradientAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(185 80% 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(185 80% 55%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(185 80% 55%)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GridBackground;