import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export default function AnimatedHeading({ text, className = "", style = {}, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay,
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 35,
      rotate: shouldReduceMotion ? 0 : 2 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotate: 0,
      transition: { 
        type: "spring",
        damping: 18,
        stiffness: 120
      }
    }
  };

  return (
    <motion.h1 
      className={`animated-heading ${className}`}
      style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        rowGap: "0.2em",
        columnGap: "0.25em",
        ...style 
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {words.map((word, idx) => (
        <span key={idx} style={{ overflow: "hidden", display: "inline-block", paddingBottom: "4px" }}>
          <motion.span 
            variants={wordVariants} 
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
