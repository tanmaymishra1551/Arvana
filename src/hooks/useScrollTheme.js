// hooks/useScrollTheme.js
import { useEffect, useState, useRef } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';

/**
 * Core hook for scroll-driven theme management
 * Uses Intersection Observer + GSAP for smooth color interpolation
 */
export const useScrollTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(THEME_CONFIG.hero);
  const [nextTheme, setNextTheme] = useState(null);
  const [progress, setProgress] = useState(0);
  
  const colorRef = useRef({
    bg: THEME_CONFIG.hero.colors.bg,
    text: THEME_CONFIG.hero.colors.text,
    accent: THEME_CONFIG.hero.colors.accent,
  });

  // Lenis scroll listener
  useLenis(({ scroll }) => {
    // Used for additional scroll-based effects if needed
  });

  useEffect(() => {
    // Intersection Observer for section detection
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // Trigger when section is 20% into viewport
      threshold: [0, 0.5, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const sectionId = entry.target.dataset.sectionId;
          const newTheme = THEME_CONFIG[sectionId];
          
          if (newTheme && newTheme.id !== currentTheme.id) {
            transitionToTheme(newTheme);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('[data-section-id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [currentTheme]);

  const transitionToTheme = (newTheme) => {
    setNextTheme(newTheme);

    // GSAP color interpolation (lerp-based)
    gsap.to(colorRef.current, {
      bg: newTheme.colors.bg,
      text: newTheme.colors.text,
      accent: newTheme.colors.accent,
      duration: newTheme.transition.duration,
      ease: newTheme.transition.ease,
      onUpdate: () => {
        // Update CSS custom properties
        document.documentElement.style.setProperty('--theme-bg', colorRef.current.bg);
        document.documentElement.style.setProperty('--theme-text', colorRef.current.text);
        document.documentElement.style.setProperty('--theme-accent', colorRef.current.accent);
      },
      onComplete: () => {
        setCurrentTheme(newTheme);
        setNextTheme(null);
      },
    });
  };

  return {
    currentTheme,
    nextTheme,
    progress,
    colors: colorRef.current,
  };
};