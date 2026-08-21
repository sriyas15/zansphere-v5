import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  'React', 'Node.js', 'AWS', 'Python', 'Docker', 'TypeScript', 'Firebase', 'MongoDB'
];

export default function V5Tech() {
  const icons = import.meta.glob('../../assets/*.png', { eager: true });

  const getIconByName = (stackName) => {
    let sanitized = stackName.replace(/\s+/g, '-');
    if (stackName === 'Node.js') sanitized = 'Node-js';
    if (stackName === 'MongoDB') sanitized = 'Mongo-DB';
    const match = Object.entries(icons).find(([path]) => path.includes(`${sanitized}.png`));
    return match ? match[1].default : null;
  };

  return (
    <section className="py-24 bg-[#fafafa] overflow-hidden border-y border-gray-200">
      <div className="flex w-full overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-16 md:gap-32 px-8"
        >
          {[...techStack, ...techStack, ...techStack].map((tech, index) => {
            const iconSrc = getIconByName(tech);
            return (
              <div 
                key={`${tech}-${index}`} 
                className="flex items-center gap-6"
              >
                {iconSrc && (
                  <img 
                    src={iconSrc} 
                    alt={tech} 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain" 
                  />
                )}
                <span className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tighter" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {tech}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
