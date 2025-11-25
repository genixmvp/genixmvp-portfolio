'use client';

import { motion } from 'framer-motion';

export default function FuturisticHUD() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
            {/* Minimal Top Left Corner Accent */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute top-28 left-8 md:top-32 md:left-12 opacity-10"
            >
                <svg width="120" height="60" viewBox="0 0 120 60" className="opacity-30">
                    <path d="M0 0 H 40 L 50 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
                    <circle cx="55" cy="15" r="1.5" fill="currentColor" className="text-white" />
                </svg>
            </motion.div>

            {/* Minimal Top Right Corner Accent */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.7 }}
                className="absolute top-28 right-8 md:top-32 md:right-12 opacity-10"
            >
                <svg width="120" height="60" viewBox="0 0 120 60" className="opacity-30">
                    <path d="M120 0 H 80 L 70 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
                </svg>
            </motion.div>

            {/* Minimal Bottom Left Corner */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.9 }}
                className="absolute bottom-16 left-8 md:bottom-20 md:left-12 opacity-10"
            >
                <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-30">
                    <path d="M0 60 V 40 M 0 60 H 20" stroke="currentColor" strokeWidth="0.5" className="text-white" />
                </svg>
            </motion.div>

            {/* Minimal Bottom Right Corner */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.1 }}
                className="absolute bottom-16 right-8 md:bottom-20 md:right-12 opacity-10"
            >
                <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-30">
                    <path d="M60 60 V 40 M 60 60 H 40" stroke="currentColor" strokeWidth="0.5" className="text-white" />
                </svg>
            </motion.div>

            {/* Very Subtle Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        </div>
    );
}
