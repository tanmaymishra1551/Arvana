// // ====================================
// // COMPONENTS
// // ====================================

// // components/Header.jsx
// import { motion, useScroll } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import { useLenis } from '@studio-freight/react-lenis';

// export default function Header({ currentSectionColor = '#0a192f' }) {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [scrollDirection, setScrollDirection] = useState('up');
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const { scrollY } = useScroll();

//   const lenis = useLenis(({ scroll }) => {
//     if (scroll > lastScrollY && scroll > 100) {
//       setScrollDirection('down');
//     } else {
//       setScrollDirection('up');
//     }
//     setLastScrollY(scroll);
//     setIsScrolled(scroll > 50);
//   });

//   return (
//     <motion.header
//       initial={{ y: 0 }}
//       animate={{ y: scrollDirection === 'down' && isScrolled ? -100 : 0 }}
//       transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//       className="fixed top-0 left-0 right-0 z-50"
//     >
//       <motion.div
//         className="absolute inset-0 -z-10"
//         animate={{ backgroundColor: isScrolled ? `${currentSectionColor}cc` : 'transparent' }}
//         transition={{ duration: 0.6 }}
//       />
      
//       <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
//         <nav className="flex items-center justify-between">
//           <Logo />
//           <NavLinks lenis={lenis} />
//           <CTAButton lenis={lenis} />
//         </nav>
//       </div>
//     </motion.header>
//   );
// }

// function Logo() {
//   return (
//     <motion.a
//       href="/"
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//     >
//       Logo
//     </motion.a>
//   );
// }

// function NavLinks({ lenis }) {
//   const links = [
//     { label: 'Services', href: '#services' },
//     { label: 'Tech', href: '#tech' },
//     { label: 'Team', href: '#team' },
//   ];

//   return (
//     <ul className="hidden md:flex items-center gap-8">
//       {links.map((link) => (
//         <NavLink key={link.href} {...link} lenis={lenis} />
//       ))}
//     </ul>
//   );
// }

// function NavLink({ label, href, lenis }) {
//   return (
//     <motion.li>
//       <motion.a
//         href={href}
//         onClick={(e) => {
//           e.preventDefault();
//           lenis?.scrollTo(href, { offset: -100, duration: 1.2 });
//         }}
//         whileHover={{ y: -2 }}
//       >
//         {label}
//       </motion.a>
//     </motion.li>
//   );
// }

// function CTAButton({ lenis }) {
//   return (
//     <motion.button
//       onClick={() => lenis?.scrollTo('#contact')}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       Get Started
//     </motion.button>
//   );
// }

// components/Header.tsx
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Detect scroll direction and position
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > lastScrollY && latest > 100) {
      setScrollDirection('down');
    } else {
      setScrollDirection('up');
    }
    setLastScrollY(latest);
    setIsScrolled(latest > 50);
  });

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{
          y: scrollDirection === 'down' && isScrolled ? -100 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Glassmorphism Background */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            backgroundColor: isScrolled
              ? 'rgba(10, 15, 30, 0.85)'
              : 'rgba(10, 15, 30, 0)',
            backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Bottom Border Glow */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          animate={{
            opacity: isScrolled ? 0.3 : 0,
            background: isScrolled
              ? 'linear-gradient(90deg, transparent, #0462e6, #fed864, transparent)'
              : 'transparent',
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Header Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <DesktopNav links={navLinks} />

            {/* CTA Button */}
            <CTAButton className="hidden md:block" />

            {/* Mobile Menu Toggle */}
            <MobileMenuToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}

/* ------------------- Logo Component ------------------- */
function Logo() {
  return (
    <motion.a
      href="/"
      className="relative text-2xl font-bold tracking-tight cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {/* Main Text */}
      <span className="relative z-10 bg-gradient-to-r from-white via-white to-[#fed864] bg-clip-text text-transparent">
        Arvana
      </span>

      {/* Glow Effect */}
      <motion.span
        className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 bg-gradient-to-r from-[#0462e6] to-[#fed864]"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.5 }}
        transition={{ duration: 0.4 }}
        aria-hidden="true"
      >
        Arvana
      </motion.span>

      {/* Underline Animation */}
      <motion.span
        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#0462e6] to-[#fed864]"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </motion.a>
  );
}

/* ------------------- Desktop Navigation ------------------- */
interface NavLink {
  label: string;
  href: string;
}

function DesktopNav({ links }: { links: NavLink[] }) {
  return (
    <ul className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <NavLinkItem key={link.href} {...link} />
      ))}
    </ul>
  );
}

function NavLinkItem({ label, href }: NavLink) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.li>
      <motion.a
        href={href}
        onClick={handleClick}
        className="relative text-sm font-medium tracking-wide text-white/80 cursor-pointer group"
        whileHover={{ y: -2, color: '#ffffff' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {label}

        {/* Underline Animation */}
        <motion.span
          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#0462e6] to-[#fed864]"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />

        {/* Glow on hover */}
        <motion.span
          className="absolute inset-0 -z-10 blur-lg opacity-0 bg-[#0462e6]/20 rounded-full"
          whileHover={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 0.4 }}
        />
      </motion.a>
    </motion.li>
  );
}

/* ------------------- CTA Button ------------------- */
function CTAButton({ className = '' }: { className?: string }) {
  return (
    <motion.button
      className={`
        relative px-6 py-2.5 
        text-sm font-semibold tracking-wide
        rounded-full overflow-hidden
        bg-gradient-to-r from-[#0462e6] to-[#0462e6]
        text-white
        shadow-lg shadow-[#0462e6]/20
        ${className}
      `}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 30px rgba(4, 98, 230, 0.5)',
        background: 'linear-gradient(135deg, #0462e6 0%, #fed864 100%)',
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {/* Shimmer Effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      {/* Text */}
      <span className="relative z-10">Let's Talk</span>

      {/* Outer Glow */}
      <motion.span
        className="absolute inset-0 blur-2xl bg-[#fed864]/40 -z-10 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1.4 }}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  );
}

/* ------------------- Mobile Menu Toggle ------------------- */
function MobileMenuToggle({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-50"
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle menu"
    >
      <motion.span
        className="w-6 h-0.5 bg-white rounded-full"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 8 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="w-6 h-0.5 bg-white rounded-full"
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="w-6 h-0.5 bg-white rounded-full"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -8 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}

/* ------------------- Mobile Menu ------------------- */
function MobileMenu({
  isOpen,
  onClose,
  links,
}: {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}) {
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <motion.div
        className="md:hidden fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-br from-[#0a0f1e] to-[#020617] z-50"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        {/* Gradient Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#0462e6]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#fed864]/10 to-transparent blur-3xl" />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col pt-24 px-8">
          {/* Navigation Links */}
          <motion.nav className="flex-1">
            <ul className="space-y-2">
              {links.map((link) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <motion.button
                    onClick={() => handleLinkClick(link.href)}
                    className="w-full text-left py-4 px-6 text-xl font-medium text-white/80 rounded-xl"
                    whileHover={{
                      x: 8,
                      color: '#ffffff',
                      backgroundColor: 'rgba(4, 98, 230, 0.1)',
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="pb-8">
            <motion.button
              className="w-full py-4 px-6 bg-gradient-to-r from-[#0462e6] to-[#fed864] text-white font-bold text-lg rounded-full shadow-xl"
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(4, 98, 230, 0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Talk
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}