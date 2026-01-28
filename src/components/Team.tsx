// // components/Team.jsx
// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import Section from '../wrappers/Section';

// export default function Team() {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: true, amount: 0.2 });

//   const members = [
//     { name: 'Alex Rivera', role: 'Technical Director', bio: 'Bio text' },
//     { name: 'Sarah Chen', role: 'Lead Mobile Engineer', bio: 'Bio text' },
//     { name: 'Marcus Johnson', role: 'Frontend Lead', bio: 'Bio text' },
//     { name: 'Priya Sharma', role: 'Backend Architect', bio: 'Bio text' },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.2 }
//     }
//   };

//   return (
//     <Section
//       ref={containerRef}
//       id="team"
//       sectionColor="#0f1729"
//       className="relative py-32"
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         <SectionHeader isInView={isInView} label="Team" title="Built by experts" />
        
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
//         >
//           {members.map((member, i) => (
//             <TeamCard key={i} {...member} />
//           ))}
//         </motion.div>
//       </div>
//     </Section>
//   );
// }

// function TeamCard({ name, role, bio }) {
//   const cardVariants = {
//     hidden: { opacity: 0, y: 30, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { type: 'spring', stiffness: 100, damping: 20 }
//     }
//   };

//   return (
//     <motion.div variants={cardVariants} className="group">
//       <motion.div
//         whileHover={{ y: -8 }}
//         transition={{ type: 'spring', stiffness: 300, damping: 25 }}
//       >
//         <div className="aspect-square mb-4">
//           {/* Image placeholder */}
//         </div>
//         <h3>{name}</h3>
//         <p>{role}</p>
//         <p>{bio}</p>
//       </motion.div>
//     </motion.div>
//   );
// }

// function SectionHeader({ isInView, label, title }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       className="text-center"
//     >
//       <div><span>{label}</span></div>
//       <h2>{title}</h2>
//     </motion.div>
//   );
// }

// components/Team.tsx
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import Section from '../wrappers/Section';

/* ----------------------------------
   TYPES
----------------------------------- */

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

interface TeamCardProps extends TeamMember {
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

export default function Team() {
  const containerRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const members: TeamMember[] = [
    {
      name: 'Alex Rivera',
      role: 'Technical Director',
      bio: 'Full-stack architect with 12+ years building scalable systems for startups and enterprises.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Mobile Engineer',
      bio: 'iOS & Android specialist. Shipped 20+ apps with millions of users worldwide.',
      social: {
        linkedin: '#',
        github: '#',
      },
    },
    {
      name: 'Marcus Johnson',
      role: 'Frontend Lead',
      bio: 'Design systems expert obsessed with performance, accessibility, and pixel-perfect UX.',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Priya Sharma',
      role: 'Backend Architect',
      bio: 'Infrastructure & API design specialist. Cloud-native development and microservices guru.',
      social: {
        linkedin: '#',
        github: '#',
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <Section
      ref={containerRef}
      id="team"
      sectionColor="#0f1729"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <BackgroundEffects scrollYProgress={scrollYProgress} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          isInView={isInView}
          label="Team"
          title="Built by experts"
          subtitle="Passionate engineers crafting exceptional digital experiences"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {members.map((member, index) => (
            <TeamCard key={index} {...member} index={index} />
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
  // Parallax movement
  const orb1Y = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const orb1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const orb2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1]);

  return (
    <>
      {/* Gradient Orbs with Parallax - Amber accent for warmth */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#fed864]/10 rounded-full blur-[120px]"
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
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0462e6]/8 rounded-full blur-[120px]"
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

      {/* Floating particles */}
      <FloatingParticles scrollYProgress={scrollYProgress} />

      {/* Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Top gradient blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#16213e] to-transparent" />
    </>
  );
}

/* ----------------------------------
   FLOATING PARTICLES
----------------------------------- */

function FloatingParticles({ scrollYProgress }: { scrollYProgress: any }) {
  const particles = [
    { left: '10%', top: '15%', color: '#fed864', size: 3 },
    { left: '85%', top: '25%', color: '#0462e6', size: 4 },
    { left: '15%', top: '75%', color: '#fed864', size: 2 },
    { left: '90%', top: '85%', color: '#0462e6', size: 3 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => {
        const y = useTransform(
          scrollYProgress,
          [0, 1],
          [0, i % 2 === 0 ? -120 : 120]
        );
        const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 0.2]);

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              y,
              opacity,
            }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
}

/* ----------------------------------
   TEAM CARD WITH GLASSMORPHISM
----------------------------------- */

function TeamCard({ name, role, bio, social, index }: TeamCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Individual card scroll animation
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const cardY = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? [30, -30] : [-30, 30]
  );
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Subtle 3D tilt
  const rotateX = (mousePosition.y / 30) * -1;
  const rotateY = mousePosition.x / 30;

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      style={{
        y: cardY,
        scale: cardScale,
        opacity: cardOpacity,
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden"
        animate={{
          rotateX,
          rotateY,
          y: isHovered ? -12 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        whileHover={{
          boxShadow: '0 25px 70px -15px rgba(254, 216, 100, 0.3)',
        }}
      >
        {/* Glass Container */}
        <div className="relative">
          {/* Glassmorphism Base */}
          <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fed864]/10 via-transparent to-[#0462e6]/5" />

          {/* Border */}
          <div className="absolute inset-0 rounded-2xl border border-white/10" />

          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(135deg, #fed86440, transparent 50%, #0462e620)',
            }}
          />

          {/* Noise Texture */}
          <div
            className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-6">
            {/* Avatar/Image Container */}
            <motion.div
              className="relative aspect-square mb-4 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Glass background for image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#fed864]/20 via-[#0462e6]/10 to-transparent backdrop-blur-sm" />
              
              {/* Border */}
              <div className="absolute inset-0 border border-white/10 rounded-xl" />

              {/* Initial placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold text-white/20">
                  {name.charAt(0)}
                </span>
              </div>

              {/* Image overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#fed864]/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Shine effect */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>

            {/* Name */}
            <motion.h3
              className="text-lg font-bold text-white/95 mb-1"
              style={{
                opacity: useTransform(scrollYProgress, [0.2, 0.5], [0.7, 1]),
              }}
            >
              {name}
            </motion.h3>

            {/* Role */}
            <motion.p
              className="text-sm text-[#fed864]/90 font-medium mb-3"
              style={{
                opacity: useTransform(scrollYProgress, [0.3, 0.6], [0.7, 1]),
              }}
            >
              {role}
            </motion.p>

            {/* Bio */}
            <motion.p
              className="text-sm text-white/60 leading-relaxed mb-4"
              style={{
                opacity: useTransform(scrollYProgress, [0.4, 0.7], [0.6, 1]),
              }}
            >
              {bio}
            </motion.p>

            {/* Social Links */}
            {social && (
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {social.linkedin && <SocialIcon type="linkedin" href={social.linkedin} />}
                {social.twitter && <SocialIcon type="twitter" href={social.twitter} />}
                {social.github && <SocialIcon type="github" href={social.github} />}
              </motion.div>
            )}
          </div>

          {/* Bottom shine */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Corner accent glow */}
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-500"
            style={{ background: '#fed864' }}
          />
        </div>
      </motion.div>

      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl -z-10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: '#fed86420' }}
      />
    </motion.div>
  );
}

/* ----------------------------------
   SOCIAL ICON COMPONENT
----------------------------------- */

function SocialIcon({ type, href }: { type: string; href: string }) {
  const icons = {
    linkedin: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
    twitter: (
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    ),
    github: (
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    ),
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/60 hover:text-[#fed864] hover:border-[#fed864]/30 transition-colors backdrop-blur-sm group/icon"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        {icons[type as keyof typeof icons]}
      </svg>

      {/* Icon glow */}
      <motion.div
        className="absolute inset-0 rounded-lg blur-md bg-[#fed864]/0 group-hover/icon:bg-[#fed864]/20 transition-colors duration-300 -z-10"
      />
    </motion.a>
  );
}

/* ----------------------------------
   SECTION HEADER WITH SCROLL
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
      className="text-center max-w-2xl mx-auto"
    >
      {/* Label Badge */}
      <motion.div
        className="inline-block mb-6 px-4 py-1.5 rounded-full relative overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {/* Glass background */}
        <div className="absolute inset-0 bg-[#fed864]/10 backdrop-blur-sm" />
        <div className="absolute inset-0 border border-[#fed864]/20 rounded-full" />

        {/* Text */}
        <span className="relative z-10 text-xs font-medium text-[#fed864] uppercase tracking-wider">
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
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
