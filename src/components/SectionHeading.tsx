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
      <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A3323]/80 border border-[#839958]/35 text-xs font-mono text-[#839958] mb-4 shadow-sm ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="text-[#D3968C] font-semibold">{number}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#D3968C]"></span>
        <span className="uppercase tracking-wider text-[#F7F4D5]/90">{tag}</span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#F7F4D5] tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#F7F4D5]/80 text-base md:text-lg leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
