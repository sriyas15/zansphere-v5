import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function V5Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#fafafa]"
    >
      {/* Ploy.ai style ambient mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-[#fafafa] z-0" />

        <motion.div
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full mix-blend-multiply filter blur-[100px] opacity-40"
          style={{ background: 'radial-gradient(circle, #e0e7ff 0%, rgba(255,255,255,0) 70%)' }}
        />

        <motion.div
          animate={{
            rotate: [360, 270, 180, 90, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full mix-blend-multiply filter blur-[120px] opacity-30"
          style={{ background: 'radial-gradient(circle, #fce7f3 0%, rgba(255,255,255,0) 70%)' }}
        />

        {/* Very subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-20 w-full px-6 flex flex-col items-center text-center mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="px-4 py-1.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm text-xs font-semibold tracking-widest text-gray-500 uppercase mb-8 shadow-sm"
        >
          Engineering Digital Excellence
        </motion.div>

        <h1
          className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] tracking-tight text-gray-900"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Digital Ecosystems
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400"
          >
            That Scale.
          </motion.div>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mt-8 font-normal leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          We engineer scalable software architecture and immersive digital experiences for industry leaders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex gap-4 mt-8"
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-bold uppercase tracking-wider"
          >
            Start Project
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-white border border-gray-200 text-gray-900 rounded-full text-sm font-bold uppercase tracking-wider"
          >
            View Capabilities
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
