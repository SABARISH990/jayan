import React from 'react';
import { Sparkles, Heart, Leaf, Shield, Compass, Eye, Trophy, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/FadeIn';
import AnimatedCounter from '../components/AnimatedCounter';

export default function About() {
  return (
    <PageTransition>
      <div className="about-page" id="about-page">
        
        {/* Page Header */}
        <div className="page-header" style={{ padding: '100px 24px 60px 24px', textAlign: 'center', background: 'linear-gradient(135deg, var(--color-soft-pink) 0%, var(--color-cream) 100%)' }}>
          <motion.h1 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="page-header-title"
            style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--color-chocolate)', margin: 0 }}
          >
            Our Sweet Story
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="breadcrumbs"
            style={{ marginTop: '10px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}
          >
            <span>Home</span> / About Us
          </motion.div>
        </div>

        {/* 1. Our Story Section */}
        <section className="section" id="story-section" style={{ padding: '100px 24px' }}>
          <div className="about-row">
            <FadeIn direction="left" className="about-content" amount={0.1}>
              <span className="about-accent-title" style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.75rem', color: 'var(--color-rose)', fontWeight: 'bold' }}>Baked with Tradition</span>
              <h2 className="about-heading" style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--color-chocolate)', marginTop: '8px', marginBottom: '20px' }}>How It All Began</h2>
              <p className="about-p" style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '16px' }}>
                Our passion for home baking started generations ago in Grandmother Jenkins' countryside kitchen. Every Sunday was filled with the warm, buttery aroma of fresh vanilla chiffon and hand-stirred caramel boiling on the stove. 
              </p>
              <p className="about-p" style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '24px' }}>
                In 2018, we decided to open our licensed home kitchen, bringing those pristine childhood recipes to our local neighborhood. Today, we remain true to our origins: small-batch baking, hand-whipped frostings, and beautiful attention to detail.
              </p>
              
              <div className="about-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '30px' }}>
                <div className="stat-box" id="stat-1" style={{ textAlign: 'center', padding: '16px', background: 'var(--color-white)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(92,58,33,0.08)' }}>
                  <span className="stat-num" style={{ display: 'block', fontSize: '2rem', fontFamily: 'var(--font-display)', color: 'var(--color-rose)', fontWeight: 'bold' }}>
                    <AnimatedCounter value="8" />+
                  </span>
                  <span className="stat-label" style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}>Years Baking</span>
                </div>
                <div className="stat-box" id="stat-2" style={{ textAlign: 'center', padding: '16px', background: 'var(--color-white)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(92,58,33,0.08)' }}>
                  <span className="stat-num" style={{ display: 'block', fontSize: '2rem', fontFamily: 'var(--font-display)', color: 'var(--color-rose)', fontWeight: 'bold' }}>
                    <AnimatedCounter value="5000" />+
                  </span>
                  <span className="stat-label" style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}>Cakes Served</span>
                </div>
                <div className="stat-box" id="stat-3" style={{ textAlign: 'center', padding: '16px', background: 'var(--color-white)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(92,58,33,0.08)' }}>
                  <span className="stat-num" style={{ display: 'block', fontSize: '2rem', fontFamily: 'var(--font-display)', color: 'var(--color-rose)', fontWeight: 'bold' }}>
                    <AnimatedCounter value="100" />%
                  </span>
                  <span className="stat-label" style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}>Homemade</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" className="about-image-card" amount={0.1}>
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                src="https://png.pngtree.com/thumb_back/fw800/background/20230902/pngtree-a-birthday-cake-with-decorations-and-decorations-around-it-image_13155460.jpg" 
                alt="Artisanal home kitchen bakery" 
                className="about-img"
                style={{ borderRadius: 'var(--radius-md)', width: '100%', height: '400px', objectFit: 'cover', boxShadow: 'var(--shadow-medium)' }}
                referrerPolicy="no-referrer"
              />
            </FadeIn>
          </div>
        </section>

        {/* 2. Mission & Vision Section (Two Column Bento Style) */}
        <section className="section section-alt" id="mission-vision-section" style={{ padding: '80px 24px' }}>
          <div className="about-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
            
            <FadeIn direction="up" delay={0.1} className="timeline-content" style={{ padding: '40px', background: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-soft)' }} id="mission-card">
              <div className="feature-icon-wrapper" style={{ margin: '0 0 20px 0', background: 'var(--color-soft-pink)', color: 'var(--color-rose)' }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', color: 'var(--color-chocolate)', marginBottom: '12px' }}>Our Mission</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                To spread happiness, celebrate life's finest milestones, and satisfy sweet cravings by delivering premium-quality, beautiful, and completely pure homemade cakes that nourish both body and soul.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="timeline-content" style={{ padding: '40px', background: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-soft)' }} id="vision-card">
              <div className="feature-icon-wrapper" style={{ margin: '0 0 20px 0', background: 'var(--color-soft-pink)', color: 'var(--color-rose)' }}>
                <Eye size={24} />
              </div>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', color: 'var(--color-chocolate)', marginBottom: '12px' }}>Our Vision</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                To remain the most trusted local boutique home bakery, celebrated for our commitment to raw-material integrity, zero chemical additives, handcraftsmanship, and highly personalized customer care.
              </p>
            </FadeIn>

          </div>
        </section>

        {/* 3. Meet Clara Jenkins - Head Baker */}
        <section className="section" id="meet-baker-section" style={{ padding: '100px 24px' }}>
          <div className="about-row reverse">
            <FadeIn direction="right" className="about-content" amount={0.1}>
              <span className="about-accent-title" style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.75rem', color: 'var(--color-rose)', fontWeight: 'bold' }}>The Sweet Artist</span>
              <h2 className="about-heading" style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--color-chocolate)', marginTop: '8px', marginBottom: '20px' }}>Meet the Baker</h2>
              <p className="about-p" style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '16px' }}>
                Meet <strong>Clara Jenkins</strong>, our founder and head cake artisan. Clara is a certified pastry chef who swapped commercial, high-volume bakeries for a quiet home kitchen, where she could focus on what truly matters: taste, authenticity, and custom artistry.
              </p>
              <p className="about-p" style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1rem', fontStyle: 'italic', paddingLeft: '16px', borderLeft: '3px solid var(--color-rose)', marginBottom: '16px' }}>
                "Baking is a beautiful blend of precise science and artistic expression. I handcraft every blossom and temper every chocolate wave, because I know this cake will sit at the center of your family's happiest moments."
              </p>
            </FadeIn>

            <FadeIn direction="left" className="about-image-card" amount={0.1}>
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                src="https://wishes.photos/wp-content/uploads/2020/09/Best-Birthday-Cake-image.jpg" 
                alt="Baker preparing organic dough in home kitchen" 
                className="about-img"
                style={{ borderRadius: 'var(--radius-md)', width: '100%', height: '400px', objectFit: 'cover', boxShadow: 'var(--shadow-medium)' }}
                referrerPolicy="no-referrer"
              />
            </FadeIn>
          </div>
        </section>

        {/* 4. Why Homemade Commitments */}
        <section className="section section-alt" id="commitments-section" style={{ padding: '100px 24px' }}>
          <FadeIn amount={0.15}>
            <div className="section-header">
              <span className="section-badge">Culinary Integrity</span>
              <h2 className="section-title">Our Strict Cooking Pledges</h2>
              <p className="section-subtitle">
                We operate under rigid standard operating procedures because we believe you deserve the healthiest, safest, and most flavorful cakes.
              </p>
            </div>
          </FadeIn>

          <div className="features-grid">
            <FadeIn direction="up" delay={0.1} className="feature-card" style={{ backgroundColor: 'var(--color-white)' }} id="pledge-1">
              <div className="feature-icon-wrapper" style={{ backgroundColor: 'var(--color-cream)' }}>
                <Leaf size={24} />
              </div>
              <h3 className="feature-title">Fresh Ingredients</h3>
              <p className="feature-desc" style={{ fontSize: '0.85rem' }}>
                We source our fresh berries, edible flowers, and eggs from local organic farms weekly. We never use cold storage egg powders or artificial syrups.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="feature-card" style={{ backgroundColor: 'var(--color-white)' }} id="pledge-2">
              <div className="feature-icon-wrapper" style={{ backgroundColor: 'var(--color-cream)' }}>
                <Shield size={24} />
              </div>
              <h3 className="feature-title">Kitchen Hygiene</h3>
              <p className="feature-desc" style={{ fontSize: '0.85rem' }}>
                We wear protective culinary wear and sanitize all mixers, pans, and countertop areas before and after every bake cycle. Zero exceptions.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="feature-card" style={{ backgroundColor: 'var(--color-white)' }} id="pledge-3">
              <div className="feature-icon-wrapper" style={{ backgroundColor: 'var(--color-cream)' }}>
                <Heart size={24} />
              </div>
              <h3 className="feature-title">Pure Dairy Butter</h3>
              <p className="feature-desc" style={{ fontSize: '0.85rem' }}>
                We never cut corners with hydrogenated margarine or cheap palm oil. All our frosting is crafted with 100% natural cream butter.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="feature-card" style={{ backgroundColor: 'var(--color-white)' }} id="pledge-4">
              <div className="feature-icon-wrapper" style={{ backgroundColor: 'var(--color-cream)' }}>
                <Sparkles size={24} />
              </div>
              <h3 className="feature-title">No Chemical Preservatives</h3>
              <p className="feature-desc" style={{ fontSize: '0.85rem' }}>
                We bake in micro-batches which eliminates any need for artificial stabilizers or mold-inhibitors. Fresh, clean, and safe for children.
              </p>
            </FadeIn>
          </div>
        </section>


      </div>
    </PageTransition>
  );
}
