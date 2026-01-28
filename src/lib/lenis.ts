export const lenisOptions = {
  lerp: 0.1,
  duration: 1.2,

  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

  orientation: 'vertical',         // ✅ must be literal
  gestureOrientation: 'vertical',  // ✅ must be literal

  smoothWheel: true,
  wheelMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,

  infinite: false,
} as const; // ✅ preserves literal types so TS won't widen to string
