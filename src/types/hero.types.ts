// types/hero.types.ts
export interface HeroProps {
  onCTAClick?: (action: 'schedule' | 'portfolio') => void;
}

export interface DeviceProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

export interface ParticleProps {
  count: number;
  color: string;
}