"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-white min-h-screen flex items-center relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Crowdsourcing our collective intelligence to build the best AI
            </h1>
            <p className="mb-8 text-gray-300">
              Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars. Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI. We run competitions between AI models to find and reward the best AI models. As a result, our users will be able to access the latest cutting edge AI models.
            </p>
            <button className="border border-red-500 rounded-full px-8 py-3 text-white hover:bg-red-500 transition-colors">
              Use The Cutting Edge AI
            </button>
          </div>
          <div className="md:w-1/2">
            {/* Placeholder for the planet image */}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
