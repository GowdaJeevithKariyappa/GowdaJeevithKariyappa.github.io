import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';
import { ShieldCheck } from 'lucide-react';

const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & Machine Learning' },
  { id: 'fullstack', label: 'Full Stack & Systems' },
  { id: 'datascience', label: 'Quantitative Data Science' },
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai') return project.category.includes('AI') || project.category.includes('Machine Learning');
    if (activeFilter === 'fullstack') return project.category.includes('Full Stack') || project.category.includes('Web Application');
    if (activeFilter === 'datascience') return project.category.includes('Quantitative') || project.category.includes('FinTech') || project.category.includes('Graph Analytics');
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-[#F7F4D5]/15 bg-[#0A3323] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            number="// 02"
            tag="ENGINEERING PORTFOLIO"
            title="Featured Projects."
            subtitle="Verified technical projects showcasing machine learning, deterministic graph algorithms, local AI companions, and full-stack applications."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#105666] border border-[#F7F4D5]/15 self-start md:self-end">
            {filterCategories.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeFilter === filter.id
                    ? 'bg-[#839958] text-[#0A3323] font-bold shadow-sm'
                    : 'text-[#F7F4D5]/80 hover:text-[#F7F4D5] hover:bg-[#0A3323]/50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Verification Guarantee Strip */}
        <div className="mb-10 p-4 rounded-xl bg-[#105666] border border-[#F7F4D5]/15 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2.5 text-[#F7F4D5]/90">
            <ShieldCheck className="w-4 h-4 text-[#839958]" />
            <span>Strict Authenticity Standard: Verified source code repositories, actual metrics, and reproducible architectures.</span>
          </div>
          <span className="hidden sm:inline-block text-[11px] text-[#D3968C] font-semibold">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'} Displayed
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              layout={project.id === 'finsleuth' && activeFilter === 'all' ? 'featured' : 'standard'}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
