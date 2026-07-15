import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import OfferBanner from './components/OfferBanner';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Cakes from './pages/Cakes';
import CakeDetails from './pages/CakeDetails';
import CustomOrder from './pages/CustomOrder';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import GalleryPage from './pages/GalleryPage';
import FAQPage from './pages/FAQPage';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export default function App() {
  // Global 60FPS scroll progress tracker
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <BrowserRouter>
      {/* Premium custom mouse trail (Disabled automatically on touchscreens) */}
      <CustomCursor />

      {/* Top scroll progress meter */}
      <motion.div 
        className="scroll-progress-indicator" 
        style={{ scaleX }} 
      />

      {/* Utility Layout Controls */}
      <ScrollToTop />
      <OfferBanner />
      <Navbar />
      
      {/* Route Router Outlets */}
      <main style={{ minHeight: '65vh' }} id="app-router-outlet">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/cakes/:id" element={<CakeDetails />} />
          <Route path="/custom-order" element={<CustomOrder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Global Bottom layouts */}
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
