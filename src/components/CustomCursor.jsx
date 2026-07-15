import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for high-end inertia feel
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is touch or has no pointer
    const checkTouch = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(isTouch);
    };
    
    checkTouch();
    window.addEventListener('resize', checkTouch);

    if (isTouchDevice) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    // Event listeners to detect interactive hover states
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], input, select, textarea, .cake-card, .interactive-hover');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Periodically re-add listeners to capture dynamically loaded elements
    addHoverListeners();
    const interval = setInterval(addHoverListeners, 1500);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearInterval(interval);
    };
  }, [isTouchDevice, hidden, cursorX, cursorY]);

  if (isTouchDevice || hidden) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        className="custom-cursor-outer"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hovered ? 1.8 : 1,
          backgroundColor: hovered ? 'rgba(231, 84, 128, 0.15)' : 'rgba(231, 84, 128, 0)',
          borderColor: hovered ? 'var(--color-rose)' : 'var(--color-chocolate)',
          borderWidth: hovered ? '1.5px' : '1px',
        }}
        transition={{ type: 'tween', duration: 0.2 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="custom-cursor-inner"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hovered ? 0.4 : 1,
          backgroundColor: 'var(--color-rose)',
        }}
        transition={{ type: 'tween', duration: 0.15 }}
      />
    </>
  );
}
