import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import logo from '../../images/zanSphereLogo.svg'; // Adjusted path

const PolicyLayout = ({ pageTitle, children }) => {
  return (
    <div className="bg-white">
      {/* Header - Simple version */}
      <header className="w-full bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="/">
            <img
              src={logo}
              alt="ZanSphere Logo"
              className="w-[180px] h-[65px] object-cover cursor-pointer"
            />
          </a>
          <a href="/" className="px-6 py-2 bg-transparent border border-black text-black hover:bg-black hover:text-white transition duration-300 rounded-full">
            Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">{pageTitle}</h1>
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </motion.div>
      </div>
      
      {/* Footer - Simplified */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} ZanSphere Private Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

PolicyLayout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PolicyLayout;