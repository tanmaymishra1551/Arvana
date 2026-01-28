// ====================================
// FRAMER MOTION SETUP
// ====================================

// src/lib/motion.js
/**
 * Centralized Framer Motion configuration
 * Reusable variants and spring configs
 */

// Spring configurations
export const springs = {
  gentle: { stiffness: 120, damping: 18 },
  smooth: { stiffness: 100, damping: 20 },
  snappy: { stiffness: 300, damping: 25 },
  bouncy: { stiffness: 400, damping: 20 },
};

// Easing curves
export const easings = {
  premium: [0.22, 1, 0.36, 1],      // easeOutExpo-like
  smooth: [0.43, 0.13, 0.23, 0.96], // easeOutCirc-like
  sharp: [0.4, 0, 0.2, 1],          // easeInOutCubic
};

// Reusable animation variants
export const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: easings.premium }
    }
  },

  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easings.premium }
    }
  },

  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', ...springs.smooth }
    }
  },

  slideInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: easings.smooth }
    }
  },

  stagger: {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },

  staggerFast: {
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  },
};

// Viewport configuration for scroll-triggered animations
export const viewport = {
  once: true,
  amount: 0.2,
  margin: '-10%',
};

// Reduced motion settings
export const reducedMotion = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.01 }
  }
};