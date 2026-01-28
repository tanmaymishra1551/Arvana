// ====================================
// THEME SYSTEM INTEGRATION
// ====================================

// src/lib/themeTokens.js
/**
 * Theme token definitions
 * Maps section IDs to color schemes
 */

export const themeTokens = {
  hero: {
    id: 'hero',
    bg: 'rgb(10, 25, 47)',
    text: 'rgb(226, 232, 240)',
    accent: 'rgb(0, 217, 255)',
    muted: 'rgb(100, 116, 139)',
  },
  
  services: {
    id: 'services',
    bg: 'rgb(26, 26, 46)',
    text: 'rgb(226, 232, 240)',
    accent: 'rgb(6, 182, 212)',
    muted: 'rgb(100, 116, 139)',
  },

  technology: {
    id: 'technology',
    bg: 'rgb(22, 33, 62)',
    text: 'rgb(241, 245, 249)',
    accent: 'rgb(16, 185, 129)',
    muted: 'rgb(100, 116, 139)',
  },

  process: {
    id: 'process',
    bg: 'rgb(30, 30, 63)',
    text: 'rgb(226, 232, 240)',
    accent: 'rgb(20, 184, 166)',
    muted: 'rgb(100, 116, 139)',
  },

  team: {
    id: 'team',
    bg: 'rgb(15, 23, 41)',
    text: 'rgb(241, 245, 249)',
    accent: 'rgb(251, 146, 60)',
    muted: 'rgb(100, 116, 139)',
  },

  testimonials: {
    id: 'testimonials',
    bg: 'rgb(13, 13, 13)',
    text: 'rgb(241, 245, 249)',
    accent: 'rgb(16, 185, 129)',
    muted: 'rgb(100, 116, 139)',
  },

  cta: {
    id: 'cta',
    bg: 'rgb(6, 182, 212)',
    text: 'rgb(255, 255, 255)',
    accent: 'rgb(255, 255, 255)',
    muted: 'rgb(224, 242, 254)',
  },

  footer: {
    id: 'footer',
    bg: 'rgb(10, 10, 10)',
    text: 'rgb(148, 163, 184)',
    accent: 'rgb(6, 182, 212)',
    muted: 'rgb(71, 85, 105)',
  },
};

// Helper to get theme by ID
export const getTheme = (id) => themeTokens[id] || themeTokens.hero;

// Helper to update CSS variables
export const updateThemeVariables = (theme) => {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  root.style.setProperty('--theme-bg', theme.bg);
  root.style.setProperty('--theme-text', theme.text);
  root.style.setProperty('--theme-accent', theme.accent);
  root.style.setProperty('--theme-muted', theme.muted);
};