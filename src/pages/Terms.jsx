import React from 'react';
import { FileText, CalendarCheck, HelpCircle, Truck } from 'lucide-react';

export default function Terms() {
  return (
    <div className="terms-page animate-fade-in" id="terms-conditions-page">
      <div className="page-header">
        <h1 className="page-header-title">Terms & Conditions</h1>
        <div className="breadcrumbs">
          <span>Home</span> / Terms & Conditions
        </div>
      </div>

      <section className="section" id="terms-content">
        <div className="legal-container">
          <h2 className="legal-title">Baking Agreements & Policies</h2>
          
          <div className="legal-section">
            <h3><CalendarCheck size={18} style={{ color: 'var(--color-rose)', marginRight: '8px', verticalAlign: 'middle', display: 'inline' }} /> 1. Ordering & Lead Times</h3>
            <p>
              Because all cakes are freshly prepared by hand, we require at least 24-48 hours notice for standard menu selections, and 1-2 weeks notice for custom themed designs or multi-tiered wedding cakes.
            </p>
          </div>

          <div className="legal-section">
            <h3><HelpCircle size={18} style={{ color: 'var(--color-rose)', marginRight: '8px', verticalAlign: 'middle', display: 'inline' }} /> 2. Deposit & Cancellations</h3>
            <p>
              To confirm custom orders, a 50% non-refundable deposit is required at least 4 days before delivery. Cancellations made within 48 hours of scheduled delivery are subject to the full order charge, as the ingredients and custom prep have already commenced.
            </p>
          </div>

          <div className="legal-section">
            <h3><Truck size={18} style={{ color: 'var(--color-rose)', marginRight: '8px', verticalAlign: 'middle', display: 'inline' }} /> 3. Hand-Delivery and Pickup</h3>
            <p>
              We provide fragile-certified hand-delivery within a 15-mile radius. Once the cake has been handed over during self-pickup or successfully delivered to your specified venue, we are not responsible for subsequent handling, transport, or storage melting.
            </p>
          </div>

          <div className="legal-section">
            <h3><FileText size={18} style={{ color: 'var(--color-rose)', marginRight: '8px', verticalAlign: 'middle', display: 'inline' }} /> 4. Color & Design Disclaimer</h3>
            <p>
              All our cakes are handcrafted, meaning minor variations in color gradients, piped piping shapes, and edible flower sizing can occur. We strive for maximum alignment with your reference photos, but every cake remains a unique artisanal creation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
