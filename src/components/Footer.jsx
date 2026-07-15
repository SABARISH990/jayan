import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
  Clock,
  Sparkles
} from "lucide-react";
import logo from "../../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="main-footer">
      <div className="footer-grid">
        {/* Brand Column */}
        <div className="footer-brand">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div className="footer-logo" id="footer-brand-logo">
  <img src={logo} alt="Homemade Cake Shop" />
</div>
            <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--color-soft-pink)' }}> Jayan Homemade Cakes</h3>
          </Link>
          <p className="footer-brand-desc">
            Baking sweet memories in our family-owned home kitchen since 2018. We believe in organic ingredients, elegant custom designs, and that cozy handmade touch.
          </p>
          <div className="footer-socials">
  <a
    href="tel:+91 9087877818"
    className="social-icon-btn"
    aria-label="Call us"
    title="Call"
  >
    <Phone size={18} />
  </a>

  <a
    href="https://wa.me/9087877818"
    target="_blank"
    rel="noreferrer"
    className="social-icon-btn whatsapp-btn"
    aria-label="Chat on WhatsApp"
    title="WhatsApp"
  >
    <MessageCircle size={18} />
  </a>

  <a
    href="https://www.instagram.com/jayanhomemadecakes?utm_source=qr"
    target="_blank"
    rel="noreferrer"
    className="social-icon-btn"
    aria-label="Instagram"
    title="Instagram"
  >
    <Instagram size={18} />
  </a>

  
</div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h4>Quick Navigation</h4>
          <div className="footer-links">
            <Link to="/" className="footer-link-item">Home Base</Link>
            <Link to="/about" className="footer-link-item">Our Sweet Story</Link>
            <Link to="/cakes" className="footer-link-item">Cake Showcase</Link>
            <Link to="/gallery" className="footer-link-item">Gallery Portfolio</Link>
            <Link to="/custom-order" className="footer-link-item">Place Custom Order</Link>
          </div>
        </div>

        {/* Legal Column */}
        <div className="footer-column">
          <h4>Our Policies</h4>
          <div className="footer-links">
            <Link to="/faq" className="footer-link-item">Frequently Asked Questions</Link>
            <Link to="/privacy" className="footer-link-item">Privacy & Safety Policy</Link>
            <Link to="/terms" className="footer-link-item">Terms & Baking Conditions</Link>
            <Link to="/reviews" className="footer-link-item">Client Love & Reviews</Link>
            <Link to="/contact" className="footer-link-item">Get in Touch</Link>
          </div>
        </div>

        {/* Contact Column */}
        <div className="footer-column">
          <h4>Kitchen Address</h4>
          <div className="footer-contact-item">
            <MapPin size={18} />
            <span>Anuparpalayam,Tiruppur</span>
          </div>
          <div className="footer-contact-item">
            <Phone size={18} />
            <span>+91 90878 77818</span>
          </div>
          <div className="footer-contact-item">
            <Mail size={18} />
            <span>Pavithra141828@gmail.com</span>
          </div>
          <div className="footer-contact-item" style={{ marginTop: '16px' }}>
            <Clock size={18} />
            <div>
              <span style={{ fontWeight: 600, display: 'block', color: 'var(--color-white)' }}>Baking Fresh:</span>
              <span style={{ fontSize: '0.8rem' }}>Mon - Sat: 8:00 AM - 7:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {currentYear} Homemade Cake Shop. All culinary designs & photographs reserved.</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/privacy" style={{ color: 'rgba(255, 248, 240, 0.5)' }}>Privacy</Link>
          <Link to="/terms" style={{ color: 'rgba(255, 248, 240, 0.5)' }}>Terms</Link>
        </div>
      </div>
    </footer>
  );
}
