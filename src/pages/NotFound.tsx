import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-[#090B0A] text-text-primary">
      <div className="w-14 h-14 rounded-2xl bg-surface-card border border-border flex items-center justify-center text-accent mb-6">
        <Terminal className="w-7 h-7" />
      </div>

      <div className="inline-block px-3 py-1 rounded-full bg-surface-card border border-border text-xs font-mono text-accent mb-3">
        ERROR 404
      </div>

      <h1 className="text-3xl sm:text-5xl font-heading font-bold mb-4 tracking-tight">
        Endpoint Not Found
      </h1>

      <p className="text-text-secondary text-sm sm:text-base max-w-md mb-8 font-sans leading-relaxed">
        The requested URL path does not exist on this server. The link may be broken or the resource has moved.
      </p>

      <Link
        to="/"
        className="px-6 py-2.5 rounded-lg bg-accent text-background font-mono text-xs font-semibold hover:bg-accent-hover transition-all inline-flex items-center gap-2 shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
};
