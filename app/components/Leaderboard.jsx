"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { leaderboardData } from '../constants';
import TrendIcon from './TrendIcon.jsx';

const Leaderboard = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="text-white min-h-screen flex flex-col items-center justify-center py-20 relative"
    >
      <div className="container mx-auto px-4 w-full relative z-10">
        <div className="flex justify-between items-center mb-8 flex-col md:flex-row text-center md:text-left">
            <div className="max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-bold">LLM Leaderboard</h2>
                <p className="text-lg mt-2 text-gray-400">We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a large number of different evaluation tasks. The higher the score, the better the LLM.</p>
            </div>
          <button className="border border-red-500 rounded-full px-8 py-3 text-white hover:bg-red-500 transition-colors mt-6 md:mt-0">
            Submit your model
          </button>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
            <thead className="text-gray-400">
                <tr className="border-b border-gray-700">
                <th className="p-4 font-normal">#</th>
                <th className="p-4 font-normal">Model Name</th>
                <th className="p-4 font-normal text-right">Average</th>
                <th className="p-4 font-normal text-right">ARC</th>
                <th className="p-4 font-normal text-right">HellaSwag</th>
                <th className="p-4 font-normal text-right">MMLU</th>
                <th className="p-4 font-normal text-right">TruthfulQA</th>
                <th className="p-4 font-normal text-right">Winogrande</th>
                <th className="p-4 font-normal text-right">GSM8K</th>
                <th className="p-4 font-normal text-right">Usage</th>
                </tr>
            </thead>
            <tbody className="text-gray-200">
                {leaderboardData.map((row) => (
                <tr key={row.rank} className="border-b border-gray-800 bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 flex items-center gap-2"><TrendIcon trend={row.trend} /> {row.rank}</td>
                    <td className="p-4">{row.model}</td>
                    <td className="p-4 text-right">{row.avg}</td>
                    <td className="p-4 text-right">{row.arc}</td>
                    <td className="p-4 text-right">{row.hella}</td>
                    <td className="p-4 text-right">{row.mmlu}</td>
                    <td className="p-4 text-right">{row.truth}</td>
                    <td className="p-4 text-right">{row.wino}</td>
                    <td className="p-4 text-right">{row.gsm}</td>
                    <td className="p-4 text-right">{row.usage}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
       <div className="absolute bottom-10">
          <svg className="animate-bounce" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20L12 4M12 20L18 14M12 20L6 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
      </div>
    </motion.section>
  );
};

export default Leaderboard; 