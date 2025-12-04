import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CircuitPaths = () => {
  const paths = [
    {
      id: 1,
      d: "M 100 200 Q 300 100 500 200 T 900 200",
      length: 800,
    },
    {
      id: 2,
      d: "M 200 400 Q 400 300 600 400 T 1000 400",
      length: 800,
    },
    {
      id: 3,
      d: "M 150 600 Q 350 500 550 600 T 950 600",
      length: 800,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 3 }}>
      <svg className="w-full h-full opacity-20">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d9ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00d9ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#39ff14" stopOpacity="0" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {paths.map((path) => (
          <g key={path.id}>
            {/* Base path */}
            <path
              d={path.d}
              fill="none"
              stroke="#00d9ff"
              strokeWidth="1"
              opacity="0.3"
            />
            
            {/* Animated flowing line */}
            <motion.path
              d={path.d}
              fill="none"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              strokeDasharray={path.length}
              initial={{ strokeDashoffset: path.length }}
              animate={{ strokeDashoffset: -path.length }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: path.id * 0.5,
              }}
            />

            {/* Circuit nodes */}
            {[0, 0.25, 0.5, 0.75, 1].map((position, idx) => {
              const point = getPointAtLength(path.d, position);
              return (
                <motion.circle
                  key={`${path.id}-node-${idx}`}
                  cx={point.x}
                  cy={point.y}
                  r="4"
                  fill="#00d9ff"
                  filter="url(#glow)"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.3,
                  }}
                />
              );
            })}
          </g>
        ))}

        {/* Vertical connection lines */}
        <line x1="500" y1="200" x2="600" y2="400" stroke="#00d9ff" strokeWidth="1" opacity="0.2" strokeDasharray="5,5" />
        <line x1="550" y1="400" x2="550" y2="600" stroke="#39ff14" strokeWidth="1" opacity="0.2" strokeDasharray="5,5" />
      </svg>
    </div>
  );
};

// Helper function to get approximate point on path
const getPointAtLength = (d, position) => {
  // Parse simple path for demonstration
  // In production, use proper SVG path parsing
  const pathRegex = /M\s*([\d.]+)\s+([\d.]+)/;
  const match = d.match(pathRegex);
  
  if (match) {
    const startX = parseFloat(match[1]);
    const startY = parseFloat(match[2]);
    
    // Simple approximation for Q path
    const endX = startX + 800 * position;
    const endY = startY + Math.sin(position * Math.PI) * 50;
    
    return { x: endX, y: endY };
  }
  
  return { x: 100, y: 200 };
};

export default CircuitPaths;
