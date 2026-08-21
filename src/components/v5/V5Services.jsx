import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import software from '../../images/custom-software.png';
import app from '../../images/mobile-apps.png';
import web from '../../images/web-developement.png';
import cloud from '../../images/cloud-devops.png';
import qa from '../../images/qa-automation.png';
import ai from '../../images/ai-and-ml.png';

const services = [
  {
    id: '01', title: 'Custom Software Development', image: software,
    description: "Tailored solutions built from the ground up to meet your unique business requirements and drive operational excellence.",
    metric: "+40% Efficiency",
    stats: [
      { value: "150+", label: "Projects" },
      { value: "4.9", label: "Rating" },
      { value: "8-12", label: "Weeks" }
    ]
  },
  {
    id: '02', title: 'Mobile App Development', image: app,
    description: "Native and cross-platform mobile applications that engage users and deliver seamless experiences across all devices.",
    metric: "500K+ Downloads",
    stats: [
      { value: "80+", label: "Apps Built" },
      { value: "500K+", label: "Downloads" },
      { value: "6-10", label: "Weeks" }
    ]
  },
  {
    id: '03', title: 'Web Development & Design', image: web,
    description: "Modern, responsive websites and web applications that convert visitors into customers and enhance your digital presence.",
    metric: "+65% Conversions",
    stats: [
      { value: "200+", label: "Websites" },
      { value: "+65%", label: "Conversions" },
      { value: "4-8", label: "Weeks" }
    ]
  },
  {
    id: '04', title: 'Cloud & DevOps Solutions', image: cloud,
    description: "Scalable cloud architecture, CI/CD pipelines, and DevOps practices to accelerate your development lifecycle and improve reliability.",
    metric: "3x Faster Deployments",
    stats: [
      { value: "100+", label: "Migrations" },
      { value: "3x", label: "Faster" },
      { value: "2-6", label: "Weeks Setup" }
    ]
  },
  {
    id: '05', title: 'QA & Testing Automation', image: qa,
    description: "Comprehensive quality assurance and automated testing services to ensure your software meets the highest standards.",
    metric: "-80% Critical Bugs",
    stats: [
      { value: "120+", label: "Test Cycles" },
      { value: "99.9%", label: "Coverage" },
      { value: "1-3", label: "Weeks/Cycle" }
    ]
  },
  {
    id: '06', title: 'AI & ML Solutions', image: ai,
    description: "Advanced machine learning and AI solutions that unlock insights from your data and automate complex business processes.",
    metric: "Data-Driven Insights",
    stats: [
      { value: "40+", label: "AI Models" },
      { value: "85%+", label: "Accuracy" },
      { value: "6-12", label: "Weeks/MVP" }
    ]
  },
];

export default function V5Services() {
  const containerRef = useRef(null);
  const numCards = services.length;
  const numTransitions = Math.max(1, numCards - 1);
  // Total scroll height to allow transitions
  const scrollHeight = `${numTransitions * 100}vh`;

  // Track scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Apply momentum smoothing to eliminate scroll lag and jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section id="services" className="bg-[#fafafa]">

      {/* Intro Header (Normal flow, scrolls away naturally before cards stick) */}
      <div className="pt-16 pb-8 md:pt-24 md:pb-8 flex flex-col items-center justify-center text-center px-6 md:px-12">
        <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6">Our Capabilities</h2>
        <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto mb-8">
          Powering the engineering behind digital ecosystems. <span className="text-gray-400">Scalable by default, transformative by design.</span>
        </p>
      </div>

      {/* Scrollable Container for Cards */}
      <div ref={containerRef} className="relative w-full" style={{ height: scrollHeight }}>
        {/* Sticky Stacking Cards Container */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {services.map((service, i) => {
            // Each card takes 1 fraction of the total scrollable distance to slide up
            const startReveal = i / numTransitions;
            const endReveal = (i + 1) / numTransitions;

            // The card slides UP (-120%) to reveal the next card
            const y = useTransform(smoothProgress, [startReveal, endReveal], ['0%', '-120%']);

            // The next card scales up slightly as it gets revealed
            const scaleStart = (i - 1) / numTransitions;
            const scaleEnd = i / numTransitions;
            const scale = useTransform(smoothProgress, [scaleStart, scaleEnd], [i === 0 ? 1 : 0.9, 1]);

            // Slight fade in as it scales
            const opacity = useTransform(smoothProgress, [scaleStart, scaleEnd], [i === 0 ? 1 : 0.5, 1]);

            return (
              <motion.div
                key={service.id}
                className="absolute w-full max-w-[1200px] h-[80vh] md:h-[70vh] bg-white rounded-[2.5rem] shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-200 overflow-hidden flex flex-col md:flex-row transform origin-center px-6 md:px-0"
                style={{
                  zIndex: numCards - i, // Card 0 is on top of Card 1
                  y,
                  scale,
                  opacity,
                  willChange: "transform, opacity" // Hardware acceleration hint
                }}
              >
                {/* Left side: Image */}
                <div className="w-full md:w-5/12 h-64 md:h-full relative overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-fill relative z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-0 pointer-events-none" />
                  <div className="absolute bottom-8 left-8 text-white z-10">
                    <div className="text-sm font-mono tracking-widest uppercase mb-2 opacity-80">{service.id}</div>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Right side: Details */}
                <div className="w-full md:w-7/12 h-full flex flex-col justify-center p-8 md:p-16 bg-white overflow-y-auto">

                  <div className="mb-12">
                    <h4 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500">
                      {service.metric}
                    </h4>
                    <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                    {service.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col gap-1 pb-4 border-b border-gray-100">
                        <div className="text-2xl font-bold text-gray-900 tracking-tight">{stat.value}</div>
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full md:w-auto self-start px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 group"
                  >
                    Start Project
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
