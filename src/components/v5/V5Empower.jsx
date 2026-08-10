import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Target, Zap, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

const solutions = [
  {
    id: 0,
    title: "Custom Solutions",
    description: "Tailored software designed to meet your specific business challenges and objectives.",
    icon: Target,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    benefits: ["100% tailored to your needs", "Complete code ownership"]
  },
  {
    id: 1,
    title: "Agile Development",
    description: "Iterative development cycles for flexibility and rapid delivery of high-quality software.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    benefits: ["Faster time-to-market", "Continuous feedback loop"]
  },
  {
    id: 2,
    title: "Expert Consultation",
    description: "Strategic guidance from industry veterans to align technology with your business goals.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    benefits: ["Strategic roadmapping", "Technology selection"]
  },
  {
    id: 3,
    title: "Scalable Architecture",
    description: "Future-proof solutions built to grow with your business and handle massive demands.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    benefits: ["Auto-scaling capabilities", "Cloud-native design"]
  }
];

const SolutionCard = ({ solution, index, setActiveIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  
  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  const IconComponent = solution.icon;

  return (
    <div ref={ref} className="w-full min-h-[40vh] md:min-h-screen flex items-center py-12 md:py-0">
      <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-gray-100 w-full transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 border border-gray-100">
          <IconComponent size={32} className="text-gray-900" />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{solution.title}</h3>
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8">
          {solution.description}
        </p>
        <div className="space-y-4 pt-8 border-t border-gray-100">
          {solution.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-gray-400" />
              <span className="text-base font-semibold text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
        {/* Mobile only image display */}
        <div className="md:hidden mt-8 rounded-2xl overflow-hidden h-48 relative">
           <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default function V5Empower() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row relative">
        
        {/* Left Side (Sticky Pinned) */}
        <div className="w-full md:w-5/12 md:h-screen md:sticky md:top-0 pt-24 md:pt-0 flex flex-col justify-center pr-0 md:pr-16 relative z-10">
          <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6">Transformative Solutions</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-8">
            Solutions That <span className="text-gray-400">Empower</span> Your Business
          </h3>
          <p className="text-lg text-gray-500 leading-relaxed mb-12 max-w-md">
            Elevate your operational excellence by leveraging our custom, scalable, and innovative software solutions designed for the modern enterprise.
          </p>

          {/* Morphing Image Display */}
          <div className="hidden md:block relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 bg-gray-100">
            <AnimatePresence mode="popLayout">
              <motion.img 
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src={solutions[activeIndex].image} 
                alt={solutions[activeIndex].title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 border-[6px] border-white/20 rounded-[2rem] pointer-events-none mix-blend-overlay"></div>
          </div>
        </div>

        {/* Right Side (Scrolls) */}
        <div className="w-full md:w-7/12 relative z-0">
           {/* Add top padding so first card centers when sticky hits top */}
           <div className="md:pt-[30vh] pb-[10vh] md:pb-[30vh]">
             {solutions.map((solution, index) => (
               <SolutionCard 
                 key={solution.id} 
                 solution={solution} 
                 index={index} 
                 setActiveIndex={setActiveIndex} 
               />
             ))}
           </div>
        </div>

      </div>
    </section>
  );
}
