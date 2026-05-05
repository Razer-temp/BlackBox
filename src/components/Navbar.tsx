import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Shield, Globe, Code, Users, Cloud, Search } from 'lucide-react';
import { useSound } from '../contexts/SoundContext';

function BrandLogo() {
  const L_SHAPE = [0, 5, 10, 15, 20, 21, 22, 23];
  const B_SHAPE = [0, 1, 2, 5, 8, 10, 11, 12, 15, 18, 20, 21, 22];

  const [activeIndices, setActiveIndices] = useState(L_SHAPE);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let iterations = 0;
    const targetShape = isHovered ? B_SHAPE : L_SHAPE;
    
    const interval = setInterval(() => {
      const randomIndices = Array.from({length: 12}, () => Math.floor(Math.random() * 25));
      setActiveIndices(randomIndices);
      iterations++;
      
      if (iterations > 5) {
        clearInterval(interval);
        setActiveIndices(targetShape);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <Link 
      to="/" 
      className="font-mono font-bold text-lg md:text-xl tracking-widest flex items-center gap-3 hover:text-[#FF4500] transition-colors text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Blackbox Labs - Offensive Security & Red Team Operations"
    >
      <div className="grid grid-cols-5 gap-[1px] w-5 h-5 shrink-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <div 
            key={i} 
            className={`w-full h-full transition-colors duration-75 ${
              activeIndices.includes(i) 
                ? 'bg-[#FF4500]' 
                : 'bg-white/10'
            }`}
          />
        ))}
      </div>
      <div className="flex items-center">
        BLACKBOX_LABS
        <motion.span 
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ repeat: Infinity, duration: 1, times: [0, 0.5, 0.5, 1] }}
          className="text-[#FF4500]"
        >
          _
        </motion.span>
      </div>
    </Link>
  );
}

function DecryptedNavLink({ text, to, onMouseEnter, onMouseLeave }: { text: string, to: string, onMouseEnter?: () => void, onMouseLeave?: () => void }) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  
  // Helper to generate a random string of the exact same length as the text
  const generateRandom = () => Array.from({ length: text.length }).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
  
  const [displayText, setDisplayText] = useState(generateRandom());
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let iterations = 0;
    
    if (isHovered) {
      // Decrypting: Random -> Real Text
      interval = setInterval(() => {
        setDisplayText(prev => text.split('').map((char, index) => {
          if (index < iterations) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join(''));
        
        if (iterations >= text.length) {
          clearInterval(interval);
        }
        iterations += 1 / 2;
      }, 30);
    } else {
      // Encrypting: Real Text -> NEW Random String
      const targetRandom = generateRandom();
      interval = setInterval(() => {
        setDisplayText(prev => targetRandom.split('').map((char, index) => {
          if (index < iterations) return targetRandom[index];
          // Keep scrambling the remaining characters until they are "locked in"
          return text[index] ? chars[Math.floor(Math.random() * chars.length)] : '';
        }).join(''));
        
        if (iterations >= text.length) {
          clearInterval(interval);
          setDisplayText(targetRandom); // Lock in the final random string
        }
        iterations += 1 / 2;
      }, 30);
    }
    
    return () => clearInterval(interval);
  }, [isHovered, text]);

  return (
    <Link 
      to={to} 
      className="relative transition-colors py-2 group flex justify-center items-center text-[#CCCCCC] hover:text-white"
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter?.();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onMouseLeave?.();
      }}
    >
      <span className="opacity-0 pointer-events-none">{text}</span>
      <span className="absolute whitespace-nowrap">{displayText}</span>
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF4500] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

const SERVICES = [
  { icon: Shield, name: "Red Team Operations", desc: "Nation-state adversary simulation. Full scope.", link: "/services/red-team" },
  { icon: Globe, name: "Network Pen Testing", desc: "External & Internal. Active Directory.", link: "/services/network-penetration-testing" },
  { icon: Code, name: "Application Security", desc: "Web, API & Mobile. OWASP Top 10+", link: "/services/application-security-testing" },
  { icon: Users, name: "Social Engineering", desc: "Phishing. Vishing. Physical.", link: "/services/social-engineering" },
  { icon: Cloud, name: "Cloud Security", desc: "AWS, Azure, GCP. IAM misconfigs.", link: "/services/cloud-security-assessment" },
  { icon: Search, name: "Vuln Research", desc: "0-days. CVEs. Binary analysis. Responsible disclosure.", link: "/services/vulnerability-research" }
];

export function Navbar() {
  const [isAlertVisible, setIsAlertVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);
  const location = useLocation();
  const { isSoundEnabled, toggleSound } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle background/blur state
      if (currentScrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Handle auto-hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 150 && !isServicesHovered) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isServicesHovered]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* SPACER TO PREVENT CONTENT OVERLAP */}
      <div 
        className="w-full transition-all duration-300" 
        style={{ height: isAlertVisible ? 104 : 72 }} 
      />

      {/* LAYER 1 — ALERT BAR */}
      <AnimatePresence>
        {isAlertVisible && (
          <motion.div 
            initial={{ height: 32, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-0 left-0 right-0 h-8 bg-[#1a0000] z-[100] flex items-center overflow-hidden border-b border-[#FF4500]/30"
          >
            <div className="flex-1 overflow-hidden whitespace-nowrap flex items-center">
              <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="font-mono text-[11px] text-[#FF4500] uppercase tracking-widest flex whitespace-nowrap"
              >
                <span className="mr-8">■ THREAT LEVEL: ELEVATED —— Latest CVE: CVE-2025-2847 (CVSS 9.8) — Patch Now → —— Active Engagements: 14 —— All Systems: AUTHORIZED ——</span>
                <span className="mr-8">■ THREAT LEVEL: ELEVATED —— Latest CVE: CVE-2025-2847 (CVSS 9.8) — Patch Now → —— Active Engagements: 14 —— All Systems: AUTHORIZED ——</span>
              </motion.div>
            </div>
            <button 
              onClick={() => setIsAlertVisible(false)}
              className="px-4 h-full flex items-center justify-center text-[#FF4500] hover:bg-[#FF4500] hover:text-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LAYER 2 — MAIN STICKY NAVBAR */}
      <motion.nav 
        className="fixed left-0 right-0 z-[90] transition-all duration-300 bg-black border-b border-[#FF4500]"
        style={{ 
          top: isAlertVisible ? 32 : 0,
          height: 72
        }}
        animate={{ y: isHidden ? -104 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        role="navigation"
        aria-label="Main navigation"
        onMouseLeave={() => setIsServicesHovered(false)}
      >
        <div className="max-w-[1600px] mx-auto h-full px-4 md:px-8 flex items-center justify-between">
          
          {/* LEFT — LOGO */}
          <div className="flex-shrink-0">
            <BrandLogo />
          </div>

          {/* CENTER — NAV LINKS (Desktop) */}
          <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest">
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setIsServicesHovered(true)}
            >
              <DecryptedNavLink 
                text="Services ▾" 
                to="/#services" 
              />
            </div>
            <DecryptedNavLink text="Case Studies" to="/#case-studies" />
            <DecryptedNavLink text="Methodology" to="/#methodology" />
            <DecryptedNavLink text="Blog / Intel" to="/blog" />
            <DecryptedNavLink text="Team" to="/#team" />
          </div>

          {/* CENTER-RIGHT & RIGHT (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={toggleSound} 
              className="font-mono text-[10px] text-white/50 hover:text-white transition-colors border border-white/20 px-2 py-1"
            >
              [ AUDIO: {isSoundEnabled ? 'ON' : 'OFF'} ]
            </button>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#888888]">
              <motion.div 
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 rounded-full bg-[#00FF41]"
              />
              14 ACTIVE ENGAGEMENTS
            </div>
            
            <Link 
              to="/request-audit" 
              className="bg-[#FF4500] text-black font-mono font-bold text-sm px-5 py-2.5 uppercase tracking-widest flex items-center gap-2 hover:shadow-[0_0_16px_rgba(255,69,0,0.7)] transition-all"
              aria-label="Request a Red Team Security Audit"
            >
              → REQUEST AN AUDIT
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* LAYER 3 — SERVICES MEGA DROPDOWN */}
        <div 
          className={`absolute top-full left-0 right-0 bg-[#0A0A0A] border-l-4 border-[#FF4500] shadow-2xl overflow-hidden transition-all duration-200 ease-out ${isServicesHovered ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
          onMouseEnter={() => setIsServicesHovered(true)}
          onMouseLeave={() => setIsServicesHovered(false)}
        >
          <div className="max-w-[1600px] mx-auto p-10">
            <div className="font-mono text-[#444] text-xs uppercase tracking-widest mb-8">
              // WHAT WE DO
            </div>
            
            <div className="grid grid-cols-3 gap-8 mb-10">
              {SERVICES.map((service, index) => (
                <div
                  key={service.name}
                  className={`transition-all duration-300 ${isServicesHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                  style={{ transitionDelay: `${isServicesHovered ? index * 50 : 0}ms` }}
                >
                  <Link 
                    to={service.link}
                    className="group block p-4 -m-4 rounded hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-[#FF4500] mt-1">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-mono text-white font-bold mb-1 group-hover:text-[#FF4500] transition-colors">
                          {service.name}
                        </div>
                        <div className="text-[#888888] text-xs leading-relaxed mb-3">
                          {service.desc}
                        </div>
                        <div className="text-[#FF4500] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                          [ Learn More → ]
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#111] border-t border-[#222] p-4 text-center">
            <div className="font-mono text-sm text-[#888] flex items-center justify-center gap-4">
              Not sure which service fits your threat model?
              <Link to="/scoping-call" className="text-[#FF4500] hover:text-white transition-colors">
                → Book a free 30-min scoping call
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE FULL-SCREEN OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[110] flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <BrandLogo />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#FF4500] p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 font-mono text-lg text-white flex flex-col gap-6">
              {/* Terminal Boot Sequence Reveal */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <button 
                  className="w-full text-left flex items-center justify-between hover:text-[#FF4500] transition-colors"
                  onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                >
                  {'>'} Services
                  <span className="text-sm text-[#888]">{isMobileServicesExpanded ? '[-]' : '[+]'}</span>
                </button>
                
                <AnimatePresence>
                  {isMobileServicesExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 mt-4 flex flex-col gap-4 text-sm text-[#888]"
                    >
                      {SERVICES.map((service, i) => {
                        const isActive = location.pathname === service.link;
                        return (
                          <motion.div
                            key={service.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Link 
                              to={service.link} 
                              className={`block hover:text-white border-l-2 pl-2 transition-all ${isActive ? 'border-[#FF4500] text-white' : 'border-transparent'}`}
                            >
                              — {service.name}
                            </Link>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {[
                { name: "Case Studies", link: "/#case-studies" },
                { name: "Methodology", link: "/#methodology" },
                { name: "Blog / Intel", link: "/blog" },
                { name: "Team", link: "/#team" }
              ].map((item, i) => {
                const isActive = location.pathname === item.link;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.05) }}
                  >
                    <Link 
                      to={item.link} 
                      className={`block hover:text-[#FF4500] border-l-2 pl-2 transition-all ${isActive ? 'border-[#FF4500] text-[#FF4500]' : 'border-transparent'}`}
                    >
                      {'>'} {item.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full h-px bg-white/10 my-2" 
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link 
                  to="/request-audit" 
                  className="block w-full bg-[#FF4500] text-black text-center py-4 font-bold tracking-widest"
                >
                  → REQUEST AN AUDIT
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="w-full h-px bg-white/10 my-2" 
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-sm text-[#888] flex flex-col gap-2"
              >
                <div>ops@blackboxlabs.com</div>
                <div>Signal: @BlackboxLabs</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
