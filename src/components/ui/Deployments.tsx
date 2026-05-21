"use client";

import { motion } from "framer-motion";
import { ExternalLink, Terminal, Activity } from "lucide-react";

const deployments = [
  {
    id: "aether-os",
    title: "AETHER-OS",
    type: "Enterprise Autonomous Orchestrator",
    stack: ["Next.js Turbopack", "Fast-WS", "Zustand", "Prisma"],
    desc: "Engineered a sovereign multi-agent intelligence operating system. Built a real-time transactional credit gateway and a high-frequency websocket ledger to automate and monetize decentralized GPU compute workflows.",
    metrics: "Simulated $150k risk-budget allocations across Solana/Base corridors with 0% latency drift.",
    github: "#",
    live: "https://aether-os.vercel.app",
    color: "from-emerald-500/20 to-transparent",
    border: "border-emerald-500/30",
  },
  {
    id: "examiner",
    title: "EXAMINER",
    type: "Scale-Ready Assessment Engine",
    stack: ["React", "Node.js", "Cloud Architecture"],
    desc: "Developed a high-concurrency evaluation platform designed to handle massive simultaneous user loads without state corruption. Implemented robust authentication and dynamic rendering pipelines.",
    metrics: "Engineered for 99.9% uptime during peak concurrent assessment windows.",
    github: "#",
    live: "#",
    color: "from-indigo-500/20 to-transparent",
    border: "border-indigo-500/30",
  },
];

export default function Deployments() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-24 border-t border-white/5">
      <div className="mb-12">
        <h2 className="text-sm font-mono text-indigo-400 tracking-wider uppercase mb-2">Architecture Profiles</h2>
        <h3 className="text-2xl font-bold text-white">Mission Deployments</h3>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        {deployments.map((sys, idx) => (
          <motion.div
            key={sys.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className={`relative overflow-hidden glass-panel p-8 md:p-10`}
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${sys.color} via-transparent to-transparent`} />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-2xl font-bold text-white">{sys.title}</h4>
                  <span className="glass-pill text-xs flex items-center gap-1.5 text-emerald-400">
                    <Activity size={12} />
                    LIVE
                  </span>
                </div>
                <p className="text-sm font-mono text-gray-500">{sys.type}</p>
              </div>
              
              <div className="flex gap-3">
                <a href={sys.github} className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white" title="View Source">
                  <Terminal size={18} />
                </a>
                <a href={sys.live} className="p-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors" title="Live Telemetry">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
              {sys.desc}
            </p>

            <div className="mb-8 p-4 rounded-lg bg-white/5 border border-white/10 border-l-2 border-l-indigo-500">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider block mb-1">Production Impact</span>
              <p className="text-sm text-gray-300">{sys.metrics}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {sys.stack.map(tech => (
                <span key={tech} className="glass-pill">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
