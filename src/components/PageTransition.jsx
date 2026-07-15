import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export default function PageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    initial: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 18 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      }
    },
    exit: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : -18,
      transition: { 
        duration: 0.3, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-transition-wrapper"
    >
      {children}
    </motion.div>
  );
}
