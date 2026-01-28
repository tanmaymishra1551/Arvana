// ====================================
// WRAPPERS
// ====================================

import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Type for children prop
type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [currentSectionColor, setCurrentSectionColor] = useState<string>('#0a192f');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            // TypeScript: dataset may be undefined, so check
            const color = entry.target instanceof HTMLElement ? entry.target.dataset.sectionColor : undefined;
            if (color) setCurrentSectionColor(color);
          }
        });
      },
      { threshold: 0.5 }
    );

    // TypeScript: querySelectorAll returns NodeListOf<Element>
    document.querySelectorAll<HTMLElement>('[data-section-color]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
      <div className="min-h-screen">
        <Header currentSectionColor={currentSectionColor} />
        <main>{children}</main>
        <Footer />
      </div>
    </ReactLenis>
  );
}
