import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const careerPoints = [
  { title: "Innovative Projects", desc: "Work on cutting-edge technologies and impactful solutions for diverse global industries." },
  { title: "Collaborative Culture", desc: "Be part of a supportive, inclusive, and dynamic team that values creativity and teamwork." },
  { title: "Growth Opportunities", desc: "We invest in your development with continuous learning, professional training, and clear career advancement paths." }
];

export default function V5Careers() {
  return (
    <section id="careers" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16">
        
        {/* Left Side */}
        <div className="w-full md:w-5/12 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Join Our Team at Zansphere</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-8">
              Shape the Future of Software
            </h3>
            <p className="text-gray-500 leading-relaxed mb-10">
              We're looking for passionate innovators, creative thinkers, and problem solvers. Explore exciting career opportunities and grow with a company that values talent and dedication.
            </p>
            <a href="mailto:contact@zansphere.com" className="inline-flex items-center gap-3 px-8 py-3.5 border border-gray-200 hover:border-gray-900 text-gray-900 rounded-full text-sm font-bold uppercase tracking-wider transition-colors shadow-sm w-fit group">
              Email Resume
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right Side - Points */}
        <div className="w-full md:w-7/12">
          <div className="flex flex-col gap-4">
            {careerPoints.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col justify-center p-6 md:p-8 bg-gray-50 hover:bg-gray-900 rounded-3xl transition-colors duration-500 cursor-pointer"
              >
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-500 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
