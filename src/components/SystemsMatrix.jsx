import React, { useState } from 'react';
import { ShieldCheck, Bug, Cpu, Database, Award, ArrowUpRight, Filter, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

export default function SystemsMatrix() {
  const { matrix } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All Systems");

  const filteredItems = activeCategory === "All Systems"
    ? matrix.items
    : matrix.items.filter(item => item.category === activeCategory);

  const handleFilter = (cat) => {
    setActiveCategory(cat);
    cyberAudio.playBlip(920);
  };

  return (
    <section id="matrix" className="py-20 md:py-28 px-4 border-t border-[#191c28] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 space-y-2">
          <div className="text-xs font-mono text-zinc-500 tracking-wider">
            {matrix.tag}
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded bg-[#ff1e42]/15 border border-[#ff1e42]/40 text-[#ff1e42] text-[10px] font-mono font-bold tracking-widest uppercase">
              {matrix.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            {matrix.title}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-normal">
            {matrix.subtitle}
          </p>
        </div>

        {/* Filter Category Tabs (From Video) */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {matrix.categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wide transition-all duration-200 border flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#ff1e42] text-white border-[#ff1e42] shadow-[0_0_15px_rgba(255,30,66,0.4)] font-bold'
                    : 'bg-[#0f1118] text-zinc-400 hover:text-white border-[#212638] hover:border-[#ff1e42]/40'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${isActive ? 'bg-black/30 text-white' : 'bg-black/40 text-zinc-500'}`}>
                  {cat === "All Systems"
                    ? matrix.items.length
                    : matrix.items.filter(i => i.category === cat).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Card Grid (Exact from Video) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => cyberAudio.playBlip(780)}
              className="p-5 rounded-xl bg-[#0c0e14] border border-[#1b2130] hover:border-[#ff1e42]/50 hover:bg-[#10131d] transition-all duration-200 flex flex-col justify-between group relative"
            >
              <div className="space-y-3">
                {/* Top Type & Status */}
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#ff1e42] font-semibold flex items-center gap-1.5">
                    {item.type.includes('Bug Bounty') && <Bug className="w-3.5 h-3.5" />}
                    {item.type.includes('Finalist') && <Award className="w-3.5 h-3.5" />}
                    {item.type.includes('Defense') && <ShieldCheck className="w-3.5 h-3.5" />}
                    {item.type}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/40 border border-[#23293c] text-[10px] text-zinc-400 group-hover:border-[#ff1e42]/30 transition-colors">
                    {item.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-[#ff1e42] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                  {item.desc}
                </p>

                {/* Tag Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#08090f] border border-[#1a1f2e] text-[10px] font-mono text-zinc-400 group-hover:text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Latency / Benchmark Strip */}
              <div className="mt-5 pt-3 border-t border-[#181d2a] flex items-center justify-between text-[11px] font-mono">
                <span className="text-zinc-500">BENCHMARK:</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {item.latency}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
