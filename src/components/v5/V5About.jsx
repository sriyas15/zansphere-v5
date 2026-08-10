import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const stats = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 3, suffix: 'x', label: 'Faster Delivery' },
  { value: 24, suffix: '/7', label: 'Enterprise Support' },
];

const AnimatedCounter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

export default function V5About() {
  const sectionRef = useRef(null);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-[#fafafa] relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* About Text */}
        <div className="max-w-3xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-4xl font-medium text-gray-900 leading-snug tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We are a team of visionary engineers and strategists obsessed with crafting elegant solutions to complex problems. At Zansphere, we don't just write code — <span className="text-gray-400">we architect digital ecosystems that scale with your ambition.</span>
          </motion.h2>
        </div>

        {/* Stats Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between h-40 md:h-48 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tighter" style={{ fontFamily: "'Inter', sans-serif" }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
