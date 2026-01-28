// src/hooks/useTheme.js
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { themeTokens, updateThemeVariables } from '../lib/themeTokens';

/**
 * Theme management hook with GSAP interpolation
 */
export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(themeTokens.hero);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.dataset.sectionId;
            const newTheme = themeTokens[sectionId];
            
            if (newTheme && newTheme.id !== currentTheme.id) {
              transitionTheme(currentTheme, newTheme);
              setCurrentTheme(newTheme);
            }
          }
        });
      },
      { 
        threshold: [0.5],
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    document.querySelectorAll('[data-section-id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [currentTheme]);

  const transitionTheme = (from, to) => {
    // Create temporary object for GSAP to animate
    const tempTheme = { ...from };

    gsap.to(tempTheme, {
      bg: to.bg,
      text: to.text,
      accent: to.accent,
      muted: to.muted,
      duration: 1.2,
      ease: 'power2.out',
      onUpdate: () => {
        updateThemeVariables(tempTheme);
      }
    });
  };

  return currentTheme;
};