import React, { useState } from 'react';
import Lottie from 'lottie-react';
import enterpriseanimationData from '../../assets/enterpriseanimation.json';
import { motion } from 'framer-motion';
import { Shield, Zap, Cloud, Code, Layers, Globe } from 'lucide-react';

export default function V5Enterprise() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // We can use the same icons but styled for light theme
  const cards = [
    {
      title: "Custom APIs",
      description: "Robust APIs and flexible frameworks that integrate seamlessly with your existing tech stack.",
      icon: Code,
      techs: ["React", "Node js"]
    },
    {
      title: "Cloud Native",
      description: "Scalable cloud architecture on AWS, Azure, and GCP for enterprise-grade reliability.",
      icon: Cloud,
      techs: ["AWS", "Docker"]
    },
    {
      title: "Enterprise Security",
      description: "Ensure compliance, security, and reliability across all departments and systems.",
      icon: Shield,
      techs: ["TypeScript", "Python"]
    },
    {
      title: "Real-time Sync",
      description: "Seamlessly sync with ERPs, CRMs, and cloud platforms, sharing data in real-time.",
      icon: Zap,
      techs: ["Firebase", "Mongo DB"]
    },
    {
      title: "Scalable Architecture",
      description: "Solutions designed to grow with your enterprise and dominate your market.",
      icon: Layers,
      techs: ["Express", "Tailwind CSS"]
    },
    {
      title: "Cross-Platform",
      description: "Cohesive platform supporting your operations across web, mobile, and desktop.",
      icon: Globe,
      techs: ["JavaScript", "Android"]
    }
  ];

  const totalCards = cards.length;

  return (
    <div className="w-full bg-white overflow-hidden py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6">Enterprise Grade Architecture</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-8">
            Built for Enterprise Scale &<br className="hidden md:block" />
            <span className="text-gray-400">Seamless Integration</span>
          </h3>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Focus on your core business while Zansphere handles the technical complexities. Our solutions seamlessly sync with your existing ERPs, CRMs, and cloud platforms.
          </p>
        </div>

        {/* ===== CIRCULAR ORBIT GRID — Desktop ===== */}
        <div className="hidden lg:flex justify-center items-center relative" style={{ height: '700px' }}>

          {/* Decorative orbit rings (Light Theme) */}
          <div className="absolute w-[620px] h-[620px] border border-dashed border-gray-200 rounded-full pointer-events-none animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute w-[420px] h-[420px] border border-gray-100 rounded-full pointer-events-none animate-[spin_40s_linear_infinite_reverse]"></div>
          <div className="absolute w-[220px] h-[220px] border border-gray-50 rounded-full pointer-events-none"></div>

          {/* Center Hub */}
          <motion.div
            animate={{
              scale: hoveredIndex !== null ? 0.95 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute z-10 w-44 h-44 bg-white/80 backdrop-blur-2xl rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex items-center justify-center p-6 border border-gray-100"
          >
             {/* If the Lottie is too bright, mix-blend-multiply helps it sit on white */}
            <Lottie animationData={enterpriseanimationData} loop={true} className="w-full h-full mix-blend-multiply opacity-80" />
          </motion.div>

          {/* Orbiting Cards */}
          {cards.map((card, index) => {
            const angle = ((index * (360 / totalCards)) - 90) * (Math.PI / 180);
            const radius = 280; // Distance from center
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
            const IconComponent = card.icon;

            return (
              <motion.div
                key={index}
                className="absolute z-20"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                animate={{
                  scale: isHovered ? 1.1 : isOtherHovered ? 0.9 : 1,
                  opacity: isOtherHovered ? 0.4 : 1,
                  zIndex: isHovered ? 50 : 20,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`-translate-x-1/2 -translate-y-1/2 w-64 p-6 rounded-3xl bg-white/90 backdrop-blur-xl border transition-all duration-300 cursor-pointer ${
                    isHovered
                      ? 'shadow-[0_20px_60px_rgba(0,0,0,0.12)] border-gray-900'
                      : 'shadow-xl border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-5 border border-gray-100">
                    <IconComponent size={24} className="text-gray-900" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2 tracking-tight">{card.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            );
          })}

          {/* SVG Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
            {cards.map((_, index) => {
              const angle = ((index * (360 / totalCards)) - 90) * (Math.PI / 180);
              const radius = 280;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isHovered = hoveredIndex === index;
              return (
                <line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${x}px)`}
                  y2={`calc(50% + ${y}px)`}
                  stroke={isHovered ? '#111827' : '#e5e7eb'}
                  strokeWidth={isHovered ? 2 : 1}
                  strokeDasharray={isHovered ? "0" : "4 4"}
                  style={{ transition: 'stroke 0.3s, stroke-width 0.3s, stroke-dasharray 0.3s' }}
                />
              );
            })}
          </svg>
        </div>

        {/* ===== MOBILE FALLBACK ===== */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-4 border border-gray-100">
                  <IconComponent size={24} className="text-gray-900" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">{card.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
