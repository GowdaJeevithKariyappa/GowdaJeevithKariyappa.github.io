import React from 'react';
import { Compass, Layers, MapPin, GraduationCap, Code2, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';
import { SectionHeading } from './SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-[#F7F4D5]/15 bg-[#0A3323] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 01"
          tag="ABOUT ME"
          title="A little about me."
          subtitle="Curious about how software and intelligence work under the hood, and passionate about turning engineering concepts into practical software."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#F7F4D5]/85 leading-relaxed text-base md:text-lg">
            {profile.summaryParagraphs.map((paragraph, index) => (
              <p key={index} className="font-sans leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Core Values Strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#105666] border border-[#F7F4D5]/15">
                <div className="w-8 h-8 rounded-lg bg-[#0A3323] border border-[#839958]/40 flex items-center justify-center text-[#839958] mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-heading font-semibold text-[#F7F4D5] mb-1">
                  Systems Over Theories
                </h4>
                <p className="text-xs text-[#F7F4D5]/75 leading-relaxed font-sans">
                  Deeply interested in full end-to-end pipelines—from data ingestion and algorithmic scoring to frontend user experience.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#105666] border border-[#F7F4D5]/15">
                <div className="w-8 h-8 rounded-lg bg-[#0A3323] border border-[#D3968C]/40 flex items-center justify-center text-[#D3968C] mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-heading font-semibold text-[#F7F4D5] mb-1">
                  Disciplined Experimentation
                </h4>
                <p className="text-xs text-[#F7F4D5]/75 leading-relaxed font-sans">
                  Valuing empirical validation, zero-leakage temporal evaluation, and clean, reproducible software engineering.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Facts & Metadata Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 md:p-8 rounded-2xl bg-[#105666] border border-[#F7F4D5]/20 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#F7F4D5]/15 pb-3">
                <span className="font-mono text-xs text-[#D3968C] uppercase tracking-wider font-semibold">
                  QUICK FACTS
                </span>
                <span className="font-mono text-xs text-[#839958] px-2 py-0.5 rounded bg-[#0A3323] border border-[#839958]/30">
                  verified_profile
                </span>
              </div>

              {/* Info Blocks */}
              <div className="space-y-4">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0A3323] border border-[#839958]/40 flex items-center justify-center text-[#839958] shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#D3968C] block">EDUCATION</span>
                    <span className="text-sm font-semibold text-[#F7F4D5] block">
                      Presidency University, Bengaluru
                    </span>
                    <span className="text-xs text-[#F7F4D5]/80 block mt-0.5 font-sans">
                      B.Tech in Computer Science & Engineering (Data Science)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-[#F7F4D5]/15">
                  <div className="w-9 h-9 rounded-lg bg-[#0A3323] border border-[#839958]/40 flex items-center justify-center text-[#839958] shrink-0 mt-0.5">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#839958] block">FOCUS DOMAINS</span>
                    <span className="text-sm font-semibold text-[#F7F4D5] block">
                      Software Engineering &bull; AI/ML &bull; Data Science
                    </span>
                    <span className="text-xs text-[#F7F4D5]/80 block mt-0.5 font-sans">
                      Graph Analytics, On-Device AI, Full-Stack Architecture
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-[#F7F4D5]/15">
                  <div className="w-9 h-9 rounded-lg bg-[#0A3323] border border-[#D3968C]/40 flex items-center justify-center text-[#D3968C] shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#D3968C] block">CURRENT STATUS</span>
                    <span className="text-sm font-semibold text-[#F7F4D5] block">
                      Undergraduate Student &bull; Graduating 2027
                    </span>
                    <span className="text-xs text-[#839958] font-mono block mt-0.5 font-semibold">
                      Academic CGPA: 8.62 / 10.0
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-[#F7F4D5]/15">
                  <div className="w-9 h-9 rounded-lg bg-[#0A3323] border border-[#F7F4D5]/20 flex items-center justify-center text-[#F7F4D5] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#839958]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#F7F4D5]/60 block">LOCATION</span>
                    <span className="text-sm font-semibold text-[#F7F4D5] block">
                      {profile.location}
                    </span>
                    <span className="text-xs text-[#F7F4D5]/80 block mt-0.5 font-sans">
                      Available for Bengaluru on-site, hybrid, & remote opportunities
                    </span>
                  </div>
                </div>

              </div>

              {/* Spoken Languages */}
              <div className="pt-4 border-t border-[#F7F4D5]/15">
                <span className="text-xs font-mono text-[#D3968C] block mb-2 font-semibold">
                  LANGUAGES SPOKEN
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {profile.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2.5 py-1 rounded-md bg-[#0A3323] border border-[#F7F4D5]/15 text-xs font-mono text-[#F7F4D5]"
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
