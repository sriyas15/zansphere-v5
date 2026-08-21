import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function V5Contact() {
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', message: '', _honey: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const MAX_CHARS = 1000;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('https://formsubmit.co/ajax/contact@zansphere.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Contact Form Submission - Zansphere`,
          ...formData
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ first_name: '', last_name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

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
            className="bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white shadow-[0_8px_40px_rgba(0,0,0,0.04)] relative"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative">
              {/* Honeypot Spam Protection */}
              <input 
                type="text" 
                name="_honey" 
                value={formData._honey} 
                onChange={handleInputChange} 
                style={{ display: 'none' }} 
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-4">First Name</label>
                  <input 
                    type="text" 
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    required
                    maxLength={50}
                    placeholder="John" 
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all shadow-sm text-gray-900 placeholder:text-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-4">Last Name</label>
                  <input 
                    type="text" 
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    required
                    maxLength={50}
                    placeholder="Doe" 
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all shadow-sm text-gray-900 placeholder:text-gray-300"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-4">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  maxLength={100}
                  placeholder="john@company.com" 
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all shadow-sm text-gray-900 placeholder:text-gray-300"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-end pl-4 pr-4">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
                  <span className={`text-xs ${formData.message.length >= MAX_CHARS ? 'text-red-500 font-bold' : 'text-gray-400'}`}>
                    {formData.message.length}/{MAX_CHARS}
                  </span>
                </div>
                <textarea 
                  name="message"
                  required
                  rows="4" 
                  maxLength={MAX_CHARS}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..." 
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all shadow-sm text-gray-900 placeholder:text-gray-300 resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full mt-4 py-4 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white rounded-2xl text-sm font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center z-10">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-medium text-center">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
