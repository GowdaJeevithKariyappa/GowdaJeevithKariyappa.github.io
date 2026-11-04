import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';

const navItems = [
  { label: 'HOME', id: 'hero' },
  { label: 'ABOUT', id: 'about' },
  { label: 'PROJECTS', id: 'projects' },
  { label: 'SKILLS', id: 'skills' },
  { label: 'EDUCATION', id: 'education' },
  { label: 'CONTACT', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = useActiveSection(navItems.map(item => item.id), 120);

  const isHomePage = location.pathname === '/' || location.pathname === '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      navigate(`/#${id}`);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A3323]/90 backdrop-blur-md border-b border-[#F7F4D5]/15 py-3 shadow-lg shadow-[#062217]/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 group text-left focus:outline-none focus:ring-2 focus:ring-[#839958]/50 rounded-lg p-1"
            aria-label="Navigate to homepage"
          >
            <div className="w-9 h-9 rounded-lg bg-[#105666] border border-[#839958]/40 flex items-center justify-center font-mono font-bold text-sm text-[#F7F4D5] group-hover:border-[#839958] transition-colors shadow-sm">
              <span className="text-[#839958]">G</span>JK
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-semibold tracking-tight text-[#F7F4D5] group-hover:text-[#839958] transition-colors block leading-tight">
                Gowda Jeevith K.
              </span>
              <span className="text-[11px] font-mono text-[#F7F4D5]/60 block leading-tight">
                Software & AI/ML
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#0A3323]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#F7F4D5]/15">
            {navItems.map((item) => {
              const isActive = isHomePage && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 text-xs font-mono tracking-wider transition-all rounded-full relative ${
                    isActive
                      ? 'text-[#0A3323] font-bold bg-[#839958] shadow-sm'
                      : 'text-[#F7F4D5]/80 hover:text-[#F7F4D5] hover:bg-[#105666]/40'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Resume */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-lg bg-[#0A3323] border border-[#F7F4D5]/15 flex items-center justify-center text-[#F7F4D5]/80 hover:text-[#F7F4D5] hover:border-[#839958] hover:bg-[#105666]/30 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-lg bg-[#0A3323] border border-[#F7F4D5]/15 flex items-center justify-center text-[#F7F4D5]/80 hover:text-[#D3968C] hover:border-[#D3968C] hover:bg-[#105666]/30 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Resume Button: Moss Green background with Dark Green text */}
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download="Gowda_Jeevith_Kariyappa_Resume.pdf"
                className="btn-primary flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 opacity-80" />
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download="Gowda_Jeevith_Kariyappa_Resume.pdf"
                className="btn-primary px-2.5 py-1 rounded text-xs font-semibold"
              >
                Resume
              </a>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg bg-[#0A3323] border border-[#F7F4D5]/20 flex items-center justify-center text-[#F7F4D5] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A3323]/98 backdrop-blur-xl border-b border-[#F7F4D5]/15 px-4 pt-3 pb-6 animate-fade-in">
          <div className="flex flex-col space-y-2 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 text-sm font-mono tracking-wider rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-[#0A3323] bg-[#839958] font-bold'
                    : 'text-[#F7F4D5]/80 hover:text-[#F7F4D5] hover:bg-[#105666]/30'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#F7F4D5]/15 flex items-center gap-3">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#105666]/30 border border-[#F7F4D5]/15 text-xs font-mono text-[#F7F4D5]"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#105666]/30 border border-[#F7F4D5]/15 text-xs font-mono text-[#F7F4D5]"
            >
              <Linkedin className="w-4 h-4 text-[#D3968C]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
