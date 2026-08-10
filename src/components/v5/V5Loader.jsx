import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function V5Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Smooth geometric loading progression
    const duration = 2500;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      // Ease out cubic logic for numbers
      const easeOut = 1 - Math.pow(1 - currentStep / steps, 3);
      const currentProgress = Math.min(100, Math.floor(easeOut * 100));
      
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => onComplete(), 1000); // Wait for exit animation
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          exit={{ y: '-100%', filter: 'blur(10px)', opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fafafa] overflow-hidden"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Minimalist Geometric Ring */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Background Ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                <motion.circle 
                  cx="50" cy="50" r="48" fill="none" stroke="#111827" strokeWidth="2"
                  strokeDasharray="301.59" // 2 * pi * 48
                  strokeDashoffset={301.59 - (301.59 * progress) / 100}
                  strokeLinecap="round"
                  transition={{ duration: 0.1 }}
                />
              </svg>
              {/* Percentage */}
              <div className="text-3xl font-light text-gray-900 tracking-tighter" style={{ fontFamily: "'Inter', sans-serif" }}>
                {progress}
              </div>
            </div>
            
            <div className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400">
              Initializing Environment
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
