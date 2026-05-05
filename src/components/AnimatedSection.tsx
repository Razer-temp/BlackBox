import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useSound } from '../contexts/SoundContext';

export interface AnimatedSectionProps {
  id: string;
  number: string;
  title: string;
  theme: 'dark' | 'light';
  children: React.ReactNode;
  className?: string;
}

export function HexDumpSeparator({ number, title }: { number: string, title: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px", once: true });
  const [displayText, setDisplayText] = useState("");
  const finalString = `[ // ${number} — ${title} ]`;
  const { playTyping } = useSound();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const hexChars = "0123456789ABCDEF";
    
    const generateHex = () => {
      const numHexes = Math.floor(finalString.length / 5) + 2; 
      return Array.from({ length: numHexes }).map(() => `0x${hexChars[Math.floor(Math.random() * 16)]}${hexChars[Math.floor(Math.random() * 16)]}`).join(' ');
    };

    if (!isInView) {
      interval = setInterval(() => {
        setDisplayText(generateHex());
      }, 50);
    } else {
      let iterations = 0;
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
      
      interval = setInterval(() => {
        setDisplayText(finalString.split('').map((char, index) => {
          if (index < iterations) return finalString[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join(''));
        
        playTyping();

        if (iterations >= finalString.length) {
          clearInterval(interval);
          setDisplayText(finalString);
        }
        iterations += 1 / 2;
      }, 30);
    }
    
    return () => clearInterval(interval);
  }, [isInView, finalString, playTyping]);

  return (
    <div ref={ref} className="absolute top-0 left-0 right-0 h-[40px] bg-black flex items-center px-8 md:px-12 overflow-hidden border-y border-[#FF4500]/30 z-20">
      <div className={`font-mono text-[11px] tracking-widest font-bold whitespace-nowrap ${isInView ? 'text-[#FF4500]' : 'text-[#888888]'}`}>
        {displayText}
      </div>
    </div>
  );
}

export function AnimatedSection({ id, number, title, theme, children, className = "" }: AnimatedSectionProps) {
  const bgClass = theme === 'dark' ? 'bg-[#111] text-white' : 'bg-[#E5E5E5] text-[#111]';
  
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative py-[120px] ${bgClass} ${className}`}
    >
      <HexDumpSeparator number={number} title={title} />
      {children}
    </motion.section>
  );
}
