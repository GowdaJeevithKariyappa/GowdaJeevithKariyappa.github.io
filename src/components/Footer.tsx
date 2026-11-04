import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-[#090B0A] py-12 md:py-16 text-text-secondary font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-border/60">
          
          {/* Identity & Positioning */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-surface-card border border-border flex items-center justify-center font-mono font-bold text-xs text-text-primary">
                <span className="text-accent">G</span>JK
              </div>
              <span className="font-heading font-bold text-lg text-text-primary">
                {profile.fullName}
              </span>
            </div>
            <p className="text-xs font-mono text-text-muted">
              Software Engineer &bull; AI/ML Engineer &bull; Data Science Enthusiast
            </p>
            <p className="text-xs font-sans text-text-secondary italic">
              "Built with curiosity, code, and continuous learning."
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-lg bg-surface-card border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent/40 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-lg bg-surface-card border border-border flex items-center justify-center text-text-secondary hover:text-accentAlt hover:border-accentAlt/40 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={handleBackToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-card hover:bg-surface-elevated border border-border text-xs font-mono text-text-secondary hover:text-text-primary transition-all"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5 text-accent" />
              <span>Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & GitHub Pages Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            &copy; {currentYear} {profile.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Hosted on</span>
            <a
              href="https://pages.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:text-accent underline underline-offset-2 transition-colors"
            >
              GitHub Pages
            </a>
            <span>via GitHub Actions</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
