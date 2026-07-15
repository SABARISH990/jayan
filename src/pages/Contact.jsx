import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Compass, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Compile quick inquiry message
    const inquiryMsg = `🧁 *NEW KITCHEN INQUIRY* 🧁
-------------------------------
👤 *From:* ${formData.name}
✉️ *Email:* ${formData.email}
❓ *Topic:* ${formData.subject}

📝 *Inquiry Message:*
"${formData.message}"
-------------------------------
_Sent from Jayan Homemade Cake Contact Portal_`;

    const encoded = encodeURIComponent(inquiryMsg);
    const shopNum = "9087877818";

    setSubmitted(true);

    setTimeout(() => {
      window.open(`https://wa.me/${shopNum}?text=${encoded}`, '_blank');
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div className="contact-page animate-fade-in" id="contact-page">
      
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-header-title">Get in Touch</h1>
        <div className="breadcrumbs">
          <span>Home</span> / Contact Us
        </div>
      </div>

      <section className="section" id="contact-details-section">
        <div className="contact-grid">
          
          {/* Left Column: Info Cards & Business Hours */}
          <div className="contact-info-card">
            <h2 className="contact-title">Visit Our Sweet Spot</h2>
            <p className="contact-desc">
              All orders are prepared fresh at our certified home kitchen. Please note that we operate on an *appointment-only* basis for consultations, pickup, and customized designs.
            </p>

            <div className="contact-list">
              <div className="contact-item" id="contact-item-location">
                <div className="contact-item-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-item-content">
                  <h4>Our Location</h4>
                  <p>Anupurpalayam,Tiruppur</p>
                </div>
              </div>

              <div className="contact-item" id="contact-item-phone">
                <div className="contact-item-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-item-content">
                  <h4>Call / WhatsApp</h4>
                  <p>+91 9087877818(Order hot-line)</p>
                </div>
              </div>

              <div className="contact-item" id="contact-item-email">
                <div className="contact-item-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-item-content">
                  <h4>General Inquiries</h4>
                  <p>pavithra141828@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="business-hours-container" style={{ borderTop: '1px dashed var(--color-border)', paddingTop: '30px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-chocolate)' }}>
                <Clock size={18} style={{ color: 'var(--color-rose)' }} /> Business Baking Hours
              </h4>
              <div className="hours-grid" style={{ marginTop: '16px' }}>
                <div className="hours-row">
                  <span className="hours-day">Monday - Friday</span>
                  <span className="hours-time">8:00 AM - 7:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Saturday</span>
                  <span className="hours-time">9:00 AM - 5:00 PM</span>
                </div>
                <div className="hours-row closed">
                  <span className="hours-day">Sunday</span>
                  <span className="hours-time">CLOSED (Baking Only Custom Wedding Orders)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Form */}
          <div className="contact-info-card" style={{ backgroundColor: 'var(--color-cream)', borderStyle: 'dashed', borderColor: 'var(--color-soft-pink-dark)' }}>
            <h2 className="contact-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageSquare size={22} style={{ color: 'var(--color-rose)' }} /> Quick Contact Portal
            </h2>
            <p className="contact-desc">
              Have a quick question about flavors, serving sizes, or pre-orders? Send chef Clara a direct message, and it will forward straight to her phone.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '12px' }}>📨</span>
                <h3 style={{ color: 'var(--color-chocolate)', marginBottom: '8px' }}>Inquiry Packaged!</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Redirecting to WhatsApp for immediate dispatch...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="contact-inquiry-form" className="order-form" style={{ padding: 0 }}>
                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label className="form-label" htmlFor="contact-name">Your Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label className="form-label" htmlFor="contact-email">Email Address *</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="form-control"
                    placeholder="E.g. customer@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label className="form-label" htmlFor="contact-subject">Topic of Inquiry *</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Choose Topic --</option>
                    <option value="Cake Sizes and Portions Advice">Cake Sizes & Portions Advice</option>
                    <option value="Dietary and Eggless Inquiries">Dietary & Eggless Inquiries</option>
                    <option value="Weekend Special Pre-Orders">Weekend Special Pre-orders</option>
                    <option value="Corporate Event Dessert Tables">Corporate Event Dessert Tables</option>
                    <option value="Other Sweet Questions">Other Sweet Questions</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label className="form-label" htmlFor="contact-message">Your Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-control form-control-textarea"
                    placeholder="Type your question here in detail..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn-submit" style={{ margin: 0 }} id="contact-submit-btn">
                  Send Message to Chef <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      

    
    

    </div>
  );
}
