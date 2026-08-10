import React from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    desc: 'We analyze your business objectives, technical requirements, and market landscape to formulate a comprehensive roadmap.',
  },
  {
    step: '02',
    title: 'Architecture & Design',
    desc: 'Our architects design scalable, cloud-native infrastructures and our UX team crafts intuitive, high-conversion interfaces.',
  },
  {
    step: '03',
    title: 'Agile Development',
    desc: 'Iterative, sprint-based development ensuring rapid delivery, extreme flexibility, and continuous stakeholder feedback.',
  },
  {
    step: '04',
    title: 'Deployment & Scale',
    desc: 'Seamless deployment pipelines and automated scaling mechanisms ensure your platform performs flawlessly under peak loads.',
  }
];

export default function V5Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-20">
          <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Our Methodology</h2>
          <div className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight max-w-2xl">
            A precise, battle-tested framework for building digital products.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {processSteps.map((item, index) => (
            <motion.div 
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col pt-8"
            >
              {/* Top Line & Node */}
              <div className="absolute top-0 left-0 w-full h-px bg-gray-200 hidden md:block" />
              <div className="absolute top-0 left-0 w-full h-px bg-gray-900 hidden md:block origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50 text-gray-400 font-mono text-xs mb-8">
                {item.step}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-normal pr-4">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
