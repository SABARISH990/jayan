import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function ReviewCard({ review }) {
  const { name, city, rating, review: text } = review;

  // Generate stars array
  const stars = [];
  const fullStars = Math.floor(rating);
  for (let i = 0; i < 5; i++) {
    stars.push(i < fullStars);
  }

  return (
    <div className="review-card animate-fade-in" id={`review-card-${review.id}`}>
      <Quote size={40} className="review-quote-icon" />
      <div className="review-stars">
        {stars.map((isFull, index) => (
          <Star 
            key={index} 
            size={16} 
            fill={isFull ? "var(--color-rose)" : "none"} 
            stroke={isFull ? "var(--color-rose)" : "var(--color-border)"} 
          />
        ))}
        <span style={{ fontSize: '0.85rem', fontWeight: 700, marginLeft: '4px', color: 'var(--color-chocolate)' }}>
          {rating.toFixed(1)}
        </span>
      </div>
      <p className="review-text">"{text}"</p>
      <div>
        <h4 className="review-author">{name}</h4>
        <span className="review-location">{city}</span>
      </div>
    </div>
  );
}
