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
          ? 'bg-[#090B0A]/85 backdrop-blur-md border-b border-border py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 group text-left focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-lg p-1"
            aria-label="Navigate to homepage"
          >
            <div className="w-9 h-9 rounded-lg bg-surface-card border border-border flex items-center justify-center font-mono font-bold text-sm text-text-primary group-hover:border-accent transition-colors">
              <span className="text-accent">G</span>JK
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-semibold tracking-tight text-text-primary group-hover:text-accent transition-colors block leading-tight">
                Gowda Jeevith K.
              </span>
              <span className="text-[11px] font-mono text-text-muted block leading-tight">
                Software & AI/ML
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-surface-card/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-border">
            {navItems.map((item) => {
              const isActive = isHomePage && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 text-xs font-mono tracking-wider transition-all rounded-full relative ${
                    isActive
                      ? 'text-accent font-semibold bg-accent/10 border border-accent/25'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
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
              className="w-9 h-9 rounded-lg bg-surface-card border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent/40 hover:bg-surface-elevated transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-lg bg-surface-card border border-border flex items-center justify-center text-text-secondary hover:text-[#75D6A0] hover:border-[#75D6A0]/40 hover:bg-surface-elevated transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Resume Button: Rendered only when resumeUrl is present and configured */}
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download="Gowda_Jeevith_Kariyappa_Resume.pdf"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent text-background font-mono text-xs font-semibold hover:bg-accent-hover transition-all shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download="Gowda_Jeevith_Kariyappa_Resume.pdf"
                className="px-2.5 py-1 rounded bg-accent text-background font-mono text-xs font-semibold"
              >
                Resume
              </a>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg bg-surface-card border border-border flex items-center justify-center text-text-primary focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090B0A]/95 backdrop-blur-xl border-b border-border px-4 pt-3 pb-6 animate-fade-in">
          <div className="flex flex-col space-y-2 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 text-sm font-mono tracking-wider rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-accent bg-accent/10 border border-accent/25'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-card'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-border flex items-center gap-3">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-surface-card border border-border text-xs font-mono text-text-primary"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-surface-card border border-border text-xs font-mono text-text-primary"
            >
              <Linkedin className="w-4 h-4 text-[#75D6A0]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
