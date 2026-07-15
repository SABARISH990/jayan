import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from 'motion/react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import logo from "../../assets/logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  const shouldReduceMotion = useReducedMotion();
  const location = useLocation();
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  // Monitor scroll speed and direction to show/hide navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Transparent / scrolled background threshold
    if (latest > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Hide on scroll down, show on scroll up
    const isScrollingDown = latest > lastScrollY.current;
    if (isScrollingDown && latest > 120 && !isOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    lastScrollY.current = latest;
  });

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Stagger configurations for mobile links
  const menuContainerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.3, ease: 'easeInOut' },
        opacity: { duration: 0.25 }
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: 'spring', stiffness: 150, damping: 15 } 
    }
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`} 
      id="site-navigation"
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 }
      }}
      animate={hidden && !shouldReduceMotion ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(255, 248, 240, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(92, 58, 33, 0.08)' : '1px solid transparent',
        transition: 'background-color 0.4s ease, border-color 0.4s ease'
      }}
    >
      <div className="nav-container">
        
        {/* Brand Logo */}
      <Link
  to="/"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
  }}
>
  <motion.img
    src={logo}
    alt="Jayan Homemade Cakes"
    whileHover={{ scale: 1.08, rotate: -5 }}
    transition={{ duration: 0.3 }}
    style={{
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "3px solid #F8D7DA",
      boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    }}
 />
          <div>
            <span className="brand-text" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Jayan </span>
            <span className="brand-tagline">Home Made Cakes</span>
          </div>
        </Link>

        {/* Links list for Desktop */}
        <div className="nav-menu-desktop">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Our Story
          </NavLink>
          <NavLink to="/cakes" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Cake Menu
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Gallery
          </NavLink>
          <NavLink to="/reviews" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Reviews
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
          
          <Link to="/custom-order" className="nav-cta" id="nav-custom-order-cta">
            Order Now
          </Link>
        </div>

        {/* Elegant Animated Hamburger toggle for mobile */}
        <button 
          className={`mobile-toggle-btn ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          id="nav-hamburger"
          style={{
            background: 'none',
            border: 'none',
             // Overridden by media query in CSS, but let's declare custom toggle button styles here or handle gracefully
            cursor: 'pointer',
            padding: '8px',
            position: 'relative',
            zIndex: 1010
          }}
        >
          {isOpen ? <X size={24} style={{ color: 'var(--color-chocolate)' }} /> : <Menu size={24} style={{ color: 'var(--color-chocolate)' }} />}
        </button>

      </div>

      {/* Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mobile-menu-drawer"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              backgroundColor: 'var(--color-cream)',
              borderBottom: '1px solid rgba(92, 58, 33, 0.1)',
              boxShadow: 'var(--shadow-medium)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              padding: '24px 30px 30px 30px',
              gap: '16px',
              zIndex: 999
            }}
          >
            <motion.div variants={linkVariants}>
              <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </motion.div>
            <motion.div variants={linkVariants}>
              <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                Our Story
              </NavLink>
            </motion.div>
            <motion.div variants={linkVariants}>
              <NavLink to="/cakes" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                Cake Menu
              </NavLink>
            </motion.div>
            <motion.div variants={linkVariants}>
              <NavLink to="/gallery" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                Gallery Showcase
              </NavLink>
            </motion.div>
            <motion.div variants={linkVariants}>
              <NavLink to="/reviews" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                Customer Reviews
              </NavLink>
            </motion.div>
            <motion.div variants={linkVariants}>
              <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                Contact Portal
              </NavLink>
            </motion.div>
            <motion.div variants={linkVariants} style={{ paddingTop: '10px', borderTop: '1px dashed rgba(92, 58, 33, 0.1)' }}>
              <Link to="/custom-order" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setIsOpen(false)}>
                Order Custom Cake <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
