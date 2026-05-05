class SoundEngine {
  private ctx: AudioContext | null = null;
  private isEnabled = false;
  private masterGain: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Master output - completely dry, no echo, no delay
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.8;
      this.masterGain.connect(this.ctx.destination);

      // Pre-generate white noise buffer for tactile pops and clicks
      this.generateNoise();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private generateNoise() {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2; // 2 seconds of noise
    this.noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = this.noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
  }

  enable() {
    this.isEnabled = true;
    this.init();
    this.playStartup();
  }

  disable() {
    this.isEnabled = false;
  }

  getEnabled() { return this.isEnabled; }

  // 1. Dust Speck (Hover): Microscopic pop/crackle (Standard Link)
  playHover() {
    if (!this.isEnabled || !this.ctx || !this.noiseBuffer) return;
    const t = this.ctx.currentTime;
    
    const noiseSrc = this.ctx.createBufferSource();
    noiseSrc.buffer = this.noiseBuffer;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 8000;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.015, t + 0.002);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.015); // <15ms decay

    noiseSrc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain!);

    noiseSrc.start(t);
    noiseSrc.stop(t + 0.02);
  }

  // 1b. Textured Grille (Heavy Hover): Deeper rustle
  playHoverHeavy() {
    if (!this.isEnabled || !this.ctx || !this.noiseBuffer) return;
    const t = this.ctx.currentTime;
    
    const noiseSrc = this.ctx.createBufferSource();
    noiseSrc.buffer = this.noiseBuffer;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1500;
    filter.Q.value = 0.5;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.025, t + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04); 

    noiseSrc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain!);

    noiseSrc.start(t);
    noiseSrc.stop(t + 0.05);
  }

  // 1c. Tactile Flutter (Scanner Hover): Fast zipper/card flip
  playScan() {
    if (!this.isEnabled || !this.ctx || !this.noiseBuffer) return;
    const t = this.ctx.currentTime;
    
    for (let i = 0; i < 4; i++) {
        const noiseSrc = this.ctx.createBufferSource();
        noiseSrc.buffer = this.noiseBuffer;
        
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 3000 + (i * 500); 
        filter.Q.value = 1.5;

        const gain = this.ctx.createGain();
        const start = t + (i * 0.015); // 15ms apart
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.04, start + 0.002);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.012);

        noiseSrc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain!);

        noiseSrc.start(start);
        noiseSrc.stop(start + 0.02);
    }
  }

  // 2. Matte Glass Tap (Click): Pure dry percussive element
  playClick() {
    if (!this.isEnabled || !this.ctx || !this.noiseBuffer) return;
    const t = this.ctx.currentTime;
    
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, t);
    osc.frequency.exponentialRampToValueAtTime(40, t + 0.03); 
    
    oscGain.gain.setValueAtTime(0, t);
    oscGain.gain.linearRampToValueAtTime(0.3, t + 0.002);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
    
    osc.connect(oscGain);
    oscGain.connect(this.masterGain!);
    osc.start(t);
    osc.stop(t + 0.05);

    const noiseSrc = this.ctx.createBufferSource();
    noiseSrc.buffer = this.noiseBuffer;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 4000;
    filter.Q.value = 0.5;

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0, t);
    noiseGain.gain.linearRampToValueAtTime(0.1, t + 0.001);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.02); 

    noiseSrc.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain!);
    
    noiseSrc.start(t);
    noiseSrc.stop(t + 0.03);
  }

  // 2b. Industrial Toggle (Heavy Click): Deeper chunk
  playClickHeavy() {
    if (!this.isEnabled || !this.ctx || !this.noiseBuffer) return;
    const t = this.ctx.currentTime;
    
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, t);
    osc.frequency.exponentialRampToValueAtTime(20, t + 0.05); 
    
    oscGain.gain.setValueAtTime(0, t);
    oscGain.gain.linearRampToValueAtTime(0.5, t + 0.002);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
    
    osc.connect(oscGain);
    oscGain.connect(this.masterGain!);
    osc.start(t);
    osc.stop(t + 0.1);

    const noiseSrc = this.ctx.createBufferSource();
    noiseSrc.buffer = this.noiseBuffer;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 2000;

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0, t);
    noiseGain.gain.linearRampToValueAtTime(0.2, t + 0.001);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.04); 

    noiseSrc.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain!);
    
    noiseSrc.start(t);
    noiseSrc.stop(t + 0.05);
  }

  // 3. Amplifier Thump (Startup): Physical relay + power surge
  playStartup() {
    if (!this.isEnabled || !this.ctx || !this.noiseBuffer) return;
    const t = this.ctx.currentTime;
    
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, t);
    osc.frequency.exponentialRampToValueAtTime(20, t + 0.1);
    
    oscGain.gain.setValueAtTime(0, t);
    oscGain.gain.linearRampToValueAtTime(0.5, t + 0.01);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
    
    osc.connect(oscGain);
    oscGain.connect(this.masterGain!);
    osc.start(t);
    osc.stop(t + 0.2);

    const noiseSrc = this.ctx.createBufferSource();
    noiseSrc.buffer = this.noiseBuffer;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1200; 
    
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0, t);
    noiseGain.gain.linearRampToValueAtTime(0.03, t + 0.05);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    
    noiseSrc.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain!);
    
    noiseSrc.start(t);
    noiseSrc.stop(t + 0.4);
  }

  // 4a. Muted Block (Form Success): Wooden/clave organic notification
  playSuccess() {
    if (!this.isEnabled || !this.ctx) return;
    const t = this.ctx.currentTime;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.exponentialRampToValueAtTime(400, t + 0.05); 
    
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.4, t + 0.002);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15); 
    
    osc.connect(gain);
    gain.connect(this.masterGain!);
    osc.start(t);
    osc.stop(t + 0.2);

    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(1200, t);
    osc2.frequency.exponentialRampToValueAtTime(600, t + 0.03);
    
    gain2.gain.setValueAtTime(0, t);
    gain2.gain.linearRampToValueAtTime(0.1, t + 0.001);
    gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    
    osc2.connect(gain2);
    gain2.connect(this.masterGain!);
    osc2.start(t);
    osc2.stop(t + 0.1);
  }

  // 4b. Deadbolt (Override Unlock): Double metallic clack-SNAP
  playUnlock() {
    if (!this.isEnabled || !this.ctx || !this.noiseBuffer) return;
    const t = this.ctx.currentTime;
    
    [0, 0.08].forEach((offset, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(i === 0 ? 100 : 250, t + offset);
        osc.frequency.exponentialRampToValueAtTime(20, t + offset + 0.03);
        
        gain.gain.setValueAtTime(0, t + offset);
        gain.gain.linearRampToValueAtTime(0.15, t + offset + 0.002);
        gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.05);
        
        osc.connect(gain);
        gain.connect(this.masterGain!);
        osc.start(t + offset);
        osc.stop(t + offset + 0.06);

        const noiseSrc = this.ctx.createBufferSource();
        noiseSrc.buffer = this.noiseBuffer;
        
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = i === 0 ? 2000 : 5000;
        filter.Q.value = 1.0;

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0, t + offset);
        noiseGain.gain.linearRampToValueAtTime(0.2, t + offset + 0.001);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.03);

        noiseSrc.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(this.masterGain!);
        
        noiseSrc.start(t + offset);
        noiseSrc.stop(t + offset + 0.04);
    });
  }

  // 5. Relay Switch (Typing): Randomized mechanism snapping
  playTyping() {
    if (!this.isEnabled || !this.ctx || !this.noiseBuffer) return;
    const t = this.ctx.currentTime;
    
    const noiseSrc = this.ctx.createBufferSource();
    noiseSrc.buffer = this.noiseBuffer;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1000 + (Math.random() * 4000); 
    filter.Q.value = 1.0;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.05 + (Math.random() * 0.05), t + 0.001);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.015); 
    
    noiseSrc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain!);
    
    noiseSrc.start(t);
    noiseSrc.stop(t + 0.02);
  }

  // 5b. Spring Charge (Authorization Hold): Fast winding gear
  playCharge() {
    if (!this.isEnabled || !this.ctx || !this.noiseBuffer) return;
    const t = this.ctx.currentTime;
    
    const noiseSrc = this.ctx.createBufferSource();
    noiseSrc.buffer = this.noiseBuffer;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 6000;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.08, t + 0.001);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.01); 
    
    noiseSrc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain!);
    
    noiseSrc.start(t);
    noiseSrc.stop(t + 0.02);
  }
}

export const soundEngine = new SoundEngine();
