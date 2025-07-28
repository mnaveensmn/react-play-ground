import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './ConfettiCheckmark.css';

interface ConfettiCheckmarkProps {
  duration?: number;
  confettiCount?: number;
}

const ConfettiCheckmark: React.FC<ConfettiCheckmarkProps> = ({
  duration = 0.6,
  confettiCount = 60,
}) => {
  const [confetti, setConfetti] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    rotation: number;
    endX: number;
    endY: number;
    endRotation: number;
    borderRadius: string;
  }>>([]);

  // regenerate confetti metadata when count changes
  useEffect(() => {
    const pieces = [] as typeof confetti;
    for (let i = 0; i < confettiCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 10 + Math.random() * 20; // start near center
      pieces.push({
        id: i,
        x: 50 + Math.cos(angle) * radius,
        y: 50 + Math.sin(angle) * radius,
        size: 4 + Math.random() * 6,
        color: ["#FFD700", "#FF6B6B", "#4ECDC4", "#8CDF6F"][Math.floor(Math.random() * 4)],
        rotation: Math.random() * 360,
        endX: (Math.random() - 0.5) * 120,
        endY: (Math.random() - 0.5) * 120,
        endRotation: Math.random() > 0.5 ? 720 : -720,
        borderRadius: Math.random() > 0.5 ? "50%" : "2px",
      });
    }
    setConfetti(pieces);
  }, [confettiCount]);

  return (
    <div className="confetti-checkmark-container">
      {/* Confetti burst */}
      {confetti.map((p) => (
        <motion.div
          key={`${p.id}-${duration}`}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.borderRadius,
            left: `${p.x}%`,
            top: `${p.y}%`,
            transformOrigin: "center",
            zIndex: 2,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1],
            opacity: [0, 1, 0],
            x: [0, p.endX],
            y: [0, p.endY],
            rotate: [p.rotation, p.rotation + p.endRotation],
          }}
          transition={{
            duration: duration,
            times: [0, 0.15, 1],
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 0.2,
          }}
        />
      ))}

      {/* Main checkmark SVG */}
      <motion.svg
        key={`checkmark-${duration}`}
        className="checkmark-svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 99 99"
        animate={{ scale: [0, 1], rotate: [-90, 0], opacity: [0, 1] }}
        transition={{ 
          type: "spring", 
          duration, 
          bounce: 0.4, 
          repeat: Infinity, 
          repeatDelay: 0.2 
        }}
      >
        <g clipPath="url(#clip0_4_96)">
          {/* Green Circle Background */}
          <motion.circle
            cx="49.5"
            cy="49.5"
            r="49.5"
            fill="#8CDF6F"
          />
          
          {/* Checkmark Path */}
          <motion.path
            key={`path-${duration}`}
            d="M20 49 L42 71 L79 34"
            stroke="#000000"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: duration * 0.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.2,
              delay: 0.1
            }}
          />
        </g>
        <defs>
          <clipPath id="clip0_4_96">
            <rect fill="white" height="99" width="99" />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
};

export default ConfettiCheckmark;
