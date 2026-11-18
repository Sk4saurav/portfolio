import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundSection from './components/BackgroundSection';
import FlagshipSection from './components/FlagshipSection';
import SystemsMatrix from './components/SystemsMatrix';
import FooterCTA from './components/FooterCTA';
import BackgroundCanvas from './components/BackgroundCanvas';

export default function App() {
  const [activeAudio, setActiveAudio] = useState(false);

  return (
    <div className="min-h-screen bg-[#060709] text-[#f1f5f9] selection:bg-[#ff1e42] selection:text-white relative overflow-x-hidden scanline-bg">
      {/* Background Interactive Particle Canvas */}
      <BackgroundCanvas />

      {/* Cyber Subtle Grid Pattern */}
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0 opacity-40"></div>

      {/* Top Floating Navbar */}
      <Navbar activeAudio={activeAudio} setActiveAudio={setActiveAudio} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <BackgroundSection />
        <FlagshipSection />
        <SystemsMatrix />
      </main>

      {/* Footer & CTA */}
      <FooterCTA />
    </div>
  );
}
