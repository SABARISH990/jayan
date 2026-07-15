import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ShieldCheck, Heart, ShoppingBag, ArrowLeft, Leaf, Flame, Sparkles } from 'lucide-react';
import { CAKES_DATA } from '../data';
import CakeCard from '../components/CakeCard';

export default function CakeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedFlavour, setSelectedFlavour] = useState("");
  const [customMsg, setCustomMsg] = useState("");

  // Find matching cake
  const cake = CAKES_DATA.find(c => c.id === parseInt(id));
const currentPrice = cake?.prices?.["1kg"] || cake?.price || 0;
  // Set default size & flavour when cake changes
  useEffect(() => {
    if (cake) {
      setSelectedSize(cake.sizes[0]);
      setSelectedFlavour(cake.flavours[0]);
      setCustomMsg("");
    }
  }, [cake]);

  if (!cake) {
    return (
      
      <div className="section about-section">
        <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>Cake Not Found</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '30px' }}>The cake you are looking for does not exist or has been retired from our oven.</p>
        <Link to="/cakes" className="btn-primary">Back to Cake Menu</Link>
      </div>
    );
  }

  // Related cakes (same category, excluding current cake, limited to 3)
  const relatedCakes = CAKES_DATA
    .filter(c => c.category === cake.category && c.id !== cake.id)
    .slice(0, 3);

  // If no same category cakes, show any other cakes
  const backupRelatedCakes = relatedCakes.length > 0 
    ? relatedCakes 
    : CAKES_DATA.filter(c => c.id !== cake.id).slice(0, 3);

  return (
    <div className="cake-details-page animate-fade-in" id={`details-page-${cake.id}`}>
      
      {/* Page Header */}
      

      <section className="section" id="details-section">
        <div className="details-grid">
          
          {/* Left Column: Image & Badges */}
          <div className="details-image-area">
            <div className="details-main-img-container">
              <img 
                src={cake.image} 
                alt={cake.name} 
                className="details-main-img"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="details-tags">
              <span className="details-tag" style={{ backgroundColor: 'var(--color-soft-pink)', color: 'var(--color-chocolate)' }}>
                ⭐ {cake.rating.toFixed(1)} Rating
              </span>
              <span className="details-tag" style={{ backgroundColor: '#E1F5FE', color: '#01579B' }}>
                ☘️ Eggless Base Option
              </span>
              <span className="details-tag" style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>
                🛡️ Sanitary Baked
              </span>
            </div>

            <div className="timeline-content" style={{ marginTop: '10px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', color: 'var(--color-chocolate)', marginBottom: '8px' }}>
                <ShieldCheck size={18} style={{ color: 'var(--color-rose)' }} /> Freshness Guarantee
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0 }}>
                This cake is baked fresh on the day of delivery. It contains no artificial stabilizers, trans fats, or industrial preservatives. Best consumed within 3 days if refrigerated.
              </p>
            </div>
          </div>

          {/* Right Column: Custom Selections & Details */}
          <div className="details-content-area">
            <div className="details-header">
              <span className="cake-card-category">{cake.category}</span>
              <h1 className="details-title">{cake.name}</h1>
              
              <div className="details-meta">
         <span className="details-price">₹{currentPrice.toFixed(2)}</span>
                <span style={{ color: 'var(--color-border)' }}>|</span>
                <div className="details-rating">
                  <Star size={16} fill="#F1C40F" stroke="#F1C40F" />
                  <span>{cake.rating.toFixed(1)} / 5.0 (Voted by Neighbors)</span>
                </div>
              </div>
            </div>

            <p className="details-desc">{cake.description}</p>

            {/* Custom Option: Sizes */}
            <div className="option-group" style={{ marginBottom: '24px' }}>
              <h4 className="details-section-title">Select Size / Weight:</h4>
              <div className="option-pill-container">
                {cake.sizes.map((size) => (
                  <button
                    key={size}
                    className={`option-pill ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                    id={`size-opt-${size}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Option: Flavours */}
            <div className="option-group" style={{ marginBottom: '24px' }}>
              <h4 className="details-section-title">Select Homemade Flavour Blend:</h4>
              <div className="option-pill-container">
                {cake.flavours.map((flavour) => (
                  <button
                    key={flavour}
                    className={`option-pill ${selectedFlavour === flavour ? 'active' : ''}`}
                    onClick={() => setSelectedFlavour(flavour)}
                    id={`flavour-opt-${flavour.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    {flavour}
                  </button>
                ))}
              </div>
            </div>

            {/* Ingredients Section */}
            <div className="option-group" style={{ marginBottom: '24px' }}>
              <h4 className="details-section-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Leaf size={16} style={{ color: 'var(--color-rose)' }} /> Key Raw Ingredients:
              </h4>
              <div className="ingredients-list">
                {cake.ingredients.map((ing, i) => (
                  <span key={i} className="ingredient-item">{ing}</span>
                ))}
              </div>
            </div>

            {/* Quick customization message pre-fill */}
            <div className="form-group" style={{ marginBottom: '30px' }}>
              <label className="form-label" htmlFor="quick-custom-msg">Optional Custom message on Cake:</label>
              <input 
                type="text" 
                id="quick-custom-msg"
                placeholder="E.g., Happy 30th Birthday David! (or leave empty)" 
                className="form-control"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
              />
            </div>

            {/* Actions */}
            <div className="details-actions">
              <Link 
                to={`/custom-order?cakeId=${cake.id}&size=${encodeURIComponent(selectedSize)}&flavour=${encodeURIComponent(selectedFlavour)}&msg=${encodeURIComponent(customMsg)}`} 
                className="btn-order-large"
                id="details-order-now-btn"
              >
                Proceed to Custom Order <ShoppingBag size={20} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Related Cakes Section */}
      <section className="section section-alt" id="related-cakes-section">
        <div className="section-header">
          <span className="section-badge">Gourmet Synergy</span>
          <h2 className="section-title">You May Also Admire</h2>
          <p className="section-subtitle">
            Other sweet recipes prepared by the same home baker that fit beautifully alongside your chosen cake.
          </p>
        </div>

        <div className="cakes-grid">
          {backupRelatedCakes.map(c => (
            <CakeCard key={c.id} cake={c} />
          ))}
        </div>
      </section>

    </div>
  );
}
