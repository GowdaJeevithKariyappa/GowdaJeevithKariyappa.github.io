import React from 'react';
import { ArrowDown, Github, Linkedin, MapPin, Terminal, Cpu } from 'lucide-react';
import { profile } from '../data/profile';
import { scrollToSection } from '../lib/utils';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
      
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-accentAlt/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Engineering Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-card border border-border shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-mono text-text-secondary tracking-wide">
                Undergraduate in CSE (Data Science) &bull; Presidency University
              </span>
            </div>

            {/* Small Introduction */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-accent font-medium">
                // HELLO, I'M
              </p>
              
              {/* Main Name */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-text-primary tracking-tight leading-[1.08]">
                Gowda Jeevith <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-text-primary to-text-secondary">
                  Kariyappa.
                </span>
              </h1>
            </div>

            {/* Professional Headline */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium text-text-secondary leading-snug">
              Building intelligent systems. <br className="hidden sm:block" />
              <span className="text-accent">Turning ideas into reality.</span>
            </p>

            {/* Supporting Introduction */}
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
              I'm a Computer Science and Data Science undergraduate interested in software engineering, 
              artificial intelligence, and building practical technology products. 
              I enjoy exploring complex ideas, understanding systems deeply, and turning what I learn into working applications.
            </p>

            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono text-text-muted">
              <div className="flex items-center gap-1.5 bg-surface-card px-2.5 py-1 rounded border border-border">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-surface-card px-2.5 py-1 rounded border border-border">
                <Terminal className="w-3.5 h-3.5 text-accentAlt" />
                <span>CGPA: {profile.cgpa} / {profile.cgpaMax}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-surface-card px-2.5 py-1 rounded border border-border">
                <Cpu className="w-3.5 h-3.5 text-accent" />
                <span>OCI AI Foundations Certified</span>
              </div>
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-lg bg-accent text-background font-mono text-sm font-semibold hover:bg-accent-hover transition-all flex items-center gap-2 shadow-lg shadow-accent/15 group"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-lg bg-surface-card hover:bg-surface-elevated text-text-primary font-mono text-sm font-medium border border-border hover:border-accent/40 transition-all"
              >
                Let's Connect
              </button>

              <div className="flex items-center gap-2 ml-2">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-surface-card border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-surface-card border border-border flex items-center justify-center text-text-secondary hover:text-accentAlt hover:border-accentAlt/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Engineering Snapshot Card */}
          <div className="lg:col-span-4">
            <div className="relative rounded-xl border border-border bg-surface-card/90 backdrop-blur-md p-6 shadow-2xl space-y-6">
              
              {/* Header Terminal Strip */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-accent/80"></span>
                  <span className="text-[11px] font-mono text-text-muted ml-2">system.profile</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                  ACTIVE
                </span>
              </div>

              {/* Technical Profile Details */}
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <span className="text-text-muted">// FOCUS AREAS</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    <span className="px-2 py-0.5 rounded bg-surface-elevated text-text-primary border border-border text-[11px]">
                      Graph Analytics
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-elevated text-text-primary border border-border text-[11px]">
                      Machine Learning
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-elevated text-text-primary border border-border text-[11px]">
                      Local LLMs
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-elevated text-text-primary border border-border text-[11px]">
                      Full-Stack Web
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-border">
                  <span className="text-text-muted">// PRIMARY CASE STUDY</span>
                  <p className="text-text-primary font-semibold text-sm mt-1">
                    FINsleuth AML Engine
                  </p>
                  <p className="text-text-secondary text-[11px] mt-0.5 leading-normal">
                    3.03M transaction benchmark &bull; Three-stream learned logistic stacking &bull; 100/100 verified tests.
                  </p>
                </div>

                <div className="pt-2 border-t border-border">
                  <span className="text-text-muted">// LOCAL AI SYSTEM</span>
                  <p className="text-text-primary font-semibold text-sm mt-1">
                    Luna Emotional Companion
                  </p>
                  <p className="text-text-secondary text-[11px] mt-0.5 leading-normal">
                    100% offline Mistral 7B inference &bull; Zero external API dependency &bull; Empathetic companion fallback.
                  </p>
                </div>
              </div>

              {/* Bottom Quick Metric Highlight */}
              <div className="p-3 rounded-lg bg-surface-elevated border border-border flex items-center justify-between text-xs">
                <div>
                  <div className="text-[10px] font-mono text-text-muted uppercase">ACADEMIC EXCELLENCE</div>
                  <div className="font-mono font-bold text-accent text-sm">8.62 CGPA</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-text-muted uppercase">GRADUATION</div>
                  <div className="font-mono text-text-primary text-sm">Batch of 2027</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
