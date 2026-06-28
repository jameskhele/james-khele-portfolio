"use client";

import { motion } from "framer-motion";
import { Server, Layout, Bot, GitBranch, Workflow, Database } from "lucide-react";

const capabilities = [
  {
    icon: <Layout className="text-cyan-400" size={24} />,
    title: "Frontend Engineering",
    desc: "Building responsive, performant interfaces with React, Next.js, and TypeScript. SSR, code splitting, Tailwind CSS, and Lighthouse 96+ production sites.",
    className: "md:col-span-2",
  },
  {
    icon: <Server className="text-amber-400" size={24} />,
    title: "Backend & APIs",
    desc: "Designing production REST APIs with Node.js, FastAPI, and Python. Connection pooling, idempotent writes, structured logging, and 35% latency reduction.",
    className: "md:col-span-1",
  },
  {
    icon: <Bot className="text-emerald-400" size={24} />,
    title: "AI & Multi-Agent Systems",
    desc: "Architecting LangGraph orchestration engines, RAG pipelines with vector databases, and real-time multi-agent platforms with sub-200ms latency.",
    className: "md:col-span-1",
  },
  {
    icon: <Workflow className="text-rose-400" size={24} />,
    title: "Business Automation",
    desc: "Building webhook-triggered workflows with n8n and Make.com, integrating HubSpot, Twilio, and Clearbit APIs to save clients 18+ hours/month.",
    className: "md:col-span-1",
  },
  {
    icon: <Database className="text-violet-400" size={24} />,
    title: "Database Design",
    desc: "PostgreSQL, MySQL, Redis. Normalized schemas, query optimization, connection pooling, and database infrastructure supporting 500+ concurrent users.",
    className: "md:col-span-1",
  },
  {
    icon: <GitBranch className="text-indigo-400" size={24} />,
    title: "DevOps & CI/CD",
    desc: "Docker containerization, GitHub Actions pipelines, zero-downtime deployments, production monitoring, and incident response with 99.8% uptime.",
    className: "md:col-span-1",
  },
];

export default function BentoGrid() {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto px-4 py-20 border-t border-white/5">
      <div className="mb-12">
        <h2 className="text-sm font-mono text-indigo-400 tracking-wider uppercase mb-2">What I Do</h2>
        <h3 className="text-2xl font-bold text-white">Core Engineering Skills</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {capabilities.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className={`glass-panel p-7 ${item.className}`}
          >
            <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-5">
              {item.icon}
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
