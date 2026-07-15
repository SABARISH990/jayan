import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { Sparkles, Calendar, Heart, Award, ArrowRight } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import MagneticButton from './MagneticButton';
import { useState, useEffect } from "react";
export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Create mock floating particles
  const particles = Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    size: Math.random() * 12 + 6,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 20 + 20,
    opacity: Math.random() * 0.4 + 0.15,
    color: i % 3 === 0 ? 'var(--color-rose)' : i % 3 === 1 ? 'var(--color-chocolate)' : 'var(--color-soft-pink-dark)'
  }));
  const heroImages = [
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1562266135-be457568a2ee?auto=format&fit=crop&w=800&q=80"
];

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, 3000); // every 3 seconds

  return () => clearInterval(interval);
}, []);

  return (
    <section className="hero relative overflow-hidden" id="hero-section" style={{ padding: '80px 0 100px 0' }}>
      
      {/* 1. Animated Gradient Background Blobs */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 40, 0],
              scale: [1, 1.15, 0.9, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: '15%',
              right: '10%',
              width: '450px',
              height: '450px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(250,218,221,0.6) 0%, rgba(255,248,240,0) 70%)',
              filter: 'blur(50px)',
            }}
          />
          <motion.div
            animate={{
              x: [0, -50, 30, 0],
              y: [0, 40, -30, 0],
              scale: [1, 0.9, 1.1, 1]
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '5%',
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(231,84,128,0.1) 0%, rgba(255,248,240,0) 75%)',
              filter: 'blur(60px)',
            }}
          />
        </div>
      )}

      {/* 2. Floating Particles */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
          {particles.map((p) => (
            <motion.div
              key={p.id}
              animate={{
                y: ['0vh', '-110vh'],
                x: [0, Math.sin(p.id) * 60]
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear"
              }}
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: `${p.x}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                borderRadius: '50%',
                backgroundColor: p.color,
                opacity: p.opacity,
                filter: 'blur(0.5px)'
              }}
            />
          ))}
        </div>
      )}

      {/* Hero Grid Container */}
      <div className="hero-grid relative" style={{ zIndex: 2 }}>
        
        {/* Left Side Content */}
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-badge"
          >
            <Sparkles size={16} style={{ color: 'var(--color-rose)' }} />
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em' }}>Handmade with Love</span>
          </motion.div>
          
          {/* Staggered Heading Word reveal */}
          <AnimatedHeading 
            text="Bespoke Creations for Sweet Life" 
            className="hero-title"
            style={{ fontFamily: 'var(--font-display)' }}
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-subtitle"
            style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text-muted)' }}
          >
            From our family kitchen to your most beloved celebrations, we craft exquisite artisanal cakes using only organic, locally-sourced ingredients. Experience the ultimate luxury of homemade baking.
          </motion.p>
          
          <div className="hero-actions" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '16px' }}>
            <MagneticButton className="btn-primary" id="hero-order-btn">
              <Link to="/custom-order" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', textDecoration: 'none' }}>
                Order Custom Cake <Calendar size={18} />
              </Link>
            </MagneticButton>
            
            <MagneticButton className="btn-secondary" id="hero-explore-btn">
              <Link to="/cakes" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-chocolate)', textDecoration: 'none' }}>
                Explore Menu <ArrowRight size={16} />
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Right Side Image Composition */}
        <div className="hero-image-wrapper">
          {/* Rotated background card mimicking design document */}
          <motion.div 
            initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
            animate={{ opacity: 0.7, rotate: 6, scale: 1 }}
            transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.3 }}
            className="hero-bg-blob"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              maxWidth: '380px',
              maxHeight: '480px',
              backgroundColor: 'var(--color-soft-pink)',
              borderRadius: '90px',
              zIndex: 1
            }}
          />

          {/* Foreground Frame */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.4 }}
            className="hero-image-frame"
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              maxWidth: '380px',
              height: '480px',
              backgroundColor: 'white',
              borderRadius: '90px',
              boxShadow: 'var(--shadow-medium)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '4px solid white'
            }}
          >
            {/* Reveal Overlay Animation */}
            <motion.div
              initial={{ height: '100%' }}
              animate={{ height: '0%' }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.6 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                backgroundColor: 'var(--color-chocolate)',
                zIndex: 3
              }}
            />

          <div className="text-center" style={{ padding: "30px" }}>
  <motion.img
    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
    alt="Premium Cake"
    animate={{
      y: [0, -15, 0],
      rotate: [0, 2, -2, 0],
      scale: [1, 1.03, 1]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    style={{
      width: "260px",
      height: "260px",
      objectFit: "cover",
      borderRadius: "24px",
      boxShadow: "0 20px 40px rgba(0,0,0,.2)",
      marginBottom: "20px"
    }}
  />

  <h3
    className="hero-showcase-title"
    style={{
      fontFamily: "var(--font-display)",
      fontSize: "1.8rem",
      color: "var(--color-chocolate)"
    }}
  >
    Choco Truffle Special
  </h3>

  <p
    className="hero-showcase-tag"
    style={{
      color: "var(--color-rose)",
      fontWeight: "bold"
    }}
  >
    Award Winning 2024
  </p>
</div>
</motion.div> 
          
          {/* 3. Floating Sinusoidal Badges */}
          
          {/* Freshly Whipped Badge */}
         

          {/* 100% Organic Rounded Badge (Aligns with Design mock) */}
          <motion.div 
            animate={shouldReduceMotion ? {} : { y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="organic-floating-badge"
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '-20px',
              zIndex: 3,
              backgroundColor: 'var(--color-chocolate)',
              color: 'white',
              padding: '16px',
              borderRadius: '50%',
              width: '96px',
              height: '96px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: '10px',
              textTransform: 'uppercase',
              lineHeight: '1.2',
              fontWeight: 'bold',
              boxShadow: 'var(--shadow-medium)',
              border: '4px solid var(--color-cream)'
            }}
          >
            100% Organic
          </motion.div>
        </div>

      </div>
    </section>
  );
}
