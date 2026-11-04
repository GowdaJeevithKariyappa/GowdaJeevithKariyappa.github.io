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
      className={`group relative rounded-2xl border border-border bg-surface-card hover:border-accent/40 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Top Banner & Image Preview */}
      <div>
        <div className="relative aspect-video sm:aspect-[21/9] lg:aspect-[2/1] overflow-hidden bg-surface-elevated border-b border-border">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/30 to-transparent" />
          
          {/* Badge & Category Overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full bg-[#090B0A]/85 backdrop-blur-md border border-border text-[11px] font-mono text-accent">
              {project.badge}
            </span>
            <span className="px-2.5 py-1 rounded bg-[#090B0A]/80 backdrop-blur-md border border-border text-[10px] font-mono text-text-muted">
              {project.category}
            </span>
          </div>

          {/* Quick Metrics Bar on Featured Project */}
          {project.metrics && project.metrics.length > 0 && isFeatured && (
            <div className="absolute bottom-3 left-4 right-4 hidden sm:grid grid-cols-2 md:grid-cols-4 gap-2">
              {project.metrics.slice(0, 4).map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-[#090B0A]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border text-left"
                >
                  <div className="text-[10px] font-mono text-text-muted truncate">{metric.label}</div>
                  <div className="text-xs font-mono font-bold text-accent">{metric.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-4">
          
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-accent block mb-1">
                // {project.category}
              </span>
              <h3 className="text-2xl font-heading font-bold text-text-primary group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-text-muted mt-0.5">
                {project.fullTitle}
              </p>
            </div>

            {/* Status Indicator */}
            <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono border border-border bg-surface-elevated text-text-muted">
              {project.deploymentStatus === 'production' ? 'LIVE DEMO' : 
               project.deploymentStatus === 'local_only' ? 'LOCAL RUN' : 'SOURCE CODE'}
            </span>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Key Metrics on Standard Card */}
          {!isFeatured && project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 pt-1">
              {project.metrics.slice(0, 2).map((metric, idx) => (
                <div key={idx} className="bg-surface-elevated p-2 rounded-lg border border-border">
                  <div className="text-[10px] font-mono text-text-muted truncate">{metric.label}</div>
                  <div className="text-xs font-mono font-semibold text-text-primary">{metric.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 7).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-surface-elevated border border-border text-[11px] font-mono text-text-secondary"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 7 && (
              <span className="px-2 py-1 rounded bg-surface-elevated border border-border text-[11px] font-mono text-text-muted">
                +{project.technologies.length - 7} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-border/60">
        
        {/* Primary Case Study Link */}
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-elevated hover:bg-accent hover:text-background border border-border hover:border-accent font-mono text-xs font-semibold text-text-primary transition-all group/btn"
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
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-card hover:bg-surface-elevated border border-border font-mono text-xs text-text-secondary hover:text-text-primary transition-all"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/30 font-mono text-xs text-accent transition-all"
              aria-label={`Open ${project.title} live demonstration`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Demo</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
