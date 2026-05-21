"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, Smartphone, Bot, GitBranch } from "lucide-react";

const capabilities = [
  {
    icon: <LayoutTemplate className="text-cyan-400" size={24} />,
    title: "Frontend Architecture",
    desc: "Production expertise in Nuxt.js, Vue.js, and Next.js. Deployed highly optimized, SEO-first, and reactive web applications featuring sub-second core web vitals.",
    className: "md:col-span-2",
  },
  {
    icon: <Smartphone className="text-amber-400" size={24} />,
    title: "Cross-Platform Engineering",
    desc: "Leveraging Dart and Flutter to build high-performance, native application pipelines running seamlessly across mobile, web, and desktop architectures.",
    className: "md:col-span-1",
  },
  {
    icon: <Bot className="text-emerald-400" size={24} />,
    title: "AI & Core Automation",
    desc: "Integrating advanced LLM workflows and predictive algorithms into business-critical systems to automate high-frequency enterprise decision corridors.",
    className: "md:col-span-1",
  },
  {
    icon: <GitBranch className="text-indigo-400" size={24} />,
    title: "CI/CD & Hardened DevOps",
    desc: "Securing delivery channels using GitLab CI/CD, GitHub Actions, and Docker containers, ensuring robust zero-downtime microservice deployments.",
    className: "md:col-span-2",
  },
];

export default function BentoGrid() {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto px-4 py-20 border-t border-white/5">
      <div className="mb-12">
        <h2 className="text-sm font-mono text-indigo-400 tracking-wider uppercase mb-2">Capabilities</h2>
        <h3 className="text-2xl font-bold text-white">Core Engineering Expertise</h3>
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
