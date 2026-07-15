import React, { useState, useMemo } from 'react';
import { Search, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CAKES_DATA } from '../data';
import CakeCard from '../components/CakeCard';
import PageTransition from '../components/PageTransition';

export default function Cakes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default"); // default, priceLowHigh, priceHighLow, ratingHighLow

  // Categories list
  const categories = [
    "All",
    "Premium Cakes",
    "Fresh Cream Cakes"
  ];

  // Search, filter, and sort logic memoized for performance
  const filteredAndSortedCakes = useMemo(() => {
    let result = [...CAKES_DATA];

    // 1. Search Query Filter
    if (searchQuery.trim() !== "") {
      result = result.filter(cake => 
        cake.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cake.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cake.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 2. Category Filter
    if (selectedCategory !== "All") {
      result = result.filter(cake => cake.category === selectedCategory);
    }

    // 3. Sorting
    if (sortBy === "priceLowHigh") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHighLow") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "ratingHighLow") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortBy("default");
  };

  return (
    <PageTransition>
      <div className="cakes-page" id="cakes-page">
        
        {/* Page Header */}
        <div className="page-header" style={{ padding: '100px 24px 60px 24px', textAlign: 'center', background: 'linear-gradient(135deg, var(--color-soft-pink) 0%, var(--color-cream) 100%)' }}>
          <motion.h1 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="page-header-title"
            style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--color-chocolate)', margin: 0 }}
          >
            Our Homemade Creations
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="breadcrumbs"
            style={{ marginTop: '10px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}
          >
            <span>Home</span> / Cake Showcase
          </motion.div>
        </div>

        <section className="section" id="cakes-catalog" style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Filter Bar */}
            <div className="filter-bar" id="catalog-filters">
              <div className="filter-row-top">
                {/* Search */}
                <div className="search-input-wrapper">
                  <Search className="search-icon" size={18} />
                  <input
                    type="text"
                    placeholder="Search for your favorite cake (e.g. Red Velvet, Berries)..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    id="search-box"
                  />
                </div>

                {/* Sort by Dropdown */}
                <select 
                  className="filter-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  id="sort-selector"
                  aria-label="Sort cakes list"
                >
                  <option value="default">Sort: Default Featured</option>
                  <option value="priceLowHigh">Price: Low to High</option>
                  <option value="priceHighLow">Price: High to Low</option>
                  <option value="ratingHighLow">Rating: Top Rated (High to Low)</option>
                </select>

                {/* Reset Button */}
                <button 
                  className="btn-secondary" 
                  style={{ padding: '10px 18px', fontSize: '0.9rem', justifyContent: 'center' }}
                  onClick={handleResetFilters}
                  id="reset-filters-btn"
                >
                  <RefreshCw size={14} style={{ marginRight: '6px' }} /> Clear Filters
                </button>
              </div>

              {/* Category horizontal scroll bar */}
              <div className="filter-categories">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                    id={`cat-pill-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Summary */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', padding: '0 8px' }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                Showing {filteredAndSortedCakes.length} delicious homemade {filteredAndSortedCakes.length === 1 ? 'cake' : 'cakes'}
              </span>
              {selectedCategory !== "All" && (
                <span style={{ fontSize: '0.85rem', background: 'var(--color-soft-pink)', color: 'var(--color-chocolate)', padding: '4px 12px', borderRadius: 'var(--radius-round)', fontWeight: 700 }}>
                  Category: {selectedCategory}
                </span>
              )}
            </div>

            {/* Cake Grid with Staggered Elements layout */}
            <AnimatePresence mode="popLayout">
              {filteredAndSortedCakes.length > 0 ? (
                <motion.div 
                  layout
                  className="cakes-grid" 
                  id="cakes-catalog-grid"
                >
                  {filteredAndSortedCakes.map((cake, idx) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.15) }}
                      key={cake.id}
                    >
                      <CakeCard cake={cake} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{ textAlign: 'center', padding: '80px 24px', backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-soft)' }} 
                  id="no-results-banner"
                >
                  <span style={{ fontSize: '3rem', display: 'block', marginBottom: '16px' }}>🍰</span>
                  <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>No Homemade Cakes Found</h2>
                  <p style={{ color: 'var(--color-text-muted)', maxWidth: '460px', margin: '0 auto 24px auto' }}>
                    We couldn't find any cakes matching your current search or filters. Try checking your spelling or selecting another category!
                  </p>
                  <button className="btn-primary" onClick={handleResetFilters}>
                    Show All Cakes
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </section>

      </div>
    </PageTransition>
  );
}
