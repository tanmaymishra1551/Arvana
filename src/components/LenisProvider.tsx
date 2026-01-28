import { ReactLenis } from '@studio-freight/react-lenis';
import type { PropsWithChildren } from 'react';
import { lenisOptions } from '../lib/lenis';

export default function LenisProvider({ children }: PropsWithChildren) {
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
