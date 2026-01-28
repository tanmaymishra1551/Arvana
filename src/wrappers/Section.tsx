import { forwardRef } from 'react';
import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  sectionColor?: string;
  className?: string;
  children?: ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, sectionColor, className = '', children }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        data-section-color={sectionColor}
        className={className}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';
export default Section;
