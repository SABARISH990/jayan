import React from 'react';
import FAQ from '../components/FAQ';
import { HelpCircle } from 'lucide-react';

export default function FAQPage() {
  return (
    <div className="faq-page animate-fade-in" id="faq-page">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-header-title">Got Sweet Questions?</h1>
        <div className="breadcrumbs">
          <span>Home</span> / Frequently Asked Questions
        </div>
      </div>

      <section className="section" id="faq-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header" style={{ marginBottom: '50px' }}>
            <span className="section-badge">Help Center</span>
            <h2 className="section-title">Common Pre-Order Questions</h2>
            <p className="section-subtitle">
              We understand that choosing a customized cake involves many parameters. Read our detailed responses regarding baking cycles, allergy procedures, and secure hand-delivery options.
            </p>
          </div>

          <FAQ />
        </div>
      </section>
    </div>
  );
}
