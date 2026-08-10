import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Hexagon, Triangle, Box, Circle, Command, Slack } from 'lucide-react';

const partners = [
  { name: 'NEXUS', icon: Hexagon },
  { name: 'QUANTUM', icon: Zap },
  { name: 'AEGIS', icon: Shield },
  { name: 'VERTEX', icon: Triangle },
  { name: 'SYNTH', icon: Box },
  { name: 'OMNI', icon: Circle },
  { name: 'COMMAND', icon: Command },
  { name: 'SLACK', icon: Slack },
];

export default function V5Trusted() {
  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16 text-center">
        <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400">
          Trusted By Leading Innovators
        </h3>
      </div>

      <div className="flex w-full overflow-hidden whitespace-nowrap relative">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-24 px-12"
        >
          {[...partners, ...partners, ...partners].map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div 
                key={`${partner.name}-${index}`} 
                className="flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-pointer"
              >
                <Icon size={32} className="text-gray-900" />
                <span className="text-2xl font-black text-gray-900 tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {partner.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
