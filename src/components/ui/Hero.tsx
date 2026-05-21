"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0A0A0B] to-[#0A0A0B] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center max-w-3xl"
      >
        <div className="flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          SYSTEMS NOMINAL // AVAILABLE FOR DEPLOYMENT
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Architecting Scalable SaaS & <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Autonomous AI Systems.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
          I am a Full-Stack Product Engineer specializing in high-throughput enterprise infrastructure, AI agent consensus networks, and robust cloud deployments.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
            <Terminal size={18} />
            INITIALIZE CONTACT
          </button>
          <button className="px-6 py-3 rounded-lg bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors">
            VIEW ARCHITECTURE
          </button>
        </div>
      </motion.div>
    </section>
  );
}
