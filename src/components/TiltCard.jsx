import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useReducedMotion } from 'motion/react';

export default function TiltCard({ children, className = "", id = "", onClick, style = {} }) {
  const cardRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);

  // Motion values for tilt degrees
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Map mouse coordinates to angles (max 10 degrees tilt for premium subtlety)
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  // Spring animations for silky feedback
  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(window.matchMedia('(pointer: coarse)').matches);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || isTouch || !cardRef.current) return;
    const { clientX, clientY } = e;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Position of mouse inside the card scaled 0 to 1
    const px = (clientX - rect.left) / rect.width;
    const py = (clientY - rect.top) / rect.height;

    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`tilt-card-wrapper ${className}`}
      id={id}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        rotateX: shouldReduceMotion || isTouch ? 0 : springRotateX,
        rotateY: shouldReduceMotion || isTouch ? 0 : springRotateY,
        ...style
      }}
      whileHover={{ scale: isTouch ? 1 : 1.02 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
    >
      <div style={{ transform: 'translateZ(15px)', height: '100%', width: '100%' }}>
        {children}
      </div>
    </motion.div>
  );
}
