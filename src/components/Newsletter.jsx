import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // CHANGE THIS TO YOUR WHATSAPP NUMBER
  const whatsappNumber = "9087877818";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.trim() === '') return;

    const message = `Hello Jayan Homemade Cake 🍰

I would like to know more about your cakes.

My phone number: ${phone}

Please contact me soon.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);
    setPhone('');

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="newsletter-box animate-slide-up" id="newsletter">

      <h3 className="newsletter-title">
        Join Our Sweet Community
      </h3>

      <p className="newsletter-desc">
        Get updates about weekend baking menus, special offers, 
        and fresh homemade desserts from our kitchen.
      </p>


      {submitted ? (

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            color: 'var(--color-soft-pink)',
            fontSize: '1.1rem',
            fontWeight: 600
          }}
        >
          <CheckCircle2 size={20} />

          <span>
            Thank you! We will contact you soon ❤️
          </span>

        </div>


      ) : (

        <form 
          className="newsletter-form" 
          onSubmit={handleSubmit}
        >

          <input
            type="tel"
            className="newsletter-input"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />


          <button 
            type="submit" 
            className="newsletter-btn"
          >

            <span 
              style={{
                display:'flex',
                alignItems:'center',
                gap:'8px'
              }}
            >

              Contact Us 
              <Send size={16}/>

            </span>

          </button>


        </form>

      )}

    </div>
  );
}