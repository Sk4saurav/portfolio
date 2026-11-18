import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Shield, Menu, X, ArrowUpRight } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

export default function Navbar({ activeAudio, setActiveAudio }) {
  const [time, setTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' UTC'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAudioToggle = () => {
    const newState = cyberAudio.toggleAmbience();
    setActiveAudio(newState);
    cyberAudio.playToggle(newState);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Flagship', href: '#flagship' },
    { name: 'Matrix', href: '#matrix' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-xl px-4 py-2.5 flex items-center justify-between border ${
          scrolled
            ? 'bg-[#08090e]/90 backdrop-blur-md border-[#23283a] shadow-2xl shadow-black/80'
            : 'bg-[#0c0e14]/70 backdrop-blur-sm border-[#1c202e]'
        }`}
      >
        {/* Left: System Status & Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={() => cyberAudio.playBlip(980)}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative w-7 h-7 rounded border border-[#ff1e42]/50 bg-[#ff1e42]/10 flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="w-2 h-2 rounded-full bg-[#ff1e42] animate-pulse"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold tracking-wider text-white group-hover:text-[#ff1e42] transition-colors">
                SAURAV.SYS
              </span>
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-tight flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                ACTIVE // 12ms
              </span>
            </div>
          </a>
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 bg-[#12141c]/60 p-1 rounded-lg border border-[#1f2333]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => cyberAudio.playBlip(750)}
              className="px-3.5 py-1 text-xs font-mono tracking-wide text-zinc-400 hover:text-white hover:bg-[#ff1e42]/10 hover:border-[#ff1e42]/30 rounded transition-all duration-150"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Audio Toggle & UTC Clock & Action */}
        <div className="flex items-center gap-3">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={handleAudioToggle}
            className={`flex items-center gap-2 px-2.5 py-1 rounded text-[11px] font-mono tracking-wider transition-all duration-200 border ${
              activeAudio
                ? 'bg-[#ff1e42]/15 border-[#ff1e42] text-[#ff1e42] shadow-[0_0_15px_rgba(255,30,66,0.35)]'
                : 'bg-[#12141c] border-[#252a3b] text-zinc-400 hover:text-zinc-200 hover:border-zinc-600'
            }`}
            title="Toggle cyber ambient audio & synthesizer"
          >
            {activeAudio ? (
              <div className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 h-3 bg-[#ff1e42] animate-[pulse_0.4s_ease-in-out_infinite]"></span>
                <span className="w-0.5 h-2 bg-[#ff1e42] animate-[pulse_0.6s_ease-in-out_infinite_0.1s]"></span>
                <span className="w-0.5 h-3 bg-[#ff1e42] animate-[pulse_0.5s_ease-in-out_infinite_0.2s]"></span>
              </div>
            ) : (
              <VolumeX className="w-3.5 h-3.5 opacity-60" />
            )}
            <span className="text-[10px] font-bold">
              AUDIO [{activeAudio ? 'ON' : 'OFF'}]
            </span>
          </button>

          {/* UTC Clock */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0a0b10] border border-[#1a1e2b] text-[10px] font-mono text-zinc-400">
            <span className="text-[#ff1e42]">SYS</span>
            <span className="text-zinc-500">|</span>
            <span>{time || '00:00:00 UTC'}</span>
          </div>

          {/* Connect Button */}
          <a
            href="#contact"
            onClick={() => cyberAudio.playBlip(1100)}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-[#ff1e42] text-white hover:bg-[#e01436] rounded text-xs font-mono font-medium tracking-wide transition-all duration-150 shadow-[0_0_15px_rgba(255,30,66,0.4)]"
          >
            DISPATCH
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => {
              cyberAudio.playBlip(600);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-1.5 rounded bg-[#151722] border border-[#24293a] text-zinc-300"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 bg-[#0a0c12]/95 border border-[#23283a] rounded-xl p-4 shadow-2xl backdrop-blur-xl md:hidden flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                cyberAudio.playBlip(750);
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 text-sm font-mono text-zinc-300 hover:text-white hover:bg-[#ff1e42]/10 rounded border border-transparent hover:border-[#ff1e42]/30 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => {
              cyberAudio.playBlip(1100);
              setMobileMenuOpen(false);
            }}
            className="mt-2 w-full text-center py-2 bg-[#ff1e42] text-white rounded font-mono text-xs font-bold"
          >
            INITIATE DISPATCH →
          </a>
        </div>
      )}
    </header>
  );
}
