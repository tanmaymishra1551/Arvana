// Testimonials.jsx
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Testimonials = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "They delivered a production-ready mobile app in 8 weeks. The code quality and architecture exceeded our expectations.",
      author: "James Wilson",
      role: "CTO, FinanceApp",
      company: "FinanceApp",
    },
    {
      quote: "Exceptional attention to detail. Our web platform now handles 100k+ daily users without breaking a sweat.",
      author: "Maya Patel",
      role: "VP Product, SaaSCo",
      company: "SaaSCo",
    },
    {
      quote: "Professional, responsive, and technically brilliant. They transformed our legacy system into a modern cloud-native architecture.",
      author: "David Kim",
      role: "Founder, TechStart",
      company: "TechStart",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section
      ref={containerRef}
      data-section-color="#0d0d0d"
      className="relative py-32 bg-[#0d0d0d] overflow-hidden"
    >
      {/* Background */}
      <BackgroundEffects accent="green" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <Header 
          isInView={isInView} 
          label="Testimonials" 
          title="Trusted by founders" 
        />

        {/* Testimonial Display */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16"
        >
          <TestimonialCard testimonial={testimonials[activeIndex]} />

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group p-2"
                aria-label={`View testimonial ${index + 1}`}
              >
                <motion.div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-emerald-400'
                      : 'w-1.5 bg-slate-700'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      key={testimonial.author}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      {/* Quote */}
      <div className="mb-8">
        <svg
          className="w-10 h-10 text-emerald-500/20 mx-auto mb-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author */}
      <div>
        <p className="text-base font-semibold text-white/95">
          {testimonial.author}
        </p>
        <p className="text-sm text-emerald-400/80 mt-1">
          {testimonial.role}
        </p>
      </div>
    </motion.div>
  );
};

export default Testimonials;