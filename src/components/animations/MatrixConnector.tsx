import { motion } from "framer-motion";

interface MatrixConnectorProps {
  className?: string;
}

const MatrixConnector = ({ className = "" }: MatrixConnectorProps) => {
  // Generate random matrix characters
  const getRandomChar = () => {
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
    return chars[Math.floor(Math.random() * chars.length)];
  };

  // Create multiple streams
  const streams = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    delay: i * 0.3,
    duration: 1.5 + Math.random() * 0.5,
    chars: Array.from({ length: 8 }, () => getRandomChar()),
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute flex flex-col items-center text-primary font-mono text-xs"
          style={{
            left: `${15 + stream.id * 18}%`,
            top: 0,
          }}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ 
            y: "100%", 
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: stream.duration,
            delay: stream.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {stream.chars.map((char, i) => (
            <span 
              key={i} 
              className="terminal-glow"
              style={{ 
                opacity: 1 - (i * 0.1),
              }}
            >
              {char}
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default MatrixConnector;
