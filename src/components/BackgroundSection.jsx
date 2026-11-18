import React from 'react';
import { ShieldAlert, Cpu, CheckCircle2, Award, BookOpen, Layers, Terminal, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

export default function BackgroundSection() {
  const { philosophy, personal } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-28 px-4 border-t border-[#191c28] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="text-xs font-mono text-zinc-500 tracking-wider">
            {philosophy.tag}
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded bg-[#ff1e42]/15 border border-[#ff1e42]/40 text-[#ff1e42] text-[10px] font-mono font-bold tracking-widest uppercase">
              {philosophy.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            {philosophy.title}
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Manifesto Quote (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                I am <span className="text-white font-semibold">{personal.name}</span> — a cybersecurity researcher and autonomous AI systems engineer specializing in{' '}
                <span className="text-[#ff1e42] font-mono font-medium">[Electronics & Communication Engineering]</span> with hands-on VAPT experience across 20+ web applications and APIs.
              </p>

              <p>
                My domain merges offensive penetration testing (VAPT), multi-agent security frameworks, and industrial data intelligence. At{' '}
                <span className="text-white font-semibold">Cyart LLP Tech</span>, I assessed 20+ web applications and APIs following the{' '}
                <span className="text-[#ff1e42] font-mono">[PTES Framework]</span>, systematically discovering and documenting critical flaws including{' '}
                <span className="text-zinc-200 font-mono">XSS, IDOR/BOLA, Auth bypass, and SSRF</span> mapped directly to OWASP, CWE, and CVSS standards.
              </p>

              <p>
                At <span className="text-white font-semibold">Tata Motors Ltd.</span>, I engineered an end-to-end XGBoost machine learning pipeline across 15,000+ vehicle passages and 40+ stations to predict assembly-line time loss (3.94-min MAE, 0.82 R²), leveraging SHAP explainability and interactive heatmaps to reduce downtime by 60%.
              </p>
            </div>

            {/* Red Left-Bordered Manifesto Box (Exact from Video) */}
            <div className="relative p-5 sm:p-6 rounded-r-xl bg-[#0d0f16] border-l-4 border-[#ff1e42] border-t border-r border-b border-[#1b1f2e] shadow-xl">
              <div className="text-[10px] font-mono text-[#ff1e42] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                OPERATIONAL DOGMA // FIRST-PRINCIPLES
              </div>
              <blockquote className="text-base sm:text-lg font-medium text-white italic leading-snug">
                "{philosophy.manifesto}"
              </blockquote>
              <div className="mt-3 flex items-center justify-between text-xs font-mono text-zinc-500 pt-3 border-t border-[#181b28]">
                <span>AUTHOR: SAURAV KUMAR</span>
                <span className="text-[#ff1e42] font-semibold">SECURITY RESEARCH // 24/7</span>
              </div>
            </div>

            {/* Specialization & Standards Strip */}
            <div className="p-4 rounded-xl bg-[#090b10] border border-[#1b2030] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#ff1e42]/10 border border-[#ff1e42]/30 flex items-center justify-center text-[#ff1e42]">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Offensive Security & AI Systems</div>
                  <div className="text-zinc-400 text-[11px]">VAPT • Multi-Agent Automation • Industrial ML</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#131622] border border-[#23293d] text-[#ff1e42] font-bold">
                  OWASP / PTES
                </span>
                <span className="px-2.5 py-1 rounded bg-[#131622] border border-[#23293d] text-emerald-400 font-semibold">
                  CVE / CVSS v3.1
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Core Pillars & Telemetry Tickers (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center justify-between">
              <span>CORE ARCHITECTURAL PILLARS</span>
              <span className="text-[#ff1e42]">3 OF 3 ACTIVE</span>
            </div>

            {philosophy.pillars.map((pillar, idx) => (
              <div
                key={idx}
                onMouseEnter={() => cyberAudio.playBlip(680 + idx * 80)}
                className="p-4 rounded-xl bg-[#0c0e15] border border-[#1d2232] hover:border-[#ff1e42]/50 transition-all duration-200 group relative overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded bg-[#ff1e42]/10 border border-[#ff1e42]/30 flex items-center justify-center text-[10px] font-mono font-bold text-[#ff1e42]">
                      0{idx + 1}
                    </span>
                    <h3 className="text-sm font-bold font-display uppercase tracking-wider text-white group-hover:text-[#ff1e42] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                    {pillar.status}
                  </span>
                </div>
                <p className="mt-2.5 text-xs text-zinc-400 leading-relaxed font-mono">
                  {pillar.desc}
                </p>
                <div className="mt-3 pt-2.5 border-t border-[#161a26] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>METRIC: 100% NOMINAL</span>
                  <span className="text-zinc-400 group-hover:text-white transition-colors flex items-center gap-0.5">
                    DETAILS <ChevronRight className="w-3 h-3 text-[#ff1e42]" />
                  </span>
                </div>
              </div>
            ))}

            {/* Real-time Ticker Simulation Card */}
            <div className="p-3.5 rounded-xl bg-[#07080d] border border-[#1a1e2b] font-mono text-[11px] space-y-2">
              <div className="flex items-center justify-between text-zinc-500 text-[10px] pb-1 border-b border-[#161824]">
                <span>SOC TELEMETRY STREAM</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  CONNECTED
                </span>
              </div>
              <div className="text-zinc-400 flex items-center justify-between">
                <span>&gt; VAPT Framework</span>
                <span className="text-[#ff1e42]">PTES / OWASP Top 10</span>
              </div>
              <div className="text-zinc-400 flex items-center justify-between">
                <span>&gt; SIEM Ecosystem</span>
                <span className="text-cyan-400">Splunk / Wazuh / ELK</span>
              </div>
              <div className="text-zinc-400 flex items-center justify-between">
                <span>&gt; Threat Model</span>
                <span className="text-white">MITRE ATT&CK TTPs</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
