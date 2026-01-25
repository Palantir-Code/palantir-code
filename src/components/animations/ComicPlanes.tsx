import { motion } from "framer-motion";

const ComicPlanes = () => {
  const planes = [
    { id: 1, size: 60, top: "15%", duration: 18, delay: 0, direction: 1 },
    { id: 2, size: 45, top: "35%", duration: 22, delay: 4, direction: 1 },
    { id: 3, size: 35, top: "55%", duration: 25, delay: 8, direction: -1 },
    { id: 4, size: 50, top: "75%", duration: 20, delay: 2, direction: 1 },
    { id: 5, size: 40, top: "85%", duration: 28, delay: 12, direction: -1 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {planes.map((plane) => (
        <motion.div
          key={plane.id}
          className="absolute"
          style={{ top: plane.top }}
          initial={{ 
            x: plane.direction === 1 ? "-15%" : "115vw",
          }}
          animate={{ 
            x: plane.direction === 1 ? "115vw" : "-15%",
          }}
          transition={{
            duration: plane.duration,
            delay: plane.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Comic-style airplane SVG */}
          <svg
            width={plane.size}
            height={plane.size}
            viewBox="0 0 100 100"
            className={`${plane.direction === -1 ? 'scale-x-[-1]' : ''}`}
            style={{ 
              filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.15))",
              transform: `${plane.direction === -1 ? 'scaleX(-1)' : ''} rotate(-15deg)`
            }}
          >
            {/* Motion lines - comic style */}
            <g className="opacity-40">
              <motion.line
                x1="5" y1="45" x2="25" y2="45"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
              <motion.line
                x1="8" y1="52" x2="22" y2="52"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 0.4, repeat: Infinity, delay: 0.1 }}
              />
              <motion.line
                x1="10" y1="38" x2="20" y2="38"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
              />
            </g>

            {/* Plane body - comic style with bold outlines */}
            <g>
              {/* Main fuselage */}
              <ellipse
                cx="55"
                cy="50"
                rx="35"
                ry="10"
                fill="hsl(var(--primary))"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
              />
              
              {/* Cockpit */}
              <ellipse
                cx="82"
                cy="48"
                rx="10"
                ry="6"
                fill="hsl(var(--primary))"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
              />
              
              {/* Cockpit window */}
              <ellipse
                cx="84"
                cy="47"
                rx="5"
                ry="3"
                fill="white"
                opacity="0.9"
              />
              
              {/* Top wing */}
              <path
                d="M 40 50 L 55 25 L 70 25 L 60 50 Z"
                fill="hsl(var(--primary))"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              
              {/* Bottom wing */}
              <path
                d="M 40 50 L 55 75 L 70 75 L 60 50 Z"
                fill="hsl(var(--primary))"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              
              {/* Tail fin */}
              <path
                d="M 22 50 L 15 35 L 30 35 L 30 50 Z"
                fill="hsl(var(--primary))"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              
              {/* Tail horizontal */}
              <path
                d="M 20 50 L 25 60 L 35 60 L 30 50 Z"
                fill="hsl(var(--primary))"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              
              {/* Highlight on body */}
              <ellipse
                cx="60"
                cy="46"
                rx="20"
                ry="3"
                fill="white"
                opacity="0.3"
              />
              
              {/* Wing highlights */}
              <line
                x1="52" y1="30" x2="62" y2="30"
                stroke="white"
                strokeWidth="2"
                opacity="0.3"
                strokeLinecap="round"
              />
              <line
                x1="52" y1="70" x2="62" y2="70"
                stroke="white"
                strokeWidth="2"
                opacity="0.3"
                strokeLinecap="round"
              />
            </g>

            {/* Speed burst circles - comic style */}
            <motion.circle
              cx="12"
              cy="50"
              r="3"
              fill="hsl(var(--primary))"
              opacity="0.3"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            <motion.circle
              cx="6"
              cy="50"
              r="2"
              fill="hsl(var(--primary))"
              opacity="0.2"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.05, 0.2] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            />
          </svg>
        </motion.div>
      ))}
      
      {/* Additional small decorative planes with trails */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={`trail-${i}`}
          className="absolute"
          style={{ top: `${20 + i * 25}%` }}
          initial={{ x: "-10%", y: 0 }}
          animate={{ 
            x: "110vw",
            y: [0, -20, 10, -15, 0],
          }}
          transition={{
            x: { duration: 30 + i * 5, delay: i * 7, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg width="30" height="30" viewBox="0 0 50 50" style={{ transform: "rotate(-10deg)" }}>
            {/* Dotted trail */}
            <motion.g opacity="0.3">
              {[...Array(6)].map((_, idx) => (
                <motion.circle
                  key={idx}
                  cx={5 - idx * 8}
                  cy="25"
                  r={2 - idx * 0.3}
                  fill="hsl(var(--primary))"
                  initial={{ opacity: 0.4 - idx * 0.06 }}
                  animate={{ opacity: [0.4 - idx * 0.06, 0.1, 0.4 - idx * 0.06] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: idx * 0.1 }}
                />
              ))}
            </motion.g>
            
            {/* Simple plane silhouette */}
            <path
              d="M 45 25 L 30 20 L 15 25 L 30 30 Z M 15 25 L 10 20 L 12 25 L 10 30 Z"
              fill="hsl(var(--primary))"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default ComicPlanes;
