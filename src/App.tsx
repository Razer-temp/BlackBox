import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { ArrowRight, Plus, ArrowDown, Fingerprint, Lock } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'motion/react';
import { useSound } from './contexts/SoundContext';
import SEO from './components/SEO';

// --- Scroll Spy & Animation Components ---

import { AnimatedSection, HexDumpSeparator } from './components/AnimatedSection';

const SECTIONS = [
  { id: 'hero', name: 'OVERVIEW', theme: 'light' },
  { id: 'intel', name: 'INTELLIGENCE', theme: 'light' },
  { id: 'services', name: 'SERVICES', theme: 'light' },
  { id: 'methodology', name: 'METHODOLOGY', theme: 'light' },
  { id: 'case-studies', name: 'CASE_STUDIES', theme: 'light' },
  { id: 'why-us', name: 'DIRECTIVES', theme: 'dark' },
  { id: 'team', name: 'PERSONNEL', theme: 'light' },
  { id: 'testimonials', name: 'INTERCEPTS', theme: 'light' },
  { id: 'latest-intel', name: 'LATEST_INTEL', theme: 'light' },
  { id: 'contact', name: 'CONTACT', theme: 'dark' }
];

function ScrollSpy() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const activeTheme = SECTIONS.find(s => s.id === activeSection)?.theme || 'light';
  const isDark = activeTheme === 'dark';

  return (
    <div className={`hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col z-50 font-mono text-[10px] tracking-widest transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
      <div className={`absolute left-[3px] top-2 bottom-2 w-[1px] z-0 transition-colors duration-300 ${isDark ? 'bg-white/20' : 'bg-black/10'}`}></div>
      {SECTIONS.map((section, index) => {
        const isActive = activeSection === section.id;
        const num = String(index + 1).padStart(2, '0');
        const inactiveTextClass = isDark ? 'text-white/60 hover:text-white/80' : 'text-black/60 hover:text-black/80';
        const inactiveBorderClass = isDark ? 'border-white/30 group-hover:border-white/60' : 'border-black/30 group-hover:border-black/60';

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`flex items-center gap-4 py-2 relative z-10 transition-colors duration-200 group ${isActive ? 'text-[#FF4500] font-bold' : inactiveTextClass}`}
          >
            <div className={`w-2 h-2 border transition-colors duration-200 ${isActive ? 'bg-[#FF4500] border-[#FF4500]' : `bg-transparent ${inactiveBorderClass}`}`}></div>
            <span className="flex items-center gap-2">
              {isActive && <span className="text-[#FF4500]">&gt;</span>}
              <span>{num}_{section.name}</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}

function Terminal() {
  const [text, setText] = useState('');
  const [step, setStep] = useState(0);
  const fullText = "./blackbox --target=[REDACTED] --mode=full";

  useEffect(() => {
    if (step === 0) {
      let i = 0;
      const interval = setInterval(() => {
        setText(fullText.slice(0, i + 1));
        i++;
        if (i >= fullText.length) {
          clearInterval(interval);
          setTimeout(() => setStep(1), 600);
        }
      }, 100);
      return () => clearInterval(interval);
    } else if (step > 0 && step < 5) {
      const timer = setTimeout(() => setStep(s => s + 1), 800);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="relative z-10 w-full max-w-[400px] aspect-[4/3] bg-[#111] shadow-2xl rounded-lg border border-black/20 flex flex-col overflow-hidden">
      {/* Terminal Header */}
      <div className="w-full h-8 bg-[#222] border-b border-white/10 flex items-center px-4 gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        <div className="text-[9px] text-white/60 ml-2 uppercase tracking-widest font-mono">root@blackbox:~</div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-xs md:text-sm text-white/80 flex flex-col gap-2 flex-grow">
        <div className="flex">
          <span className="text-[#F26122] mr-2">{'>'}</span>
          <span>{text}{step === 0 && <span className="w-2 h-3 bg-white/70 inline-block ml-1 animate-pulse"></span>}</span>
        </div>

        {step >= 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-1 duration-300">
            <span className="text-green-400">[+]</span> Recon complete. 847 endpoints mapped.
          </div>
        )}

        {step >= 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-1 duration-300">
            <span className="text-green-400">[+]</span> CVE-2024-XXXX identified — CVSS 9.8
          </div>
        )}

        {step >= 3 && (
          <div className="text-[#F26122] animate-in fade-in slide-in-from-bottom-1 duration-300">
            <span className="font-bold animate-pulse">[!] CRITICAL:</span> Domain Admin reachable in 3 hops.
          </div>
        )}

        {step >= 4 && (
          <div className="animate-in fade-in slide-in-from-bottom-1 duration-300">
            <span className="text-yellow-400">[!]</span> Preparing disclosure report...
          </div>
        )}

        {step >= 5 && (
          <div className="flex mt-2">
            <span className="text-[#F26122] mr-2">{'>'}</span>
            <span className="w-2 h-4 bg-white/70 inline-block animate-pulse"></span>
          </div>
        )}
      </div>
    </div>
  );
}

function PayloadHash() {
  const [hash, setHash] = useState("0x8F9A2B4C");
  const [isHovered, setIsHovered] = useState(false);
  const barcodeWidths = [3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2];

  useEffect(() => {
    if (!isHovered) {
      setHash("0x8F9A2B4C");
      return;
    }

    const interval = setInterval(() => {
      const chars = "0123456789ABCDEF";
      let newHash = "0x";
      for (let i = 0; i < 8; i++) {
        newHash += chars[Math.floor(Math.random() * chars.length)];
      }
      setHash(newHash);
    }, 120);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="w-32 bg-white border-2 border-black shadow-[6px_6px_0_0_#111] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0_0_#111] transition-all duration-200 flex flex-col p-3 gap-3 cursor-crosshair"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-sound="scan"
    >
      {/* Barcode */}
      <div className="flex h-8 w-full gap-[2px] items-end justify-between">
        {barcodeWidths.map((w, i) => (
          <div key={i} className="h-full bg-black" style={{ width: `${w}px` }} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#F26122]">
          Payload_
        </div>
        <div className="text-xs font-mono font-bold text-black break-all leading-tight">
          {hash}
        </div>
      </div>
    </div>
  );
}

function OperatorBadge() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-28 bg-white border-2 border-black shadow-[6px_6px_0_0_#111] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0_0_#111] transition-all duration-200 flex flex-col items-center p-2 gap-2 cursor-crosshair relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-sound="scan"
    >
      {/* Keycard Clip Hole */}
      <div className="w-6 h-1.5 bg-[#E0E0E0] border border-black/20 rounded-full mt-1 mb-1"></div>

      {/* Fingerprint / Scanner Area */}
      <div className="w-full aspect-square border-2 border-black/10 bg-black/5 relative flex items-center justify-center overflow-hidden">
        <Fingerprint className="w-12 h-12 text-black/60" strokeWidth={1} />

        {/* Scanning Laser Line */}
        <motion.div
          className="absolute left-0 right-0 h-0.5 bg-[#F26122] shadow-[0_0_8px_2px_rgba(242,97,34,0.5)]"
          initial={{ top: "0%" }}
          animate={{ top: isHovered ? ["0%", "100%", "0%"] : "0%" }}
          transition={{
            duration: 1.5,
            ease: "linear",
            repeat: isHovered ? Infinity : 0
          }}
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>

      {/* ID Text */}
      <div className="w-full flex flex-col gap-1 mt-1">
        <div className="flex justify-between items-center border-b border-black/10 pb-1">
          <span className="text-[7px] font-mono font-bold text-black/60">AUTH:</span>
          <span className="text-[8px] font-mono font-bold text-black">OPR_04</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[7px] font-mono font-bold text-black/60">LEVEL:</span>
          <span className="text-[8px] font-mono font-bold text-[#F26122]">RED</span>
        </div>
      </div>
    </div>
  );
}

function VisualShowcase() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const badge1X = useTransform(mouseXSpring, [-0.5, 0.5], [-40, 40]);
  const badge1Y = useTransform(mouseYSpring, [-0.5, 0.5], [-40, 40]);

  const badge2X = useTransform(mouseXSpring, [-0.5, 0.5], [50, -50]);
  const badge2Y = useTransform(mouseYSpring, [-0.5, 0.5], [50, -50]);

  const bgX = useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]);
  const bgY = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="flex-grow relative border-b border-black/15 p-8 flex items-center justify-center bg-[#E0E0E0] min-h-[400px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
    >
      {/* Background Grid Wrapper - Keeps grid lines contained */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 grid grid-cols-6 grid-rows-6 w-[120%] h-[120%] -left-[10%] -top-[10%]"
          style={{ x: bgX, y: bgY }}
        >
          {[...Array(36)].map((_, i) => (
            <div key={i} className="border-[0.5px] border-black/5"></div>
          ))}
        </motion.div>
      </div>

      {/* Live Terminal Component */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-20 w-full max-w-[400px] flex justify-center"
      >
        <Terminal />
      </motion.div>

      {/* Floating Badges - Now able to break out of the container */}
      <motion.div
        className="absolute top-1/4 -left-12 z-30"
        style={{ x: badge1X, y: badge1Y, rotate: -6 }}
      >
        <PayloadHash />
      </motion.div>
      <motion.div
        className="absolute bottom-24 -right-2 z-30"
        style={{ x: badge2X, y: badge2Y, rotate: 8 }}
      >
        <OperatorBadge />
      </motion.div>
    </div>
  );
}

function ScannerBlock() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="w-full h-full relative"
      style={{
        backgroundColor: isActive ? '#F26122' : 'rgba(0,0,0,0.05)',
        boxShadow: isActive ? '0 0 8px 1px rgba(242,97,34,0.6)' : 'none',
        zIndex: isActive ? 10 : 1,
        transition: isActive ? 'none' : 'background-color 2s ease-out, box-shadow 2s ease-out',
      }}
    />
  );
}

function PortScannerMatrix() {
  const blocks = Array.from({ length: 100 });

  return (
    <div className="flex flex-col items-center gap-2 z-10">
      <div className="text-[8px] font-mono text-black/60 tracking-widest">PORT_SCAN_MATRIX</div>
      <div className="relative w-28 h-28 grid grid-cols-10 grid-rows-10 gap-[1px] bg-black/20 border border-black/30 p-[1px] cursor-crosshair shadow-inner">
        {blocks.map((_, i) => (
          <ScannerBlock key={i} />
        ))}
      </div>
    </div>
  );
}

function AuthorizationOverride() {
  const [isHolding, setIsHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hexCode, setHexCode] = useState("0x000000");
  const { playCharge, playUnlock } = useSound();

  useEffect(() => {
    if (isUnlocked) return;

    let interval: NodeJS.Timeout;
    if (isHolding) {
      interval = setInterval(() => {
        playCharge();
        setProgress((p) => {
          if (p >= 100) {
            setIsUnlocked(true);
            playUnlock();
            return 100;
          }
          return p + 5; // Increased step to compensate for slower interval
        });
      }, 60);
    } else {
      interval = setInterval(() => {
        setProgress((p) => Math.max(0, p - 12));
      }, 60);
    }
    return () => clearInterval(interval);
  }, [isHolding, isUnlocked, playCharge, playUnlock]);

  useEffect(() => {
    if (isHolding && !isUnlocked) {
      const interval = setInterval(() => {
        setHexCode("0x" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, '0'));
      }, 120);
      return () => clearInterval(interval);
    }
  }, [isHolding, isUnlocked]);

  return (
    <button
      type="button"
      data-sound="none"
      aria-label="Authorization Override — click and hold to activate"
      className={`col-span-8 md:col-span-5 border-r border-black/15 p-6 flex flex-col justify-center transition-colors duration-300 select-none cursor-pointer relative overflow-hidden text-left w-full ${isUnlocked ? 'bg-black/5' : isHolding ? 'bg-red-500/10' : 'bg-black/5'}`}
      onMouseDown={() => setIsHolding(true)}
      onMouseUp={() => setIsHolding(false)}
      onMouseLeave={() => setIsHolding(false)}
      onTouchStart={() => setIsHolding(true)}
      onTouchEnd={() => setIsHolding(false)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsHolding(true);
        }
      }}
      onKeyUp={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsHolding(false);
        }
      }}
    >
      {isUnlocked && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-white z-20 pointer-events-none"
        />
      )}

      <div className="font-mono text-[10px] uppercase tracking-widest text-black/60 mb-2 flex items-center gap-2 relative z-10">
        <span className={`w-2 h-2 ${isUnlocked ? 'bg-[#F26122] animate-pulse' : 'bg-red-600'} ${isHolding && !isUnlocked ? 'animate-ping' : ''}`}></span>
        System Status
      </div>

      {isUnlocked ? (
        <div className="font-mono text-xs uppercase tracking-widest text-[#F26122] font-bold relative z-10">
          ALL ENGAGEMENTS AUTHORIZED
        </div>
      ) : (
        <div className="flex flex-col gap-2 relative z-10">
          <div className="font-mono text-xs uppercase tracking-widest text-red-600 font-bold flex justify-between items-center">
            <span>STATUS: UNAUTHORIZED</span>
            <span className="text-[10px] text-red-600/60">{isHolding ? hexCode : '[HOLD TO OVERRIDE]'}</span>
          </div>
          <div className="w-full h-2 border border-black/30 bg-black/5 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-red-600 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </button>
  );
}

function CountUp({ end, decimals = 0, prefix = "", suffix = "", duration = 2000 }: { end: number, decimals?: number, prefix?: string, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

      setCount(end * easeOut);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  const formattedCount = count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

  return <span>{prefix}{formattedCount}{suffix}</span>;
}

function ThreatIntelligenceDashboard() {
  return (
    <AnimatedSection id="intel" number="02" title="INTELLIGENCE" theme="light" className="flex flex-col z-10">
      {/* 1. The Kill Board (Core Stats) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-black/15">

        {/* Stat 1 */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black/15 flex flex-col justify-between group hover:bg-black/5 transition-colors">
          <div className="font-mono text-[10px] uppercase tracking-widest text-black/60 mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-black/30 group-hover:bg-[#F26122] transition-colors"></span>
            0-Days Discovered
          </div>
          <div>
            <div className="font-display text-5xl md:text-6xl font-bold tracking-tighter mb-4">
              <CountUp end={1200} suffix="+" />
            </div>
            <div className="font-mono text-xs text-black/60 leading-relaxed">
              Zero-day vulnerabilities found before threat actors
            </div>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="p-8 md:p-12 border-b md:border-b-0 lg:border-r border-black/15 flex flex-col justify-between group hover:bg-black/5 transition-colors">
          <div className="font-mono text-[10px] uppercase tracking-widest text-black/60 mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-black/30 group-hover:bg-[#F26122] transition-colors"></span>
            Systems Breached
          </div>
          <div>
            <div className="font-display text-5xl md:text-6xl font-bold tracking-tighter mb-4">
              <CountUp end={4800} suffix="+" />
            </div>
            <div className="font-mono text-xs text-black/60 leading-relaxed">
              Authorized red team engagements completed globally
            </div>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black/15 flex flex-col justify-between group hover:bg-black/5 transition-colors">
          <div className="font-mono text-[10px] uppercase tracking-widest text-black/60 mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-black/30 group-hover:bg-[#F26122] transition-colors"></span>
            Bounties Earned
          </div>
          <div>
            <div className="font-display text-5xl md:text-6xl font-bold tracking-tighter mb-4">
              <CountUp end={14.7} decimals={1} prefix="$" suffix="M" />
            </div>
            <div className="font-mono text-xs text-black/60 leading-relaxed">
              In responsible disclosure & bug bounty rewards
            </div>
          </div>
        </div>

        {/* Stat 4 (Highlighted) */}
        <div className="p-8 md:p-12 flex flex-col justify-between group bg-black text-white transition-colors relative overflow-hidden">
          <div className="absolute inset-0 bg-[#F26122] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/60 mb-8 flex items-center gap-2 relative z-10">
            <span className="w-1.5 h-1.5 bg-[#F26122] group-hover:bg-white transition-colors animate-pulse"></span>
            Critical Findings Rate
          </div>
          <div className="relative z-10">
            <div className="font-display text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-[#F26122] group-hover:text-white transition-colors">
              <CountUp end={98} suffix="%" />
            </div>
            <div className="font-mono text-xs text-white/70 leading-relaxed group-hover:text-white transition-colors">
              Of engagements uncover at least one critical-severity flaw
            </div>
          </div>
        </div>

      </div>

      {/* 2. The Active Threat Feed (Scrolling Marquee) */}
      <div className="bg-black text-[#F26122] border-b border-black/15 overflow-hidden flex items-center py-3 relative group cursor-default">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10"></div>

        <motion.div
          className="flex whitespace-nowrap font-mono text-[10px] uppercase tracking-widest"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {/* Double the content for seamless looping */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-4">■</span> Average data breach costs $4.88M in 2024
              <span className="mx-4">——</span>
              <span className="mx-4">■</span> 241 days average time to detect a breach
              <span className="mx-4">——</span>
              <span className="mx-4">■</span> 14% of breaches begin with zero-day exploitation
              <span className="mx-4">——</span>
              <span className="mx-4">■</span> Cyberattacks occur every 39 seconds globally
              <span className="mx-4">——</span>
              <span className="mx-4">■</span> $10.5 trillion annual cost of cybercrime by 2025
              <span className="mx-4">——</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. Clearance Tags (Trust Badges) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-black/15 bg-black/5">
        {['OSCP CERTIFIED', 'CREST APPROVED', 'CVE RESEARCHER', 'MITRE ATT&CK ALIGNED', 'OWASP TOP 10', 'ISO 27001'].map((badge, i) => (
          <div key={i} className="border-r border-b lg:border-b-0 border-black/15 last:border-r-0 p-4 flex items-center justify-center group hover:bg-black transition-colors cursor-crosshair">
            <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-black group-hover:text-white transition-colors text-center">
              [ {badge} ]
            </div>
          </div>
        ))}
      </div>

      {/* 4. The Classified Footer (Micro-copy) */}
      <div className="p-6 md:p-8 flex items-center justify-center bg-[#E5E5E5]">
        <p className="font-mono text-[10px] md:text-xs text-black/60 text-center max-w-3xl uppercase tracking-widest leading-relaxed">
          Every number above was earned through <span className="text-black/80 font-bold">authorized security engagements</span> and <span className="text-black/80 font-bold">red team penetration testing</span> — never simulated, never automated. Real attacks. Real findings.
        </p>
      </div>

    </AnimatedSection>
  );
}

const servicesData = [
  {
    id: '01',
    title: 'Red Team Operations',
    tag: 'APT SIMULATION',
    body: "We don't run scans. We run campaigns. Our red team operators simulate nation-state and organized crime TTPs end-to-end — from initial access through lateral movement, privilege escalation, and data exfiltration. You won't know we're inside until we show you the report.",
    bullets: [
      "Full-scope adversary emulation (MITRE ATT&CK aligned)",
      "APT28, Lazarus, Carbanak TTP simulation",
      "Covert C2 infrastructure deployment",
      "Detection & response gap analysis",
      "Executive + technical debrief"
    ],
    industries: "Financial Services · Defense Contractors · Critical Infrastructure",
    keywords: "red team services, adversary simulation, APT simulation, offensive security firm, red team penetration testing"
  },
  {
    id: '02',
    title: 'Network Penetration Testing',
    tag: 'EXTERNAL & INTERNAL',
    body: "Your network perimeter is only as strong as its weakest misconfiguration. We conduct manual external and internal assessments targeting firewall rules, Active Directory misconfigs, Kerberoasting paths, and lateral movement vectors that automated scanners never touch.",
    bullets: [
      "External network attack surface assessment",
      "Internal network & Active Directory exploitation",
      "Firewall rule and segmentation review",
      "Privilege escalation chain mapping",
      "Wireless network security testing"
    ],
    industries: "Healthcare · Manufacturing · Financial Institutions",
    keywords: "network penetration testing services, internal network pen test, Active Directory security assessment, penetration testing for financial firms, external network security audit"
  },
  {
    id: '03',
    title: 'Application Security Testing',
    tag: 'OWASP / SAST / DAST',
    body: "Web apps, APIs, and mobile — we go beyond the OWASP Top 10. Our manual code review combined with dynamic runtime analysis uncovers logic flaws, broken authentication, IDOR chains, and injection vulnerabilities that automated scanners consistently miss. We find what your developers hoped nobody would notice.",
    bullets: [
      "Web application penetration testing (OWASP Top 10+)",
      "REST & GraphQL API security assessment",
      "Mobile app testing (iOS & Android)",
      "Source code review (SAST)",
      "Business logic flaw exploitation",
      "Authentication & session management bypass"
    ],
    industries: "SaaS Platforms · Fintech · E-commerce · Healthcare Apps",
    keywords: "web application penetration testing, API security testing, OWASP Top 10 assessment, application security audit, mobile app pen test"
  },
  {
    id: '04',
    title: 'Social Engineering',
    tag: 'HUMAN ATTACK VECTOR',
    body: "Your firewall can't stop a well-crafted pretext call. We design and execute targeted phishing campaigns, vishing operations, and physical intrusion attempts that expose how far human vulnerabilities can take a real attacker inside your organization. Spoiler: usually all the way.",
    bullets: [
      "Spear-phishing & whaling campaigns",
      "Vishing (voice phishing) simulations",
      "Smishing (SMS-based attacks)",
      "Physical penetration & tailgating tests",
      "Pretexting & impersonation scenarios",
      "Security awareness gap reporting"
    ],
    industries: "All sectors — the human layer is universal",
    keywords: "social engineering penetration testing, phishing simulation, vishing test, physical penetration testing, employee security awareness testing"
  },
  {
    id: '05',
    title: 'Cloud Security Assessment',
    tag: 'AWS / AZURE / GCP',
    body: "Cloud environments are breached differently than on-prem — and most teams don't know it yet. We attack your AWS, Azure, and GCP configurations across IAM misconfigs, S3/blob exposure, container escape paths, serverless function abuse, and cross-account privilege escalation. We find the blast radius before attackers do.",
    bullets: [
      "IAM misconfiguration & privilege escalation",
      "S3 / Blob storage exposure assessment",
      "Kubernetes & container security testing",
      "Serverless function abuse scenarios",
      "Cloud-to-on-prem lateral movement paths",
      "CI/CD pipeline security review"
    ],
    industries: "SaaS · Tech Startups · Enterprises on AWS/Azure/GCP",
    keywords: "cloud security assessment, AWS penetration testing, Azure security audit, cloud misconfiguration testing, Kubernetes security testing"
  },
  {
    id: '06',
    title: 'Vulnerability Research',
    tag: '0-DAY / CVE RESEARCH',
    body: "This is where we go deeper than any engagement. Our researchers perform binary analysis, firmware reversing, fuzzing, and exploit chaining on your custom software, embedded systems, and third-party products. We've published 23+ CVEs. When we find something, you hear about it before anyone else.",
    bullets: [
      "Binary & firmware reverse engineering",
      "Fuzzing & crash analysis",
      "Zero-day exploit development & chaining",
      "ASLR / DEP bypass techniques",
      "Responsible disclosure support",
      "CVE filing and vendor coordination"
    ],
    industries: "Hardware Manufacturers · ICS/SCADA · Defense · IoT",
    keywords: "zero-day vulnerability research, CVE research firm, exploit development, firmware security testing, binary analysis security, ICS SCADA penetration testing"
  }
];

function ServiceDossierCard({ service }: { service: any, key?: string }) {
  return (
    <div className="group relative overflow-hidden bg-[#E5E5E5] flex flex-col h-full min-h-[420px] cursor-crosshair">
      {/* Default State */}
      <div className="p-8 md:p-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6 gap-4">
          <h3 className="font-display text-2xl font-bold uppercase tracking-tighter leading-none">{service.title}</h3>
          <div className="font-mono text-[9px] uppercase tracking-widest border border-black/30 px-2 py-1 bg-black/5 whitespace-nowrap shrink-0">
            [ {service.tag} ]
          </div>
        </div>
        <p className="font-sans text-sm text-black/70 leading-relaxed mb-6">
          {service.body}
        </p>

        {service.id === '04' && (
          <div className="mt-auto mb-6 bg-[#DC2626] text-white p-4 font-mono text-[10px] uppercase tracking-widest leading-relaxed border-l-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
            <span className="font-bold block mb-1">⚠️ CRITICAL STAT:</span>
            88% of all cyber incidents are caused by human error. Your people are the most exploited attack surface you have.
          </div>
        )}

        <div className={`font-mono text-[10px] text-[#F26122] font-bold flex items-center gap-2 ${service.id !== '04' ? 'mt-auto' : ''}`}>
          <span className="animate-pulse">&gt;</span> VIEW_CAPABILITIES_
        </div>
      </div>

      {/* Hover State (Data Reveal) */}
      <div className="absolute inset-0 bg-[#111] text-[#E5E5E5] p-8 md:p-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col z-10">
        <div className="flex justify-between items-start mb-6 gap-4">
          <h3 className="font-display text-2xl font-bold uppercase tracking-tighter leading-none text-white">{service.title}</h3>
          <div className="font-mono text-[9px] uppercase tracking-widest border border-white/30 px-2 py-1 bg-white/10 text-white whitespace-nowrap shrink-0">
            [ {service.tag} ]
          </div>
        </div>

        <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] mb-4">What's Included:</div>
        <ul className="space-y-3 mb-auto overflow-y-auto pr-2">
          {service.bullets.map((bullet: string, i: number) => (
            <li key={i} className="font-sans text-sm text-white/80 flex items-start gap-2">
              <span className="text-[#F26122] mt-0.5">▸</span> {bullet}
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-6 border-t border-white/15 shrink-0">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2">Target Industries:</div>
          <div className="font-sans text-xs text-white/90 font-medium leading-relaxed">{service.industries}</div>
        </div>

        {/* Hidden SEO Keywords for Crawlers */}
        <div className="sr-only">{service.keywords}</div>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <AnimatedSection id="services" number="03" title="SERVICES" theme="light" className="flex flex-col z-10">
      {/* Header */}
      <div className="p-8 md:p-12 lg:p-20 border-b border-black/15 flex flex-col md:flex-row gap-8 md:gap-16 justify-between items-start md:items-end">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold uppercase leading-[0.85] tracking-tighter">
            Attack Surface.<br />
            <span className="text-[#F26122]">Fully Covered.</span>
          </h2>
        </div>
        <div className="max-w-md font-mono text-xs md:text-sm leading-relaxed text-black/70">
          Six disciplines. One firm. Zero automated scanners. Every engagement is manual, operator-led, and built around your actual threat model.
        </div>
      </div>

      {/* Grid - Using gap-[1px] and bg-black/15 to create perfect 1px borders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-black/15 border-b border-black/15">
        {servicesData.map((service) => {
          const serviceRoutes: Record<string, string> = {
            '01': '/services/red-team',
            '02': '/services/network-penetration-testing',
            '03': '/services/application-security-testing',
            '04': '/services/social-engineering',
            '05': '/services/cloud-security-assessment',
            '06': '/services/vulnerability-research'
          };
          return (
            <Link to={serviceRoutes[service.id] || '#'} key={service.id} className="block group">
              <ServiceDossierCard service={service} />
            </Link>
          );
        })}
      </div>

      {/* CTA */}
      <div className="p-8 md:p-12 lg:p-20 flex flex-col items-center justify-center text-center bg-[#111] text-white">
        <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-4">
          Not sure which service fits your threat model?
        </h3>
        <p className="font-mono text-xs md:text-sm text-white/60 max-w-2xl mb-10 leading-relaxed">
          Book a 30-min scoping call — no commitment, no sales pitch. Just operators who'll tell you exactly what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link to="/scoping-call" className="bg-[#F26122] text-white font-mono text-[10px] uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3">
            [ BOOK A SCOPING CALL ] <ArrowRight className="w-3 h-3" />
          </Link>
          <Link to="/request-audit" className="font-mono text-[10px] uppercase tracking-widest px-8 py-4 border border-white/30 hover:bg-white/10 transition-colors flex items-center justify-center gap-3 group">
            [ DOWNLOAD SERVICE BRIEF PDF ]
            <ArrowDown className="w-3 h-3 transform group-hover:translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}

const methodologyPhases = [
  {
    id: '01',
    label: 'THREAT MODELING',
    title: 'Intelligence & Scoping',
    headline: 'Define the Mission. Map the Target.',
    desc: [
      "Before a single packet is sent, we build a complete intelligence picture of your organization. We conduct threat modeling to identify which adversary groups realistically target your sector — whether that's APT28 for defense contractors, Lazarus Group for financial institutions, or ALPHV for critical infrastructure.",
      "We then establish your Rules of Engagement (RoE), define the crown jewels (what a real attacker would go after), and align the entire engagement to your actual business risk — not a generic checklist."
    ],
    bullets: [
      "Organizational OSINT & attack surface mapping",
      "Adversary group profiling (MITRE ATT&CK threat intel)",
      "Crown jewel identification with stakeholders",
      "Rules of Engagement & legal authorization",
      "Threat model development (TIBER-EU / CBEST aligned)",
      "Success criteria definition with CISO team"
    ],
    frameworks: "MITRE ATT&CK · TIBER-EU · CBEST",
    seo: "red team threat modeling, adversary profiling, MITRE ATT&CK alignment, rules of engagement cybersecurity",
    stat: null
  },
  {
    id: '02',
    label: 'PASSIVE & ACTIVE RECON',
    title: 'Reconnaissance',
    headline: 'We Know More About You Than You Think.',
    desc: [
      "Reconnaissance is where most engagements are already won — or lost. Our operators perform both passive and active intelligence gathering across your digital footprint, employee profiles, infrastructure exposure, and supply chain relationships.",
      "We use the same OSINT tools and techniques as real threat actors — Shodan, Maltego, Recon-ng, Google Dorks, LinkedIn enumeration, certificate transparency logs, and dark web monitoring. You'd be surprised what's already exposed."
    ],
    bullets: [
      "Open Source Intelligence (OSINT) collection",
      "External attack surface enumeration",
      "Employee & executive profiling for SE vectors",
      "Domain, subdomain & certificate transparency analysis",
      "Dark web credential & data leak monitoring",
      "Supply chain & vendor exposure mapping",
      "Network topology fingerprinting"
    ],
    frameworks: "OSINT · Shodan · Maltego · Recon-ng",
    seo: "OSINT red team, external attack surface assessment, passive reconnaissance cybersecurity, dark web monitoring",
    stat: null
  },
  {
    id: '03',
    label: 'BREACH SIMULATION',
    title: 'Initial Access',
    headline: 'Getting In. By Any Means Authorized.',
    desc: [
      "This is where the attack begins. Using intelligence gathered during recon, our operators attempt to gain initial access through the most realistic vectors available — targeted spear-phishing, exploitation of exposed services, credential stuffing from leaked datasets, supply chain abuse, or physical intrusion.",
      "We don't use off-the-shelf phishing kits. Every campaign is hand-crafted, domain-spoofed, and bypass-tested against your email security stack before it ever reaches an inbox."
    ],
    bullets: [
      "Spear-phishing & whaling campaigns (hand-crafted)",
      "Exploitation of external-facing services & apps",
      "VPN / Citrix / RDP zero-day and n-day exploitation",
      "Credential stuffing from breach databases",
      "Supply chain & third-party vendor compromise",
      "Physical intrusion & badge cloning (if in scope)",
      "Watering hole attack simulation"
    ],
    frameworks: "Cyber Kill Chain · Initial Access (TA0001) · MITRE ATT&CK",
    seo: "red team initial access, spear phishing simulation, credential exploitation testing, breach simulation",
    stat: "Identity weaknesses appear in nearly 90% of incident response investigations — with 65% of initial access being identity-driven. We find out exactly which credential is the one that opens your door."
  },
  {
    id: '04',
    label: 'ESCALATION & FOOTHOLD',
    title: 'Privilege Escalation & Persistence',
    headline: 'Inside. Now We Go Deeper.',
    desc: [
      "Once initial access is established, the real work begins. We escalate privileges using the same techniques active threat groups use — Kerberoasting, token impersonation, DCSync attacks, and service misconfiguration abuse.",
      "We also install persistence mechanisms — scheduled tasks, registry modifications, backdoor implants — to simulate the dwell time of a real APT. The average attacker lives in your network for 241 days undetected. We simulate that reality."
    ],
    bullets: [
      "Windows / Linux privilege escalation",
      "Kerberoasting & AS-REP roasting (Active Directory)",
      "Token impersonation & Pass-the-Hash attacks",
      "DCSync & Golden Ticket attacks",
      "Persistence via registry, scheduled tasks, WMI",
      "LSASS credential dumping (Mimikatz techniques)",
      "EDR / AV evasion & living-off-the-land (LOLBAS)"
    ],
    frameworks: "Privilege Escalation (TA0004) · Persistence (TA0003) · Defense Evasion (TA0005)",
    seo: "privilege escalation red team, Active Directory attack simulation, Kerberoasting test, EDR evasion testing",
    stat: "It takes an average of 241 days for security teams to identify and contain a data breach. We compress that timeline into weeks — so you can fix it before a real attacker exploits it."
  },
  {
    id: '05',
    label: 'NETWORK TRAVERSAL',
    title: 'Lateral Movement',
    headline: 'From One Machine to Your Crown Jewels.',
    desc: [
      "Lateral movement reveals how far a real attacker can travel once they're inside. We pivot across network segments, abuse trust relationships between systems, and demonstrate the full blast radius of an initial compromise.",
      "This phase is often the most eye-opening for security teams — because it shows that the problem isn't just one vulnerable server. It's the entire chain of misplaced trust that connects it to your most sensitive data."
    ],
    bullets: [
      "SMB relay & NTLM credential capture",
      "RDP pivoting & remote service exploitation",
      "WMI & PowerShell lateral execution",
      "Pass-the-Ticket (Kerberos) attacks",
      "Cloud-to-on-prem lateral movement paths",
      "Container escape & Kubernetes pivoting",
      "Domain trust abuse & forest traversal"
    ],
    frameworks: "Lateral Movement (TA0008) · MITRE ATT&CK · Cyber Kill Chain",
    seo: "lateral movement simulation, network traversal red team, SMB relay attack test, domain trust abuse",
    stat: null
  },
  {
    id: '06',
    label: 'MISSION COMPLETE',
    title: 'Objective Achievement & Exfiltration',
    headline: 'The Moment That Justifies Everything.',
    desc: [
      "Every engagement has a defined objective — reach the domain controller, access the financial database, exfiltrate customer PII, simulate ransomware deployment. This phase demonstrates whether a real attacker could achieve their goal.",
      "We use covert exfiltration techniques — DNS tunneling, HTTPS staging, encrypted channels — to test whether your DLP, firewall, and SIEM controls would catch data leaving your environment. Usually, they don't."
    ],
    bullets: [
      "Data exfiltration via DNS tunneling & HTTPS",
      "Ransomware deployment simulation (non-destructive)",
      "Domain Admin / Enterprise Admin achievement",
      "Database access & PII exfiltration demo",
      "Business email compromise (BEC) simulation",
      "Cloud storage exfiltration (S3 / Blob / GCS)",
      "SIEM & DLP bypass validation"
    ],
    frameworks: "Exfiltration (TA0010) · Impact (TA0040) · MITRE ATT&CK",
    seo: "data exfiltration simulation, ransomware deployment test, DLP bypass testing, domain admin compromise",
    stat: null
  },
  {
    id: '07',
    label: 'DEBRIEF & ACTION PLAN',
    title: 'Reporting & Remediation',
    headline: 'A Report That Actually Gets Read.',
    desc: [
      "Most red team reports end up in a drawer. Ours don't. We deliver two documents: a technical report for your security team with MITRE ATT&CK mappings, attack chain diagrams, and CVSS-scored findings — and an executive brief for your board that translates technical risk into business impact in plain English.",
      "Every finding is accompanied by a prioritized remediation roadmap: what to fix in 30 days, 90 days, and 6 months. We also include a re-test to verify critical findings are closed."
    ],
    bullets: [
      "Full technical report with MITRE ATT&CK mappings",
      "Executive summary (board-ready, non-technical)",
      "Attack chain narrative & kill chain diagrams",
      "CVSS-scored findings with business impact context",
      "Prioritized remediation roadmap (30/90/180 days)",
      "Detection & response gap analysis",
      "Free re-test of critical findings (90-day window)",
      "Live debrief session with CISO & security team"
    ],
    frameworks: "CVSS 4.0 · MITRE ATT&CK · NIST 800-115",
    seo: "red team report MITRE ATT&CK, penetration test remediation roadmap, CISO security debrief, vulnerability report CVSS",
    stat: null
  }
];

function MethodologySection() {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  const togglePhase = (id: string) => {
    if (activePhase === id) {
      setActivePhase(null);
    } else {
      setActivePhase(id);
    }
  };

  const frameworks = ['MITRE ATT&CK', 'Cyber Kill Chain', 'TIBER-EU', 'PTES', 'OWASP', 'NIST 800-115', 'CBEST'];

  return (
    <AnimatedSection id="methodology" number="04" title="METHODOLOGY" theme="light" className="flex flex-col z-10">
      {/* Header */}
      <div className="p-8 md:p-12 lg:p-20 border-b border-black/15">
        <h2 className="text-5xl md:text-7xl font-bold uppercase leading-[0.85] tracking-tighter mb-8">
          The Playbook<br />
          Real Attackers Use.<br />
          <span className="text-[#F26122]">Legally.</span>
        </h2>
        <p className="max-w-2xl font-mono text-sm md:text-base leading-relaxed text-black/70 mb-12">
          Every Blackbox Labs engagement follows a battle-tested 7-phase methodology aligned to MITRE ATT&CK, the Cyber Kill Chain, and TIBER-EU — the same frameworks used by nation-state threat actors. We don't improvise. We execute.
        </p>

        {/* Loaded Modules (Frameworks) */}
        <div className="flex flex-wrap gap-3">
          {frameworks.map((fw, i) => (
            <div key={i} className="font-mono text-[10px] uppercase tracking-widest border border-black/20 px-3 py-1.5 bg-black/5 text-black/70 flex items-center gap-2">
              <span className="text-[#F26122]">&gt;</span> MODULE_LOADED: {fw.replace(/ /g, '_')}
            </div>
          ))}
        </div>
      </div>

      {/* Accordion */}
      <div className="flex flex-col">
        {methodologyPhases.map((phase) => {
          const isActive = activePhase === phase.id;
          return (
            <div key={phase.id} className={`border-b border-black/15 transition-colors duration-0 ${isActive ? 'bg-[#111] text-white' : 'hover:bg-black/5'}`}>
              <button
                onClick={() => togglePhase(phase.id)}
                className="w-full p-6 md:p-8 lg:px-20 flex items-center justify-between text-left cursor-crosshair"
              >
                <div className="flex items-center gap-6 md:gap-12">
                  <span className={`font-mono text-lg md:text-2xl font-bold ${isActive ? 'text-[#F26122]' : 'text-black/60'}`}>
                    [{phase.id}]
                  </span>
                  <div>
                    <div className={`font-mono text-[10px] uppercase tracking-widest mb-2 ${isActive ? 'text-[#F26122]' : 'text-black/60'}`}>
                      {phase.label}
                    </div>
                    <h3 className="font-display text-xl md:text-3xl font-bold tracking-tighter uppercase">
                      {phase.headline}
                    </h3>
                  </div>
                </div>
                <div className={`font-mono text-2xl md:text-4xl font-light ${isActive ? 'text-[#F26122]' : 'text-black/60'}`}>
                  {isActive ? '-' : '+'}
                </div>
              </button>

              {isActive && (
                <div className="p-6 md:p-8 lg:px-20 pt-0 pb-12 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-200">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
                    {/* Left Col: Description */}
                    <div className="lg:col-span-7 space-y-6">
                      <h4 className="font-display text-xl font-bold uppercase tracking-tighter text-white/50 mb-4">{phase.title}</h4>
                      {phase.desc.map((p, i) => (
                        <p key={i} className="font-sans text-sm md:text-base text-white/80 leading-relaxed">
                          {p}
                        </p>
                      ))}

                      {phase.stat && (
                        <div className="mt-8 bg-[#DC2626] text-white p-6 font-mono text-xs uppercase tracking-widest leading-relaxed border-l-4 border-[#F26122] shadow-[4px_4px_0_rgba(242,97,34,0.5)]">
                          <span className="font-bold block mb-2 text-[#111]">⚠️ CRITICAL INTEL:</span>
                          {phase.stat}
                        </div>
                      )}
                    </div>

                    {/* Right Col: What we do */}
                    <div className="lg:col-span-5">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] mb-6">Execution Parameters:</div>
                      <ul className="space-y-4">
                        {phase.bullets.map((bullet, i) => (
                          <li key={i} className="font-sans text-sm text-white/80 flex items-start gap-3">
                            <span className="text-[#F26122] mt-0.5">▸</span> {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 pt-6 border-t border-white/10">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">Framework Alignment:</div>
                        <div className="font-mono text-xs text-white/70">{phase.frameworks}</div>
                      </div>
                    </div>
                  </div>

                  {/* SEO Keywords (Hidden) */}
                  <div className="sr-only">{phase.seo}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Differentiator Box */}
      <div className="p-8 md:p-12 lg:p-20 bg-[#E5E5E5]">
        <div className="grid grid-cols-1 md:grid-cols-2 border border-black/15 shadow-[8px_8px_0_rgba(0,0,0,1)]">
          <div className="p-8 md:p-12 bg-[#E0E0E0] flex flex-col justify-center">
            <h4 className="font-mono text-[10px] uppercase tracking-widest mb-8 text-black/60">The Industry Standard</h4>
            <ul className="space-y-6 font-sans text-sm md:text-base text-black/60">
              <li className="flex items-start gap-4 line-through decoration-red-500/70 decoration-2">
                <span className="text-red-500 font-bold shrink-0">✗</span> No automated scanners passed off as "testing"
              </li>
              <li className="flex items-start gap-4 line-through decoration-red-500/70 decoration-2">
                <span className="text-red-500 font-bold shrink-0">✗</span> No copy-paste reports from previous engagements
              </li>
              <li className="flex items-start gap-4 line-through decoration-red-500/70 decoration-2">
                <span className="text-red-500 font-bold shrink-0">✗</span> No junior analysts running senior-level playbooks
              </li>
            </ul>
          </div>
          <div className="p-8 md:p-12 bg-[#111] text-white flex flex-col justify-center border-t md:border-t-0 md:border-l border-black/15">
            <h4 className="font-mono text-[10px] uppercase tracking-widest mb-8 text-[#F26122]">The Blackbox Standard</h4>
            <ul className="space-y-6 font-sans text-sm md:text-base text-white/90">
              <li className="flex items-start gap-4">
                <span className="text-[#F26122] font-bold shrink-0">✓</span> 100% manual — every technique is operator-executed
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#F26122] font-bold shrink-0">✓</span> Every engagement mapped to MITRE ATT&CK in real-time
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#F26122] font-bold shrink-0">✓</span> Findings chained to real business impact, not just CVEs
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#F26122] font-bold shrink-0">✓</span> Operators who have done this professionally for 10+ yrs
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section CTA */}
      <div className="p-8 md:p-12 lg:p-20 flex flex-col items-center justify-center text-center bg-black/5 border-t border-black/15">
        <p className="font-mono text-sm md:text-base text-black/80 max-w-2xl mb-8 leading-relaxed">
          Every engagement starts with a conversation.<br />
          Not a sales pitch — a threat model discussion.
        </p>
        <Link to="/scoping-call" data-sound="heavy" className="bg-black text-[#F26122] font-mono text-[10px] uppercase tracking-widest px-8 py-4 hover:bg-[#F26122] hover:text-white transition-colors flex items-center justify-center gap-3">
          <span className="animate-pulse">&gt;</span> BOOK_A_SCOPING_CALL_
        </Link>
      </div>
    </AnimatedSection>
  );
}

const caseStudiesData = [
  {
    id: 'cs-01',
    sector: 'Financial',
    badge: 'CRITICAL · 0-DAY · Financial Services',
    cvss: '9.8',
    cvssLabel: 'CRITICAL',
    title: 'Domain Admin Achieved in 4 Hours — Global Investment Bank',
    clientTag: 'CLIENT-001 · Red Team · 14-Day Engagement',
    description: 'A top-10 global investment bank commissioned a full-scope red team engagement following a third-party security audit that found "no critical issues." Within 4 hours of authorized access, our operators had Domain Admin. Their entire trading infrastructure was reachable.',
    findings: [
      'Unauthenticated SSRF in internal loan portal → AWS metadata credential theft',
      'Kerberoastable service account with Domain Admin membership',
      'Legacy NTLM relay path bypassing MFA on 3 critical systems',
      '17 lateral movement hops to SWIFT transaction server'
    ],
    stats: [
      { value: '4h', label: 'To Domain Admin' },
      { value: '23', label: 'Criticals Found' },
      { value: '$0', label: 'Detected By SOC' }
    ],
    attackChain: 'OSINT recon → SSRF exploit → AWS creds → Kerberoast → Domain Admin → SWIFT access',
    quote: '"Three other firms tested us last year. None of them found what Blackbox found in the first morning." — CISO, Global Investment Bank'
  },
  {
    id: 'cs-02',
    sector: 'Cloud / SaaS',
    badge: 'CRITICAL · Cloud / SaaS',
    cvss: '9.1',
    cvssLabel: 'CRITICAL',
    title: 'Cross-Tenant Data Access — Fortune 500 SaaS Platform',
    clientTag: 'CLIENT-002 · AppSec + Cloud · 21-Day Engagement',
    description: 'A SaaS platform serving 40,000+ enterprise customers had a logic flaw in their multi-tenant API that allowed any authenticated user to access any other tenant\'s data — including Fortune 500 financial records and PII — with a single modified API parameter.',
    findings: [
      'Broken Object Level Authorization (BOLA) across all REST endpoints',
      'AWS S3 bucket misconfiguration exposing 4.2M customer records',
      'GraphQL introspection enabled in production — full schema exposed',
      'JWT algorithm confusion attack bypassing admin authentication'
    ],
    stats: [
      { value: '40K+', label: 'Tenants at Risk' },
      { value: '4.2M', label: 'Records Exposed' },
      { value: '6', label: 'Criticals Found' }
    ],
    attackChain: 'Free trial signup → API param tamper → BOLA exploit → Tenant pivot → Full PII access',
    quote: '"The BOLA finding alone would have cost us $50M+ in GDPR fines. Blackbox found it in week one." — VP Engineering, Fortune 500 SaaS'
  },
  {
    id: 'cs-03',
    sector: 'Critical Infrastructure',
    badge: '0-DAY · CRITICAL · Critical Infrastructure',
    cvss: '10.0',
    cvssLabel: 'CRITICAL',
    title: 'ICS/SCADA Zero-Day — National Energy Operator',
    clientTag: 'CLIENT-003 · OT/ICS Red Team · 30-Day Engagement',
    description: 'A national energy operator running aging SCADA systems commissioned an OT/ICS red team engagement after a regional peer suffered a grid disruption. Our researchers discovered an unauthenticated remote code execution zero-day in their industrial control software — CVE reserved, vendor patched within 90 days.',
    findings: [
      '0-day RCE in SCADA HMI software (CVE reserved — vendor coordinated)',
      'IT/OT network flat — corporate breach = grid control reachable',
      'Default credentials on 34 industrial control devices',
      'Historian server accessible from internet — no authentication'
    ],
    stats: [
      { value: '1', label: '0-Day Discovered' },
      { value: '34', label: 'Default Creds Found' },
      { value: '10.0', label: 'Max Severity' }
    ],
    attackChain: 'Corp network breach → Flat network pivot → SCADA HMI RCE → Grid control access',
    quote: '"A real threat actor with this access could have caused a regional blackout. We had no idea." — Head of OT Security, National Energy Operator'
  },
  {
    id: 'cs-04',
    sector: 'Government / Defense',
    badge: 'HIGH · Government / Defense',
    cvss: '8.7',
    cvssLabel: 'HIGH',
    title: 'Insider Threat Simulation — Defense Contractor',
    clientTag: 'CLIENT-004 · Physical + Social Engineering · 10-Day Engagement',
    description: 'A Tier-1 defense contractor needed to validate their physical and logical access controls against an insider threat scenario. Our operator gained physical access to a classified server room, exfiltrated simulated classified documents, and departed — without being challenged once.',
    findings: [
      'Tailgating through 3 badge-controlled doors — zero challenges from staff',
      'Unlocked workstation in server room — active privileged session',
      'USB data exfiltration — DLP controls bypassed via encrypted container',
      'Help desk vishing — full VPN credentials obtained in 8-minute call'
    ],
    stats: [
      { value: '0', label: 'Challenges Made' },
      { value: '8min', label: 'Vishing to Creds' },
      { value: '3', label: 'Secured Doors Bypassed' }
    ],
    attackChain: 'LinkedIn recon → Pretext creation → Tailgating → Server room entry → USB exfil',
    quote: '"We had what we thought was world-class physical security. Blackbox walked in with a printer repair story." — Security Director, Defense Contractor'
  },
  {
    id: 'cs-05',
    sector: 'Healthcare',
    badge: 'CRITICAL · Healthcare',
    cvss: '9.3',
    cvssLabel: 'CRITICAL',
    title: 'Ransomware Simulation — Regional Hospital Network',
    clientTag: 'CLIENT-005 · Full Red Team · 21-Day Engagement',
    description: 'Following the Change Healthcare ransomware attack that disrupted US hospital operations nationwide, a 12-hospital network commissioned a ransomware simulation. Our team achieved full domain compromise and demonstrated simulated encryption of 40,000+ endpoints — undetected by EDR.',
    findings: [
      'Phishing email → initial foothold in under 6 minutes',
      'EHR system accessible via unpatched Citrix gateway (CVE-2023-4966)',
      'Backup systems on same network — ransomware would destroy all backups',
      'Simulated ransomware deployment to 40K endpoints — EDR missed 100%'
    ],
    stats: [
      { value: '6min', label: 'To Initial Access' },
      { value: '40K', label: 'Endpoints at Risk' },
      { value: '0%', label: 'EDR Detection Rate' }
    ],
    attackChain: 'Phish → foothold → Citrix CVE exploit → Domain Admin → Backup access → Simulated encrypt',
    quote: '"We thought we were prepared after Change Healthcare. We weren\'t. This engagement changed everything." — CIO, Regional Hospital Network'
  },
  {
    id: 'cs-06',
    sector: 'Financial', // Grouping Fintech under Financial for the filter
    badge: 'HIGH · 0-DAY · Fintech',
    cvss: '8.9',
    cvssLabel: 'HIGH',
    title: '$2.3M Simulated Fraud — Payments Platform',
    clientTag: 'CLIENT-006 · AppSec + Red Team · 14-Day Engagement',
    description: 'A Series-C payments startup processing $400M/month asked us to stress-test their fraud prevention before Series-D due diligence. We exploited a race condition in their transaction processing logic to demonstrate $2.3M in fraudulent transactions — the fraud engine flagged none of them.',
    findings: [
      'Race condition in payment processor → double-spend exploit',
      'API rate limiting bypassable via header rotation',
      'Admin panel accessible via IDOR on user ID parameter',
      'Hardcoded AWS credentials in public GitHub repo (live)'
    ],
    stats: [
      { value: '$2.3M', label: 'Simulated Fraud' },
      { value: '0', label: 'Fraud Flags Triggered' },
      { value: '11', label: 'Criticals Found' }
    ],
    attackChain: 'GitHub OSINT → Live AWS creds → Internal API access → Race condition → $2.3M simulated',
    quote: '"Blackbox found what our fraud team, our auditor, and our AWS security review all missed. Before our investors did." — CTO, Series-C Payments Platform'
  }
];

function CaseStudyCard({ study }: { study: any, key?: string }) {
  const [isDecrypted, setIsDecrypted] = useState(false);
  const isCritical = parseFloat(study.cvss) >= 9.0;

  return (
    <div className="flex flex-col bg-white border border-black/15 shadow-[8px_8px_0_rgba(0,0,0,1)] group">
      {/* Top Bar: CVSS & Badge */}
      <div className="flex items-stretch border-b border-black/15">
        <div data-cursor="dark" className={`p-4 md:p-6 flex flex-col justify-center items-center border-r border-black/15 ${isCritical ? 'bg-[#DC2626] text-white' : 'bg-[#F26122] text-white'}`}>
          <div className="font-mono text-[10px] uppercase tracking-widest opacity-80 mb-1">CVSS</div>
          <div className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-none">{study.cvss}</div>
          <div className="font-mono text-[9px] uppercase tracking-widest mt-1 font-bold">{study.cvssLabel}</div>
        </div>
        <div className="p-4 md:p-6 flex flex-col justify-center bg-[#E5E5E5] flex-grow">
          <div className="font-mono text-[10px] uppercase tracking-widest text-black/60 mb-1">ENGAGEMENT_TAG</div>
          <div className="font-mono text-xs md:text-sm font-bold uppercase tracking-tight text-black">
            [ {study.badge} ]
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] mb-3">
          {study.clientTag}
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tighter leading-tight mb-4">
          {study.title}
        </h3>
        <p className="font-sans text-sm text-black/70 leading-relaxed mb-8">
          {study.description}
        </p>

        <div className="font-mono text-[10px] uppercase tracking-widest text-black/60 mb-4 border-b border-black/15 pb-2">
          Key Findings
        </div>
        <ul className="space-y-3 mb-8">
          {study.findings.map((finding: string, i: number) => (
            <li key={i} className="font-sans text-sm text-black/80 flex items-start gap-3">
              <span className="text-[#F26122] mt-0.5">■</span> {finding}
            </li>
          ))}
        </ul>

        {/* Stats Mini-Grid */}
        <div className="grid grid-cols-3 gap-4 border-t border-b border-black/15 py-6 mb-8 bg-black/5 -mx-6 md:-mx-8 px-6 md:px-8">
          {study.stats.map((stat: any, i: number) => (
            <div key={i} className="flex flex-col">
              <div className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-black mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-black/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Decrypt Action */}
        <div className="mt-auto">
          {!isDecrypted ? (
            <button
              onClick={() => setIsDecrypted(true)}
              className="w-full py-4 border border-black text-black font-mono text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <Fingerprint className="w-4 h-4" /> [ DECRYPT AFTER-ACTION REPORT ]
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#111] text-white p-6 border-l-4 border-[#F26122]"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] mb-3 flex items-center gap-2">
                <span className="animate-pulse">_</span> ATTACK_CHAIN_DECRYPTED
              </div>
              <div className="font-mono text-xs text-white/80 leading-relaxed mb-6">
                {study.attackChain.split('→').map((step: string, i: number, arr: any[]) => (
                  <span key={i}>
                    <span className="text-white">{step.trim()}</span>
                    {i < arr.length - 1 && <span className="text-[#F26122] mx-2">→</span>}
                  </span>
                ))}
              </div>
              <div className="border-t border-white/15 pt-4">
                <p className="font-sans italic text-sm text-white/90 leading-relaxed mb-2">
                  {study.quote}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState('All Engagements');
  const filters = ['All Engagements', 'Financial', 'Cloud / SaaS', 'Critical Infrastructure', 'Government / Defense', 'Healthcare'];

  const filteredStudies = activeFilter === 'All Engagements'
    ? caseStudiesData
    : caseStudiesData.filter(study => study.sector === activeFilter);

  return (
    <AnimatedSection id="case-studies" number="05" title="CASE_STUDIES" theme="light" className="flex flex-col z-10">
      {/* Header */}
      <div className="p-8 md:p-12 lg:p-20 border-b border-black/15">
        <h2 className="text-5xl md:text-7xl font-bold uppercase leading-[0.85] tracking-tighter mb-8">
          Proof of Work.<br />
          <span className="text-[#F26122]">Not Promises.</span>
        </h2>
        <p className="max-w-3xl font-mono text-sm md:text-base leading-relaxed text-black/70 mb-12">
          Every engagement below is real — client identities anonymized under NDA. CVSS scores, attack chains, and findings are published with full authorization. We let the findings speak for themselves.
        </p>

        {/* Terminal Filters */}
        <div className="flex flex-wrap gap-2 md:gap-4 bg-black/5 p-4 border border-black/15">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-mono text-[10px] md:text-xs uppercase tracking-widest px-4 py-2 transition-colors ${activeFilter === filter
                ? 'bg-black text-[#F26122]'
                : 'bg-transparent text-black/60 hover:bg-black/10 hover:text-black'
                }`}
            >
              &gt; ./filter --sector={filter.toLowerCase().replace(/ /g, '_').replace(/\//g, '')}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="p-8 md:p-12 lg:p-20 bg-[#E5E5E5]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {filteredStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-black/15 bg-black text-white">
        <div className="p-6 md:p-8 border-r border-b md:border-b-0 border-white/15 flex flex-col justify-center items-center text-center">
          <div className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-[#F26122] mb-2">100%</div>
          <div className="font-mono text-[9px] uppercase tracking-widest text-white/60">Engagements with critical or high severity findings</div>
        </div>
        <div className="p-6 md:p-8 border-r md:border-b-0 border-b border-white/15 flex flex-col justify-center items-center text-center">
          <div className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-[#F26122] mb-2">23+</div>
          <div className="font-mono text-[9px] uppercase tracking-widest text-white/60">CVEs published from engagement research</div>
        </div>
        <div className="p-6 md:p-8 border-r border-white/15 flex flex-col justify-center items-center text-center">
          <div className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-[#F26122] mb-2">6</div>
          <div className="font-mono text-[9px] uppercase tracking-widest text-white/60">Sectors: Finance · Cloud · OT/ICS · Defense · Health · Gov</div>
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center items-center text-center">
          <div className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-[#F26122] mb-2">NDA</div>
          <div className="font-mono text-[9px] uppercase tracking-widest text-white/60">All clients anonymized, full reports available under NDA</div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 md:p-12 lg:p-20 flex flex-col items-center justify-center text-center bg-[#111] text-white">
        <h3 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-4">
          Your industry isn't listed?
        </h3>
        <p className="font-mono text-xs md:text-sm text-white/60 max-w-2xl mb-10 leading-relaxed">
          We've run engagements across 14 verticals. Every threat model is different — let's talk about yours.
        </p>
        <Link to="/request-audit" className="bg-[#F26122] text-white font-mono text-[10px] uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3">
          Request an Audit <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </AnimatedSection>
  );
}

const differentiatorsData = [
  {
    id: 'diff-01',
    num: '01',
    title: 'Real Adversary Emulation (Not Just Scanning)',
    body: 'While many security assessments rely on automated tools, our red team operates like real world attackers — simulating advanced threats, lateral movement, persistence, and strategic objectives across your environment. This approach ensures defensive controls, incident response, and detection capabilities are tested as they would be in the wild — not just as isolated technical checks.',
    seo: 'red team services, adversary emulation, offensive security'
  },
  {
    id: 'diff-02',
    num: '02',
    title: 'Human-Led Offensive Expertise',
    body: 'Our team consists of seasoned offensive security professionals with deep experience in manual exploitation, attack chaining, and stealth operations. These are people who think like attackers, not checkbox testers — bringing a level of creativity and persistence that automated tools simply can’t match.',
    seo: 'offensive security experts, manual attack simulation'
  },
  {
    id: 'diff-03',
    num: '03',
    title: 'Fully Threat-Informed Testing',
    body: 'Every engagement is tailored to your business context, using real threat intelligence and attacker tactics. This means the scenarios we run are not generic: they are built around the actual adversaries likely to target your industry, attack vectors your assets expose, and the strategic risks that matter most to leadership.',
    seo: 'threat-informed red team, attack vector simulation'
  },
  {
    id: 'diff-04',
    num: '04',
    title: 'Framework-Aligned & Industry-Trusted Approaches',
    body: 'Our methodology is rigorously aligned with globally recognized frameworks such as MITRE ATT&CK, ensuring that findings are mapped to real attacker tactics and techniques. This alignment improves clarity in reporting, enhances detection mapping, and helps defense teams better understand where gaps truly lie.',
    seo: 'MITRE ATT&CK red team alignment, cybersecurity frameworks'
  },
  {
    id: 'diff-05',
    num: '05',
    title: 'Actionable, Business-Driven Reporting',
    body: 'We don’t just find vulnerabilities — we translate them into business impact. Reports include clear technical details and executive summaries with prioritized remediation plans so your teams know exactly what to fix first and why it matters to your risk profile.',
    seo: 'red team reporting, actionable vulnerability insights'
  },
  {
    id: 'diff-06',
    num: '06',
    title: 'End-to-End Adversary Mindset Testing',
    body: 'Unlike standard penetration tests that often highlight isolated flaws, Blackbox Labs recreates full attack paths — from initial access and privilege escalation to persistence, lateral movement, and objective achievement. This helps organizations understand how a real attack could unfold, not just where vulnerabilities exist.',
    seo: 'advanced attacker simulation, end-to-end red team engagement'
  }
];

function WhyUsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <AnimatedSection id="why-us" number="06" title="DIRECTIVES" theme="dark" className="flex flex-col z-10">
      {/* Header */}
      <div className="p-8 md:p-12 lg:p-20 border-b border-white/15">
        <h2 className="text-5xl md:text-7xl font-bold uppercase leading-[0.85] tracking-tighter mb-8">
          Why Blackbox Labs<br />
          <span className="text-white">Is Different.</span>
        </h2>
        <p className="max-w-4xl font-mono text-sm md:text-base leading-relaxed text-[#F26122] drop-shadow-[0_0_8px_rgba(242,97,34,0.4)]">
          Blackbox Labs isn't just another cybersecurity provider. We are an elite offensive security firm that emulates real adversaries, tests defenses from the outside-in, and reveals vulnerabilities before malicious attackers exploit them. Our approach goes far beyond traditional scans or check-box assessments — we use real world techniques, threat-informed methods, and seasoned operators to deliver actionable risk insights that strengthen your entire security posture.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/15">
        {differentiatorsData.map((item) => {
          const isHovered = hoveredId === item.id;
          const isDimmed = hoveredId !== null && hoveredId !== item.id;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`bg-[#111] p-8 md:p-12 transition-all duration-300 relative cursor-crosshair flex flex-col ${isDimmed ? 'opacity-30' : 'opacity-100'
                } ${isHovered ? 'z-10 shadow-[0_0_30px_rgba(242,97,34,0.15)]' : 'z-0'}`}
            >
              {/* Target Lock Border */}
              <div
                className={`absolute inset-0 border-2 transition-colors duration-300 pointer-events-none ${isHovered ? 'border-[#F26122]' : 'border-transparent'
                  }`}
              >
                {/* Corner Accents */}
                {isHovered && (
                  <>
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white"></div>
                  </>
                )}
              </div>

              <div
                className={`font-mono text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${isHovered ? 'text-[#F26122]' : 'text-white/50'
                  }`}
              >
                [ {item.num} ]
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tighter mb-4 text-white leading-tight">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-white/60 leading-relaxed mt-auto">
                {item.body}
              </p>

              {/* Hidden SEO Keywords */}
              <div className="sr-only">{item.seo}</div>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}

const teamData = [
  {
    id: 'op-ghost',
    initial: 'G',
    codename: 'Ghost',
    role: 'Head of Red Team Operations',
    bio: 'With over a decade of offensive security experience, Ghost leads complex adversary emulation campaigns across cloud, identity, and enterprise networks. A published contributor to security research and a former lead penetration tester for mission-critical environments, Ghost specializes in advanced attack paths that reveal systemic gaps other testers overlook.',
    credentials: [
      'OSCP, CRTO, GXPN — proving mastery in offensive security and exploit research',
      '50+ enterprise red team engagements completed',
      'Known for uncovering logic flaws and multi-stage attack chains'
    ],
    whyItMatters: 'Ghost’s depth of exposure across environments allows Blackbox Labs to deliver real attack narratives, not surface-level scans.'
  },
  {
    id: 'op-siren',
    initial: 'S',
    codename: 'Siren',
    role: 'Senior Application Security Strategist',
    bio: 'Siren brings a rare blend of manual code review expertise and API logic exploitation skill, focused on uncovering vulnerabilities missed by automated testing. With years of experience assessing complex applications at scale, Siren’s work has led to CVE disclosures, secure development best practices, and high-impact vulnerability research.',
    credentials: [
      'OSCP, GPEN, Web App Sec Specialist',
      'Published CVEs in widespread application software',
      'Deep expertise in Broken Object Level Authorization (BOLA), authentication bypass, and API logic flaws'
    ],
    whyItMatters: 'Application security flaws are among the top vectors exploited in real attacks — and Siren’s deep manual testing delivers value that tools can’t.'
  },
  {
    id: 'op-null',
    initial: 'N',
    codename: 'Null',
    role: 'Network & Cloud Exploitation Lead',
    bio: 'Null is a specialist in network compromise, lateral movement, and cloud security assessment. With extensive experience in offensive cloud operations, Null excels at identifying misconfigurations across AWS, Azure, and GCP, as well as internal network escalation paths that traditional tests overlook.',
    credentials: [
      'Certified OSCP and Cloud Penetration Expert',
      'Lead network penetration tests for major SaaS and enterprise platforms',
      'Regular contributor to community threat research'
    ],
    whyItMatters: 'The cloud is often where defensive assumptions fail — and Null’s expertise ensures those failure points are found before adversaries exploit them.'
  },
  {
    id: 'op-vex',
    initial: 'V',
    codename: 'Vex',
    role: 'Social Engineering & Human Attack Specialist',
    bio: 'Vex leads human factor assessment, designing and executing targeted social engineering engagements that test real-world human vulnerabilities. From spear-phishing and vishing to physical access scenarios, Vex’s simulations reveal how human trust is exploited in real breaches.',
    credentials: [
      'Certified in advanced social engineering operations',
      'Years of experience running phishing campaigns and physical red team tests',
      'Specialized in human-centric threat models'
    ],
    whyItMatters: 'Industry data shows that a majority of breaches begin with human exploitation, making Vex’s role mission-critical for comprehensive security testing.'
  }
];

function OperatorDossierCard({ operator }: { operator: any, key?: string }) {
  return (
    <div className="group relative overflow-hidden bg-white border border-black/15 shadow-[8px_8px_0_rgba(0,0,0,1)] flex flex-col h-full min-h-[420px] cursor-crosshair">
      {/* Default State */}
      <div className="p-8 md:p-10 flex flex-col h-full">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-16 bg-black text-white flex items-center justify-center relative shrink-0">
            <span className="font-display text-3xl font-bold z-10">{operator.initial}</span>
            <Fingerprint className="absolute inset-0 w-full h-full p-2 opacity-20 text-[#F26122]" />
          </div>
          <div>
            <h3 className="font-display text-3xl font-bold uppercase tracking-tighter leading-none mb-2">{operator.codename}</h3>
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] font-bold">
              {operator.role}
            </div>
          </div>
        </div>
        <p className="font-sans text-sm text-black/70 leading-relaxed mb-8">
          {operator.bio}
        </p>
        <div className="mt-auto font-mono text-[10px] text-black/60 font-bold flex items-center gap-2">
          <span className="animate-pulse">&gt;</span> REQUEST_CLEARANCE_
        </div>
      </div>

      {/* Hover State (Clearance Granted) */}
      <div className="absolute inset-0 bg-[#111] text-[#E5E5E5] p-8 md:p-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col z-10">
        <div className="flex items-center justify-between mb-8 border-b border-white/15 pb-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] flex items-center gap-2">
            <span className="w-2 h-2 bg-[#F26122] animate-pulse"></span>
            [ CLEARANCE GRANTED ]
          </div>
          <div className="font-display text-2xl font-bold uppercase tracking-tighter text-white/50">{operator.codename}</div>
        </div>

        <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-4">Verified Credentials:</div>
        <ul className="space-y-3 mb-auto overflow-y-auto pr-2">
          {operator.credentials.map((cred: string, i: number) => (
            <li key={i} className="font-sans text-sm text-white/80 flex items-start gap-2">
              <span className="text-[#F26122] mt-0.5">▸</span> {cred}
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-6 border-t border-white/15 shrink-0 bg-[#111]">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] mb-2">Why This Matters:</div>
          <div className="font-sans text-xs text-white/90 font-medium leading-relaxed">{operator.whyItMatters}</div>
        </div>
      </div>
    </div>
  );
}

function TeamSection() {
  return (
    <AnimatedSection id="team" number="07" title="PERSONNEL" theme="light" className="flex flex-col z-10">
      {/* Header */}
      <div className="p-8 md:p-12 lg:p-20 border-b border-black/15 flex flex-col md:flex-row gap-8 md:gap-16 justify-between items-start md:items-end">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold uppercase leading-[0.85] tracking-tighter">
            Elite Offensive Security<br />
            <span className="text-[#F26122]">Built on Experience, Skill, and Proven Results.</span>
          </h2>
        </div>
        <div className="max-w-md font-mono text-xs md:text-sm leading-relaxed text-black/70">
          Blackbox Labs is powered by a curated team of seasoned offensive cybersecurity professionals — operators who think like attackers, act like defenders, and deliver insights that improve your security posture in measurable ways. Our team blends world-class technical skill with real-world experience and industry-recognized credentials to ensure every engagement uncovers vulnerabilities that matter.
        </div>
      </div>

      {/* Grid */}
      <div className="p-8 md:p-12 lg:p-20 bg-[#E5E5E5]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {teamData.map((operator) => (
            <OperatorDossierCard key={operator.id} operator={operator} />
          ))}
        </div>
      </div>

      {/* Why Our Team Matters (Proof Bar) */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-black/15 bg-white">
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black/15 flex flex-col">
          <h4 className="font-display text-xl font-bold uppercase tracking-tighter mb-4">Real World Skills, Not Checklists</h4>
          <p className="font-sans text-sm text-black/70 leading-relaxed">Our operators are not generic testers — they bring years of real-world experience, deep threat-informed skills, and a mindset that mirrors actual adversaries. Whether it’s network exploitation, logic flaw chaining, or human attack vectors, our team replicates what threat actors really do in live breaches.</p>
        </div>
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black/15 flex flex-col">
          <h4 className="font-display text-xl font-bold uppercase tracking-tighter mb-4">Industry-Recognized Certifications</h4>
          <p className="font-sans text-sm text-black/70 leading-relaxed">Our team members hold respected offensive security credentials like OSCP, GPEN, CRTO, and more — signals of skill that both enterprise CISOs and Google’s search algorithms regard as authority markers.</p>
        </div>
        <div className="p-8 md:p-12 flex flex-col">
          <h4 className="font-display text-xl font-bold uppercase tracking-tighter mb-4">Published Research & Findings</h4>
          <p className="font-sans text-sm text-black/70 leading-relaxed">Several operators have contributed to vulnerability research, including published CVEs and exploit research — a key credibility marker in cybersecurity that demonstrates actual impact and technical mastery.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="p-8 md:p-12 lg:p-20 flex flex-col items-center justify-center text-center bg-[#111] text-white">
        <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-4 max-w-3xl">
          Ready to see how Blackbox Labs can challenge your defenses with real-world attack expertise?
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8">
          <Link to="/contact" data-sound="heavy" className="bg-[#F26122] text-white font-mono text-[10px] uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3">
            [ TALK TO AN OFFENSIVE OPERATOR ] <ArrowRight className="w-3 h-3" />
          </Link>
          <Link to="/request-audit" data-sound="heavy" className="font-mono text-[10px] uppercase tracking-widest px-8 py-4 border border-white/30 hover:bg-white/10 transition-colors flex items-center justify-center gap-3 group">
            [ REQUEST AN AUDIT ]
            <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}

const testimonialsData = [
  {
    id: 't-01',
    fileRef: '0x8F92',
    quoteStart: "Blackbox Labs found what three other red team firms missed in 18 months of testing. They were ",
    quoteHighlight: "inside our core banking system in under 6 hours",
    quoteEnd: ". That finding alone justified 10 years of security budgets.",
    extractedMetric: "TIME TO BREACH < 6 HOURS",
    author: "CISO, Tier-1 European Bank",
    tags: ["FINANCIAL SERVICES", "RED TEAM OPERATION"]
  },
  {
    id: 't-02',
    fileRef: '0x1A4B',
    quoteStart: "We were 90 days from our Series D closing when Blackbox found a ",
    quoteHighlight: "CVSS 9.8 vulnerability that would have ended the deal",
    quoteEnd: ". They found it in week two. We're now a public company. I don't want to think about what happens without that call.",
    extractedMetric: "CRITICAL FINDING: CVSS 9.8 (PRE-IPO)",
    author: "Chief Security Officer, Series D SaaS Platform",
    tags: ["APPLICATION SECURITY", "CLOUD"]
  },
  {
    id: 't-03',
    fileRef: '0x7C33',
    quoteStart: "Our HIPAA auditors had been through our systems three times. Blackbox found a ",
    quoteHighlight: "path to 800,000 patient records in their first week",
    quoteEnd: ". The scariest part? It was completely silent — no logs, no alerts, nothing. That's what a real attacker looks like.",
    extractedMetric: "800,000 RECORDS EXPOSED SILENTLY",
    author: "VP of Information Security, Regional Health Network",
    tags: ["HEALTHCARE", "NETWORK PENETRATION TEST"]
  },
  {
    id: 't-04',
    fileRef: '0x9D21',
    quoteStart: "We brought Blackbox in to simulate APT29. They didn't just simulate it — they ",
    quoteHighlight: "found a zero-day in our asset management software",
    quoteEnd: " that we filed as a CVE with the vendor. That's not a pen test. That's a research-grade engagement.",
    extractedMetric: "ZERO-DAY DISCOVERED & CVE FILED",
    author: "Director of Cybersecurity, Defense Contractor",
    tags: ["DEFENSE / GOV", "VULNERABILITY RESEARCH"]
  },
  {
    id: 't-05',
    fileRef: '0x4E88',
    quoteStart: "I've worked with Bishop Fox, Mandiant, and NCC Group over 20 years in this industry. Blackbox Labs is the ",
    quoteHighlight: "only team that came back with findings that genuinely surprised me",
    quoteEnd: ". That's extremely rare. We've renewed every year since.",
    extractedMetric: "ACTIONABLE FINDINGS POST-NSA AUDIT",
    author: "CISO (Former NSA), Fortune 500 Technology Company",
    tags: ["TECHNOLOGY", "ANNUAL RETAINER"]
  },
  {
    id: 't-06',
    fileRef: '0x2B19',
    quoteStart: "Our employees complete security awareness training quarterly. ",
    quoteHighlight: "67% of our finance team followed social engineering instructions",
    quoteEnd: " from a 'fake IT caller' within the first hour of the test. Blackbox didn't shame us — they fixed us.",
    extractedMetric: "67% COMPROMISE RATE (HUMAN VECTOR)",
    author: "Head of Security Operations, Global Insurance Firm",
    tags: ["INSURANCE", "SOCIAL ENGINEERING"]
  },
  {
    id: 't-07',
    fileRef: '0x5F64',
    quoteStart: "As a founder with a technical background, I thought I knew our attack surface. Blackbox showed me ",
    quoteHighlight: "three critical vulnerabilities in APIs I'd written myself",
    quoteEnd: ". No judgment — just findings, impact, and exactly what to fix. Worth every dollar.",
    extractedMetric: "3 CRITICAL API VULNERABILITIES FOUND",
    author: "CTO & Co-Founder, Fintech Startup (Series B)",
    tags: ["FINTECH", "APPLICATION SECURITY"]
  },
  {
    id: 't-08',
    fileRef: '0x3C77',
    quoteStart: "Other firms give you a PDF report and disappear. Blackbox stayed on a call for 3 hours walking our entire SOC team through the attack chain replay. Our ",
    quoteHighlight: "detection capability went from 6% to 74% in one quarter",
    quoteEnd: " because of that session.",
    extractedMetric: "DETECTION CAPABILITY: +68% INCREASE",
    author: "Security Engineering Lead, Global E-commerce Platform",
    tags: ["E-COMMERCE", "RED TEAM + SOC TRAINING"]
  }
];

const pressMentions = ['Dark Reading', 'Krebs on Security', 'The Hacker News', 'Infosecurity Magazine', 'TechTarget Security', 'DEF CON'];
const awards = ['DEF CON Speaker 2024', 'Black Hat Arsenal 2024', 'CVE Researcher — NVD', 'CREST Approved', 'OSCP Certified Team', 'HackerOne Hall of Fame'];
const industries = ['Financial Services', 'Healthcare', 'Defense & Government', 'SaaS & Technology', 'Cryptocurrency', 'Insurance', 'Critical Infrastructure', 'E-commerce', 'Legal & Professional Services'];

function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonials" number="08" title="INTERCEPTS" theme="light" className="flex flex-col z-10">
      {/* Header */}
      <div className="p-8 md:p-12 lg:p-20 border-b border-black/15 flex flex-col md:flex-row gap-8 md:gap-16 justify-between items-start md:items-end">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold uppercase leading-[0.85] tracking-tighter">
            Trusted By The<br />
            Teams Who Can't<br />
            <span className="text-[#F26122]">Afford to Be Wrong.</span>
          </h2>
        </div>
        <div className="max-w-md font-mono text-xs md:text-sm leading-relaxed text-black/70">
          CISOs. Security Directors. CTOs. The people who stake their careers on who they hire for offensive security. Here's what they said after working with Blackbox Labs.
        </div>
      </div>

      {/* Trust Numbers Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-[#111] text-white border-b border-black/15">
        <div className="p-6 md:p-8 border-r border-b md:border-b-0 border-white/15 flex flex-col justify-center items-center text-center">
          <div className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-[#F26122] mb-2">78</div>
          <div className="font-mono text-[9px] uppercase tracking-widest text-white/60">Net Promoter Score (NPS)</div>
        </div>
        <div className="p-6 md:p-8 border-r md:border-b-0 border-b border-white/15 flex flex-col justify-center items-center text-center">
          <div className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-[#F26122] mb-2">98%</div>
          <div className="font-mono text-[9px] uppercase tracking-widest text-white/60">Critical Finding Rate</div>
        </div>
        <div className="p-6 md:p-8 border-r border-white/15 flex flex-col justify-center items-center text-center">
          <div className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-[#F26122] mb-2">4.9/5</div>
          <div className="font-mono text-[9px] uppercase tracking-widest text-white/60">Client Satisfaction Score</div>
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center items-center text-center">
          <div className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-[#F26122] mb-2">100%</div>
          <div className="font-mono text-[9px] uppercase tracking-widest text-white/60">Engagements Under NDA</div>
        </div>
      </div>

      {/* Intelligence Grid (Testimonials) */}
      <div className="p-8 md:p-12 lg:p-20 bg-[#E5E5E5]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-black/15 flex flex-col relative group hover:border-black transition-colors duration-300 shadow-[4px_4px_0_rgba(0,0,0,1)] cursor-crosshair h-full"
            >
              {/* File ID Tab */}
              <div className="bg-black/5 border-b border-black/15 px-4 py-2 flex justify-between items-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-black/60 font-bold">FILE_REF: {testimonial.fileRef}</span>
                <Fingerprint className="w-3 h-3 text-black/60 group-hover:text-[#F26122] transition-colors duration-300" />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="font-display text-4xl text-[#F26122] leading-none mb-4 opacity-50">"</div>

                <p className="font-sans text-sm md:text-base text-black/80 leading-relaxed mb-8 font-medium transition-colors duration-300 group-hover:text-black/60">
                  {testimonial.quoteStart}
                  <span className="text-black/80 transition-all duration-300 group-hover:text-[#F26122] group-hover:bg-[#F26122]/10 group-hover:px-1 rounded-sm">
                    {testimonial.quoteHighlight}
                  </span>
                  {testimonial.quoteEnd}
                </p>

                <div className="mt-auto">
                  <div className="font-mono text-xs font-bold text-black mb-4">
                    — {testimonial.author}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {testimonial.tags.map((tag, i) => (
                      <span key={i} className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest bg-black/5 px-2 py-1 text-black/60">
                        [ {tag} ]
                      </span>
                    ))}
                  </div>
                </div>

                {/* Extracted Metric Panel (Reveals on Hover) */}
                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-32 group-hover:opacity-100 group-hover:mt-6 transition-all duration-500 ease-in-out border-t border-[#F26122]/30">
                  <div className="pt-4 flex flex-col gap-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#F26122] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#F26122] animate-pulse"></span>
                      EXTRACTED METRIC
                    </span>
                    <span className="font-mono text-xs font-bold text-black bg-[#F26122]/10 px-2 py-1 inline-block w-fit mt-1">
                      {testimonial.extractedMetric}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Authority Rows */}
      <div className="border-t border-b border-black/15 bg-black/5 flex flex-col overflow-hidden">
        {/* Industries */}
        <div className="flex items-center border-b border-black/15">
          <div className="bg-black text-white font-mono text-[10px] uppercase tracking-widest px-6 py-4 shrink-0 z-20 shadow-[4px_0_10px_rgba(0,0,0,0.1)]">
            // INDUSTRIES PROTECTED
          </div>
          <div className="flex-grow overflow-hidden relative flex items-center h-full">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#E5E5E5] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#E5E5E5] to-transparent z-10"></div>
            <motion.div
              className="flex whitespace-nowrap font-mono text-[10px] uppercase tracking-widest text-black/60"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center">
                  {industries.map((ind, j) => (
                    <span key={j} className="flex items-center">
                      <span className="mx-6">{ind}</span>
                      <span className="text-[#F26122]">·</span>
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Press */}
        <div className="flex items-center border-b border-black/15">
          <div className="bg-black text-white font-mono text-[10px] uppercase tracking-widest px-6 py-4 shrink-0 z-20 shadow-[4px_0_10px_rgba(0,0,0,0.1)]">
            // AS FEATURED IN
          </div>
          <div className="flex-grow overflow-hidden relative flex items-center h-full">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#E5E5E5] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#E5E5E5] to-transparent z-10"></div>
            <motion.div
              className="flex whitespace-nowrap font-mono text-[10px] uppercase tracking-widest text-black font-bold"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center">
                  {pressMentions.map((press, j) => (
                    <span key={j} className="mx-4 px-3 py-1 border border-black/20 bg-white/50">
                      [ {press} ]
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Awards */}
        <div className="flex items-center">
          <div className="bg-black text-white font-mono text-[10px] uppercase tracking-widest px-6 py-4 shrink-0 z-20 shadow-[4px_0_10px_rgba(0,0,0,0.1)]">
            // RECOGNITION
          </div>
          <div className="flex-grow overflow-hidden relative flex items-center h-full">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#E5E5E5] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#E5E5E5] to-transparent z-10"></div>
            <motion.div
              className="flex whitespace-nowrap font-mono text-[10px] uppercase tracking-widest text-black font-bold"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 45, repeat: Infinity }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center">
                  {awards.map((award, j) => (
                    <span key={j} className="mx-4 px-3 py-1 border border-black/20 bg-white/50">
                      [ {award} ]
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Quote (The Disruption) */}
      <div className="bg-[#111] text-white p-12 md:p-24 lg:p-32 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="font-display text-8xl md:text-[120px] text-[#F26122] leading-none mb-8 opacity-50 absolute top-8 md:top-16">"</div>
        <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight max-w-5xl relative z-10 mb-12">
          The question isn't whether you've been compromised.<br />
          <span className="text-[#F26122]">The question is whether you know it yet.</span>
        </h3>
        <p className="font-sans text-lg md:text-xl text-white/80 max-w-3xl mb-12 relative z-10">
          Blackbox Labs found the answer for us — 31 days of undetected access. We never would have known.
        </p>
        <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-white/50 relative z-10 flex flex-col items-center gap-2">
          <span className="text-white font-bold">— Group CISO, Multinational Manufacturing Conglomerate</span>
          <span>$8.4B Annual Revenue · FTSE 100</span>
        </div>
      </div>

      {/* Urgency Stat & Final CTA */}
      <div className="p-8 md:p-12 lg:p-20 flex flex-col items-center justify-center bg-[#E5E5E5]">

        <div className="bg-white border-l-4 border-[#DC2626] p-6 md:p-8 shadow-[8px_8px_0_rgba(0,0,0,1)] max-w-3xl mb-16 relative">
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#DC2626] flex items-center justify-center text-white font-bold text-xs">!</div>
          <p className="font-mono text-sm md:text-base leading-relaxed text-black">
            <span className="font-bold text-[#DC2626]">■ 98%</span> of Blackbox Labs engagements uncover at least one critical-severity finding.
            <br /><br />
            The 2% that don't? Those clients request a re-scope within 30 days — because they know we missed something.
          </p>
        </div>

        <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6 text-center max-w-3xl">
          Join the organizations that found their vulnerabilities before the bad guys did.
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8">
          <Link to="/scoping-call" className="bg-black text-[#F26122] font-mono text-[10px] md:text-xs uppercase tracking-widest px-8 py-5 hover:bg-[#F26122] hover:text-white transition-colors flex items-center justify-center gap-3">
            <span className="animate-pulse">&gt;</span> BOOK_YOUR_SCOPING_CALL_
          </Link>
          <Link to="/request-audit" className="font-mono text-[10px] md:text-xs uppercase tracking-widest px-8 py-5 border border-black/30 hover:bg-black/5 transition-colors flex items-center justify-center gap-3 group">
            [ DOWNLOAD CLIENT BRIEF ]
            <ArrowDown className="w-3 h-3 transform group-hover:translate-y-1 transition-transform" />
          </Link>
        </div>

      </div>
    </AnimatedSection>
  );
}

function LatestIntelSection() {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { playSuccess } = useSound();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
      playSuccess();
    }, 1000);
  };

  return (
    <AnimatedSection id="latest-intel" number="09" title="INTEL_&_RESEARCH" theme="light" className="flex flex-col z-10">
      {/* Header */}
      <div className="p-8 md:p-12 lg:p-20 border-b border-black/15 flex flex-col md:flex-row gap-8 md:gap-16 justify-between items-start md:items-end">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold uppercase leading-[0.85] tracking-tighter">
            Know What<br />
            Attackers Know.<br />
            <span className="text-[#F26122]">Before They Use It.</span>
          </h2>
        </div>
        <div className="max-w-md font-mono text-xs md:text-sm leading-relaxed text-black/70">
          Original research, CVE breakdowns, red team writeups, and threat intelligence from operators who are actively in the field. No recycled vendor content. No AI-generated filler. Just signal.
        </div>
      </div>

      {/* Grid of 3 Article Cards */}
      <div className="p-8 md:p-12 lg:p-20 bg-[#E5E5E5] border-b border-black/15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link to="/threat-intel/cve-2024-xxxx-rce-exploitation" className="bg-white border border-black/15 p-8 flex flex-col group hover:border-black transition-colors duration-300 shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_rgba(242,97,34,1)] cursor-crosshair h-full">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] font-bold mb-4">[THREAT INTEL]</div>
            <h3 className="font-display text-2xl font-bold leading-tight mb-6 group-hover:text-[#F26122] transition-colors">CVE-2024-XXXX Explained: Exploiting Critical RCE in 10 Mins</h3>
            <div className="mt-auto pt-6 border-t border-black/10 flex justify-between items-center font-mono text-[10px] uppercase tracking-widest text-black/60">
              <span>6 min read · by Null</span>
              <span className="flex items-center gap-2 group-hover:text-[#F26122]">Read More <ArrowRight className="w-3 h-3" /></span>
            </div>
          </Link>
          {/* Card 2 */}
          <Link to="/blog/kerberoasting-attack-domain-admin-red-team" className="bg-white border border-black/15 p-8 flex flex-col group hover:border-black transition-colors duration-300 shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_rgba(242,97,34,1)] cursor-crosshair h-full">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] font-bold mb-4">[RED TEAM]</div>
            <h3 className="font-display text-2xl font-bold leading-tight mb-6 group-hover:text-[#F26122] transition-colors">How We Got Domain Admin in 4.5 Hours Using Kerberoasting</h3>
            <div className="mt-auto pt-6 border-t border-black/10 flex justify-between items-center font-mono text-[10px] uppercase tracking-widest text-black/60">
              <span>12 min read · by Ghost</span>
              <span className="flex items-center gap-2 group-hover:text-[#F26122]">Read More <ArrowRight className="w-3 h-3" /></span>
            </div>
          </Link>
          {/* Card 3 */}
          <Link to="/blog/ciso-guide-buying-red-team-services" className="bg-white border border-black/15 p-8 flex flex-col group hover:border-black transition-colors duration-300 shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_rgba(242,97,34,1)] cursor-crosshair h-full">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] font-bold mb-4">[CISO GUIDE]</div>
            <h3 className="font-display text-2xl font-bold leading-tight mb-6 group-hover:text-[#F26122] transition-colors">12 Questions Every CISO Should Ask a Red Team Vendor</h3>
            <div className="mt-auto pt-6 border-t border-black/10 flex justify-between items-center font-mono text-[10px] uppercase tracking-widest text-black/60">
              <span>15 min read · by Siren</span>
              <span className="flex items-center gap-2 group-hover:text-[#F26122]">Read More <ArrowRight className="w-3 h-3" /></span>
            </div>
          </Link>
        </div>
        <div className="mt-12 flex justify-center gap-4">
          <Link to="/blog" className="font-mono text-[10px] uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors flex items-center gap-3">
            [ VIEW ALL POSTS ] <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Newsletter Block */}
      <div className="bg-[#111] text-white p-8 md:p-12 lg:p-20 flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between">
        <div className="max-w-xl">
          <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4">WEEKLY THREAT INTEL BRIEF</h3>
          <p className="font-mono text-xs text-white/60 leading-relaxed mb-6">
            Every Friday. CVE advisories, red team insights, and attack technique breakdowns — written by operators, not marketers.
          </p>
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#F26122] flex items-center gap-2">
            <span className="w-2 h-2 bg-[#F26122] animate-pulse"></span>
            3,200+ CISOs and security leaders already subscribed.
          </div>
        </div>
        <div className="w-full max-w-md flex flex-col gap-4">
          <form onSubmit={handleSubscribe} className="flex w-full">
            <input type="email" required placeholder="[ Work Email ]" className="bg-white/5 border border-white/15 text-white font-mono text-xs p-4 flex-grow focus:outline-none focus:border-[#F26122] transition-colors disabled:opacity-50" disabled={isSubscribing || isSubscribed} />
            <button type="submit" disabled={isSubscribing || isSubscribed} className="bg-[#F26122] text-white font-mono text-[10px] uppercase tracking-widest px-6 py-4 hover:bg-white hover:text-black transition-colors shrink-0 disabled:opacity-50 disabled:hover:bg-[#F26122] disabled:hover:text-white">
              {isSubscribing ? 'SUBSCRIBING...' : isSubscribed ? '✓ SUBSCRIBED' : 'SUBSCRIBE'}
            </button>
          </form>
          <div className="font-mono text-[9px] text-white/60 uppercase tracking-widest text-center">
            Unsubscribe any time. Zero spam. Zero sales pitches.
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}



function Home() {
  return (
    <>
      <SEO
        title="Blackbox Labs | Elite Red Team & Offensive Security"
        description="Nation-state level red team operations, adversary simulation, and vulnerability research. We break systems before the bad guys do."
        canonical="/"
        ogType="website"
      />
      {/* Main Hero Content */}
      <main id="hero" className="flex-grow grid grid-cols-1 md:grid-cols-12 relative z-10">

        {/* Left Column - Typography & CTA */}
        <div className="md:col-span-8 flex flex-col border-r border-black/15">

          {/* Top Info Bar */}
          <div className="grid grid-cols-8 border-b border-black/15">
            <AuthorizationOverride />
            <div className="col-span-3 p-6 hidden md:flex items-center justify-center relative bg-[#E0E0E0]">
              {/* Interactive Port Scanner Matrix */}
              <PortScannerMatrix />

              {/* Corner markers */}
              <div className="absolute top-2 left-2 w-1 h-1 border border-black/30"></div>
              <div className="absolute top-2 right-2 w-1 h-1 border border-black/30"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 border border-black/30"></div>
              <div className="absolute bottom-2 right-2 w-1 h-1 border border-black/30"></div>
            </div>
          </div>

          {/* Headline Area */}
          <div className="flex-grow p-8 md:p-12 lg:p-20 flex flex-col justify-center relative">
            <div className="absolute top-8 left-8 md:top-12 md:left-12 font-mono text-[10px] uppercase tracking-widest text-[#FF4500] font-bold z-20">
              [ // 01 — OVERVIEW ]
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest mb-6 flex items-center gap-3 text-black/60 mt-8 md:mt-0">
              <span className="w-2 h-2 bg-black"></span>
              OFFENSIVE SECURITY / RED TEAM OPERATIONS
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[6.5rem] font-bold uppercase leading-[0.85] tracking-tighter mb-6">
              Uncovering <br />
              Critical <br />
              Vulnerabilities.
            </h1>

            <div className="font-mono text-[#F26122] text-sm md:text-base mb-6 font-bold">
              // We Break Systems Before They Do.
            </div>

            <div className="font-mono text-sm max-w-xl leading-relaxed text-black/70 mb-10 space-y-4">
              <p>
                Blackbox Labs is an elite Red Team firm. We simulate nation-state-level attacks against your infrastructure — finding the vulnerabilities your defenses missed before real adversaries exploit them.
              </p>
              <p>
                No automated scanners. No checkbox reports. Just operators who think like attackers, because they used to be.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/request-audit" className="bg-[#F26122] text-white font-mono text-[10px] uppercase tracking-widest px-8 py-4 hover:bg-black transition-colors flex items-center gap-3">
                Request an Audit <ArrowRight className="w-3 h-3" />
              </Link>
              <Link to="/#case-studies" className="font-mono text-[10px] uppercase tracking-widest px-8 py-4 border border-black/20 hover:bg-black/5 transition-colors flex items-center gap-3">
                View Case Studies <ArrowDown className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Bottom Stats Grid - Trust Bar */}
          <div className="grid grid-cols-3 border-t border-black/15 bg-black/5">
            <div className="p-4 md:p-6 border-r border-black/15 flex flex-col justify-center">
              <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-black/60 mb-2">Trusted By</div>
              <div className="font-display text-sm md:text-lg font-bold tracking-widest uppercase">Fortune 500<br />Banks</div>
            </div>
            <div className="p-4 md:p-6 border-r border-black/15 flex flex-col justify-center">
              <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-black/60 mb-2">Securing</div>
              <div className="font-display text-sm md:text-lg font-bold tracking-widest uppercase">Defense<br />Contractors</div>
            </div>
            <div className="p-4 md:p-6 flex flex-col justify-center">
              <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-black/60 mb-2">Protecting</div>
              <div className="font-display text-sm md:text-lg font-bold tracking-widest uppercase">Global SaaS<br />Platforms</div>
            </div>
          </div>
        </div>

        {/* Right Column - Visuals & News */}
        <div className="md:col-span-4 flex flex-col">

          {/* Visual Showcase Area */}
          <VisualShowcase />

          {/* Featured News Area */}
          <div className="p-8 flex flex-col justify-between h-64 bg-white/50 hover:bg-white/80 transition-colors cursor-pointer group">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-black/60 mb-4 flex items-center justify-between">
                <span>Declassified Operation</span>
                <div className="w-6 h-6 bg-black group-hover:bg-[#F26122] transition-colors flex items-center justify-center text-white">
                  <ArrowRight className="w-3 h-3 transform -rotate-45" />
                </div>
              </div>
              <h3 className="font-bold text-xl leading-tight mb-4 tracking-tight">
                Operation Ghost Protocol: Bypassing EDR in a Global Financial Network
              </h3>
            </div>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest border-t border-black/15 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#F26122] rounded-sm"></div>
                <span>Red Team Lead</span>
              </div>
              <span className="text-black/60">Read Report</span>
            </div>
          </div>
        </div>
      </main>

      {/* Threat Intelligence Dashboard (Stats & Social Proof) */}
      <ThreatIntelligenceDashboard />

      {/* Services Section (Classified Dossier Grid) */}
      <ServicesSection />

      {/* Methodology Section (Kill Chain Execution Log) */}
      <MethodologySection />

      {/* Case Studies Section (Declassified Incident Archive) */}
      <CaseStudiesSection />

      {/* Why Us Section (Operational Directives) */}
      <WhyUsSection />

      {/* Team Section (Active Personnel Files) */}
      <TeamSection />

      {/* Testimonials Section (Intercepted Comms Archive) */}
      <TestimonialsSection />

      {/* Latest Intel Section */}
      <LatestIntelSection />

      {/* Contact Teaser Section */}
      <ContactTeaserSection />
    </>
  );
}

const ContactTeaserSection = () => {
  return (
    <AnimatedSection id="contact" number="10" title="CONTACT" theme="dark" className="flex flex-col z-10">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
        <div className="lg:col-span-6 p-8 md:p-12 lg:p-20 border-r border-white/15 flex flex-col justify-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Every vulnerability we've ever found was found because someone asked us to look.
          </h2>
          <p className="font-mono text-sm md:text-base text-white/60 leading-relaxed max-w-xl">
            The ones we didn't find? Those belong to threat actors who didn't ask permission.
          </p>
        </div>

        <div className="lg:col-span-6 p-8 md:p-12 lg:p-20 flex flex-col justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-[#111] border border-white/20 p-8 shadow-[8px_8px_0_rgba(242,97,34,1)]">
            <div className="font-mono text-[10px] text-white/60 mb-2">root@blackbox:~$ ./request_audit.sh</div>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                placeholder="[ Type Work Email ]"
                className="flex-grow bg-transparent border border-white/20 p-4 font-mono text-sm text-white focus:outline-none focus:border-[#F26122] placeholder:text-white/60"
              />
              <Link to="/request-audit" data-sound="heavy" className="bg-[#F26122] text-white font-mono text-[10px] uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                REQUEST AN AUDIT <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
              <Link to="/scoping-call" className="font-mono text-[10px] uppercase tracking-widest text-white/60 hover:text-white transition-colors flex items-center gap-2">
                Or: Book a 30-min Scoping Call <ArrowRight className="w-3 h-3" />
              </Link>
              <div className="font-mono text-[10px] text-white/60 flex items-center gap-2">
                <Lock className="w-3 h-3" /> Encrypted · NDA first · 24hr response
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

import { BlogHub, ThreatIntelPage, ResearchPage } from './pages/BlogPages';
import { ArticlePage } from './pages/ArticlePage';
import { ContactHub, RequestAudit, ScopingCall } from './pages/ContactPages';
import { RedTeamPage } from './pages/RedTeamPage';
import { NetworkPenTestingPage } from './pages/NetworkPenTestingPage';
import { ApplicationSecurityTestingPage } from './pages/ApplicationSecurityTestingPage';
import { SocialEngineeringPage } from './pages/SocialEngineeringPage';
import { CloudSecurityPage } from './pages/CloudSecurityPage';
import { VulnerabilityResearchPage } from './pages/VulnerabilityResearchPage';
import { SitemapPage } from './pages/SitemapPage';

// Company Pages
import { CareersPage } from './pages/company/CareersPage';
import { PressPage } from './pages/company/PressPage';
import { SpeakingPage } from './pages/company/SpeakingPage';
import { TalksPage } from './pages/company/TalksPage';
import { PartnersPage } from './pages/company/PartnersPage';
import { HallOfFamePage } from './pages/company/HallOfFamePage';

// Legal Pages
import { PrivacyPolicyPage } from './pages/legal/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/legal/TermsOfServicePage';
import { CookiePolicyPage } from './pages/legal/CookiePolicyPage';
import { ResponsibleDisclosurePage } from './pages/legal/ResponsibleDisclosurePage';
import { NDAPage } from './pages/legal/NDAPage';
import { RulesOfEngagementPage } from './pages/legal/RulesOfEngagementPage';

import { Footer } from './components/Footer';
import { TacticalCursor } from './components/TacticalCursor';
import { TerminalTransition } from './components/TerminalTransition';

import { Navbar } from './components/Navbar';
import { BruteForceLoader } from './components/BruteForceLoader';

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Small timeout to ensure DOM is ready, especially if navigating from another page
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // 104px offset to account for the fixed navbar (32px alert + 72px main nav)
          const y = element.getBoundingClientRect().top + window.scrollY - 104;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <BruteForceLoader />
      <ScrollHandler />
      <TacticalCursor />
      <TerminalTransition />
      <div className="min-h-screen bg-[#E5E5E5] text-[#111] font-sans selection:bg-[#FF4500] selection:text-white flex flex-col border-x border-black/15 max-w-[1600px] mx-auto relative">

        {/* Corner Markers for the whole page */}
        <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#FF4500] z-50"></div>
        <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#FF4500] z-50"></div>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogHub />} />
          <Route path="/threat-intel" element={<ThreatIntelPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/blog/:id" element={<ArticlePage />} />
          <Route path="/threat-intel/:id" element={<ArticlePage />} />
          <Route path="/research/:id" element={<ArticlePage />} />
          <Route path="/contact" element={<ContactHub />} />
          <Route path="/request-audit" element={<RequestAudit />} />
          <Route path="/scoping-call" element={<ScopingCall />} />
          <Route path="/services/red-team" element={<RedTeamPage />} />

          {/* SEO Redirects for Network Pen Testing */}
          <Route path="/services/network" element={<Navigate to="/services/network-penetration-testing" replace />} />
          <Route path="/services/network-pen-testing" element={<Navigate to="/services/network-penetration-testing" replace />} />
          <Route path="/services/network-penetration-testing" element={<NetworkPenTestingPage />} />

          {/* SEO Redirects for Application Security Testing */}
          <Route path="/services/appsec" element={<Navigate to="/services/application-security-testing" replace />} />
          <Route path="/services/application-security" element={<Navigate to="/services/application-security-testing" replace />} />
          <Route path="/services/application-security-testing" element={<ApplicationSecurityTestingPage />} />

          <Route path="/services/social-engineering" element={<SocialEngineeringPage />} />

          {/* SEO Redirects for Cloud Security */}
          <Route path="/services/cloud" element={<Navigate to="/services/cloud-security-assessment" replace />} />
          <Route path="/services/cloud-security" element={<Navigate to="/services/cloud-security-assessment" replace />} />
          <Route path="/services/cloud-security-assessment" element={<CloudSecurityPage />} />

          {/* SEO Redirects for Vulnerability Research */}
          <Route path="/services/vuln-research" element={<Navigate to="/services/vulnerability-research" replace />} />
          <Route path="/services/vulnerability-research" element={<VulnerabilityResearchPage />} />

          {/* Company Pages */}
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/speaking" element={<SpeakingPage />} />
          <Route path="/talks" element={<TalksPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/thanks" element={<HallOfFamePage />} />

          {/* Legal Pages */}
          <Route path="/legal/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/legal/terms" element={<TermsOfServicePage />} />
          <Route path="/legal/cookies" element={<CookiePolicyPage />} />
          <Route path="/legal/disclosure" element={<ResponsibleDisclosurePage />} />
          <Route path="/legal/nda" element={<NDAPage />} />
          <Route path="/legal/rules-of-engagement" element={<RulesOfEngagementPage />} />

          {/* CCPA Redirect */}
          <Route path="/legal/ccpa" element={<Navigate to="/legal/privacy#ccpa" replace />} />

          {/* Sitemap */}
          <Route path="/sitemap" element={<SitemapPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
