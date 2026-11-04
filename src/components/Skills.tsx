import React from 'react';
import { skillCategories } from '../data/skills';
import { SectionHeading } from './SectionHeading';
import { Code2, BrainCircuit, Layout, Database, Cpu, Wrench, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-accent" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-accentAlt" />,
  Layout: <Layout className="w-5 h-5 text-accent" />,
  Database: <Database className="w-5 h-5 text-accentAlt" />,
  Cpu: <Cpu className="w-5 h-5 text-accent" />,
  Wrench: <Wrench className="w-5 h-5 text-accentAlt" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 03"
          tag="TECHNICAL PROFICIENCY"
          title="Skills & Technologies."
          subtitle="A practical toolkit built through university engineering, applied projects, and hands-on system development."
        />

        {/* Technical Philosophy Note */}
        <div className="mb-10 p-4 rounded-xl bg-surface-card border border-border flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-text-secondary leading-relaxed font-sans">
            <span className="text-text-primary font-semibold">Honest Engineering Standards:</span> I do not claim artificial 100% proficiency bars. 
            The skills listed below represent technologies I actively write code in, use to construct systems, and understand from architectural fundamentals.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-surface-card border border-border hover:border-accent/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-border flex items-center justify-center group-hover:border-accent/40 transition-colors">
                    {iconMap[category.iconName] || <Code2 className="w-5 h-5 text-accent" />}
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-bold text-text-primary">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-text-muted leading-relaxed mb-6 font-sans">
                  {category.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        skill.highlight
                          ? 'bg-surface-elevated text-text-primary border border-border group-hover:border-accent/25'
                          : 'bg-surface-card text-text-secondary border border-border/60'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-[10px] font-mono text-text-muted">
                <span>{category.skills.length} core tools</span>
                <span className="text-accent/60">applied in projects</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
