"use client";

import { motion } from "framer-motion";
import { Terminal, Mail, ShieldCheck } from "lucide-react";
import Image from "next/image";
import profilePic from "@/../public/profile.png";

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 flex items-center justify-center px-4 overflow-hidden border-b border-white/5">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#0A0A0B] to-[#0A0A0B] -z-10" />

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Copy & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-indigo-500/5 border border-indigo-500/20 text-xs font-mono text-indigo-300">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            GLOBAL ROLES // SYSTEMS NOMINAL
          </div>

          <h1 className="text-xl font-mono text-indigo-400 mb-2 tracking-wider">JAMES KHELE</h1>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Architecting Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">SaaS & Autonomous AI Systems</span>.
          </h2>

          <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
            I am a <strong>Full-Stack Product Engineer</strong> specializing in Nuxt.js, Next.js, and Dart. Currently building US-based enterprise SaaS infrastructures (Intellitoggle, Technidox) at <strong>VenturSeed (USA)</strong>. Focused on global-scale operations and high-availability systems.
          </p>

          {/* Social and Action Grid */}
          <div className="flex flex-wrap gap-4 items-center w-full">
            <a
              href="mailto:jameskhele008@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02]"
            >
              <Mail size={16} />
              LET'S TALK
            </a>
            
            <a
              href="https://github.com/jameskhele"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-[1.02]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GITHUB
            </a>

            <a
              href="https://www.linkedin.com/in/jameskhele"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-[1.02]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
              </svg>
              LINKEDIN
            </a>
          </div>
        </motion.div>

        {/* Right Column: Premium Glowing Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end w-full"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Pulsing Outer Neon Glows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse -z-10" />
            
            {/* Hexagonal / Circular Glassmorphic Frame */}
            <div className="relative w-full h-full p-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_50px_rgba(99,102,241,0.15)] flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
                <Image
                  src={profilePic}
                  alt="James Khele"
                  fill
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Status Badge overlay */}
              <div className="absolute bottom-4 right-4 bg-[#0A0A0B] border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xl">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono font-semibold tracking-wider text-emerald-400 uppercase">ACTIVE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
