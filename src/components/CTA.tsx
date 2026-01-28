// components/CTA.jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from '../wrappers/Section';

export default function CTA() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <Section
      ref={containerRef}
      id="cta"
      sectionColor="#06b6d4"
      className="relative py-40"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to build?</h2>
          <p>Let's discuss your project</p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </Section>
  );
}