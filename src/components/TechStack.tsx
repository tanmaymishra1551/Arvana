// import { motion, useScroll, useTransform, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import type { MotionValue } from 'framer-motion';
// import Section from '../wrappers/Section';

// /* ----------------------------------
//    TYPES
// ----------------------------------- */

// interface Technology {
//   name: string;
//   proficiency: string;
// }

// interface Category {
//   label: string;
//   technologies: Technology[];
// }

// interface TechCategoryProps extends Category {
//   scrollYProgress: MotionValue<number>;
//   isInView: boolean;
//   delay: number;
// }

// interface TechPillProps {
//   name: string;
//   proficiency: string;
// }

// interface SectionHeaderProps {
//   isInView: boolean;
//   label: string;
//   title: string;
// }

// /* ----------------------------------
//    MAIN COMPONENT
// ----------------------------------- */

// export default function TechStack() {
//   const containerRef = useRef<HTMLElement | null>(null);
//   const isInView = useInView(containerRef, { once: true, amount: 0.2 });

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start end', 'end start'],
//   });

//   const categories: Category[] = [
//     {
//       label: 'Frontend',
//       technologies: [
//         { name: 'React', proficiency: 'Expert' },
//         { name: 'Next.js', proficiency: 'Expert' },
//         { name: 'TypeScript', proficiency: 'Expert' },
//       ],
//     },
//     {
//       label: 'Backend',
//       technologies: [
//         { name: 'Node.js', proficiency: 'Expert' },
//         { name: 'Django', proficiency: 'Expert' },
//       ],
//     },
//   ];

//   return (
//     <Section
//       ref={containerRef}
//       id="tech"
//       sectionColor="#16213e"
//       className="relative py-32"
//     >
//       <div className="mx-auto max-w-7xl px-6 md:px-12">
//         <SectionHeader
//           isInView={isInView}
//           label="Technology"
//           title="Modern stack"
//         />

//         <div className="mt-20 space-y-16">
//           {categories.map((category, index) => (
//             <TechCategory
//               key={index}
//               {...category}
//               scrollYProgress={scrollYProgress}
//               isInView={isInView}
//               delay={index * 0.1}
//             />
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }

// /* ----------------------------------
//    TECH CATEGORY
// ----------------------------------- */

// function TechCategory({
//   label,
//   technologies,
//   scrollYProgress,
//   isInView,
//   delay,
// }: TechCategoryProps) {
//   const y = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ['0%', delay % 2 === 0 ? '15%' : '8%']
//   );

//   return (
//     <motion.div style={{ y }}>
//       <motion.h3
//         initial={{ opacity: 0, x: -20 }}
//         animate={isInView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.5, delay }}
//         className="text-2xl font-semibold"
//       >
//         {label}
//       </motion.h3>

//       <motion.div
//         initial="hidden"
//         animate={isInView ? 'visible' : 'hidden'}
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: {
//               staggerChildren: 0.08,
//               delayChildren: delay,
//             },
//           },
//         }}
//         className="mt-6 flex flex-wrap gap-3"
//       >
//         {technologies.map((tech, index) => (
//           <TechPill key={index} {...tech} />
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// }

// /* ----------------------------------
//    TECH PILL
// ----------------------------------- */

// function TechPill({ name, proficiency }: TechPillProps) {
//   return (
//     <motion.div
//       variants={{
//         hidden: { opacity: 0, y: 20, scale: 0.9 },
//         visible: {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           transition: { type: 'spring', stiffness: 120, damping: 18 },
//         },
//       }}
//     >
//       <motion.div
//         whileHover={{ y: -4, scale: 1.05 }}
//         transition={{ type: 'spring', stiffness: 400, damping: 25 }}
//         className="rounded-full bg-white/5 px-4 py-2 text-sm backdrop-blur"
//       >
//         <span className="font-medium">{name}</span>
//         <span className="ml-2 opacity-60">{proficiency}</span>
//       </motion.div>
//     </motion.div>
//   );
// }

// /* ----------------------------------
//    SECTION HEADER
// ----------------------------------- */

// function SectionHeader({ isInView, label, title }: SectionHeaderProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6 }}
//       className="text-center"
//     >
//       <span className="mb-4 inline-block text-sm uppercase tracking-widest opacity-60">
//         {label}
//       </span>
//       <h2 className="text-4xl font-bold">{title}</h2>
//     </motion.div>
//   );
// }

// components/TechStack.tsx
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { MotionValue } from 'framer-motion';
import Section from '../wrappers/Section';

/* ----------------------------------
   TYPES
----------------------------------- */

interface Technology {
  name: string;
  proficiency: 'Expert' | 'Advanced' | 'Intermediate';
}

interface Category {
  label: string;
  technologies: Technology[];
}

interface TechCategoryProps extends Category {
  scrollYProgress: MotionValue<number>;
  isInView: boolean;
  delay: number;
  index: number;
}

interface TechPillProps {
  name: string;
  proficiency: 'Expert' | 'Advanced' | 'Intermediate';
}

interface SectionHeaderProps {
  isInView: boolean;
  label: string;
  title: string;
  subtitle?: string;
}

/* ----------------------------------
   MAIN COMPONENT
----------------------------------- */

export default function TechStack() {
  const containerRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const categories: Category[] = [
    {
      label: 'Frontend',
      technologies: [
        { name: 'React', proficiency: 'Expert' },
        { name: 'Next.js', proficiency: 'Expert' },
        { name: 'TypeScript', proficiency: 'Expert' },
        { name: 'Tailwind CSS', proficiency: 'Expert' },
        { name: 'Vue.js', proficiency: 'Advanced' },
        { name: 'Framer Motion', proficiency: 'Advanced' },
      ],
    },
    {
      label: 'Backend',
      technologies: [
        { name: 'Node.js', proficiency: 'Expert' },
        { name: 'Django', proficiency: 'Expert' },
        { name: 'PostgreSQL', proficiency: 'Expert' },
        { name: 'GraphQL', proficiency: 'Advanced' },
        { name: 'Redis', proficiency: 'Advanced' },
        { name: 'Docker', proficiency: 'Advanced' },
      ],
    },
    {
      label: 'Mobile',
      technologies: [
        { name: 'React Native', proficiency: 'Expert' },
        { name: 'Flutter', proficiency: 'Expert' },
        { name: 'Swift', proficiency: 'Advanced' },
        { name: 'Kotlin', proficiency: 'Advanced' },
        { name: 'Firebase', proficiency: 'Advanced' },
      ],
    },
    {
      label: 'Infrastructure',
      technologies: [
        { name: 'AWS', proficiency: 'Expert' },
        { name: 'Vercel', proficiency: 'Expert' },
        { name: 'CI/CD', proficiency: 'Advanced' },
        { name: 'Kubernetes', proficiency: 'Advanced' },
        { name: 'Terraform', proficiency: 'Intermediate' },
      ],
    },
  ];

  return (
    <Section
      ref={containerRef}
      id="tech"
      sectionColor="#16213e"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <BackgroundEffects scrollYProgress={scrollYProgress} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeader
          isInView={isInView}
          label="Technology Stack"
          title="Built with modern tools"
          subtitle="Industry-leading technologies for performance and scalability"
        />

        <div className="mt-20 space-y-16">
          {categories.map((category, index) => (
            <TechCategory
              key={index}
              {...category}
              scrollYProgress={scrollYProgress}
              isInView={isInView}
              delay={index * 0.1}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------
   BACKGROUND EFFECTS WITH SCROLL
----------------------------------- */

function BackgroundEffects({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Parallax orbs
  const orb1Y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const orb1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1]);
  const orb2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <>
      {/* Gradient Orbs with Parallax */}
      <motion.div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0462e6]/10 rounded-full blur-[140px]"
        style={{ y: orb1Y, scale: orb1Scale }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#fed864]/8 rounded-full blur-[140px]"
        style={{ y: orb2Y, scale: orb2Scale }}
        animate={{
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Animated Grid Lines */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating Tech Icons Background */}
      <FloatingIcons scrollYProgress={scrollYProgress} />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1a1a2e] to-transparent" />
    </>
  );
}

/* ----------------------------------
   FLOATING TECH ICONS
----------------------------------- */

function FloatingIcons({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const icons = [
    { symbol: '<>', left: '15%', top: '10%', delay: 0, color: '#0462e6' },
    { symbol: '{ }', left: '85%', top: '20%', delay: 1, color: '#fed864' },
    { symbol: '</>', left: '10%', top: '70%', delay: 2, color: '#10b981' },
    { symbol: '< >', left: '90%', top: '80%', delay: 1.5, color: '#0462e6' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, i) => {
        const y = useTransform(
          scrollYProgress,
          [0, 1],
          [0, i % 2 === 0 ? -150 : 150]
        );
        const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]);
        const rotate = useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? 360 : -360]);

        return (
          <motion.div
            key={i}
            className="absolute text-4xl font-mono font-bold opacity-10"
            style={{
              left: icon.left,
              top: icon.top,
              color: icon.color,
              y,
              opacity,
              rotate,
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: icon.delay,
            }}
          >
            {icon.symbol}
          </motion.div>
        );
      })}
    </div>
  );
}

/* ----------------------------------
   TECH CATEGORY WITH SCROLL ANIMATIONS
----------------------------------- */

function TechCategory({
  label,
  technologies,
  scrollYProgress,
  isInView,
  delay,
  index,
}: TechCategoryProps) {
  const categoryRef = useRef<HTMLDivElement | null>(null);

  // Alternating parallax based on index
  const yOffset = index % 2 === 0 ? ['0%', '15%'] : ['0%', '8%'];
  const y = useTransform(scrollYProgress, [0, 1], yOffset);

  // Scroll-based opacity
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  // Scale animation
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={categoryRef}
      style={{ y, opacity, scale }}
      className="relative"
    >
      {/* Category Label with Glass Effect */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, delay }}
        className="mb-6 flex items-center gap-3"
      >
        {/* Decorative Line */}
        <motion.span
          className="h-px bg-gradient-to-r from-[#0462e6]/50 to-transparent"
          initial={{ width: 0 }}
          animate={isInView ? { width: 40 } : { width: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
        />

        {/* Label */}
        <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider relative">
          {label}

          {/* Glow effect on scroll */}
          <motion.span
            className="absolute inset-0 blur-md text-[#0462e6]"
            style={{
              opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 0.6, 0]),
            }}
          >
            {label}
          </motion.span>
        </h3>
      </motion.div>

      {/* Technology Pills Grid */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08,
              delayChildren: delay,
            },
          },
        }}
        className="flex flex-wrap gap-3"
      >
        {technologies.map((tech, techIndex) => (
          <TechPill
            key={techIndex}
            {...tech}
            scrollYProgress={scrollYProgress}
            index={techIndex}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ----------------------------------
   TECH PILL WITH GLASSMORPHISM
----------------------------------- */

function TechPill({
  name,
  proficiency,
  scrollYProgress,
  index,
}: TechPillProps & { scrollYProgress: MotionValue<number>; index: number }) {
  const pillRef = useRef<HTMLDivElement | null>(null);

  // Proficiency color mapping
  const proficiencyColors = {
    Expert: {
      bg: 'from-[#0462e6]/20 to-[#0462e6]/10',
      border: 'border-[#0462e6]/30',
      text: 'text-[#0462e6]',
      glow: '#0462e6',
    },
    Advanced: {
      bg: 'from-emerald-500/20 to-emerald-500/10',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
      glow: '#10b981',
    },
    Intermediate: {
      bg: 'from-slate-500/20 to-slate-600/10',
      border: 'border-slate-500/30',
      text: 'text-slate-400',
      glow: '#64748b',
    },
  };

  const colors = proficiencyColors[proficiency];

  // Individual scroll animations
  const { scrollYProgress: pillScroll } = useScroll({
    target: pillRef,
    offset: ['start end', 'end start'],
  });

  const pillY = useTransform(pillScroll, [0, 1], [20, -20]);
  const pillRotate = useTransform(pillScroll, [0, 0.5, 1], [-2, 0, 2]);

  return (
    <motion.div
      ref={pillRef}
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: 'spring', stiffness: 120, damping: 18 },
        },
      }}
      style={{ y: pillY, rotate: pillRotate }}
      className="group relative"
    >
      <motion.div
        whileHover={{
          y: -4,
          scale: 1.05,
          boxShadow: `0 10px 30px -10px ${colors.glow}40`,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="relative rounded-full overflow-hidden"
      >
        {/* Glass Background */}
        <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-md" />

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg}`} />

        {/* Border */}
        <div className={`absolute inset-0 rounded-full border ${colors.border}`} />

        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, transparent, ${colors.glow}30, transparent)`,
          }}
        />

        {/* Scroll-based glow pulse */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0"
          style={{
            background: `${colors.glow}20`,
            opacity: useTransform(
              scrollYProgress,
              [0.3 + index * 0.05, 0.5 + index * 0.05],
              [0, 0.6]
            ),
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-5 py-3 flex items-center gap-2.5">
          {/* Tech Name */}
          <span className="text-sm font-semibold text-white/95">
            {name}
          </span>

          {/* Proficiency Indicator Dot */}
          <motion.span
            className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')}`}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          />
        </div>

        {/* Bottom shine */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </motion.div>

      {/* Proficiency Tooltip on Hover */}
      <motion.div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        initial={{ y: -5 }}
        whileHover={{ y: 0 }}
      >
        <span className={`text-xs ${colors.text} whitespace-nowrap font-medium`}>
          {proficiency}
        </span>
      </motion.div>

      {/* Outer glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-full -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `${colors.glow}20` }}
      />
    </motion.div>
  );
}

/* ----------------------------------
   SECTION HEADER WITH SCROLL ANIMATIONS
----------------------------------- */

function SectionHeader({ isInView, label, title, subtitle }: SectionHeaderProps) {
  const headerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={headerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      style={{ y: headerY, opacity: headerOpacity }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center max-w-3xl mx-auto"
    >
      {/* Label Badge */}
      <motion.div
        className="inline-block mb-6 px-4 py-1.5 rounded-full relative overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {/* Glass background */}
        <div className="absolute inset-0 bg-[#0462e6]/10 backdrop-blur-sm" />
        <div className="absolute inset-0 border border-[#0462e6]/20 rounded-full" />

        {/* Animated gradient sweep */}
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{
            background: 'linear-gradient(90deg, transparent, #0462e6, transparent)',
            opacity: useTransform(scrollYProgress, [0.2, 0.4], [0, 0.3]),
          }}
        />

        {/* Text */}
        <span className="relative z-10 text-xs font-medium text-[#0462e6] uppercase tracking-wider">
          {label}
        </span>
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white/95 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          className="text-lg text-white/60"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          style={{
            opacity: useTransform(scrollYProgress, [0.1, 0.4], [0.6, 1]),
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
