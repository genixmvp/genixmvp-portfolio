'use client';

import './globals.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FuturisticHUD from '@/components/FuturisticHUD';
import ProjectGallery from '@/components/ProjectGallery';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      <FuturisticHUD />

      {/* === HERO SECTION === */}
      <motion.section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Small Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-gray-400">
            Build a Web Code AI App in minutes
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight"
        >
          <span className="block text-white">Create at the</span>
          <span className="block bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
            Speed of Thought
          </span>
        </motion.h1>

        {/* Visual Element - Glowing Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="my-16 relative"
        >
          {/* Main glowing element */}
          <div className="relative w-[280px] sm:w-[400px] md:w-[500px] h-14 rounded-2xl overflow-hidden">
            {/* Gradient bar */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-300 opacity-90"></div>

            {/* Animated shine effect */}
            <motion.div
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{ width: '50%' }}
            />

            {/* Glass overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          </div>

          {/* Glow effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[300%] bg-purple-500/20 blur-[100px] rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[250%] bg-blue-400/20 blur-[80px] rounded-full"></div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-8"
        >
          <Link
            href="/projects"
            className="group px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            Get early access
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="px-8 py-3.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300"
          >
            Play Video Demo
          </Link>
        </motion.div>

        {/* Subtle footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-xs text-gray-600 tracking-wide"
        >
          No credit card required
        </motion.p>
      </motion.section>

      {/* === PROJECTS GALLERY === */}
      <section id="projects" className="relative z-10 py-20">
        <ProjectGallery />
      </section>

      {/* === CONTACT === */}
      <motion.section
        id="contact"
        className="text-center py-24 px-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Let's Build the Future
          </h2>
          <p className="text-gray-400 mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
            Want to collaborate or hire me? I'm always open to new challenges — let's talk.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Get in touch
          </Link>
        </div>
      </motion.section>

      <footer className="py-10 text-center text-xs text-gray-600 border-t border-white/5 relative z-10">
        © {new Date().getFullYear()} Celeste Navarro — Crafted with precision.
      </footer>
    </div>
  );
}
