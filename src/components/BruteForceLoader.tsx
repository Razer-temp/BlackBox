import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const B_SHAPE = [0, 1, 2, 5, 8, 10, 11, 12, 15, 18, 20, 21, 22];
const L_SHAPE = [0, 5, 10, 15, 20, 21, 22, 23];

export function BruteForceLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [grid, setGrid] = useState<{ active: boolean; color: string }[]>(
    Array(25).fill({ active: false, color: '#111' })
  );
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let iterations = 0;
    const maxChaosIterations = 30; // 1.5s of chaos
    const lockInIterations = 20;   // 1.6s of locking in

    // Phase 1: Chaos
    const runChaos = () => {
      interval = setInterval(() => {
        setGrid(prev => prev.map(() => {
          const isActive = Math.random() > 0.5;
          const isOrange = Math.random() > 0.7;
          return {
            active: isActive,
            color: isOrange ? '#FF4500' : '#FFFFFF'
          };
        }));
        iterations++;

        if (iterations >= maxChaosIterations) {
          clearInterval(interval);
          runLockIn();
        }
      }, 50);
    };

    // Phase 2: Lock-in
    const runLockIn = () => {
      let lockStep = 0;
      const targetShape = B_SHAPE;

      interval = setInterval(() => {
        setGrid(prev => prev.map((cell, i) => {
          const shouldBeLocked = Math.random() < (lockStep / lockInIterations);
          const isPartOfTarget = targetShape.includes(i);

          if (shouldBeLocked) {
            return {
              active: isPartOfTarget,
              color: '#FFFFFF'
            };
          } else {
            const isActive = Math.random() > 0.5;
            const isOrange = Math.random() > 0.5;
            return {
              active: isActive,
              color: isOrange ? '#FF4500' : '#FFFFFF'
            };
          }
        }));

        lockStep++;

        if (lockStep >= lockInIterations) {
          clearInterval(interval);

          // Fully lock to B
          setGrid(Array(25).fill(null).map((_, i) => ({
            active: targetShape.includes(i),
            color: '#FFFFFF'
          })));

          // Switch to L using "Digital Gravity" after a brief pause
          setTimeout(() => {
            const frames = [
              [0, 5, 10, 15, 20, 21, 22, 6, 7, 13, 16, 17, 23],
              [0, 5, 10, 15, 20, 21, 22, 11, 12, 18, 23],
              [0, 5, 10, 15, 20, 21, 22, 23, 16, 17],
              [0, 5, 10, 15, 20, 21, 22, 23] // L_SHAPE
            ];

            let frameIndex = 0;
            const gravityInterval = setInterval(() => {
              if (frameIndex < frames.length) {
                const currentFrame = frames[frameIndex];
                setGrid(Array(25).fill(null).map((_, i) => ({
                  active: currentFrame.includes(i),
                  color: '#FFFFFF'
                })));
                frameIndex++;
              } else {
                clearInterval(gravityInterval);
                // Finish and fade out
                setTimeout(() => {
                  setIsLocked(true);
                  setTimeout(() => setIsVisible(false), 800); // Wait for fade out
                }, 400);
              }
            }, 120); // 120ms per frame for a smooth but visible drop
          }, 600);
        }
      }, 80);
    };

    runChaos();

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLocked ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-[99999] bg-black flex items-center justify-center pointer-events-auto"
      >
        <div className="flex flex-col items-center gap-12">
          <div className="grid grid-cols-5 gap-1.5 md:gap-2">
            {grid.map((cell, i) => (
              <div
                key={i}
                className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-75"
                style={{
                  backgroundColor: cell.active ? cell.color : '#111111',
                  boxShadow: cell.active && cell.color === '#FF4500' ? '0 0 15px #FF4500' : 'none'
                }}
              />
            ))}
          </div>

          <div className="font-mono text-[#FF4500] text-xs md:text-sm tracking-[0.3em] uppercase h-4 flex items-center justify-center">
            {isLocked ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                [ ACCESS GRANTED ]
              </motion.span>
            ) : (
              <span>BLACKBOX LABS<span className="animate-pulse">_</span></span>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
