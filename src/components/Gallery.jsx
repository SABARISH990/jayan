import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { GALLERY_DATA } from '../data';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState(null);

  const categories = ["All", "Birthday", "Wedding", "Cupcakes", "Fruit", "Chocolate"];

  const filteredItems = activeCategory === "All" 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === activeCategory || item.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="gallery-section-wrapper" id="gallery-module">
      {/* Category Pills */}
      <div className="filter-categories" style={{ justifyContent: 'center', marginBottom: '36px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
            id={`gallery-cat-${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="gallery-item animate-zoom-in"
            onClick={() => setLightboxItem(item)}
            id={`gallery-item-${item.id}`}
          >
            <img 
              src={item.url} 
              alt={item.title} 
              className="gallery-img" 
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="gallery-overlay">
              <span className="gallery-tag">{item.category}</span>
              <h4 className="gallery-title">{item.title}</h4>
              <Maximize2 size={16} style={{ color: 'var(--color-white)', marginTop: '8px' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="lightbox" onClick={() => setLightboxItem(null)} id="lightbox-modal">
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxItem(null)} aria-label="Close Lightbox">
              <X size={28} />
            </button>
            <img 
              src={lightboxItem.url} 
              alt={lightboxItem.title} 
              className="lightbox-img" 
              referrerPolicy="no-referrer"
            />
            <div className="lightbox-info">
              <span className="gallery-tag" style={{ color: 'var(--color-rose)' }}>{lightboxItem.category}</span>
              <h3 style={{ margin: '4px 0 0 0', fontSize: '1.25rem' }}>{lightboxItem.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
