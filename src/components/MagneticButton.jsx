import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

export default function MagneticButton({ children, className = "", id = "", onClick, style = {} }) {
  const buttonRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Motion coordinates for the magnetic pull
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to damp and interpolate the movement
  const springX = useSpring(x, { stiffness: 120, damping: 15, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 15, mass: 0.6 });

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !buttonRef.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Calculate relative distance from center of the button
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Max movement threshold (px)
    const maxPull = 14; 
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Apply a scaling pull factor
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'inline-block',
        x: springX,
        y: springY,
        ...style
      }}
    >
      <motion.div
        className={className}
        id={id}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: isHovered 
            ? '0 10px 25px rgba(231, 84, 128, 0.25)' 
            : '0 4px 12px rgba(92, 58, 33, 0.05)'
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
