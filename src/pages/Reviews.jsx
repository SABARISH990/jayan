import React, { useState } from 'react';
import { Star, MessageSquareCode, Check, Send, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA } from '../data';
import ReviewCard from '../components/ReviewCard';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState(REVIEWS_DATA);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || city.trim() === "" || reviewText.trim() === "") return;

    // Create new review object
    const newReview = {
      id: reviewsList.length + 1,
      name: name,
      city: city,
      rating: parseFloat(rating),
      review: reviewText
    };

    // Prepend to list for immediate real-time display
    setReviewsList([newReview, ...reviewsList]);

    // Clear form
    setName("");
    setCity("");
    setReviewText("");
    setRating(5);

    // Show toast
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 4000);
  };

  return (
    <div className="reviews-page animate-fade-in" id="reviews-page">
      
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-header-title">Customer Love & Reviews</h1>
        <div className="breadcrumbs">
          <span>Home</span> / Customer Reviews
        </div>
      </div>

      {/* Success Toast Notification */}
      {showSuccessToast && (
        <div className="success-toast" id="success-toast-alert">
          <CheckCircle size={20} />
          <span>Review submitted successfully! It is live on the page.</span>
        </div>
      )}

      <section className="section" id="reviews-section">
        <div className="reviews-page-grid">
          
          {/* Left Side: Real-time Reviews List */}
          <div className="reviews-list-container">
            <h2 className="about-heading" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>
              What Our Neighbors Say ({reviewsList.length})
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '30px', fontSize: '0.95rem' }}>
              We bake for birthdays, weddings, anniversaries, and simple weekend cravings. Here are the genuine experiences shared by our customers.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} id="live-reviews-list">
              {reviewsList.map((rev) => (
                <ReviewCard key={rev.id} review={rev} />
              ))}
            </div>
          </div>

          {/* Right Side: Submission Form */}
          <div className="review-form-card" id="submission-form-container">
            <h3 className="review-form-title">Share Your Experience</h3>
            <p className="review-form-subtitle">
              Have you ordered a cake from our home bakery? We would love to hear your honest feedback. Your review will appear immediately.
            </p>

            <form onSubmit={handleSubmit} id="customer-review-form">
              
              {/* Star Rating Selector */}
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <span className="form-label">Your Star Rating *</span>
                <div className="rating-select-buttons" id="star-rating-selector" aria-label="Rating Stars selector">
                  {[1, 2, 3, 4, 5].map((starNum) => {
                    const isActive = hoverRating ? starNum <= hoverRating : starNum <= rating;
                    return (
                      <button
                        type="button"
                        key={starNum}
                        className="star-btn"
                        onClick={() => setRating(starNum)}
                        onMouseEnter={() => setHoverRating(starNum)}
                        onMouseLeave={() => setHoverRating(0)}
                        title={`Rate ${starNum} Stars`}
                        aria-label={`Rate ${starNum} Stars`}
                        id={`star-select-${starNum}`}
                      >
                        <Star 
                          size={24} 
                          fill={isActive ? "#F1C40F" : "none"} 
                          stroke={isActive ? "#F1C40F" : "var(--color-border)"} 
                        />
                      </button>
                    );
                  })}
                </div>
                <span className="form-tip">Selected: {rating} out of 5 stars</span>
              </div>

              {/* Name */}
              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label className="form-label" htmlFor="rev-name">Full Name *</label>
                <input
                  type="text"
                  id="rev-name"
                  className="form-control"
                  placeholder="E.g. Sabarish"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* City */}
              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label className="form-label" htmlFor="rev-city">Your City / Neighborhood *</label>
                <input
                  type="text"
                  id="rev-city"
                  className="form-control"
                  placeholder="E.g.Tiruppur"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>

              {/* Review Text */}
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label className="form-label" htmlFor="rev-text">Your Review *</label>
                <textarea
                  id="rev-text"
                  className="form-control form-control-textarea"
                  style={{ minHeight: '120px' }}
                  placeholder="Describe your cake's flavor, decoration, and delivery experience..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
                id="submit-review-btn"
              >
                Submit Review <Send size={16} style={{ marginLeft: '8px' }} />
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
