import React from 'react';
import { Compass, Layers, MapPin, GraduationCap, Code2, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';
import { SectionHeading } from './SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 01"
          tag="ABOUT ME"
          title="A little about me."
          subtitle="Curious about how software and intelligence work under the hood, and passionate about turning engineering concepts into practical software."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-text-secondary leading-relaxed text-base md:text-lg">
            {profile.summaryParagraphs.map((paragraph, index) => (
              <p key={index} className="text-text-secondary font-sans leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Core Values Strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface-card border border-border">
                <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-accent mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-heading font-semibold text-text-primary mb-1">
                  Systems Over Theories
                </h4>
                <p className="text-xs text-text-muted leading-relaxed font-sans">
                  Deeply interested in full end-to-end pipelines—from data ingestion and algorithmic scoring to frontend user experience.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-card border border-border">
                <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-accentAlt mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-heading font-semibold text-text-primary mb-1">
                  Disciplined Experimentation
                </h4>
                <p className="text-xs text-text-muted leading-relaxed font-sans">
                  Valuing empirical validation, zero-leakage temporal evaluation, and clean, reproducible software engineering.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Facts & Metadata Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-surface-card border border-border space-y-6">
              
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  QUICK FACTS
                </span>
                <span className="font-mono text-xs text-accent">verified_profile</span>
              </div>

              {/* Info Blocks */}
              <div className="space-y-4">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-muted block">EDUCATION</span>
                    <span className="text-sm font-semibold text-text-primary block">
                      Presidency University, Bengaluru
                    </span>
                    <span className="text-xs text-text-secondary block mt-0.5">
                      B.Tech in Computer Science & Engineering (Data Science)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-border/60">
                  <div className="w-9 h-9 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-accentAlt shrink-0 mt-0.5">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-muted block">FOCUS DOMAINS</span>
                    <span className="text-sm font-semibold text-text-primary block">
                      Software Engineering &bull; AI/ML &bull; Data Science
                    </span>
                    <span className="text-xs text-text-secondary block mt-0.5">
                      Graph Analytics, On-Device AI, Full-Stack Architecture
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-border/60">
                  <div className="w-9 h-9 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-muted block">CURRENT STATUS</span>
                    <span className="text-sm font-semibold text-text-primary block">
                      Undergraduate Student &bull; Graduating 2027
                    </span>
                    <span className="text-xs text-accent font-mono block mt-0.5">
                      Academic CGPA: 8.62 / 10.0
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-border/60">
                  <div className="w-9 h-9 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-text-secondary shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-muted block">LOCATION</span>
                    <span className="text-sm font-semibold text-text-primary block">
                      {profile.location}
                    </span>
                    <span className="text-xs text-text-secondary block mt-0.5">
                      Available for Bengaluru on-site, hybrid, & remote opportunities
                    </span>
                  </div>
                </div>

              </div>

              {/* Spoken Languages */}
              <div className="pt-4 border-t border-border">
                <span className="text-xs font-mono text-text-muted block mb-2">
                  LANGUAGES SPOKEN
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {profile.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2.5 py-1 rounded-md bg-surface-elevated border border-border text-xs font-mono text-text-secondary"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
