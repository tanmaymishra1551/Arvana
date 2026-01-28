// src/lib/MotionConfig.jsx
import { MotionConfig as FramerMotionConfig } from 'framer-motion';
import { springs, easings } from './motion';

/**
 * Global Framer Motion configuration wrapper
 */
export default function MotionConfig({ children }) {
  return (
    <FramerMotionConfig
      transition={{
        type: 'spring',
        ...springs.smooth
      }}
      reducedMotion="user"
    >
      {children}
    </FramerMotionConfig>
  );
}