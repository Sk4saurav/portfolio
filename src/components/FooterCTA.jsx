import React, { useState } from 'react';
import { Mail, Check, Copy, Github, Linkedin, FileText, ArrowUpRight, Terminal, Shield, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

export default function FooterCTA() {
  const { cta, personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(cta.email);
    setCopied(true);
    cyberAudio.playBlip(1400);

    // Subtle particle burst
    try {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#ff1e42', '#ffffff', '#00f0ff'],
        disableForReducedMotion: true,
      });
    } catch (e) {
      // Ignored
    }

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="pt-24 pb-12 px-4 border-t border-[#191c28] relative overflow-hidden bg-[#050608]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#ff1e42]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Main CTA Section (Exact Style from Video 00:45) */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="text-xs font-mono text-zinc-500 tracking-wider">
            {cta.tag}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display text-white tracking-tight leading-tight">
            Let's Architect Something <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#ff1e42]">
              Extraordinary.
            </span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            {cta.subheadline}
          </p>

          {/* Interactive Email Copy Button (Exact from Video) */}
          <div className="pt-4 flex flex-col items-center justify-center">
            <button
              onClick={handleCopyEmail}
              className={`group px-6 py-3.5 rounded-full font-mono text-sm tracking-wider flex items-center gap-3 transition-all duration-300 border shadow-2xl ${
                copied
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.4)]'
                  : 'bg-[#0f1118] border-[#293046] hover:border-[#ff1e42] text-white hover:shadow-[0_0_25px_rgba(255,30,66,0.4)]'
              }`}
            >
              <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Mail className="w-3.5 h-3.5 text-[#ff1e42] group-hover:scale-110 transition-transform" />
                )}
              </div>
              <span className="font-semibold">{cta.email}</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-black/40 text-zinc-400 group-hover:text-white transition-colors">
                {copied ? 'COPIED!' : 'CLICK TO COPY'}
              </span>
            </button>
          </div>

          {/* Connect Pills Grid */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={personal.contact.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => cyberAudio.playBlip(1000)}
              className="px-4 py-2 rounded-xl bg-[#0e1017] border border-[#1f2536] hover:border-[#ff1e42] hover:bg-[#141722] text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-2 group"
            >
              <Github className="w-3.5 h-3.5 text-[#ff1e42]" />
              <span>github.com/{personal.contact.githubHandle}</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={personal.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => cyberAudio.playBlip(1000)}
              className="px-4 py-2 rounded-xl bg-[#0e1017] border border-[#1f2536] hover:border-[#ff1e42] hover:bg-[#141722] text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-2 group"
            >
              <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
              <span>linkedin.com/in/{personal.contact.linkedinHandle}</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={`mailto:${personal.contact.email}`}
              onClick={() => cyberAudio.playBlip(1000)}
              className="px-4 py-2 rounded-xl bg-[#ff1e42]/15 border border-[#ff1e42]/40 hover:bg-[#ff1e42]/25 text-xs font-mono text-[#ff1e42] transition-all flex items-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Direct Dispatch</span>
            </a>
          </div>
        </div>

        {/* System Telemetry Micro-Footer */}
        <div className="mt-20 pt-6 border-t border-[#151824] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              SYSTEM STATUS: 100% NOMINAL
            </span>
            <span className="text-zinc-700">|</span>
            <span>LATENCY: 12ms</span>
          </div>

          <div className="flex items-center gap-2">
            <span>OPERATOR:</span>
            <span className="text-zinc-300 font-bold">SAURAV KUMAR</span>
            <span className="text-zinc-600">//</span>
            <span className="text-[#ff1e42]">SECURITY ARCHITECT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
