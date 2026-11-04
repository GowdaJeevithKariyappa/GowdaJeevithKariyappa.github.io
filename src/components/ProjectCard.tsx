import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { ProjectData } from '../data/projects';

interface ProjectCardProps {
  project: ProjectData;
  layout?: 'featured' | 'standard';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, layout = 'standard' }) => {
  const isFeatured = layout === 'featured' || project.id === 'finsleuth';

  return (
    <div
      className={`group relative rounded-2xl border border-[#F7F4D5]/15 bg-[#105666] hover:border-[#839958] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Top Banner & Image Preview */}
      <div>
        <div className="relative aspect-video sm:aspect-[21/9] lg:aspect-[2/1] overflow-hidden bg-[#0A3323] border-b border-[#F7F4D5]/15">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#105666] via-[#105666]/30 to-transparent" />
          
          {/* Badge & Category Overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full bg-[#0A3323]/90 backdrop-blur-md border border-[#D3968C]/40 text-[11px] font-mono text-[#D3968C] font-semibold">
              {project.badge}
            </span>
            <span className="px-2.5 py-1 rounded bg-[#0A3323]/85 backdrop-blur-md border border-[#F7F4D5]/15 text-[10px] font-mono text-[#F7F4D5]/75">
              {project.category}
            </span>
          </div>

          {/* Quick Metrics Bar on Featured Project */}
          {project.metrics && project.metrics.length > 0 && isFeatured && (
            <div className="absolute bottom-3 left-4 right-4 hidden sm:grid grid-cols-2 md:grid-cols-4 gap-2">
              {project.metrics.slice(0, 4).map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-[#0A3323]/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#F7F4D5]/15 text-left"
                >
                  <div className="text-[10px] font-mono text-[#F7F4D5]/60 truncate">{metric.label}</div>
                  <div className="text-xs font-mono font-bold text-[#839958]">{metric.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-4">
          
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#839958] block mb-1 font-semibold">
                // {project.category}
              </span>
              <h3 className="text-2xl font-heading font-bold text-[#F7F4D5] group-hover:text-[#839958] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-[#F7F4D5]/65 mt-0.5">
                {project.fullTitle}
              </p>
            </div>

            {/* Status Indicator */}
            <span className="shrink-0 px-2.5 py-1 rounded text-[10px] font-mono border border-[#F7F4D5]/20 bg-[#0A3323] text-[#F7F4D5]/80">
              {project.deploymentStatus === 'production' ? 'LIVE DEMO' : 
               project.deploymentStatus === 'local_only' ? 'LOCAL RUN' : 'SOURCE CODE'}
            </span>
          </div>

          <p className="text-[#F7F4D5]/85 text-sm leading-relaxed font-sans">
            {project.shortDescription}
          </p>

          {/* Key Metrics on Standard Card */}
          {!isFeatured && project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 pt-1">
              {project.metrics.slice(0, 2).map((metric, idx) => (
                <div key={idx} className="bg-[#0A3323] p-2.5 rounded-lg border border-[#F7F4D5]/15">
                  <div className="text-[10px] font-mono text-[#F7F4D5]/60 truncate">{metric.label}</div>
                  <div className="text-xs font-mono font-bold text-[#839958]">{metric.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 7).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-[#0A3323] border border-[#839958]/35 text-[11px] font-mono text-[#839958]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 7 && (
              <span className="px-2 py-1 rounded bg-[#0A3323] border border-[#F7F4D5]/15 text-[11px] font-mono text-[#F7F4D5]/60">
                +{project.technologies.length - 7} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-[#F7F4D5]/15">
        
        {/* Primary Case Study Link */}
        <Link
          to={`/projects/${project.slug}`}
          className="btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs shadow-sm group/btn"
        >
          <span>View Technical Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>

        {/* Secondary Links: GitHub & Live Demo */}
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0A3323] hover:bg-[#062217] border border-[#F7F4D5]/20 font-mono text-xs text-[#F7F4D5] transition-all"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github className="w-3.5 h-3.5 text-[#839958]" />
              <span>Source</span>
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#839958]/20 hover:bg-[#839958]/30 border border-[#839958] font-mono text-xs text-[#F7F4D5] font-semibold transition-all"
              aria-label={`Open ${project.title} live demonstration`}
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#839958]" />
              <span>Demo</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
