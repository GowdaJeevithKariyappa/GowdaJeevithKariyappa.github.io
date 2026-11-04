import React from 'react';

interface SectionHeadingProps {
  number: string;
  tag: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  tag,
  title,
  subtitle,
  align = 'left'
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-border text-xs font-mono text-accent mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="text-text-muted">{number}</span>
        <span className="w-1 h-1 rounded-full bg-accent/60"></span>
        <span className="uppercase tracking-wider">{tag}</span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
