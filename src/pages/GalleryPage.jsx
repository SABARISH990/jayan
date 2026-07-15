import React from 'react';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <div className="gallery-page animate-fade-in" id="gallery-page">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-header-title">Our Culinary Portfolio</h1>
        <div className="breadcrumbs">
          <span>Home</span> / Gallery Showcase
        </div>
      </div>

      <section className="section" id="gallery-portfolio-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <span className="section-badge">Visual Feast</span>
            <h2 className="section-title">The Edible Art Gallery</h2>
            <p className="section-subtitle">
              Browse authentic snapshots of cakes freshly pulled from Chef Clara's kitchen. Click any image to view it in full resolution with ingredients details.
            </p>
          </div>

          <Gallery />
        </div>
      </section>
    </div>
  );
}
