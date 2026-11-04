import React from 'react';
import { educationHistory, certifications, experience } from '../data/education';
import { SectionHeading } from './SectionHeading';
import { GraduationCap, Award, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 04"
          tag="ACADEMICS & CREDENTIALS"
          title="Education & Certifications."
          subtitle="Formal computer science fundamentals, recognized cloud AI certifications, and applied engineering internships."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Academic Degrees Timeline (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-heading font-bold text-text-primary flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-accent" />
              <span>Academic Background</span>
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-border">
              {educationHistory.map((item, index) => (
                <div key={item.id} className="relative pl-9 group">
                  {/* Timeline Dot */}
                  <div className={`absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                    index === 0
                      ? 'bg-accent border-background ring-4 ring-accent/20'
                      : 'bg-surface-elevated border-border group-hover:border-accent'
                  }`} />

                  {/* Card */}
                  <div className="p-6 rounded-2xl bg-surface-card border border-border group-hover:border-border-focus transition-all space-y-3">
                    
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-heading font-bold text-text-primary">
                          {item.degree}
                        </h4>
                        <div className="text-sm font-medium text-text-secondary mt-0.5">
                          {item.institution}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-surface-elevated border border-border font-mono text-xs text-accent font-semibold">
                          {item.cgpaOrGrade}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 pt-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-xs text-text-secondary flex items-start gap-2 font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Coursework if present */}
                    {item.coursework && (
                      <div className="pt-3 border-t border-border/60">
                        <span className="text-[11px] font-mono text-text-muted block mb-1.5">
                          CORE COURSEWORK:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-0.5 rounded bg-surface-elevated text-[11px] font-mono text-text-secondary border border-border/80"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Internship (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Certifications Card */}
            <div>
              <h3 className="text-xl font-heading font-bold text-text-primary flex items-center gap-2.5 mb-6">
                <Award className="w-5 h-5 text-accentAlt" />
                <span>Verified Certifications</span>
              </h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-6 rounded-2xl bg-surface-card border border-border hover:border-accentAlt/40 transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-mono text-accentAlt block">
                          // {cert.issuer}
                        </span>
                        <h4 className="text-base font-heading font-bold text-text-primary mt-0.5">
                          {cert.title}
                        </h4>
                      </div>
                      <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded bg-accentAlt/10 text-accentAlt border border-accentAlt/20">
                        {cert.validity}
                      </span>
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed font-sans">
                      {cert.description}
                    </p>

                    <div className="pt-2 border-t border-border/60">
                      <span className="text-[10px] font-mono text-text-muted block mb-1">
                        VERIFIED COMPETENCIES:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {cert.skillsVerified.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded bg-surface-elevated text-[10px] font-mono text-text-secondary border border-border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience / Internship */}
            <div>
              <h3 className="text-xl font-heading font-bold text-text-primary flex items-center gap-2.5 mb-6">
                <Briefcase className="w-5 h-5 text-accent" />
                <span>Internship Experience</span>
              </h3>

              <div className="space-y-4">
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-6 rounded-2xl bg-surface-card border border-border hover:border-accent/40 transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-heading font-bold text-text-primary">
                          {exp.role}
                        </h4>
                        <div className="text-sm font-medium text-text-secondary">
                          {exp.company} &bull; {exp.location}
                        </div>
                      </div>
                      <span className="shrink-0 text-[11px] font-mono text-text-muted">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5 pt-1">
                      {exp.description.map((point, pIdx) => (
                        <li key={pIdx} className="text-xs text-text-secondary flex items-start gap-2 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
