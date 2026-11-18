// Web Audio API ambient cyberpunk synthesizer & futuristic interaction SFX
class CyberAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.droneOsc1 = null;
    this.droneOsc2 = null;
    this.subOsc = null;
    this.filter = null;
    this.lfo = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleAmbience() {
    this.init();
    if (this.isPlaying) {
      this.stopAmbience();
      return false;
    } else {
      this.startAmbience();
      return true;
    }
  }

  startAmbience() {
    if (this.isPlaying) return;

    try {
      const t = this.ctx.currentTime;

      // Filter for warm dark cyberpunk tone
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(320, t);
      this.filter.Q.setValueAtTime(3.5, t);

      // Low frequency drone (D1 ~ 73.42 Hz)
      this.droneOsc1 = this.ctx.createOscillator();
      this.droneOsc1.type = 'sawtooth';
      this.droneOsc1.frequency.setValueAtTime(73.42, t);

      // Detuned fifth drone (A1 ~ 110 Hz)
      this.droneOsc2 = this.ctx.createOscillator();
      this.droneOsc2.type = 'triangle';
      this.droneOsc2.frequency.setValueAtTime(110.2, t);

      // Deep Sub oscillator (36.7 Hz)
      this.subOsc = this.ctx.createOscillator();
      this.subOsc.type = 'sine';
      this.subOsc.frequency.setValueAtTime(36.71, t);

      // LFO for slow breathing filter sweep
      this.lfo = this.ctx.createOscillator();
      this.lfo.frequency.setValueAtTime(0.12, t);
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(140, t);
      this.lfo.connect(lfoGain);
      lfoGain.connect(this.filter.frequency);

      // Individual gain nodes
      const g1 = this.ctx.createGain();
      g1.gain.setValueAtTime(0.04, t);
      const g2 = this.ctx.createGain();
      g2.gain.setValueAtTime(0.05, t);
      const g3 = this.ctx.createGain();
      g3.gain.setValueAtTime(0.07, t);

      this.droneOsc1.connect(g1);
      this.droneOsc2.connect(g2);
      this.subOsc.connect(g3);

      g1.connect(this.filter);
      g2.connect(this.filter);
      g3.connect(this.filter);

      this.filter.connect(this.masterGain);

      this.droneOsc1.start();
      this.droneOsc2.start();
      this.subOsc.start();
      this.lfo.start();

      this.isPlaying = true;
    } catch (e) {
      console.warn("Audio init deferred:", e);
    }
  }

  stopAmbience() {
    if (!this.isPlaying) return;
    try {
      if (this.droneOsc1) { this.droneOsc1.stop(); this.droneOsc1.disconnect(); }
      if (this.droneOsc2) { this.droneOsc2.stop(); this.droneOsc2.disconnect(); }
      if (this.subOsc) { this.subOsc.stop(); this.subOsc.disconnect(); }
      if (this.lfo) { this.lfo.stop(); this.lfo.disconnect(); }
    } catch (e) {
      // Ignored
    }
    this.isPlaying = false;
  }

  // Futuristic click feedback
  playBlip(freq = 880, type = 'sine', duration = 0.06) {
    if (!this.isPlaying && this.isMuted) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t = this.ctx.currentTime;

      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.4, t + duration);

      gain.gain.setValueAtTime(0.035, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + duration);
    } catch (e) {
      // Audio context might need user interaction first
    }
  }

  playToggle(state = true) {
    this.playBlip(state ? 1200 : 640, 'triangle', 0.08);
  }
}

export const cyberAudio = new CyberAudioEngine();
