import React, { useState } from 'react';
import { profile } from '../data/profile';
import { SectionHeading } from './SectionHeading';
import { Github, Linkedin, Mail, MessageSquare, Copy, Check, ArrowUpRight, Send, Terminal } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedLinkedIn, setCopiedLinkedIn] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedDraft, setCopiedDraft] = useState(false);

  const handleCopyLinkedIn = () => {
    navigator.clipboard.writeText(profile.linkedinUrl);
    setCopiedLinkedIn(true);
    setTimeout(() => setCopiedLinkedIn(false), 2000);
  };

  const handleCopyEmail = () => {
    if (profile.email) {
      navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    if (profile.email) {
      const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(subject || 'Engineering Collaboration')}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoUrl;
    } else {
      const textToCopy = `Subject: ${subject || 'Engineering Opportunity'}\n\n${message}`;
      navigator.clipboard.writeText(textToCopy);
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-[#F7F4D5]/15 bg-[#0A3323] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 05"
          tag="GET IN TOUCH"
          title="Let's Connect."
          subtitle="I am actively looking for software engineering, AI/ML engineering, and data science opportunities, internships, and technical collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Connection Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* LinkedIn Primary Card */}
            <div className="p-6 md:p-7 rounded-2xl bg-[#105666] border border-[#F7F4D5]/15 hover:border-[#839958] transition-all space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#0A3323] border border-[#F7F4D5]/15 flex items-center justify-center text-[#839958]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0A3323] text-[#839958] border border-[#839958]/30 font-bold">
                  RECOMMENDED
                </span>
              </div>

              <div>
                <h4 className="text-lg font-heading font-bold text-[#F7F4D5]">
                  LinkedIn Professional Profile
                </h4>
                <p className="text-xs text-[#F7F4D5]/80 mt-1 leading-relaxed font-sans">
                  Best channel for recruiter outreach, technical networking, and professional dialogue.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs shadow-sm"
                >
                  <span>Open LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyLinkedIn}
                  className="px-3 py-2.5 rounded-lg bg-[#0A3323] hover:bg-[#062217] border border-[#F7F4D5]/20 text-xs font-mono text-[#F7F4D5] transition-colors flex items-center gap-1.5"
                  title="Copy LinkedIn URL"
                >
                  {copiedLinkedIn ? <Check className="w-3.5 h-3.5 text-[#839958]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLinkedIn ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-6 md:p-7 rounded-2xl bg-[#105666] border border-[#F7F4D5]/15 hover:border-[#839958] transition-all space-y-4 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-[#0A3323] border border-[#F7F4D5]/15 flex items-center justify-center text-[#839958]">
                <Github className="w-5 h-5" />
              </div>

              <div>
                <h4 className="text-lg font-heading font-bold text-[#F7F4D5]">
                  GitHub Profile & Code Repositories
                </h4>
                <p className="text-xs text-[#F7F4D5]/80 mt-1 leading-relaxed font-sans">
                  Inspect source code, commit history, pull requests, and ongoing experimental repositories.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs transition-all"
                >
                  <span>Explore @GowdaJeevithKariyappa</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email Status Card */}
            <div className="p-6 rounded-2xl bg-[#105666] border border-[#F7F4D5]/15 space-y-3 shadow-xl">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#839958]" />
                <h4 className="text-sm font-heading font-bold text-[#F7F4D5]">
                  Email Configuration
                </h4>
              </div>

              {profile.email ? (
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0A3323] border border-[#F7F4D5]/15 text-xs font-mono">
                  <span className="text-[#F7F4D5] truncate">{profile.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="ml-2 text-[#839958] hover:underline flex items-center gap-1"
                  >
                    {copiedEmail ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              ) : (
                <div className="p-3.5 rounded-lg bg-[#0A3323] border border-[#F7F4D5]/15 text-xs font-mono text-[#F7F4D5]/70 space-y-1">
                  <p className="text-[#F7F4D5]">
                    Configurable in <code className="text-[#839958]">src/data/profile.ts</code>.
                  </p>
                  <p className="text-[11px] text-[#D3968C]">
                    Direct LinkedIn messaging is currently active and monitored daily.
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Interactive Message Composer (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-[#105666] border border-[#F7F4D5]/15 space-y-6 shadow-xl">
              
              <div className="flex items-center justify-between border-b border-[#F7F4D5]/15 pb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#839958]" />
                  <span className="text-sm font-heading font-semibold text-[#F7F4D5]">
                    Draft a Message
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#D3968C] font-semibold">
                  DIRECT OUTREACH
                </span>
              </div>

              <form onSubmit={handleSendDraft} className="space-y-4">
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-[#F7F4D5]/75 uppercase mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Software Engineering Opportunity / ML Collaboration"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0A3323] border border-[#F7F4D5]/20 focus:border-[#839958] text-sm text-[#F7F4D5] placeholder:text-[#F7F4D5]/40 focus:outline-none transition-colors font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-[#F7F4D5]/75 uppercase mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Jeevith, I came across your portfolio and FINsleuth project..."
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0A3323] border border-[#F7F4D5]/20 focus:border-[#839958] text-sm text-[#F7F4D5] placeholder:text-[#F7F4D5]/40 focus:outline-none transition-colors font-sans resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="btn-primary px-6 py-2.5 rounded-lg text-xs flex items-center gap-2 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{profile.email ? 'Open in Email Client' : 'Copy Message for LinkedIn'}</span>
                  </button>

                  {copiedDraft && (
                    <span className="text-xs font-mono text-[#839958] flex items-center gap-1 font-semibold">
                      <Check className="w-3.5 h-3.5" />
                      <span>Message copied! Paste it in LinkedIn chat.</span>
                    </span>
                  )}
                </div>
              </form>

              <div className="p-3.5 rounded-lg bg-[#0A3323] border border-[#F7F4D5]/15 flex items-start gap-2.5 text-xs text-[#F7F4D5]/75 font-mono">
                <Terminal className="w-4 h-4 text-[#839958] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  No automated email spambots or third-party scraping. Clean, direct communication channels built for transparent peer and recruiter connections.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
