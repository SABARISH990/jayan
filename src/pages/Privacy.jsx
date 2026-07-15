import React from 'react';
import { ShieldAlert, EyeOff, Lock, HeartHandshake } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="privacy-page animate-fade-in" id="privacy-policy-page">
      <div className="page-header">
        <h1 className="page-header-title">Privacy & Safety Policy</h1>
        <div className="breadcrumbs">
          <span>Home</span> / Privacy Policy
        </div>
      </div>

      <section className="section" id="privacy-content">
        <div className="legal-container">
          <h2 className="legal-title">Your Trust is Our Ingredient</h2>
          
          <div className="legal-section">
            <h3><EyeOff size={18} style={{ color: 'var(--color-rose)', marginRight: '8px', verticalAlign: 'middle', display: 'inline' }} /> 1. Information Collection</h3>
            <p>
              When you use our Custom Cake Order Form, we collect personal details such as your full name, email, active phone number, and physical delivery address. This information is processed solely to bake, decorate, and hand-deliver your custom order.
            </p>
          </div>

          <div className="legal-section">
            <h3><Lock size={18} style={{ color: 'var(--color-rose)', marginRight: '8px', verticalAlign: 'middle', display: 'inline' }} /> 2. Data Transmission</h3>
            <p>
              We utilize secure, end-to-end encrypted WhatsApp integration to forward order specifications directly from your browser to our baking desk. We do not store credit card or payment credentials on our web server.
            </p>
          </div>

          <div className="legal-section">
            <h3><ShieldAlert size={18} style={{ color: 'var(--color-rose)', marginRight: '8px', verticalAlign: 'middle', display: 'inline' }} /> 3. Allergy & Food Safety Disclosures</h3>
            <p>
              As a certified home kitchen, we operate under strict allergen isolation procedures. However, our kitchen does process wheat, eggs, tree nuts, and dairy. If you specify severe airborne nut or gluten allergies, please inform our chef beforehand so we can implement additional safety protocols.
            </p>
          </div>

          <div className="legal-section">
            <h3><HeartHandshake size={18} style={{ color: 'var(--color-rose)', marginRight: '8px', verticalAlign: 'middle', display: 'inline' }} /> 4. Customer Support</h3>
            <p>
              If you have any questions regarding your data or would like to request immediate deletion of any address records or chat history, please contact us at <strong>baker@homemadecakeshop.com</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
