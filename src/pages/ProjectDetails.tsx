import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects, ProjectData } from '../data/projects';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Layers, 
  AlertTriangle, 
  TrendingUp, 
  Compass, 
  BarChart3, 
  Share2, 
  Check 
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  CartesianGrid, 
  Legend 
} from 'recharts';

export const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'evaluation' | 'engineering'>('overview');

  const project: ProjectData | undefined = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
          Case Study Not Found
        </h2>
        <p className="text-text-secondary mb-8 max-w-md">
          The project case study you requested could not be located or has not been published yet.
        </p>
        <Link
          to="/"
          className="px-6 py-2.5 rounded-lg bg-accent text-background font-mono text-xs font-semibold hover:bg-accent-hover transition-all inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Evaluation Chart Data for FINsleuth
  const finsleuthChartData = [
    { name: 'Behavioural ML Alone', precision: 15.68, recall: 7.64, f1: 10.19 },
    { name: 'Pattern Risk Alone', precision: 2.30, recall: 14.20, f1: 3.96 },
    { name: 'Structural Risk Alone', precision: 3.12, recall: 18.50, f1: 5.34 },
    { name: 'Unified Three-Stream Fusion', precision: 33.79, recall: 23.06, f1: 27.39 },
  ];

  return (
    <article className="min-h-screen pt-24 pb-20 bg-[#090B0A] text-text-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumbs & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-card hover:bg-surface-elevated border border-border text-xs font-mono text-text-secondary hover:text-text-primary transition-all"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-accent" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Link Copied' : 'Share Case Study'}</span>
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-card hover:bg-surface-elevated border border-border text-xs font-mono text-text-primary transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-background font-mono text-xs font-semibold hover:bg-accent-hover transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Case Study Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-surface-card border border-border text-xs font-mono text-accent">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-text-muted">
              {project.category}
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface-elevated text-text-muted border border-border">
              STATUS: {project.deploymentStatus.toUpperCase().replace('_', ' ')}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight leading-tight">
            {project.fullTitle}
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-4xl font-sans">
            {project.summary}
          </p>

          {/* Key Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-4">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-surface-card border border-border">
                  <div className="text-[11px] font-mono text-text-muted uppercase truncate">
                    {metric.label}
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-accent mt-1">
                    {metric.value}
                  </div>
                  {metric.detail && (
                    <div className="text-[11px] text-text-secondary mt-1 font-sans">
                      {metric.detail}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-surface-card border border-border text-xs font-mono text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Hero Image / Platform Architecture Visual */}
        <div className="rounded-2xl overflow-hidden border border-border bg-surface-card shadow-2xl">
          <img
            src={project.heroImage}
            alt={`${project.title} Interface`}
            className="w-full object-cover max-h-[550px] object-top"
          />
          <div className="p-4 border-t border-border bg-[#090B0A]/80 flex items-center justify-between text-xs font-mono text-text-muted">
            <span>Primary Visual Artifact &bull; {project.title} Architecture & UI</span>
            <span className="text-accent">Verified Engineering Evidence</span>
          </div>
        </div>

        {/* Content Navigation Tabs */}
        <div className="flex border-b border-border overflow-x-auto gap-2">
          {[
            { id: 'overview', label: '01. Problem & Motivation' },
            { id: 'architecture', label: '02. Architecture & Pipeline' },
            { id: 'evaluation', label: '03. Empirical Evaluation' },
            { id: 'engineering', label: '04. Engineering Decisions & Roadmap' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-3 text-xs font-mono whitespace-nowrap transition-all border-b-2 -mb-[1px] ${
                activeTab === tab.id
                  ? 'border-accent text-accent font-semibold'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview, Problem & Motivation */}
        {activeTab === 'overview' && (
          <section className="space-y-10 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="p-8 rounded-2xl bg-surface-card border border-border space-y-4">
                <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-border flex items-center justify-center text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-primary">
                  The Problem Statement
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-sans">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-surface-card border border-border space-y-4">
                <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-border flex items-center justify-center text-accent">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-primary">
                  Engineering Motivation
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-sans">
                  {project.motivation}
                </p>
              </div>

            </div>

            {/* Gallery Screenshots */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-text-primary">
                  Forensic Visual Artifacts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.galleryImages.map((img, idx) => (
                    <div key={idx} className="rounded-xl border border-border bg-surface-card overflow-hidden">
                      <img src={img.url} alt={img.caption} className="w-full h-64 object-cover object-top" />
                      <div className="p-3 bg-surface-elevated border-t border-border text-xs font-mono text-text-secondary">
                        {img.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Tab 2: Architecture & Pipeline */}
        {activeTab === 'architecture' && (
          <section className="space-y-10 animate-fade-in">
            <div className="p-8 rounded-2xl bg-surface-card border border-border space-y-4">
              <h3 className="text-xl font-heading font-bold text-text-primary flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent" />
                <span>Architecture Summary</span>
              </h3>
              <p className="text-base text-text-secondary leading-relaxed font-sans">
                {project.architectureSummary}
              </p>
            </div>

            {/* Architecture Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.architecturePoints.map((point, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-surface-card border border-border space-y-2">
                  <div className="text-xs font-mono text-accent">STREAM 0{idx + 1}</div>
                  <h4 className="text-base font-heading font-bold text-text-primary">
                    {point.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed font-sans">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Detail Breakdowns */}
            {project.technicalDetails && (
              <div className="space-y-6">
                <h3 className="text-xl font-heading font-bold text-text-primary">
                  Implementation Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.technicalDetails.map((detail, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-surface-card border border-border space-y-3">
                      <h4 className="text-sm font-heading font-bold text-accent">
                        {detail.title}
                      </h4>
                      <ul className="space-y-2">
                        {detail.content.map((c, cIdx) => (
                          <li key={cIdx} className="text-xs text-text-secondary leading-relaxed flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1 shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Tab 3: Empirical Evaluation */}
        {activeTab === 'evaluation' && (
          <section className="space-y-10 animate-fade-in">
            <div className="p-8 rounded-2xl bg-surface-card border border-border space-y-4">
              <h3 className="text-xl font-heading font-bold text-text-primary flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-accentAlt" />
                <span>Evaluation Protocol & Methodology</span>
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-sans">
                {project.evaluation.methodology}
              </p>
              {project.evaluation.splits && (
                <div className="p-3 rounded-lg bg-surface-elevated border border-border text-xs font-mono text-accent">
                  PARTITION SPLITS: {project.evaluation.splits}
                </div>
              )}
            </div>

            {/* FINsleuth Interactive Comparison Chart */}
            {project.id === 'finsleuth' && (
              <div className="p-8 rounded-2xl bg-surface-card border border-border space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-heading font-bold text-text-primary">
                    4-Model Comparative Metrics (Untouched Test Split)
                  </h4>
                  <span className="text-xs font-mono text-text-muted">Percentages (%)</span>
                </div>

                <div className="h-80 w-full pt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={finsleuthChartData} margin={{ top: 10, right: 30, left: 0, bottom: 25 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#252D28" />
                      <XAxis dataKey="name" stroke="#9BA69D" tick={{ fontSize: 11 }} interval={0} angle={-10} textAnchor="end" />
                      <YAxis stroke="#9BA69D" tick={{ fontSize: 11 }} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#141A16', borderColor: '#252D28', borderRadius: '8px', color: '#F3F5F2', fontSize: '12px' }}
                      />
                      <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} />
                      <Bar dataKey="precision" name="Precision (%)" fill="#B5F36A" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="recall" name="Recall (%)" fill="#75D6A0" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="f1" name="F1-Score (%)" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Evaluation Results Table */}
            {project.evaluation.resultsTable && (
              <div className="rounded-2xl border border-border overflow-hidden bg-surface-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-surface-elevated text-xs font-mono text-text-muted">
                        {project.evaluation.resultsTable.headers.map((h, idx) => (
                          <th key={idx} className="p-4">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60 text-xs font-mono">
                      {project.evaluation.resultsTable.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx === project.evaluation.resultsTable!.rows.length - 1 ? 'bg-accent/5 font-semibold text-accent' : 'text-text-secondary'}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-4">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Tab 4: Engineering Decisions & Roadmap */}
        {activeTab === 'engineering' && (
          <section className="space-y-10 animate-fade-in">
            
            {/* Challenges Overcome */}
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-bold text-text-primary">
                Technical Challenges & Solutions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.challenges.map((c, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-surface-card border border-border space-y-2">
                    <h4 className="text-sm font-heading font-bold text-text-primary">
                      {c.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans">
                      {c.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Trade-offs & Decisions */}
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-bold text-text-primary">
                Engineering Trade-Offs & Decisions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.engineeringDecisions.map((dec, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-surface-card border border-border space-y-2">
                    <div className="text-xs font-mono text-accent">DECISION 0{idx + 1}</div>
                    <h4 className="text-base font-heading font-bold text-text-primary">
                      {dec.decision}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans">
                      {dec.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Limitations & Future Improvements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              
              <div className="p-6 rounded-2xl bg-surface-card border border-border space-y-3">
                <h4 className="text-base font-heading font-bold text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Current Limitations</span>
                </h4>
                <ul className="space-y-2">
                  {project.limitations.map((lim, idx) => (
                    <li key={idx} className="text-xs text-text-secondary leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400/60 mt-1 shrink-0" />
                      <span>{lim}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-surface-card border border-border space-y-3">
                <h4 className="text-base font-heading font-bold text-accent flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Future Roadmap</span>
                </h4>
                <ul className="space-y-2">
                  {project.futureImprovements.map((imp, idx) => (
                    <li key={idx} className="text-xs text-text-secondary leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1 shrink-0" />
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </section>
        )}

        {/* Bottom Back Button */}
        <div className="pt-8 border-t border-border flex items-center justify-between">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-card hover:bg-surface-elevated border border-border text-xs font-mono text-text-primary transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-background font-mono text-xs font-semibold hover:bg-accent-hover transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Repository Code</span>
            </a>
          )}
        </div>

      </div>
    </article>
  );
};
