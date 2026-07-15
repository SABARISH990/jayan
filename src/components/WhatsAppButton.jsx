import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageCircle,
  Instagram,
  Sparkles,
  X,
  Heart,
  Phone,
  Mail
} from "lucide-react";
export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Hide initial tooltip after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);
  const handleCallClick = (e) => {
  e.stopPropagation();
  const phoneNumber = "+911234567890"; // Replace with your phone number
  window.location.href = `tel:${phoneNumber}`;
};

const handleEmailClick = (e) => {
  e.stopPropagation();
  const email = "pavithra141828@gmail.com"; // Replace with your email
  const subject = encodeURIComponent("Cake Inquiry");
  window.location.href = `mailto:${email}?subject=${subject}`;
};
  const handleWhatsAppClick = (e) => {
    e.stopPropagation();
    const phoneNumber = "9087877818"; // Store contact number
    const message = encodeURIComponent("Hello Chef Clara! I'm visiting Sweet Haven and would love to consult on a custom baked cake.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleInstagramClick = (e) => {
    e.stopPropagation();
    const instaAddress = "https://www.instagram.com/jayanhomemadecakes?utm_source=qr"; // Store Instagram profile
    window.open(instaAddress, '_blank');
  };

  return (
    <div 
      className="floating-social-container"
      id="floating-social-hub"
      onMouseEnter={() => { setIsHovered(true); setIsOpen(true); }}
      onMouseLeave={() => { setIsHovered(false); setIsOpen(false); }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px'
      }}
    >
      {/* Tooltip Alert */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="social-hub-tooltip"
            style={{
              backgroundColor: 'var(--color-white)',
              color: 'var(--color-chocolate)',
              padding: '10px 18px',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-medium)',
              border: '1.5px solid var(--color-soft-pink)',
              fontSize: '0.8rem',
              fontWeight: '600',
              fontFamily: 'var(--font-sans)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
              pointerEvents: 'none'
            }}
          >
            <Sparkles size={14} className="text-pink-500 animate-pulse" style={{ color: 'var(--color-rose)' }} />
            <span>Chat with Chef Pavi & view Instagram!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Sub-Buttons (WhatsApp & Instagram) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.15 } }}
            className="social-sub-buttons"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'flex-end'
            }}
          >
            {/* Email Button */}
<motion.button
  whileHover={{ scale: 1.08, y: -2 }}
  whileTap={{ scale: 0.95 }}
  onClick={handleEmailClick}
  className="social-sub-btn email-btn"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 18px",
    borderRadius: "30px",
    background: "#EA4335",
    color: "white",
    border: "none",
    boxShadow: "0 4px 15px rgba(234,67,53,0.35)",
    fontSize: "0.85rem",
    fontWeight: "600",
    cursor: "pointer"
  }}
>
  <Mail size={18} />
  <span>Email Us</span>
</motion.button>

{/* Call Button */}
<motion.button
  whileHover={{ scale: 1.08, y: -2 }}
  whileTap={{ scale: 0.95 }}
  onClick={handleCallClick}
  className="social-sub-btn call-btn"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 18px",
    borderRadius: "30px",
    background: "#2563EB",
    color: "white",
    border: "none",
    boxShadow: "0 4px 15px rgba(37,99,235,0.35)",
    fontSize: "0.85rem",
    fontWeight: "600",
    cursor: "pointer"
  }}
>
  <Phone size={18} />
  <span>Call Us</span>
</motion.button>
            {/* Instagram Link Button */}
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleInstagramClick}
              className="social-sub-btn instagram-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 18px',
                borderRadius: '30px',
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 4px 15px rgba(221, 42, 123, 0.3)',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '0.05em'
              }}
            >
              <Instagram size={18} />
              <span>Jayan Homemade</span>
            </motion.button>

            {/* WhatsApp Link Button */}
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="social-sub-btn whatsapp-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 18px',
                borderRadius: '30px',
                background: '#25D366',
                color: 'white',
                border: 'none',
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '0.05em'
              }}
            >
              <MessageCircle size={18} fill="white" />
              <span>Chat with Pavi</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`main-social-trigger ${isOpen ? 'active' : ''}`}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: isOpen ? 'var(--color-chocolate)' : 'var(--color-rose)',
          color: 'white',
          border: 'none',
          boxShadow: 'var(--shadow-medium)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease'
        }}
        aria-label="Social contact menu"
      >
        
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="sparkle-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Heart size={24} fill="white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      
    </div>
  );
}
