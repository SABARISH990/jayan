import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, ShieldCheck, Zap, ArrowRight, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import CakeCard from '../components/CakeCard';
import ReviewCard from '../components/ReviewCard';
import Newsletter from '../components/Newsletter';
import FadeIn from '../components/FadeIn';
import AnimatedCounter from '../components/AnimatedCounter';
import { CAKES_DATA, REVIEWS_DATA } from '../data';

export default function Home() {
  // Get first 3 popular/best-selling cakes for featured list
  const featuredCakes = CAKES_DATA.filter(cake => cake.bestSeller || cake.popular).slice(0, 3);

  // Get first 2 reviews for preview
  const featuredReviews = REVIEWS_DATA.slice(0, 2);

  // Instagram gallery mock data (beautiful Unsplash cake assets)
  const instagramImages = [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1562266135-be457568a2ee?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1616031037011-08ec500049b4?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1464349172961-1ff4a3b68af0?auto=format&fit=crop&w=300&q=80"
  ];

  return (
    <div className="home-page" id="home-page">
      
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Why Choose Us Section with Fade In up */}
      <section className="section section-alt" id="why-choose-us" style={{ padding: '100px 24px' }}>
        <FadeIn amount={0.1}>
          <div className="section-header">
            <span className="section-badge">Our Baking Philosophy</span>
            <h2 className="section-title">Why Choose Homemade?</h2>
            <p className="section-subtitle">
              Unlike commercial bakeries, our cakes are crafted individually in a sanitary home kitchen. We do not use premixes, chemical preservatives, or artificial shelf-stabilizers.
            </p>
          </div>
        </FadeIn>

        <div className="features-grid">
          <FadeIn direction="up" delay={0.1} amount={0.1}>
            <div className="feature-card" id="feature-1">
              <div className="feature-icon-wrapper">
                <Heart size={28} />
              </div>
              <h3 className="feature-title">Handmade with Love</h3>
              <p className="feature-desc">
                Every whisk, fold, and frost is done completely by hand, giving our cakes that nostalgic, authentic homemade crumb structure.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} amount={0.1}>
            <div className="feature-card" id="feature-2">
              <div className="feature-icon-wrapper">
                <Sparkles size={28} />
              </div>
              <h3 className="feature-title">Pure Ingredients</h3>
              <p className="feature-desc">
                We exclusively use premium butter, farm-fresh pasture eggs, Madagascar vanilla beans, and real single-origin dark chocolate.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3} amount={0.1}>
            <div className="feature-card" id="feature-3">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={28} />
              </div>
              <h3 className="feature-title">Kitchen Hygiene</h3>
              <p className="feature-desc">
                Certified sanitary home-baking setup with rigorous cleaning protocols, ensuring maximum safety and premium health standards.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} amount={0.1}>
            <div className="feature-card" id="feature-4">
              <div className="feature-icon-wrapper">
                <Zap size={28} />
              </div>
              <h3 className="feature-title">Bespoke Customization</h3>
              <p className="feature-desc">
                We tailor the sugar levels, egg/eggless base, sizes, and decorative designs precisely to your taste buds and theme.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2.5. Statistics Banner (Animated Count-Up) */}
      <section className="section" style={{ padding: '50px 24px', background: 'var(--color-chocolate)', color: 'var(--color-cream)', borderTop: '2px solid rgba(255,255,255,0.05)' }} id="home-stats-strip">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div>
            <h3 style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', color: 'var(--color-soft-pink)', margin: '0 0 6px 0', fontStyle: 'italic', fontWeight: 'bold' }}>
              <AnimatedCounter value="2500" suffix="+" />
            </h3>
            <p style={{ textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.15em', opacity: 0.8, margin: 0, fontWeight: 'bold' }}>Cakes Delivered</p>
          </div>
          <div>
            <h3 style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', color: 'var(--color-soft-pink)', margin: '0 0 6px 0', fontStyle: 'italic', fontWeight: 'bold' }}>
              <AnimatedCounter value="100" suffix="%" />
            </h3>
            <p style={{ textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.15em', opacity: 0.8, margin: 0, fontWeight: 'bold' }}>Fresh Butter & Cream</p>
          </div>
          <div>
            <h3 style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', color: 'var(--color-soft-pink)', margin: '0 0 6px 0', fontStyle: 'italic', fontWeight: 'bold' }}>
              <AnimatedCounter value="45" suffix="+" />
            </h3>
            <p style={{ textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.15em', opacity: 0.8, margin: 0, fontWeight: 'bold' }}>Signature Flavors</p>
          </div>
          <div>
            <h3 style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', color: 'var(--color-soft-pink)', margin: '0 0 6px 0', fontStyle: 'italic', fontWeight: 'bold' }}>
              <AnimatedCounter value="5" suffix=".0" />
            </h3>
            <p style={{ textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.15em', opacity: 0.8, margin: 0, fontWeight: 'bold' }}>Community Rating</p>
          </div>
        </div>
      </section>

      {/* 3. Featured Cakes */}
      <section className="section" id="featured-cakes" style={{ padding: '100px 24px' }}>
        <FadeIn amount={0.1}>
          <div className="section-header">
            <span className="section-badge">Gourmet Selection</span>
            <h2 className="section-title">Most Loved Homemade Cakes</h2>
            <p className="section-subtitle">
              Freshly pulled from our ovens this morning. Explore these top-voted customer favorites, packed with deep flavors and delicate decoration.
            </p>
          </div>
        </FadeIn>

        <FadeIn amount={0.05}>
          <div className="cakes-grid">
            {featuredCakes.map(cake => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>
        </FadeIn>

        <FadeIn amount={0.1} direction="up" delay={0.2}>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/cakes" className="btn-primary" id="view-all-cakes-home">
              View All Cakes <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 4. Special Custom Order Promo Banner (Bento Style Card) with Fade up */}
      <section className="section section-alt" style={{ padding: '80px 24px' }} id="special-offer">
        <FadeIn direction="up" amount={0.15}>
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, var(--color-white) 0%, var(--color-soft-pink) 100%)',
            border: '1.5px solid rgba(231, 84, 128, 0.15)',
            borderRadius: 'var(--radius-md)',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            gridTemplateColumns: '1.2fr 1fr',
            alignItems: 'center',
            gap: '40px',
            boxShadow: 'var(--shadow-medium)'
          }} className="about-row">
            <div>
              <span className="section-badge">Bespoke Celebrations</span>
              <h3 style={{ fontSize: '2.4rem', marginBottom: '16px', lineHeight: 1.1, fontFamily: 'var(--font-display)', color: 'var(--color-chocolate)' }}>Have a Specific Dream Cake in Mind?</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '30px', fontSize: '1rem', lineHeight: '1.7' }}>
                Whether it is a custom theme birthday, a multi-tier anniversary masterpiece, or specific allergen-safe requirements, we can translate your thoughts into edible art. Specify your weight, flavors, custom message, and date.
              </p>
              <Link to="/custom-order" className="btn-primary" style={{ backgroundColor: 'var(--color-chocolate)' }} id="order-custom-btn-offer">
                Build Your Dream Cake <Sparkles size={16} />
              </Link>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="https://tse2.mm.bing.net/th/id/OIP.Ovctbef1YjBbxHqdh-5sCgHaEJ?r=0&pid=Api&P=0&h=180" 
                alt="Delicate rose gold cake decorator"
                style={{ borderRadius: 'var(--radius-md)', height: '300px', width: '100%', objectFit: 'cover', border: '4px solid var(--color-white)', boxShadow: 'var(--shadow-soft)' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 5. Customer Reviews Preview */}
      <section className="section" id="reviews-preview" style={{ padding: '100px 24px' }}>
  <FadeIn amount={0.1}>
    <div className="section-header">
      <span className="section-badge">Customer Stories</span>

      <h2 className="section-title">
        Sweet Moments From Happy Customers
      </h2>

      <p className="section-subtitle">
        Every cake becomes a part of someone's special celebration.
        Here are some heartfelt words from customers who enjoyed our
        handcrafted homemade cakes.
      </p>
    </div>
  </FadeIn>


  <FadeIn amount={0.05}>
    <div 
      className="reviews-page-grid"
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '750px',
        margin: '0 auto',
        gap: '30px'
      }}
    >
      {featuredReviews.map(review => (
        <ReviewCard 
          key={review.id} 
          review={review} 
        />
      ))}
    </div>
  </FadeIn>


  <FadeIn amount={0.1} direction="up" delay={0.1}>
    <div style={{ 
      textAlign: 'center', 
      marginTop: '40px' 
    }}>
      <Link 
        to="/reviews" 
        className="btn-secondary" 
        id="view-all-reviews-home"
      >
        Explore More Customer Reviews
      </Link>
    </div>
  </FadeIn>
</section>

     
      
      {/* 7. Newsletter Section */}
      <section className="section" style={{ padding: '100px 24px' }} id="newsletter-section">
        <FadeIn amount={0.1}>
          <Newsletter />
        </FadeIn>
      </section>

    </div>
  );
}
