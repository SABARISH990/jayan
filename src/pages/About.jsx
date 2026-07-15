import React from 'react';
import { Sparkles, Heart, Leaf, Shield, Compass, Eye, Trophy, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/FadeIn';
import AnimatedCounter from '../components/AnimatedCounter';

export default function About() {
  return (
   <PageTransition>
  <div className="about-page">

    {/* Header */}
    <section className="about-header">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="about-header-title"
      >
        Our Sweet Story
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .2 }}
        className="about-breadcrumb"
      >
        Home / About Us
      </motion.p>
    </section>

    {/* Story */}
    <section className="about-section">
      <div className="about-row">

        <FadeIn direction="left" className="about-content">

          <span className="about-tag">
            Baked with Tradition
          </span>

          <h2 className="about-heading">
            How It All Began
          </h2>

          <p className="about-text">
            Our passion for home baking started generations ago in our family kitchen.
            Every celebration inspired us to create cakes filled with love,
            premium ingredients, and unforgettable flavors.
          </p>

          <p className="about-text">
            Today we continue that tradition by baking every cake fresh,
            using handcrafted recipes, rich cream, and beautiful decorations
            for every special occasion.
          </p>

          <div className="about-stats">

            <div className="stat-box">
              <span className="stat-number">
                <AnimatedCounter value="8" />+
              </span>
              <span className="stat-title">
                Years Baking
              </span>
            </div>

            <div className="stat-box">
              <span className="stat-number">
                <AnimatedCounter value="5000" />+
              </span>
              <span className="stat-title">
                Cakes Served
              </span>
            </div>

            <div className="stat-box">
              <span className="stat-number">
                <AnimatedCounter value="100" />%
              </span>
              <span className="stat-title">
                Homemade
              </span>
            </div>

          </div>

        </FadeIn>

        <FadeIn direction="right" className="about-image-card">

          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: .4 }}
            className="about-img"
            src="https://png.pngtree.com/thumb_back/fw800/background/20230902/pngtree-a-birthday-cake-with-decorations-and-decorations-around-it-image_13155460.jpg"
            alt="Homemade Cake"
          />

        </FadeIn>

      </div>
    </section>
    {/* ===========================
    Mission & Vision
=========================== */}

<section className="about-section about-light">

  <div className="section-header">
    <span className="section-badge">Our Purpose</span>
    <h2 className="section-title">
      Mission & Vision
    </h2>
  </div>

  <div className="mission-grid">

    <FadeIn direction="up">

      <div className="mission-card">

        <div className="mission-icon">
          <Compass size={28}/>
        </div>

        <h3>Our Mission</h3>

        <p>
          We create premium homemade cakes that bring happiness to every
          celebration using fresh ingredients, handcrafted recipes and
          beautiful custom designs.
        </p>

      </div>

    </FadeIn>

    <FadeIn direction="up" delay={0.2}>

      <div className="mission-card">

        <div className="mission-icon">
          <Eye size={28}/>
        </div>

        <h3>Our Vision</h3>

        <p>
          To become the most trusted homemade cake brand by delivering
          delicious cakes, exceptional customer service and unforgettable
          celebrations.
        </p>

      </div>

    </FadeIn>

  </div>

</section>

{/* ===========================
      Meet the Baker
=========================== */}

<section className="about-section">

  <div className="about-row reverse">

    <FadeIn direction="left">

      <motion.img
        whileHover={{ scale:1.03 }}
        transition={{ duration:.4 }}
        className="about-img"
        src="https://wishes.photos/wp-content/uploads/2020/09/Best-Birthday-Cake-image.jpg"
        alt="Head Baker"
      />

    </FadeIn>

    <FadeIn direction="right">

      <span className="about-tag">
        Meet Our Baker
      </span>

      <h2 className="about-heading">
        Baking with Love Since Day One
      </h2>

      <p className="about-text">
        Every cake is handcrafted with passion, creativity and attention to
        detail. From birthdays to weddings, our goal is to make every
        celebration memorable through delicious homemade cakes.
      </p>

      <blockquote className="about-quote">
        "Every cake tells a story, and every celebration deserves something
        unforgettable."
      </blockquote>

    </FadeIn>

  </div>

</section>
{/* ===========================
   Why Choose Us
=========================== */}

<section className="about-section about-light">

  <div className="section-header">

    <span className="section-badge">
      Why Choose Us
    </span>

    <h2 className="section-title">
      Our Homemade Promise
    </h2>

    <p className="section-subtitle">
      Every cake is handcrafted with love, premium ingredients,
      and attention to every little detail.
    </p>

  </div>

  <div className="features-grid">

    <FadeIn direction="up">
      <div className="feature-card">

        <div className="feature-icon-wrapper">
          <Leaf size={26}/>
        </div>

        <h3 className="feature-title">
          Fresh Ingredients
        </h3>

        <p className="feature-desc">
          We bake every cake using fresh dairy, premium flour,
          farm-fresh eggs and high-quality chocolate.
        </p>

      </div>
    </FadeIn>

    <FadeIn direction="up" delay={0.1}>
      <div className="feature-card">

        <div className="feature-icon-wrapper">
          <Shield size={26}/>
        </div>

        <h3 className="feature-title">
          Hygienic Kitchen
        </h3>

        <p className="feature-desc">
          Every order is prepared in a clean,
          sanitized kitchen following strict food safety practices.
        </p>

      </div>
    </FadeIn>

    <FadeIn direction="up" delay={0.2}>
      <div className="feature-card">

        <div className="feature-icon-wrapper">
          <Heart size={26}/>
        </div>

        <h3 className="feature-title">
          Made With Love
        </h3>

        <p className="feature-desc">
          Every decoration is handcrafted to make
          your celebration truly memorable.
        </p>

      </div>
    </FadeIn>

    <FadeIn direction="up" delay={0.3}>
      <div className="feature-card">

        <div className="feature-icon-wrapper">
          <Sparkles size={26}/>
        </div>

        <h3 className="feature-title">
          Premium Quality
        </h3>

        <p className="feature-desc">
          No preservatives, no shortcuts—
          only delicious homemade goodness.
        </p>

      </div>
    </FadeIn>

  </div>

</section>

</div>
</PageTransition>
  );
}
