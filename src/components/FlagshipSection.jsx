import React, { useState } from 'react';
import { Shield, Layers, Cpu, Server, Terminal, ExternalLink, Github, CheckCircle, Activity, Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

export default function FlagshipSection() {
  const { flagship } = portfolioData;
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);

  const activeLayer = flagship.featured.layers[activeLayerIndex];

  const handleSelectLayer = (idx) => {
    setActiveLayerIndex(idx);
    cyberAudio.playBlip(700 + idx * 70);
  };

  return (
    <section id="flagship" className="py-20 md:py-28 px-4 border-t border-[#191c28] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="text-xs font-mono text-zinc-500 tracking-wider">
            {flagship.tag}
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded bg-[#ff1e42]/15 border border-[#ff1e42]/40 text-[#ff1e42] text-[10px] font-mono font-bold tracking-widest uppercase">
              {flagship.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            {flagship.title}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-normal">
            {flagship.subtitle}
          </p>
        </div>

        {/* Featured Mega System Card (Exact Style from Video) */}
        <div className="rounded-2xl bg-[#0c0e15] border border-[#23293d] p-6 sm:p-8 relative overflow-hidden shadow-2xl mb-12">
          {/* Ambient red gradient banner at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff1e42] via-rose-500 to-transparent"></div>

          <div className="space-y-6">
            {/* Header / Sub-badge */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-[#ff1e42] font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#ff1e42] animate-ping"></span>
                {flagship.featured.tag}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#ff1e42]/10 border border-[#ff1e42]/30 text-[#ff1e42] text-[11px] font-mono font-bold">
                MCP PROTOCOL MESH
              </span>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight">
                {flagship.featured.title}
              </h3>
              <p className="mt-3 text-zinc-300 text-sm sm:text-base leading-relaxed max-w-4xl font-normal">
                {flagship.featured.desc}
              </p>
            </div>

            {/* Metric Counters Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4 border-y border-[#1c2132]">
              {flagship.featured.stats.map((s, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#08090e] border border-[#191d2c]">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#ff1e42]">
                    {s.value}
                  </div>
                  <div className="text-xs font-mono font-medium text-white mt-1">
                    {s.label}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                    {s.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive 7-Layer Architectural Stack Tabs (From Video) */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-zinc-300 tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#ff1e42]" />
                  7-LAYER ARCHITECTURAL STACK (CLICK TO INSPECT)
                </span>
                <span className="text-[11px] font-mono text-[#ff1e42]">
                  SELECTED: {activeLayer.id}
                </span>
              </div>

              {/* Layer Tab Pills */}
              <div className="flex flex-wrap gap-2">
                {flagship.featured.layers.map((layer, idx) => {
                  const isActive = activeLayerIndex === idx;
                  return (
                    <button
                      key={layer.id}
                      onClick={() => handleSelectLayer(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[#ff1e42] text-white border-[#ff1e42] shadow-[0_0_15px_rgba(255,30,66,0.5)] font-bold'
                          : 'bg-[#0f1118] text-zinc-400 hover:text-white border-[#212638] hover:border-[#ff1e42]/40'
                      }`}
                    >
                      <span className={isActive ? 'text-white' : 'text-[#ff1e42]'}>
                        {layer.id}
                      </span>
                      <span className="hidden sm:inline">
                        {layer.name.replace(`${layer.id}: `, '')}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Active Layer Detail Box */}
              <div className="mt-4 p-5 rounded-xl bg-[#090a10] border border-[#22273b] space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1b1f2e] pb-3">
                  <div>
                    <span className="text-xs font-mono text-[#ff1e42] font-semibold">
                      LAYER {activeLayer.id} // SPECIFICATION
                    </span>
                    <h4 className="text-lg font-bold font-display text-white">
                      {activeLayer.headline}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#ff1e42]/10 border border-[#ff1e42]/30 text-[#ff1e42] font-bold">
                    OPERATIONAL // 100% PASS
                  </span>
                </div>

                <p className="text-sm text-zinc-300 font-mono leading-relaxed">
                  {activeLayer.details}
                </p>

                {/* Specs Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-2">
                  {activeLayer.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-2.5 py-1.5 rounded bg-[#11131c] border border-[#1d2232] text-[11px] font-mono text-zinc-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff1e42]"></span>
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Secondary Flagship Deployments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {flagship.deployments.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => cyberAudio.playBlip(820)}
              className="p-6 rounded-2xl bg-[#0b0d13] border border-[#1d2334] hover:border-[#ff1e42]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top ambient glow bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#ff1e42] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="space-y-4">
                {/* Tag & Badge */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#ff1e42] font-semibold">{project.tag}</span>
                  <span className="px-2 py-0.5 rounded bg-[#151926] border border-[#23293d] text-[10px] text-zinc-400">
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-display text-white group-hover:text-[#ff1e42] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                  {project.desc}
                </p>

                {/* Metric Bullets */}
                <div className="space-y-1.5 pt-2 border-t border-[#181c2b]">
                  {project.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="flex items-center gap-2 text-xs font-mono text-zinc-300"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#ff1e42] shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Tech Stack & Link */}
              <div className="pt-6 mt-4 border-t border-[#181c2b] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#10121a] border border-[#1e2334] text-[10px] font-mono text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => cyberAudio.playBlip(1000)}
                  className="p-2 rounded bg-[#141722] hover:bg-[#ff1e42] text-zinc-300 hover:text-white border border-[#23293d] hover:border-[#ff1e42] transition-all"
                  title="View repository on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
