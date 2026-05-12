import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export function TerminalTransition() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [grid, setGrid] = useState<{ active: boolean; color: string }[]>(
    Array(25).fill({ active: false, color: '#111' })
  );
  const [text, setText] = useState("");

  const isInitialLoad = useRef(true);

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
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    const path = location.pathname;

    // Determine animation type and text
    let type = 'MAINFRAME';
    let loadingText = 'RETURNING TO // MAIN_FRAME...';

    if (path === '/services/red-team') {
      type = 'RED_TEAM';
      loadingText = 'EXECUTING // APT_EMULATION_PROTOCOL..._';
    } else if (path === '/services/network-penetration-testing') {
      type = 'NETWORK_PEN';
      loadingText = 'MAPPING // NETWORK_TOPOLOGY..._';
    } else if (path === '/services/application-security-testing') {
      type = 'APP_SEC';
      loadingText = 'ANALYZING // APPLICATION_LOGIC..._';
    } else if (path === '/services/social-engineering') {
      type = 'SOCIAL_ENG';
      loadingText = 'BYPASSING // HUMAN_FIREWALL..._';
    } else if (path === '/services/cloud-security-assessment') {
      type = 'CLOUD_SEC';
      loadingText = 'ENUMERATING // CLOUD_ASSETS..._';
    } else if (path === '/services/vulnerability-research') {
      type = 'VULN_RES';
      loadingText = 'DECOMPILING // BINARY_PAYLOAD..._';
    } else if (path === '/sitemap') {
      type = 'SITEMAP';
      loadingText = 'MAPPING // DIRECTORY_TREE..._';
    } else if (path === '/careers') {
      type = 'CAREERS';
      loadingText = 'INITIALIZING // OPERATOR_RECRUITMENT..._';
    } else if (path === '/press') {
      type = 'PRESS';
      loadingText = 'DECRYPTING // PUBLIC_RELATIONS_ASSETS..._';
    } else if (path === '/speaking') {
      type = 'SPEAKING';
      loadingText = 'CALIBRATING // BROADCAST_FREQUENCIES..._';
    } else if (path === '/talks') {
      type = 'TALKS';
      loadingText = 'ACCESSING // CONFERENCE_ARCHIVE..._';
    } else if (path === '/partners') {
      type = 'PARTNERS';
      loadingText = 'VERIFYING // TRUSTED_VENDORS..._';
    } else if (path === '/thanks') {
      type = 'THANKS';
      loadingText = 'QUERYING // RESEARCHER_DATABASE..._';
    } else if (path === '/legal/privacy') {
      type = 'PRIVACY';
      loadingText = 'ENCRYPTING // PII_DATA_STREAMS..._';
    } else if (path === '/legal/terms') {
      type = 'TERMS';
      loadingText = 'ENFORCING // USAGE_PARAMETERS..._';
    } else if (path === '/legal/cookies') {
      type = 'COOKIES';
      loadingText = 'INTERCEPTING // SESSION_TOKENS..._';
    } else if (path === '/legal/disclosure') {
      type = 'DISCLOSURE';
      loadingText = 'OPENING // SECURE_DISCLOSURE_CHANNEL..._';
    } else if (path === '/legal/nda') {
      type = 'NDA';
      loadingText = 'SEALING // CONFIDENTIAL_RECORDS..._';
    } else if (path === '/legal/rules-of-engagement') {
      type = 'ROE';
      loadingText = 'ESTABLISHING // ENGAGEMENT_BOUNDARIES..._';
    } else if (path.startsWith('/services/')) {
      type = 'SERVICE';
      loadingText = 'DEPLOYING // TACTICAL_MODULE..._';
    } else if (path.startsWith('/blog/') || path.startsWith('/threat-intel/') || path.startsWith('/research/')) {
      type = 'FILE';
      loadingText = 'EXTRACTING // CLASSIFIED_FILE...';
    } else if (path === '/blog' || path === '/threat-intel' || path === '/research') {
      type = 'INTEL';
      loadingText = 'DECRYPTING // THREAT_INTEL...';
    } else if (path === '/contact' || path === '/scoping-call') {
      type = 'COMMS';
      loadingText = 'ESTABLISHING SECURE COMMS...';
    } else if (path === '/request-audit') {
      type = 'AUDIT';
      loadingText = 'INITIATING AUDIT PROTOCOL...';
    }

    setText(loadingText);
    setIsVisible(true);

    const intervals: NodeJS.Timeout[] = [];
    const timeouts: NodeJS.Timeout[] = [];

    // Phase 1: Chaos (Brute force)
    let chaosIterations = 0;
    const maxChaos = 10; // 500ms

    const chaosInterval = setInterval(() => {
      setGrid(Array(25).fill(null).map(() => ({
        active: Math.random() > 0.5,
        color: Math.random() > 0.7 ? '#FF4500' : '#FFFFFF'
      })));
      chaosIterations++;

      if (chaosIterations >= maxChaos) {
        clearInterval(chaosInterval);
        window.scrollTo(0, 0); // Scroll to top while screen is black
        runSequence(type);
      }
    }, 50);
    intervals.push(chaosInterval);

    const runSequence = (animType: string) => {
      let frames: number[][] = [];
      let frameDelay = 150;

      if (animType === 'INTEL') {
        frames = [
          [12],
          [12, 7],
          [12, 7, 13],
          [12, 7, 13, 17],
          [12, 7, 13, 17, 11],
          [6, 7, 8, 11, 12, 13, 16, 17, 18] // Eye
        ];
      } else if (animType === 'COMMS') {
        frames = [
          [10, 14],
          [11, 13],
          [12],
          [6, 7, 8, 11, 13, 16, 17, 18],
          [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24],
          [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24]
        ];
      } else if (animType === 'AUDIT') {
        frames = [
          [0, 4, 20, 24],
          [6, 8, 16, 18],
          [2, 7, 10, 11, 12, 13, 14, 17, 22], // Crosshair
          [],
          [2, 7, 10, 11, 12, 13, 14, 17, 22],
          [],
          [2, 7, 10, 11, 12, 13, 14, 17, 22]
        ];
      } else if (animType === 'RED_TEAM') {
        frames = [
          [2],
          [1, 2, 3],
          [1, 2, 3, 6, 7, 8],
          [1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 14],
          [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 21, 23], // Skull
          [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 21, 23]  // Hold
        ];
      } else if (animType === 'NETWORK_PEN') {
        frames = [
          [12],
          [12, 7, 11, 13, 17],
          [12, 7, 11, 13, 17, 2, 10, 14, 22],
          [12, 7, 11, 13, 17, 2, 10, 14, 22, 0, 4, 20, 24], // Expanding nodes
          [12, 7, 11, 13, 17, 2, 10, 14, 22, 0, 4, 20, 24]  // Hold
        ];
      } else if (animType === 'APP_SEC') {
        frames = [
          [6, 7, 8, 11, 13, 16, 17, 18, 21, 22, 23], // Closed Lock
          [6, 7, 8, 11, 13, 16, 17, 18, 21, 22, 23], // Closed Lock
          [1, 2, 3, 6, 11, 16, 17, 18, 21, 22, 23], // Open Lock (shackle moves up and left)
          [1, 2, 3, 6, 11, 16, 17, 18, 21, 22, 23], // Open Lock
          [1, 2, 3, 6, 11, 16, 17, 18, 21, 22, 23]  // Hold
        ];
      } else if (animType === 'SOCIAL_ENG') {
        frames = [
          [7, 11, 12, 13, 16, 17, 18], // User shape
          [7, 11, 12, 13, 16, 17, 18],
          [7, 11, 12, 13, 16, 17, 18], // Color head orange
          [7, 11, 12, 13, 16, 17, 18],
          [7, 11, 12, 13, 16, 17, 18]
        ];
      } else if (animType === 'CLOUD_SEC') {
        frames = [
          [2, 10, 14, 22], // Nodes
          [2, 6, 8, 10, 14, 16, 18, 22], // Connections forming
          [2, 6, 7, 8, 10, 11, 12, 13, 14, 16, 17, 18, 22], // Full network
          [2, 6, 7, 8, 10, 11, 12, 13, 14, 16, 17, 18, 22], // Flash orange
          [2, 6, 7, 8, 10, 11, 12, 13, 14, 16, 17, 18, 22]  // Hold
        ];
      } else if (animType === 'VULN_RES') {
        // Hex grid / memory block representation
        const fullBlock = Array.from({ length: 25 }, (_, i) => i);
        frames = [
          fullBlock, // Full memory block
          fullBlock, // Full memory block
          [12], // Crash point (center)
          [12], // Hold crash
          [12]
        ];
      } else if (animType === 'PRIVACY') {
        frames = [
          [12], // Core
          [12, 6, 7, 8, 11, 13, 16, 17, 18], // Core + Shield
          [12, 6, 7, 8, 11, 13, 16, 17, 18, 1, 2, 3, 5, 9, 10, 14, 15, 19, 21, 22, 23], // Outer Shield
          [12, 6, 7, 8, 11, 13, 16, 17, 18, 1, 2, 3, 5, 9, 10, 14, 15, 19, 21, 22, 23],
          [12, 6, 7, 8, 11, 13, 16, 17, 18, 1, 2, 3, 5, 9, 10, 14, 15, 19, 21, 22, 23]
        ];
      } else if (animType === 'TERMS') {
        frames = [
          [2, 7, 12], // Center pole
          [2, 7, 12, 6, 8], // Top bar
          [2, 7, 12, 6, 8, 10, 11, 16], // Left scale drops
          [2, 7, 12, 6, 8, 13, 14, 18], // Right scale drops
          [2, 7, 12, 6, 8, 11, 13, 16, 18] // Balanced
        ];
      } else if (animType === 'COOKIES') {
        frames = [
          [7, 11, 12, 13, 17], // Small cookie
          [6, 7, 8, 11, 12, 13, 16, 17, 18], // Full cookie
          [6, 7, 8, 11, 12, 13, 16, 17, 18], // Full cookie
          [6, 7, 11, 12, 13, 16, 17, 18], // Bite taken (removed 8)
          [6, 7, 11, 12, 13, 16, 17, 18]
        ];
      } else if (animType === 'DISCLOSURE') {
        frames = [
          [10, 11, 12, 13, 14, 15, 19, 20, 21, 22, 23, 24], // Envelope body
          [10, 11, 12, 13, 14, 15, 19, 20, 21, 22, 23, 24, 6, 7, 8], // Envelope closed
          [10, 11, 12, 13, 14, 15, 19, 20, 21, 22, 23, 24, 1, 2, 3], // Envelope open
          [10, 11, 12, 13, 14, 15, 19, 20, 21, 22, 23, 24, 1, 2, 3, 6, 7, 8], // Document sliding out
          [10, 11, 12, 13, 14, 15, 19, 20, 21, 22, 23, 24, 1, 2, 3, 6, 7, 8]
        ];
      } else if (animType === 'NDA') {
        frames = [
          [1, 2, 3, 6, 8, 11, 13, 16, 18, 21, 22, 23], // Document
          [1, 2, 3, 6, 8, 11, 13, 16, 18, 21, 22, 23], // Document
          [1, 2, 3, 6, 8, 11, 13, 16, 18, 21, 22, 23, 7], // Padlock shackle
          [1, 2, 3, 6, 8, 11, 13, 16, 18, 21, 22, 23, 7, 12], // Padlock body
          [1, 2, 3, 6, 8, 11, 13, 16, 18, 21, 22, 23, 7, 12]
        ];
      } else if (animType === 'ROE') {
        frames = [
          [12], // Center
          [12, 7, 11, 13, 17], // Crosshair
          [12, 7, 11, 13, 17, 6, 8, 16, 18], // Crosshair + corners
          [12, 7, 11, 13, 17, 6, 8, 16, 18, 1, 2, 3, 5, 9, 15, 19, 21, 22, 23], // Full bounding box
          [12, 7, 11, 13, 17, 6, 8, 16, 18, 1, 2, 3, 5, 9, 15, 19, 21, 22, 23]
        ];
      } else if (animType === 'SPEAKING') {
        frames = [
          [22], // Base
          [17, 22], // Tower
          [12, 17, 22], // Tower
          [12, 17, 22, 7, 11, 13], // Signal 1
          [12, 17, 22, 7, 11, 13, 2, 6, 8] // Signal 2
        ];
      } else if (animType === 'CAREERS') {
        frames = [
          [12], // Center point
          [7, 11, 12, 13, 17], // Plus sign
          [2, 7, 10, 11, 12, 13, 14, 17, 22], // Expanding plus
          [2, 7, 10, 11, 12, 13, 14, 17, 22],
          [2, 7, 10, 11, 12, 13, 14, 17, 22]
        ];
      } else if (animType === 'PRESS') {
        frames = [
          [1, 2, 3], // Top of camera
          [1, 2, 3, 5, 9, 10, 14, 15, 19], // Camera body
          [1, 2, 3, 5, 9, 10, 14, 15, 19, 12], // Camera with lens
          [1, 2, 3, 5, 9, 10, 14, 15, 19, 12, 20, 21, 22, 23, 24], // Flash!
          [1, 2, 3, 5, 9, 10, 14, 15, 19, 12] // Camera with lens
        ];
      } else if (animType === 'TALKS') {
        frames = [
          [21, 22, 23], // Podium base
          [16, 17, 18, 21, 22, 23], // Podium
          [7, 11, 12, 13, 16, 17, 18, 21, 22, 23], // Speaker
          [7, 11, 12, 13, 16, 17, 18, 21, 22, 23, 2, 4], // Sound waves
          [7, 11, 12, 13, 16, 17, 18, 21, 22, 23, 1, 3, 5] // Sound waves
        ];
      } else if (animType === 'PARTNERS') {
        frames = [
          [10, 11, 15, 16], // Left block
          [10, 11, 15, 16, 13, 14, 18, 19], // Right block
          [10, 11, 15, 16, 13, 14, 18, 19, 12, 17], // Handshake / connection
          [10, 11, 15, 16, 13, 14, 18, 19, 12, 17],
          [10, 11, 15, 16, 13, 14, 18, 19, 12, 17]
        ];
      } else if (animType === 'THANKS') {
        frames = [
          [2], // Top of star
          [2, 6, 8], // Upper star
          [2, 6, 8, 10, 11, 12, 13, 14], // Middle star
          [2, 6, 8, 10, 11, 12, 13, 14, 16, 18, 20, 24], // Full star
          [2, 6, 8, 10, 11, 12, 13, 14, 16, 18, 20, 24]
        ];
      } else if (animType === 'SITEMAP') {
        frames = [
          [2], // Root
          [2, 7, 12, 17], // Trunk
          [2, 7, 12, 17, 6, 8, 11, 13, 16, 18], // Branches
          [2, 7, 12, 17, 6, 8, 11, 13, 16, 18],
          [2, 7, 12, 17, 6, 8, 11, 13, 16, 18]
        ];
      } else if (animType === 'SERVICE') {
        frames = [
          [2],
          [1, 2, 3],
          [0, 1, 2, 3, 4],
          [0, 1, 2, 3, 4, 5, 9],
          [0, 1, 2, 3, 4, 5, 9, 10, 14],
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 22] // Shield
        ];
      } else if (animType === 'FILE') {
        const all = Array.from({ length: 25 }, (_, i) => i);
        frames = [
          all,
          [1, 2, 3, 6, 7, 8, 11, 12, 13, 16, 17, 18, 21, 22, 23],
          [1, 2, 3, 6, 8, 11, 12, 13, 16, 18, 21, 22, 23] // Document
        ];
      } else {
        // MAINFRAME
        const all = Array.from({ length: 25 }, (_, i) => i);
        const border = [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24];
        frames = [
          all,
          border,
          border
        ];
      }

      let frameIndex = 0;
      const seqInterval = setInterval(() => {
        if (frameIndex < frames.length) {
          const currentFrame = frames[frameIndex];
          setGrid(Array(25).fill(null).map((_, i) => ({
            active: currentFrame.includes(i),
            color: animType === 'INTEL' && i === 12 ? '#FF4500' :
              animType === 'AUDIT' ? '#FF4500' :
                animType === 'RED_TEAM' && (i === 11 || i === 13) ? '#FF4500' :
                  animType === 'NETWORK_PEN' && currentFrame.includes(i) ? '#FF4500' :
                    animType === 'APP_SEC' && frameIndex >= 2 && [1, 2, 3, 6, 11].includes(i) ? '#FF4500' :
                      animType === 'SOCIAL_ENG' && frameIndex >= 2 && i === 7 ? '#FF4500' :
                        animType === 'CLOUD_SEC' && frameIndex >= 3 && [2, 10, 14, 22].includes(i) ? '#FF4500' :
                          animType === 'VULN_RES' && frameIndex >= 2 && i === 12 ? '#FF0000' :
                            animType === 'PRIVACY' && frameIndex >= 1 && [6, 7, 8, 11, 13, 16, 17, 18, 1, 2, 3, 5, 9, 10, 14, 15, 19, 21, 22, 23].includes(i) ? '#00BFFF' :
                              animType === 'PRIVACY' && i === 12 ? '#FFFFFF' :
                                animType === 'TERMS' && currentFrame.includes(i) ? '#FF4500' :
                                  animType === 'COOKIES' && currentFrame.includes(i) ? '#FFA500' :
                                    animType === 'DISCLOSURE' && currentFrame.includes(i) ? '#00FF00' :
                                      animType === 'NDA' && frameIndex >= 2 && [7, 12].includes(i) ? '#FF0000' :
                                        animType === 'NDA' && currentFrame.includes(i) ? '#FFFFFF' :
                                          animType === 'ROE' && frameIndex >= 3 && [1, 2, 3, 5, 9, 15, 19, 21, 22, 23].includes(i) ? '#FF0000' :
                                            animType === 'ROE' && currentFrame.includes(i) ? '#FFFFFF' :
                                              animType === 'CAREERS' && currentFrame.includes(i) ? '#00FF00' :
                                                animType === 'PRESS' && frameIndex === 3 && [20, 21, 22, 23, 24].includes(i) ? '#FFFFFF' :
                                                  animType === 'PRESS' && currentFrame.includes(i) ? '#FF4500' :
                                                    animType === 'SPEAKING' && frameIndex >= 3 && [7, 11, 13, 2, 6, 8].includes(i) ? '#FF4500' :
                                                      animType === 'SPEAKING' && currentFrame.includes(i) ? '#FFFFFF' :
                                                        animType === 'TALKS' && frameIndex >= 3 && [1, 2, 3, 4, 5].includes(i) ? '#FF4500' :
                                                          animType === 'PARTNERS' && frameIndex >= 2 && [12, 17].includes(i) ? '#FF4500' :
                                                            animType === 'THANKS' && currentFrame.includes(i) ? '#FFD700' :
                                                              animType === 'SITEMAP' && frameIndex >= 2 && [6, 8, 11, 13, 16, 18].includes(i) ? '#FF4500' : '#FFFFFF'
          })));
          frameIndex++;
        } else {
          clearInterval(seqInterval);
          const t = setTimeout(() => {
            setIsVisible(false);
          }, 400);
          timeouts.push(t);
        }
      }, frameDelay);
      intervals.push(seqInterval);
    };

    return () => {
      intervals.forEach(clearInterval);
      timeouts.forEach(clearTimeout);
    };
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[99998] bg-black flex items-center justify-center pointer-events-auto"
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
              <span>{text}<span className="animate-pulse">_</span></span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
