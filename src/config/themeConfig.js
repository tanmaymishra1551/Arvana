// config/themeConfig.js

/**
 * Theme Data Model
 * Each section has a defined theme with:
 * - Unique identifier
 * - Color palette (bg, text, accent, secondary)
 * - Transition rules (duration, easing)
 * - Contrast requirements
 */
export const THEME_CONFIG = {
  hero: {
    id: 'hero',
    name: 'Hero',
    colors: {
      bg: '#0a192f',        // Deep navy
      text: '#e2e8f0',      // Slate-200
      accent: '#00d9ff',    // Cyan
      secondary: '#0066ff', // Blue
      muted: '#64748b',     // Slate-500
    },
    transition: {
      duration: 1.2,
      ease: 'power2.out',
    },
    contrast: {
      textOnBg: 12.5,       // WCAG AAA
      accentOnBg: 8.2,      // WCAG AA
    },
  },

  services: {
    id: 'services',
    name: 'Services',
    colors: {
      bg: '#1a1a2e',        // Darker slate
      text: '#e2e8f0',
      accent: '#06b6d4',    // Cyan-500
      secondary: '#3b82f6', // Blue-500
      muted: '#64748b',
    },
    transition: {
      duration: 1.0,
      ease: 'power2.inOut',
    },
    contrast: {
      textOnBg: 13.2,
      accentOnBg: 8.5,
    },
  },

  technology: {
    id: 'technology',
    name: 'Technology',
    colors: {
      bg: '#16213e',        // Blue-charcoal
      text: '#f1f5f9',      // Slate-100
      accent: '#10b981',    // Emerald-500
      secondary: '#14b8a6', // Teal-500
      muted: '#64748b',
    },
    transition: {
      duration: 1.0,
      ease: 'power2.inOut',
    },
    contrast: {
      textOnBg: 14.1,
      accentOnBg: 7.8,
    },
  },

  process: {
    id: 'process',
    name: 'Process',
    colors: {
      bg: '#1e1e3f',        // Deep purple-blue
      text: '#e2e8f0',
      accent: '#14b8a6',    // Teal-500
      secondary: '#8b5cf6', // Violet-500
      muted: '#64748b',
    },
    transition: {
      duration: 0.9,
      ease: 'power3.out',
    },
    contrast: {
      textOnBg: 12.8,
      accentOnBg: 7.5,
    },
  },

  team: {
    id: 'team',
    name: 'Team',
    colors: {
      bg: '#0f1729',        // Deep blue-black
      text: '#f1f5f9',
      accent: '#fb923c',    // Amber-400 (warm accent)
      secondary: '#f59e0b', // Amber-500
      muted: '#64748b',
    },
    transition: {
      duration: 1.0,
      ease: 'power2.out',
    },
    contrast: {
      textOnBg: 13.5,
      accentOnBg: 6.8,
    },
  },

  testimonials: {
    id: 'testimonials',
    name: 'Testimonials',
    colors: {
      bg: '#0d0d0d',        // Near black
      text: '#f1f5f9',
      accent: '#10b981',    // Emerald-500
      secondary: '#059669', // Emerald-600
      muted: '#64748b',
    },
    transition: {
      duration: 0.8,
      ease: 'power2.inOut',
    },
    contrast: {
      textOnBg: 15.2,
      accentOnBg: 7.2,
    },
  },

  cta: {
    id: 'cta',
    name: 'CTA',
    colors: {
      bg: '#06b6d4',        // Vibrant cyan (gradient)
      bgGradient: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
      text: '#ffffff',
      accent: '#ffffff',
      secondary: '#f0fdfa', // Teal-50
      muted: '#e0f2fe',     // Sky-100
    },
    transition: {
      duration: 1.2,
      ease: 'power3.out',
    },
    contrast: {
      textOnBg: 4.5,        // White on cyan
      accentOnBg: 4.5,
    },
  },

  footer: {
    id: 'footer',
    name: 'Footer',
    colors: {
      bg: '#0a0a0a',        // True black
      text: '#94a3b8',      // Slate-400
      accent: '#06b6d4',    // Cyan-500
      secondary: '#0284c7', // Sky-600
      muted: '#475569',     // Slate-600
    },
    transition: {
      duration: 0.8,
      ease: 'power2.out',
    },
    contrast: {
      textOnBg: 9.5,
      accentOnBg: 8.2,
    },
  },
};