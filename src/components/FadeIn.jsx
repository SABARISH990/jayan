import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export default function FadeIn({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.5, 
  className = "", 
  style = {},
  amount = 0.15
}) {
  const shouldReduceMotion = useReducedMotion();

  // Define translation offset based on direction
  const getDirectionOffset = () => {
    if (shouldReduceMotion) return { x: 0, y: 0 };
    switch (direction) {
      case 'up': return { x: 0, y: 35 };
      case 'down': return { x: 0, y: -35 };
      case 'left': return { x: 35, y: 0 };
      case 'right': return { x: -35, y: 0 };
      default: return { x: 0, y: 0 };
    }
  };

  const offset = getDirectionOffset();

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: offset.x, 
        y: offset.y 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, amount: amount }}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for responsive feel
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
