import React, { useState } from 'react';
import { ArrowRight, Terminal, Shield, Cpu, Activity, Radio, CheckCircle, Crosshair } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';
import profileImg from '../assets/profile.png';

export default function Hero() {
  const { personal, metrics } = portfolioData;

  const [toggles, setToggles] = useState({
    mcpMesh: true,
    autoTriage: true,
    localInference: true,
  });

  const handleToggle = (key) => {
    const updated = !toggles[key];
    setToggles({ ...toggles, [key]: updated });
    cyberAudio.playToggle(updated);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Giant Hollow Outlined Title Header: PORTFOLIO */}
        <div className="w-full flex justify-center mb-6 select-none overflow-hidden">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-extrabold tracking-widest uppercase text-stroke-red text-center font-display leading-none">
            PORTFOLIO
          </h1>
        </div>

        {/* 3-Column / Asymmetric Cyber Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Column 1 (Left): Info & Call to Action (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Telemetry Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ff1e42]/10 border border-[#ff1e42]/30 text-[11px] font-mono text-[#ff1e42] tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1e42] animate-ping"></span>
                {personal.title}
              </div>

              {/* Headline with Cursive Greeting */}
              <div>
                <span className="block font-script text-3xl sm:text-4xl text-zinc-300 font-normal tracking-wide transform -rotate-1 mb-1">
                  {personal.greeting}
                </span>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-white uppercase leading-none">
                  {personal.callsign.replace('.', '')}
                  <span className="text-[#ff1e42]">.</span>
                </h2>
              </div>

              {/* Bio Paragraph */}
              <p className="text-sm md:text-base text-zinc-400 font-normal leading-relaxed max-w-xl">
                {personal.bio}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  onClick={() => cyberAudio.playBlip(1200)}
                  className="px-6 py-3 rounded-md bg-[#ff1e42] hover:bg-[#e01436] text-white font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(255,30,66,0.4)] hover:shadow-[0_0_30px_rgba(255,30,66,0.6)] transform hover:-translate-y-0.5"
                >
                  INITIATE DISPATCH
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#flagship"
                  onClick={() => cyberAudio.playBlip(800)}
                  className="px-6 py-3 rounded-md bg-[#12141c] hover:bg-[#181a24] text-zinc-300 hover:text-white border border-[#262c3e] hover:border-[#ff1e42]/50 font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-2"
                >
                  EXPLORE ARCHITECTURE
                </a>
              </div>
            </div>

            {/* Micro-Metrics Row */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 border-t border-[#1a1e2b]">
              {metrics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded bg-[#0d0e14] border border-[#1a1e2c] flex flex-col justify-between"
                >
                  <span className="text-lg md:text-xl font-bold font-mono text-[#ff1e42]">
                    {item.value}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-tight mt-0.5">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 (Center): Portrait / Noir Avatar Card (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-center">
            <div className="relative w-full max-w-xs group">
              {/* Cyber aesthetic border frame */}
              <div className="absolute -inset-1 bg-gradient-to-b from-[#ff1e42]/60 via-[#ff1e42]/10 to-transparent rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative rounded-xl overflow-hidden bg-[#0a0b10] border border-[#2a2f42] p-2 flex flex-col items-center">
                {/* Photo with high-contrast noir red overlay */}
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={profileImg}
                    alt="Saurav Kumar"
                    className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Crimson ambient backlight & vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ff1e42]/40 via-transparent to-black/30 mix-blend-color-dodge pointer-events-none"></div>
                  <div className="absolute inset-0 border border-[#ff1e42]/30 rounded-lg pointer-events-none"></div>

                  {/* Corner Target Marks */}
                  <div className="absolute top-2 left-2 text-[#ff1e42] font-mono text-[9px] pointer-events-none">
                    + [SEC]
                  </div>
                  <div className="absolute top-2 right-2 text-[#ff1e42] font-mono text-[9px] pointer-events-none">
                    // SEC_OPS
                  </div>
                  <div className="absolute bottom-2 left-2 text-white/80 font-mono text-[9px] bg-black/60 px-1.5 py-0.5 rounded border border-white/10">
                    SYS // VAPT
                  </div>
                  <div className="absolute bottom-2 right-2 text-emerald-400 font-mono text-[9px] bg-black/60 px-1.5 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    READY
                  </div>
                </div>

                {/* Sub-caption below avatar */}
                <div className="w-full mt-3 py-1.5 px-2 bg-[#06070a] rounded border border-[#1b1f2d] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-400 tracking-wider">
                    // CONSCIOUS CALIBRATION:
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#ff1e42] tracking-wider animate-pulse">
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 (Right): Autonomous Core HUD Terminal (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {/* Primary HUD Card */}
            <div className="p-4 rounded-xl bg-[#0c0e14] border border-[#202536] relative overflow-hidden shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#1b1f2d]">
                <div className="flex items-center gap-2">
                  <Crosshair className="w-4 h-4 text-[#ff1e42]" />
                  <span className="font-mono text-xs font-bold uppercase text-white tracking-wider">
                    Autonomous Core
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold">
                  LIVE TELEMETRY
                </span>
              </div>

              {/* Interactive Radar Visualizer */}
              <div className="my-4 relative h-36 rounded-lg bg-[#07080d] border border-[#1a1e2c] flex items-center justify-center overflow-hidden">
                {/* Radar Grid Circles */}
                <div className="absolute w-28 h-28 rounded-full border border-dashed border-[#ff1e42]/20"></div>
                <div className="absolute w-20 h-20 rounded-full border border-[#ff1e42]/30"></div>
                <div className="absolute w-10 h-10 rounded-full border border-[#ff1e42]/40"></div>
                <div className="absolute w-full h-[1px] bg-[#ff1e42]/15"></div>
                <div className="absolute h-full w-[1px] bg-[#ff1e42]/15"></div>

                {/* Sweeping radar scanner */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#ff1e42]/10 to-transparent animate-radar origin-center pointer-events-none"></div>

                {/* Blinking Targets */}
                <div className="absolute top-8 left-12 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#ff1e42] animate-ping"></span>
                  <span className="text-[8px] font-mono text-[#ff1e42]">TARGET_01 [OWASP]</span>
                </div>
                <div className="absolute bottom-6 right-10 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="text-[8px] font-mono text-cyan-400">MCP_BUS [24 SERVERS]</span>
                </div>
                <div className="absolute top-14 right-14 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="text-[8px] font-mono text-emerald-400">SHAP_ENGINE</span>
                </div>

                {/* Center Crosshair */}
                <div className="z-10 w-3 h-3 rounded-full bg-[#ff1e42]/20 border border-[#ff1e42] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                </div>
              </div>

              {/* Toggles & Sub-systems */}
              <div className="space-y-2 pt-1">
                {/* Toggle 1 */}
                <div
                  onClick={() => handleToggle('mcpMesh')}
                  className="flex items-center justify-between p-2 rounded bg-[#10121a] border border-[#1b1f2e] cursor-pointer hover:border-[#ff1e42]/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Radio className="w-3.5 h-3.5 text-[#ff1e42]" />
                    <span className="text-xs font-mono text-zinc-300">MCP Multi-Agent Bus</span>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold transition-all ${
                      toggles.mcpMesh
                        ? 'bg-[#ff1e42]/20 text-[#ff1e42] border border-[#ff1e42]/40'
                        : 'bg-zinc-800 text-zinc-500 border border-zinc-700'
                    }`}
                  >
                    {toggles.mcpMesh ? 'ONLINE' : 'BYPASS'}
                  </span>
                </div>

                {/* Toggle 2 */}
                <div
                  onClick={() => handleToggle('autoTriage')}
                  className="flex items-center justify-between p-2 rounded bg-[#10121a] border border-[#1b1f2e] cursor-pointer hover:border-[#ff1e42]/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs font-mono text-zinc-300">Autonomous Pentest Triage</span>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold transition-all ${
                      toggles.autoTriage
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                        : 'bg-zinc-800 text-zinc-500 border border-zinc-700'
                    }`}
                  >
                    {toggles.autoTriage ? 'ENGAGED' : 'PAUSED'}
                  </span>
                </div>

                {/* Toggle 3 */}
                <div
                  onClick={() => handleToggle('localInference')}
                  className="flex items-center justify-between p-2 rounded bg-[#10121a] border border-[#1b1f2e] cursor-pointer hover:border-[#ff1e42]/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs font-mono text-zinc-300">Local Zero-Cloud Inference</span>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold transition-all ${
                      toggles.localInference
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-zinc-800 text-zinc-500 border border-zinc-700'
                    }`}
                  >
                    {toggles.localInference ? 'ACTIVE' : 'CLOUD'}
                  </span>
                </div>
              </div>
            </div>

            {/* Sub-card: Latency & Spec */}
            <div className="p-3.5 rounded-xl bg-[#0c0e14] border border-[#1a1e2b] flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#ff1e42] animate-pulse" />
                <span className="text-zinc-300 font-semibold">Sub-35ms Event Loops</span>
              </div>
              <span className="text-zinc-500 text-[11px]">24/7 DAEMON</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
