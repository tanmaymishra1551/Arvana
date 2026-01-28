// Technology.jsx
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const Technology = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <section
      ref={containerRef}
      data-section-color="#16213e"
      className="relative py-32 bg-[#16213e] overflow-hidden"
    >
      {/* Background Effects */}
      <BackgroundEffects />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <Header isInView={isInView} />

        {/* Technology Categories */}
        <div className="mt-20 space-y-16">
          <TechCategory
            label="Frontend"
            y={y1}
            isInView={isInView}
            delay={0}
            technologies={[
              { name: 'React', proficiency: 'Expert' },
              { name: 'Next.js', proficiency: 'Expert' },
              { name: 'TypeScript', proficiency: 'Expert' },
              { name: 'Tailwind CSS', proficiency: 'Expert' },
              { name: 'Vue.js', proficiency: 'Advanced' },
              { name: 'Framer Motion', proficiency: 'Advanced' },
            ]}
          />

          <TechCategory
            label="Backend"
            y={y2}
            isInView={isInView}
            delay={0.1}
            technologies={[
              { name: 'Node.js', proficiency: 'Expert' },
              { name: 'Django', proficiency: 'Expert' },
              { name: 'PostgreSQL', proficiency: 'Expert' },
              { name: 'GraphQL', proficiency: 'Advanced' },
              { name: 'Redis', proficiency: 'Advanced' },
              { name: 'Docker', proficiency: 'Advanced' },
            ]}
          />

          <TechCategory
            label="Mobile"
            y={y1}
            isInView={isInView}
            delay={0.2}
            technologies={[
              { name: 'React Native', proficiency: 'Expert' },
              { name: 'Flutter', proficiency: 'Expert' },
              { name: 'Swift', proficiency: 'Advanced' },
              { name: 'Kotlin', proficiency: 'Advanced' },
              { name: 'Firebase', proficiency: 'Advanced' },
            ]}
          />

          <TechCategory
            label="Infrastructure"
            y={y2}
            isInView={isInView}
            delay={0.3}
            technologies={[
              { name: 'AWS', proficiency: 'Expert' },
              { name: 'Vercel', proficiency: 'Expert' },
              { name: 'CI/CD', proficiency: 'Advanced' },
              { name: 'Kubernetes', proficiency: 'Advanced' },
              { name: 'Terraform', proficiency: 'Intermediate' },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

// Header
const Header = ({ isInView }) => {
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="text-center max-w-3xl mx-auto"
    >
      <motion.div
        className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
      >
        <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
          Technology Stack
        </span>
      </motion.div>
      <h2 className="text-4xl md:text-5xl font-bold text-white/95 mb-4">
        Built with modern tools
      </h2>
      <p className="text-lg text-slate-400">
        Industry-leading technologies selected for performance, scalability, and developer experience.
      </p>
    </motion.div>
  );
};

// Technology Category
const TechCategory = ({ label, technologies, y, isInView, delay }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div style={{ y }} className="relative">
      {/* Category Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, delay: delay }}
        className="mb-6"
      >
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-3">
          <span className="w-8 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
          {label}
        </h3>
      </motion.div>

      {/* Technology Pills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="flex flex-wrap gap-3"
      >
        {technologies.map((tech, index) => (
          <TechPill key={index} {...tech} />
        ))}
      </motion.div>
    </motion.div>
  );
};

// Technology Pill
const TechPill = ({ name, proficiency }) => {
  const pillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 18,
      },
    },
  };

  const proficiencyColors = {
    Expert: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400',
    Advanced: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
    Intermediate: 'from-slate-500/20 to-slate-600/20 border-slate-500/30 text-slate-400',
  };

  const glowColors = {
    Expert: 'group-hover:shadow-cyan-500/30',
    Advanced: 'group-hover:shadow-emerald-500/30',
    Intermediate: 'group-hover:shadow-slate-500/20',
  };

  return (
    <motion.div
      variants={pillVariants}
      className="group relative"
    >
      <motion.div
        className={`
          relative px-5 py-3 rounded-full
          bg-gradient-to-br ${proficiencyColors[proficiency]}
          border backdrop-blur-sm
          transition-all duration-400
          ${glowColors[proficiency]}
        `}
        whileHover={{
          y: -4,
          scale: 1.05,
          boxShadow: proficiency === 'Expert' 
            ? '0 10px 30px -10px rgba(6, 182, 212, 0.3)'
            : proficiency === 'Advanced'
            ? '0 10px 30px -10px rgba(16, 185, 129, 0.3)'
            : '0 10px 30px -10px rgba(100, 116, 139, 0.2)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${proficiencyColors[proficiency]} opacity-0`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.4 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-2.5">
          <span className="text-sm font-semibold text-white/95">
            {name}
          </span>
          
          {/* Proficiency dot indicator */}
          <motion.span
            className={`w-1.5 h-1.5 rounded-full ${
              proficiency === 'Expert' ? 'bg-cyan-400' :
              proficiency === 'Advanced' ? 'bg-emerald-400' :
              'bg-slate-400'
            }`}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          />
        </div>

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Subtle proficiency label on hover */}
      <motion.div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ y: -5 }}
        whileHover={{ y: 0 }}
      >
        <span className="text-xs text-slate-500 whitespace-nowrap">
          {proficiency}
        </span>
      </motion.div>
    </motion.div>
  );
};

// Background Effects
const BackgroundEffects = () => (
  <>
    {/* Gradient orbs */}
    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />

    {/* Dot grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
      }}
    />

    {/* Top gradient blend */}
    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1a1a2e] to-transparent" />
  </>
);

export default Technology;