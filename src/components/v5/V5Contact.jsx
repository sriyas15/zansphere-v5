import React from 'react';
import { motion } from 'framer-motion';

export default function V5Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
      
      {/* Soft Ambient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] right-[-10%] w-[50%] h-[70%] rounded-full mix-blend-multiply filter blur-[120px] opacity-40"
          style={{ background: 'radial-gradient(circle, #e0e7ff 0%, rgba(255,255,255,0) 70%)' }} 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full mix-blend-multiply filter blur-[100px] opacity-30"
          style={{ background: 'radial-gradient(circle, #fce7f3 0%, rgba(255,255,255,0) 70%)' }} 
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left Side: Info */}
        <div className="w-full md:w-5/12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">Let's Talk.</h3>
            <p className="text-lg text-gray-500 leading-relaxed mb-12">
              Ready to build something extraordinary? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</span>
                <a href="mailto:contact@zansphere.com" className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors">
                  contact@zansphere.com
                </a>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</span>
                <span className="text-lg font-semibold text-gray-900">
                  Available in India and Dubai
                </span>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Response Time</span>
                <span className="text-lg font-semibold text-gray-900">
                  Within 24 hours
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-7/12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white shadow-[0_8px_40px_rgba(0,0,0,0.04)]"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-4">First Name</label>
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all shadow-sm text-gray-900 placeholder:text-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-4">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all shadow-sm text-gray-900 placeholder:text-gray-300"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-4">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all shadow-sm text-gray-900 placeholder:text-gray-300"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-4">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your project..." 
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all shadow-sm text-gray-900 placeholder:text-gray-300 resize-none"
                ></textarea>
              </div>
              
              <button className="w-full mt-4 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl text-sm font-bold uppercase tracking-wider transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
