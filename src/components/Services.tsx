
// // components/Services.tsx
// import { motion, useInView } from 'framer-motion';
// import { useRef, useState } from 'react';
// import type { ReactNode, MouseEvent } from 'react';
// import Section from '../wrappers/Section';

// /* ----------------------------------
//    TYPES
// ----------------------------------- */

// interface Service {
//   title: string;
//   description: string;
//   icon: ReactNode;
//   gradient: string;
//   accentColor: string;
// }

// interface ServiceCardProps extends Service {}

// interface SectionHeaderProps {
//   isInView: boolean;
//   label: string;
//   title: string;
//   subtitle?: string;
// }

// /* ----------------------------------
//    MAIN COMPONENT
// ----------------------------------- */

// export default function Services() {
//   const containerRef = useRef<HTMLElement | null>(null);
//   const isInView = useInView(containerRef, { once: true, amount: 0.2 });

//   const services: Service[] = [
//     {
//       title: 'Web Development',
//       description: 'Full-stack solutions built with modern frameworks. Scalable architecture, pixel-perfect design, optimized performance.',
//       icon: <WebIcon />,
//       gradient: 'from-[#0462e6]/10 to-blue-500/10',
//       accentColor: '#0462e6',
//     },
//     {
//       title: 'Android Development',
//       description: 'Native Android applications with Material Design. Kotlin-first approach, seamless integrations, lifecycle optimization.',
//       icon: <AndroidIcon />,
//       gradient: 'from-emerald-500/10 to-teal-500/10',
//       accentColor: '#10b981',
//     },
//     {
//       title: 'iOS Development',
//       description: 'Swift-based iOS apps following Human Interface Guidelines. Performance-focused, elegant UX, App Store ready.',
//       icon: <IOSIcon />,
//       gradient: 'from-[#fed864]/10 to-amber-500/10',
//       accentColor: '#fed864',
//     },
//   ];

//   return (
//     <Section
//       ref={containerRef}
//       id="services"
//       sectionColor="#1a1a2e"
//       className="relative py-32 overflow-hidden"
//     >
//       {/* Background Effects */}
//       <BackgroundEffects />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
//         <SectionHeader
//           isInView={isInView}
//           label="Services"
//           title="What We Build"
//           subtitle="End-to-end development with precision engineering"
//         />

//         <motion.div
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 staggerChildren: 0.2,
//                 delayChildren: 0.1,
//               },
//             },
//           }}
//           className="mt-16 grid gap-8 md:grid-cols-3"
//         >
//           {services.map((service, index) => (
//             <ServiceCard key={index} {...service} />
//           ))}
//         </motion.div>
//       </div>
//     </Section>
//   );
// }

// /* ----------------------------------
//    BACKGROUND EFFECTS
// ----------------------------------- */

// function BackgroundEffects() {
//   return (
//     <>
//       {/* Gradient Orbs */}
//       <motion.div
//         className="absolute top-0 left-1/4 w-96 h-96 bg-[#0462e6]/10 rounded-full blur-[120px]"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.3, 0.5, 0.3],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fed864]/10 rounded-full blur-[120px]"
//         animate={{
//           scale: [1, 1.1, 1],
//           opacity: [0.2, 0.4, 0.2],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: 'easeInOut',
//           delay: 1,
//         }}
//       />

//       {/* Dot Grid Pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.02]"
//         style={{
//           backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
//           backgroundSize: '30px 30px',
//         }}
//       />
//     </>
//   );
// }

// /* ----------------------------------
//    SERVICE CARD
// ----------------------------------- */

// function ServiceCard({
//   icon,
//   title,
//   description,
//   gradient,
//   accentColor,
// }: ServiceCardProps) {
//   const cardRef = useRef<HTMLDivElement | null>(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;

//     const rect = cardRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left - rect.width / 2;
//     const y = e.clientY - rect.top - rect.height / 2;

//     setMousePosition({ x, y });
//   };

//   const handleMouseLeave = () => {
//     setMousePosition({ x: 0, y: 0 });
//   };

//   // Subtle 3D tilt effect
//   const rotateX = (mousePosition.y / 20) * -1;
//   const rotateY = mousePosition.x / 20;

//   return (
//     <motion.div
//       ref={cardRef}
//       variants={{
//         hidden: { opacity: 0, y: 40, scale: 0.95 },
//         visible: {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           transition: { type: 'spring', stiffness: 100, damping: 20 },
//         },
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className="group relative"
//       style={{ perspective: 1000 }}
//     >
//       <motion.div
//         className={`
//           relative h-full rounded-2xl p-8
//           bg-gradient-to-br ${gradient}
//           border border-white/10
//           backdrop-blur-sm
//           overflow-hidden
//         `}
//         animate={{
//           rotateX,
//           rotateY,
//           y: mousePosition.x || mousePosition.y ? -8 : 0,
//         }}
//         transition={{
//           type: 'spring',
//           stiffness: 300,
//           damping: 30,
//         }}
//         whileHover={{
//           boxShadow: `0 20px 60px -15px rgba(0, 0, 0, 0.3), 0 0 40px -10px ${accentColor}40`,
//         }}
//       >
//         {/* Glow overlay on hover */}
//         <motion.div
//           className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0`}
//           initial={{ opacity: 0 }}
//           whileHover={{ opacity: 0.5 }}
//           transition={{ duration: 0.4 }}
//         />

//         {/* Accent corner glow */}
//         <div
//           className="absolute top-0 right-0 w-32 h-32 opacity-30 blur-3xl rounded-full -z-10"
//           style={{ background: accentColor }}
//         />

//         {/* Content */}
//         <div className="relative z-10">
//           {/* Icon Container */}
//           <motion.div
//             className="mb-6 inline-flex p-4 rounded-xl bg-white/5 border border-white/10"
//             whileHover={{ scale: 1.05, rotate: 2 }}
//             transition={{ type: 'spring', stiffness: 400, damping: 25 }}
//             style={{ color: accentColor }}
//           >
//             {icon}
//           </motion.div>

//           {/* Title */}
//           <h3 className="mb-3 text-2xl font-bold text-white/95">
//             {title}
//           </h3>

//           {/* Description */}
//           <p className="text-sm leading-relaxed text-white/70">
//             {description}
//           </p>

//           {/* Hover arrow indicator */}
//           <motion.div
//             className="mt-6 flex items-center gap-2 text-sm font-medium"
//             style={{ color: accentColor }}
//             initial={{ opacity: 0, x: -10 }}
//             whileHover={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <span>Learn more</span>
//             <motion.svg
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               initial={{ x: 0 }}
//               whileHover={{ x: 4 }}
//               transition={{ type: 'spring', stiffness: 400, damping: 25 }}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </motion.svg>
//           </motion.div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// /* ----------------------------------
//    SECTION HEADER
// ----------------------------------- */

// function SectionHeader({ isInView, label, title, subtitle }: SectionHeaderProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       className="text-center max-w-2xl mx-auto"
//     >
//       {/* Label Badge */}
//       <motion.div
//         className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[#0462e6]/10 border border-[#0462e6]/20"
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
//         transition={{ duration: 0.4, delay: 0.2 }}
//       >
//         <span className="text-xs font-medium text-[#0462e6] uppercase tracking-wider">
//           {label}
//         </span>
//       </motion.div>

//       {/* Title */}
//       <motion.h2
//         className="text-4xl md:text-5xl font-bold text-white/95 mb-4"
//         initial={{ opacity: 0, y: 10 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//       >
//         {title}
//       </motion.h2>

//       {/* Subtitle */}
//       {subtitle && (
//         <motion.p
//           className="text-lg text-white/60"
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           {subtitle}
//         </motion.p>
//       )}
//     </motion.div>
//   );
// }

// /* ----------------------------------
//    ICONS (MODERN SVG)
// ----------------------------------- */

// function WebIcon() {
//   return (
//     <svg
//       className="w-10 h-10"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={1.5}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
//       />
//     </svg>
//   );
// }

// function AndroidIcon() {
//   return (
//     <svg
//       className="w-10 h-10"
//       fill="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path d="M17.523 15.341c-.759 0-1.379-.62-1.379-1.379s.62-1.379 1.379-1.379 1.379.62 1.379 1.379-.62 1.379-1.379 1.379zm-11.046 0c-.759 0-1.379-.62-1.379-1.379s.62-1.379 1.379-1.379 1.379.62 1.379 1.379-.62 1.379-1.379 1.379zm11.209-7.299l1.94-3.358c.106-.184.043-.419-.141-.524-.184-.106-.419-.043-.524.141l-1.967 3.403c-1.429-.657-3.03-1.026-4.719-1.026s-3.29.369-4.719 1.026L5.589 4.301c-.106-.184-.341-.247-.524-.141-.184.106-.247.341-.141.524l1.94 3.358C4.271 9.644 2.5 12.499 2.5 15.75h19c0-3.251-1.771-6.106-4.364-7.708z" />
//     </svg>
//   );
// }

// function IOSIcon() {
//   return (
//     <svg
//       className="w-10 h-10"
//       fill="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
//     </svg>
//   );
// }


// components/Services.tsx
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import type { ReactNode, MouseEvent } from 'react';
import Section from '../wrappers/Section';

/* ----------------------------------
   TYPES
----------------------------------- */

interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
  accentColor: string;
}

interface ServiceCardProps extends Service {
  index: number;
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

export default function Services() {
  const containerRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const services: Service[] = [
    {
      title: 'Web Development',
      description: 'Full-stack solutions built with modern frameworks. Scalable architecture, pixel-perfect design, optimized performance.',
      icon: <WebIcon />,
      gradient: 'from-[#0462e6]/20 via-[#0462e6]/10 to-transparent',
      accentColor: '#0462e6',
    },
    {
      title: 'Android Development',
      description: 'Native Android applications with Material Design. Kotlin-first approach, seamless integrations, lifecycle optimization.',
      icon: <AndroidIcon />,
      gradient: 'from-emerald-500/20 via-emerald-500/10 to-transparent',
      accentColor: '#10b981',
    },
    {
      title: 'iOS Development',
      description: 'Swift-based iOS apps following Human Interface Guidelines. Performance-focused, elegant UX, App Store ready.',
      icon: <IOSIcon />,
      gradient: 'from-[#fed864]/20 via-[#fed864]/10 to-transparent',
      accentColor: '#fed864',
    },
  ];

  return (
    <Section
      ref={containerRef}
      id="services"
      sectionColor="#1a1a2e"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Effects with Scroll Animation */}
      <BackgroundEffects scrollYProgress={scrollYProgress} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeader
          isInView={isInView}
          label="Services"
          title="What We Build"
          subtitle="End-to-end development with precision engineering"
        />

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* ----------------------------------
   BACKGROUND EFFECTS WITH SCROLL
----------------------------------- */

function BackgroundEffects({ scrollYProgress }: { scrollYProgress: any }) {
  // Parallax movement based on scroll
  const orb1Y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const orb1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const orb2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <>
      {/* Gradient Orbs with Parallax */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#0462e6]/10 rounded-full blur-[120px]"
        style={{ y: orb1Y, scale: orb1Scale }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fed864]/10 rounded-full blur-[120px]"
        style={{ y: orb2Y, scale: orb2Scale }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Animated particles on scroll */}
      <ScrollParticles scrollYProgress={scrollYProgress} />

      {/* Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
    </>
  );
}

/* ----------------------------------
   SCROLL PARTICLES
----------------------------------- */

function ScrollParticles({ scrollYProgress }: { scrollYProgress: any }) {
  const particles = [
    { color: '#0462e6', left: '10%', top: '20%' },
    { color: '#fed864', left: '85%', top: '15%' },
    { color: '#10b981', left: '75%', top: '70%' },
    { color: '#0462e6', left: '20%', top: '80%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => {
        const y = useTransform(
          scrollYProgress,
          [0, 1],
          [0, i % 2 === 0 ? -100 : 100]
        );
        const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              backgroundColor: particle.color,
              y,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
}

/* ----------------------------------
   SERVICE CARD WITH SCROLL ANIMATIONS
----------------------------------- */

function ServiceCard({
  icon,
  title,
  description,
  gradient,
  accentColor,
  index,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll-based animations for individual card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Parallax effect based on card index (stagger pattern)
  const yOffset = index % 2 === 0 ? ['20%', '-20%'] : ['-20%', '20%'];
  const cardY = useTransform(scrollYProgress, [0, 1], yOffset);
  
  // Scale animation on scroll
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  
  // Opacity fade
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Rotate animation
  const cardRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index * 2, 0, -index * 2]
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // 3D tilt effect on mouse hover
  const rotateX = (mousePosition.y / 20) * -1;
  const rotateY = mousePosition.x / 20;

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: 'spring', stiffness: 100, damping: 20 },
        },
      }}
      style={{
        y: cardY,
        scale: cardScale,
        opacity: cardOpacity,
        rotate: cardRotate,
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      {/* Glass Card Container */}
      <motion.div
        className="relative h-full rounded-2xl overflow-hidden"
        animate={{
          rotateX,
          rotateY,
          y: mousePosition.x || mousePosition.y ? -8 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
        whileHover={{
          boxShadow: `0 20px 60px -15px rgba(0, 0, 0, 0.5), 0 0 40px -10px ${accentColor}60`,
        }}
      >
        {/* Glassmorphism Base */}
        <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl" />

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

        {/* Border with gradient */}
        <div className="absolute inset-0 rounded-2xl border border-white/10" />

        {/* Animated border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${accentColor}40, transparent 50%, ${accentColor}20)`,
          }}
        />

        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Scroll-based shimmer effect */}
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{
            background: `linear-gradient(135deg, transparent, ${accentColor}20, transparent)`,
            opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 0.5, 0]),
          }}
        />

        {/* Inner glow effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${accentColor}15, transparent 70%)`,
          }}
        />

        {/* Top shine effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Icon Container with Glass Effect + Scroll Animation */}
          <motion.div
            className="mb-6 inline-flex p-4 rounded-xl relative overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 2 }}
            style={{
              color: accentColor,
              y: useTransform(scrollYProgress, [0.2, 0.6], [20, 0]),
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            {/* Icon glass background */}
            <div className="absolute inset-0 bg-white/[0.05] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-white/10 rounded-xl" />
            
            {/* Icon */}
            <div className="relative z-10">{icon}</div>

            {/* Icon glow */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `${accentColor}20` }}
            />
          </motion.div>

          {/* Title with scroll fade */}
          <motion.h3
            className="mb-3 text-2xl font-bold text-white/95"
            style={{
              opacity: useTransform(scrollYProgress, [0.2, 0.5], [0.5, 1]),
            }}
          >
            {title}
          </motion.h3>

          {/* Description with scroll fade */}
          <motion.p
            className="text-sm leading-relaxed text-white/70 mb-6"
            style={{
              opacity: useTransform(scrollYProgress, [0.3, 0.6], [0.5, 1]),
            }}
          >
            {description}
          </motion.p>

          {/* Hover arrow indicator with glass effect */}
          <motion.div
            className="flex items-center gap-2 text-sm font-medium relative"
            style={{ color: accentColor }}
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative">
              Learn more
              <span className="absolute inset-0 blur-sm" style={{ color: accentColor }}>
                Learn more
              </span>
            </span>
            <motion.svg
              className="w-4 h-4 relative z-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.div>
        </div>

        {/* Bottom light reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Corner accent light with scroll pulse */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: accentColor,
            scale: useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1.2]),
          }}
        />
      </motion.div>

      {/* Outer glow shadow (outside the card) */}
      <motion.div
        className="absolute inset-0 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{ background: `${accentColor}20` }}
      />
    </motion.div>
  );
}

/* ----------------------------------
   SECTION HEADER WITH SCROLL ANIMATIONS
----------------------------------- */

function SectionHeader({ isInView, label, title, subtitle }: SectionHeaderProps) {
  const headerRef = useRef<HTMLDivElement | null>(null);

  // Scroll animations for header
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
      className="text-center max-w-2xl mx-auto"
    >
      {/* Label Badge with Glassmorphism */}
      <motion.div
        className="inline-block mb-6 px-4 py-1.5 rounded-full relative overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {/* Glass background */}
        <div className="absolute inset-0 bg-[#0462e6]/10 backdrop-blur-sm" />
        <div className="absolute inset-0 border border-[#0462e6]/20 rounded-full" />
        
        {/* Animated gradient on scroll */}
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

      {/* Title with character reveal animation */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white/95 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {title}
      </motion.h2>

      {/* Subtitle with scroll fade */}
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

/* ----------------------------------
   ICONS (MODERN SVG)
----------------------------------- */

function WebIcon() {
  return (
    <svg
      className="w-10 h-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg
      className="w-10 h-10"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M17.523 15.341c-.759 0-1.379-.62-1.379-1.379s.62-1.379 1.379-1.379 1.379.62 1.379 1.379-.62 1.379-1.379 1.379zm-11.046 0c-.759 0-1.379-.62-1.379-1.379s.62-1.379 1.379-1.379 1.379.62 1.379 1.379-.62 1.379-1.379 1.379zm11.209-7.299l1.94-3.358c.106-.184.043-.419-.141-.524-.184-.106-.419-.043-.524.141l-1.967 3.403c-1.429-.657-3.03-1.026-4.719-1.026s-3.29.369-4.719 1.026L5.589 4.301c-.106-.184-.341-.247-.524-.141-.184.106-.247.341-.141.524l1.94 3.358C4.271 9.644 2.5 12.499 2.5 15.75h19c0-3.251-1.771-6.106-4.364-7.708z" />
    </svg>
  );
}

function IOSIcon() {
  return (
    <svg
      className="w-10 h-10"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}