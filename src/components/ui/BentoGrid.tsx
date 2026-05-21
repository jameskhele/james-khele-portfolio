"use client";

import { motion } from "framer-motion";
import { Network, Cpu, LayoutTemplate, Server, Database, Bot } from "lucide-react";

const capabilities = [
  {
    icon: <Network className="text-indigo-400" size={24} />,
    title: "Distributed Architecture",
    desc: "Designing event-driven architectures and scalable backend APIs using Node.js, Prisma, and PostgreSQL. Focused on sub-10ms latency and high-availability corridors.",
    className: "md:col-span-2",
  },
  {
    icon: <Bot className="text-emerald-400" size={24} />,
    title: "Autonomous Intelligence",
    desc: "Integrating LLM capabilities via Model Context Protocol (MCP) to build deterministic, multi-agent workflows that automate enterprise operations.",
    className: "md:col-span-1",
  },
  {
    icon: <LayoutTemplate className="text-cyan-400" size={24} />,
    title: "Production Frontend",
    desc: "Building reactive, SOC-2 aligned enterprise dashboards. Leveraging Next.js App Router, Tailwind CSS, and Zustand for state-vault management.",
    className: "md:col-span-3",
  },
];

export default function BentoGrid() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-24">
      <div className="mb-12">
        <h2 className="text-sm font-mono text-indigo-400 tracking-wider uppercase mb-2">Capabilities</h2>
        <h3 className="text-2xl font-bold text-white">Infrastructure & Core Telemetry</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {capabilities.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`glass-panel p-8 ${item.className}`}
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6">
              {item.icon}
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
