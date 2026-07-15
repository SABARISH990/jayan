import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

export default function AnimatedCounter({ value, duration = 2, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) return;

    if (start === end) return;

    // Total duration of the animation in ms
    const totalDurationMs = duration * 1000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / totalDurationMs, 1);

      // Ease out cubic easing function for natural deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentCount = Math.floor(easeProgress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={containerRef} className="animated-counter">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
