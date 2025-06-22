"use client";

import Hero from './components/Hero.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "80%", "100%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);

  return (
    <main ref={containerRef} className="relative bg-black">
      <motion.div 
        style={{ x, y, scale, opacity }}
        className="absolute top-[5%] right-[-30vh] h-[80vh] w-[80vh] z-0"
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_rgba(255,255,255,0)_50%)]"></div>
      </motion.div>

      <div className="relative z-10">
        <Hero />
        <Leaderboard />
      </div>
    </main>
  );
}
