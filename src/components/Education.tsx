import React from 'react';
import { educationHistory, certifications, experience } from '../data/education';
import { SectionHeading } from './SectionHeading';
import { GraduationCap, Award, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-[#F7F4D5]/15 bg-[#0A3323] relative">
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
            <h3 className="text-xl font-heading font-bold text-[#F7F4D5] flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-[#839958]" />
              <span>Academic Background</span>
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#839958]/30">
              {educationHistory.map((item, index) => (
                <div key={item.id} className="relative pl-9 group">
                  {/* Timeline Dot */}
                  <div className={`absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                    index === 0
                      ? 'bg-[#839958] border-[#0A3323] ring-4 ring-[#839958]/20'
                      : 'bg-[#105666] border-[#F7F4D5]/30 group-hover:border-[#839958]'
                  }`} />

                  {/* Card */}
                  <div className="p-6 rounded-2xl bg-[#105666] border border-[#F7F4D5]/15 group-hover:border-[#839958] transition-all space-y-3 shadow-lg">
                    
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-heading font-bold text-[#F7F4D5]">
                          {item.degree}
                        </h4>
                        <div className="text-sm font-medium text-[#F7F4D5]/80 mt-0.5 font-sans">
                          {item.institution}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-[#0A3323] border border-[#839958]/40 font-mono text-xs text-[#839958] font-bold">
                          {item.cgpaOrGrade}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#F7F4D5]/65">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#D3968C]" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#839958]" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 pt-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-xs text-[#F7F4D5]/80 flex items-start gap-2 font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#839958] mt-1.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Coursework if present */}
                    {item.coursework && (
                      <div className="pt-3 border-t border-[#F7F4D5]/15">
                        <span className="text-[11px] font-mono text-[#D3968C] block mb-1.5 font-semibold">
                          CORE COURSEWORK:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-0.5 rounded bg-[#0A3323] text-[11px] font-mono text-[#F7F4D5] border border-[#F7F4D5]/10"
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
              <h3 className="text-xl font-heading font-bold text-[#F7F4D5] flex items-center gap-2.5 mb-6">
                <Award className="w-5 h-5 text-[#D3968C]" />
                <span>Verified Certifications</span>
              </h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-6 rounded-2xl bg-[#105666] border border-[#F7F4D5]/15 hover:border-[#D3968C] transition-all space-y-3 shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-mono text-[#D3968C] block font-semibold">
                          // {cert.issuer}
                        </span>
                        <h4 className="text-base font-heading font-bold text-[#F7F4D5] mt-0.5">
                          {cert.title}
                        </h4>
                      </div>
                      <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded bg-[#0A3323] text-[#839958] border border-[#839958]/30 font-semibold">
                        {cert.validity}
                      </span>
                    </div>

                    <p className="text-xs text-[#F7F4D5]/80 leading-relaxed font-sans">
                      {cert.description}
                    </p>

                    <div className="pt-2 border-t border-[#F7F4D5]/15">
                      <span className="text-[10px] font-mono text-[#D3968C] block mb-1 font-semibold">
                        VERIFIED COMPETENCIES:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {cert.skillsVerified.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded bg-[#0A3323] text-[10px] font-mono text-[#F7F4D5] border border-[#F7F4D5]/10"
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
              <h3 className="text-xl font-heading font-bold text-[#F7F4D5] flex items-center gap-2.5 mb-6">
                <Briefcase className="w-5 h-5 text-[#839958]" />
                <span>Internship Experience</span>
              </h3>

              <div className="space-y-4">
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-6 rounded-2xl bg-[#105666] border border-[#F7F4D5]/15 hover:border-[#839958] transition-all space-y-3 shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-heading font-bold text-[#F7F4D5]">
                          {exp.role}
                        </h4>
                        <div className="text-sm font-medium text-[#F7F4D5]/80 font-sans">
                          {exp.company} &bull; {exp.location}
                        </div>
                      </div>
                      <span className="shrink-0 text-[11px] font-mono text-[#D3968C]">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5 pt-1">
                      {exp.description.map((point, pIdx) => (
                        <li key={pIdx} className="text-xs text-[#F7F4D5]/80 flex items-start gap-2 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#839958] shrink-0 mt-0.5" />
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
