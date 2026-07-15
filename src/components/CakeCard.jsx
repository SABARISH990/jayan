import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import TiltCard from './TiltCard';

export default function CakeCard({ cake }) {
  const { id, name, category, price, rating, description, image, popular, newArrival, bestSeller } = cake;

  // Decide badge
  let badgeText = "";
  if (bestSeller) badgeText = "Best Seller";
  else if (newArrival) badgeText = "New Arrival";
  else if (popular) badgeText = "Trending";

  return (
    <TiltCard className="cake-card" id={`cake-card-${id}`}>
      <div className="cake-img-wrapper" style={{ overflow: 'hidden', position: 'relative' }}>
        <motion.img 
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          src={image} 
          alt={name} 
          className="cake-card-img" 
          loading="lazy" 
          referrerPolicy="no-referrer"
        />
        {badgeText && <span className="cake-badge">{badgeText}</span>}
        <div className="cake-card-rating">
          <Star size={14} className="cake-rating-star" fill="#F1C40F" stroke="#F1C40F" />
          <span>{rating.toFixed(1)}</span>
        </div>
      </div>

      <div className="cake-card-content">
        <span className="cake-card-category">{category}</span>
        <Link to={`/cakes/${id}`}>
          <h3 className="cake-card-title">{name}</h3>
        </Link>
        <p className="cake-card-desc">{description}</p>

        <div className="cake-card-footer">
          <span className="cake-card-price">
  ₹{price.toFixed(2)}
</span>
          <div className="cake-card-actions">
            <Link 
              to={`/cakes/${id}`} 
              className="btn-details"
              title="View ingredients and specifications"
              id={`details-btn-${id}`}
            >
              Details
            </Link>
            <Link 
              to={`/custom-order?cakeId=${id}`} 
              className="btn-icon-order"
              title="Order this cake now"
              aria-label="Order this cake now"
              id={`order-btn-${id}`}
            >
              <ShoppingBag size={18} />
            </Link>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
