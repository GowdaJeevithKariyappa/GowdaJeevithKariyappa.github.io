import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#F7F4D5]/15 bg-[#0A3323] py-12 md:py-16 text-[#F7F4D5] font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#F7F4D5]/15">
          
          {/* Identity & Positioning */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#105666] border border-[#839958]/35 flex items-center justify-center font-mono font-bold text-xs text-[#F7F4D5] shadow-sm">
                <span className="text-[#839958]">G</span>JK
              </div>
              <span className="font-heading font-bold text-lg text-[#F7F4D5]">
                {profile.fullName}
              </span>
            </div>
            <p className="text-xs font-mono text-[#D3968C] font-semibold">
              Software Engineer &bull; AI/ML Engineer &bull; Data Science Enthusiast
            </p>
            <p className="text-xs font-serif italic text-[#F7F4D5]/75">
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
              className="w-9 h-9 rounded-lg bg-[#0A3323] border border-[#F7F4D5]/20 flex items-center justify-center text-[#F7F4D5]/80 hover:text-[#F7F4D5] hover:border-[#839958] transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-lg bg-[#0A3323] border border-[#F7F4D5]/20 flex items-center justify-center text-[#F7F4D5]/80 hover:text-[#D3968C] hover:border-[#D3968C] transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={handleBackToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#105666]/30 hover:bg-[#105666]/60 border border-[#F7F4D5]/20 text-xs font-mono text-[#F7F4D5] transition-all"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#839958]" />
              <span>Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & GitHub Pages Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F7F4D5]/60">
          <div>
            &copy; {currentYear} {profile.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Hosted on</span>
            <a
              href="https://pages.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#839958] hover:text-[#95AC66] underline underline-offset-2 transition-colors font-semibold"
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
