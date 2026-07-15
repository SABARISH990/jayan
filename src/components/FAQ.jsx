import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState(1); // Default first one open

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-container animate-slide-up" id="faq-accordion">
      {FAQS_DATA.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div 
            key={faq.id} 
            className={`faq-card ${isOpen ? 'open' : ''}`}
            id={`faq-card-${faq.id}`}
          >
            <div 
              className="faq-header" 
              onClick={() => toggleFAQ(faq.id)}
              id={`faq-header-${faq.id}`}
            >
              <h3 className="faq-question" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <HelpCircle size={18} style={{ color: 'var(--color-rose)', flexShrink: 0 }} />
                {faq.question}
              </h3>
              <ChevronDown size={18} className="faq-toggle-icon" />
            </div>
            <div className="faq-body">
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
