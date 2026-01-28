// wrappers/MotionWrapper.jsx
import { motion } from 'framer-motion';

export default function MotionWrapper({ 
  children, 
  variant = 'fadeIn',
  delay = 0,
  className = '' 
}) {
  const variants = {
    fadeIn: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
      }
    },
    slideUp: {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 20, delay }
      }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 120, damping: 18, delay }
      }
    }
  };

  return (
    <motion.div
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}