// wrappers/ScrollWrapper.jsx
import { useLenis } from '@studio-freight/react-lenis';

export default function ScrollWrapper({ children, onScroll }) {
  useLenis((lenis) => {
    if (onScroll) onScroll(lenis);
  });

  return <>{children}</>;
}