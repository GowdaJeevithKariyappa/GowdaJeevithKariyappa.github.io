import React from 'react';
import { ArrowDown, Github, Linkedin, MapPin, Terminal, Cpu } from 'lucide-react';
import { profile } from '../data/profile';
import { scrollToSection } from '../lib/utils';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#0A3323]">
      {/* Background Subtle Technical & Botanical Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />
      
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#839958]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[320px] bg-[#105666]/25 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Engineering Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A3323] border border-[#839958]/40 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#839958] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#839958]"></span>
              </span>
              <span className="text-xs font-mono text-[#F7F4D5]/80 tracking-wide">
                Undergraduate in CSE (Data Science) &bull; Presidency University
              </span>
            </div>

            {/* Small Introduction */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#839958] font-semibold">
                // HELLO, I'M
              </p>
              
              {/* Main Name */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-[#F7F4D5] tracking-tight leading-[1.08]">
                Gowda Jeevith <br className="hidden sm:block" />
                <span className="text-[#F7F4D5] font-serif italic font-normal">
                  Kariyappa.
                </span>
              </h1>
            </div>

            {/* Professional Headline */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium text-[#F7F4D5]/90 leading-snug">
              Building intelligent systems. <br className="hidden sm:block" />
              <span className="text-[#839958]">Turning ideas into reality.</span>
            </p>

            {/* Supporting Introduction */}
            <p className="text-base sm:text-lg text-[#F7F4D5]/80 max-w-2xl leading-relaxed font-sans">
              I'm a Computer Science and Data Science undergraduate interested in software engineering, 
              artificial intelligence, and building practical technology products. 
              I enjoy exploring complex ideas, understanding systems deeply, and turning what I learn into working applications.
            </p>

            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono">
              <div className="flex items-center gap-1.5 bg-[#105666]/30 px-3 py-1.5 rounded-lg border border-[#F7F4D5]/15 text-[#F7F4D5]/90">
                <MapPin className="w-3.5 h-3.5 text-[#D3968C]" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#105666]/30 px-3 py-1.5 rounded-lg border border-[#F7F4D5]/15 text-[#F7F4D5]/90">
                <Terminal className="w-3.5 h-3.5 text-[#839958]" />
                <span>CGPA: {profile.cgpa} / {profile.cgpaMax}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#105666]/30 px-3 py-1.5 rounded-lg border border-[#F7F4D5]/15 text-[#F7F4D5]/90">
                <Cpu className="w-3.5 h-3.5 text-[#D3968C]" />
                <span>OCI AI Foundations Certified</span>
              </div>
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Primary Button: Moss Green background with Dark Green text */}
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary px-6 py-3 rounded-lg text-sm flex items-center gap-2 shadow-md group"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              {/* Secondary Button: Transparent background with Beige border and text */}
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary px-6 py-3 rounded-lg text-sm"
              >
                Let's Connect
              </button>

              <div className="flex items-center gap-2 ml-2">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#0A3323] border border-[#F7F4D5]/20 flex items-center justify-center text-[#F7F4D5]/80 hover:text-[#F7F4D5] hover:border-[#839958] transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#0A3323] border border-[#F7F4D5]/20 flex items-center justify-center text-[#F7F4D5]/80 hover:text-[#D3968C] hover:border-[#D3968C] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Midnight Green Engineering Snapshot Card */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl border border-[#F7F4D5]/20 bg-[#105666] p-6 shadow-2xl space-y-6">
              
              {/* Header Terminal Strip */}
              <div className="flex items-center justify-between border-b border-[#F7F4D5]/15 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D3968C]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#839958]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F7F4D5]"></span>
                  <span className="text-[11px] font-mono text-[#F7F4D5]/70 ml-2">system.profile</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#839958]/20 text-[#F7F4D5] border border-[#839958]/40">
                  ACTIVE
                </span>
              </div>

              {/* Technical Profile Details */}
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <span className="text-[#D3968C] font-semibold">// FOCUS AREAS</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="px-2.5 py-1 rounded bg-[#0A3323] text-[#F7F4D5] border border-[#F7F4D5]/15 text-[11px]">
                      Graph Analytics
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#0A3323] text-[#F7F4D5] border border-[#F7F4D5]/15 text-[11px]">
                      Machine Learning
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#0A3323] text-[#F7F4D5] border border-[#F7F4D5]/15 text-[11px]">
                      Local LLMs
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#0A3323] text-[#F7F4D5] border border-[#F7F4D5]/15 text-[11px]">
                      Full-Stack Web
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F7F4D5]/15">
                  <span className="text-[#839958] font-semibold">// PRIMARY CASE STUDY</span>
                  <p className="text-[#F7F4D5] font-semibold text-sm mt-1">
                    FINsleuth AML Engine
                  </p>
                  <p className="text-[#F7F4D5]/80 text-[11px] mt-0.5 leading-normal font-sans">
                    3.03M transaction benchmark &bull; Three-stream learned logistic stacking &bull; 100/100 verified tests.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F7F4D5]/15">
                  <span className="text-[#D3968C] font-semibold">// LOCAL AI SYSTEM</span>
                  <p className="text-[#F7F4D5] font-semibold text-sm mt-1">
                    Luna Emotional Companion
                  </p>
                  <p className="text-[#F7F4D5]/80 text-[11px] mt-0.5 leading-normal font-sans">
                    100% offline Mistral 7B inference &bull; Zero external API dependency &bull; Empathetic companion fallback.
                  </p>
                </div>
              </div>

              {/* Bottom Quick Metric Highlight */}
              <div className="p-3.5 rounded-xl bg-[#0A3323] border border-[#F7F4D5]/15 flex items-center justify-between text-xs">
                <div>
                  <div className="text-[10px] font-mono text-[#D3968C] uppercase font-semibold">ACADEMIC EXCELLENCE</div>
                  <div className="font-mono font-bold text-[#839958] text-sm mt-0.5">8.62 CGPA</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-[#F7F4D5]/60 uppercase">GRADUATION</div>
                  <div className="font-mono text-[#F7F4D5] text-sm mt-0.5">Batch of 2027</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
