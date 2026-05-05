import React, { createContext, useContext, useEffect, useState } from 'react';
import { soundEngine } from '../utils/SoundEngine';

interface SoundContextType {
  isSoundEnabled: boolean;
  toggleSound: () => void;
  playSuccess: () => void;
  playTyping: () => void;
  playCharge: () => void;
  playUnlock: () => void;
}

const SoundContext = createContext<SoundContextType>({
  isSoundEnabled: false,
  toggleSound: () => {},
  playSuccess: () => {},
  playTyping: () => {},
  playCharge: () => {},
  playUnlock: () => {},
});

export const useSound = () => useContext(SoundContext);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  const toggleSound = () => {
    if (!isSoundEnabled) {
      soundEngine.enable();
    } else {
      soundEngine.disable();
    }
    setIsSoundEnabled(!isSoundEnabled);
  };

  useEffect(() => {
    if (!isSoundEnabled) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const interactable = target.closest('a, button, summary, [data-sound]');
      if (interactable) {
        const soundType = interactable.getAttribute('data-sound');
        
        if (soundType === 'none') {
          return;
        } else if (soundType === 'heavy') {
          soundEngine.playHoverHeavy();
        } else if (soundType === 'scan') {
          soundEngine.playScan();
        } else {
          soundEngine.playHover(); // Default
        }
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactable = target.closest('a, button, summary, [data-sound]');
      if (interactable) {
        const soundType = interactable.getAttribute('data-sound');
        
        if (soundType === 'none') {
          return;
        } else if (soundType === 'heavy') {
          soundEngine.playClickHeavy();
        } else {
          soundEngine.playClick(); // Default
        }
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('click', handleClick);
    };
  }, [isSoundEnabled]);

  return (
    <SoundContext.Provider value={{
      isSoundEnabled,
      toggleSound,
      playSuccess: () => soundEngine.playSuccess(),
      playTyping: () => soundEngine.playTyping(),
      playCharge: () => soundEngine.playCharge(),
      playUnlock: () => soundEngine.playUnlock(),
    }}>
      {children}
    </SoundContext.Provider>
  );
};
