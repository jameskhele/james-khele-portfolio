"use client";

import { motion } from "framer-motion";
import { ExternalLink, Activity } from "lucide-react";

const projects = [
  {
    id: "aether-os",
    title: "AETHER-OS",
    type: "Real-Time Distributed AI Backend Platform",
    stack: ["FastAPI", "Python", "WebSockets", "ChromaDB", "Docker", "PostgreSQL", "Next.js"],
    desc: "Architected a real-time event-driven microservice system in Python using FastAPI and WebSockets, establishing bidirectional connection lifecycles with under 200ms latency. Developed vector-search RAG retrieval pipelines in ChromaDB with optimized document chunking, achieving a 40% improvement in context relevance. Fully containerized with Docker.",
    metrics: "Under 200ms inter-agent latency · 40% RAG relevance improvement · 4-minute containerized deploys",
    github: "https://github.com/jameskhele/AETHER-OS",
    live: "https://aether-os-web.vercel.app/",
    color: "from-emerald-500/20 to-transparent",
    border: "border-emerald-500/30",
  },
  {
    id: "bridgeforge",
    title: "BridgeForge",
    type: "B2B Automation Platform for Revenue Operations",
    stack: ["React", "Next.js", "Node.js", "n8n", "Make.com", "HubSpot API", "Twilio API", "PostgreSQL"],
    desc: "Built a 6-tool B2B automation suite — Friction Auditor, Pitch Builder, Margin Calculator, Legal Vault, Dashboard, and Operator Mode — that audits business workflows and deploys middleware automations. Connects HubSpot, Twilio, and Clearbit APIs, saving clients 18+ hours/month and boosting conversion rates.",
    metrics: "18+ hours/month saved per client · 35% increase in lead-to-call conversion · 6 integrated tools",
    github: "https://github.com/jameskhele/bridgeforge-launchpad",
    live: "https://jameskhele.github.io/bridgeforge-launchpad/",
    color: "from-indigo-500/20 to-transparent",
    border: "border-indigo-500/30",
  },
  {
    id: "examiner",
    title: "EXAMINER",
    type: "Java Examination Scheduler (Capstone Project)",
    stack: ["Java", "MySQL", "JDBC", "JUnit"],
    desc: "Engineered a Java scheduling application applying OOP principles to map 50+ subject categories and 800+ entities. Normalized database schemas in MySQL to 3NF and utilized JDBC to enforce transaction boundaries and database integrity. Implemented backtracking search and constraint propagation to resolve scheduling resources efficiently.",
    metrics: "Maps 50+ subject categories · 800+ entities mapped · reduces admin overhead by 38 hours per semester",
    github: "https://github.com/jameskhele/EXAMINER",
    live: "",
    color: "from-cyan-500/20 to-transparent",
    border: "border-cyan-500/30",
  },
];

export default function Deployments() {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto px-4 py-20 border-t border-white/5">
      <div className="mb-12">
        <h2 className="text-sm font-mono text-indigo-400 tracking-wider uppercase mb-2">Projects</h2>
        <h3 className="text-2xl font-bold text-white">Featured Work</h3>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative overflow-hidden glass-panel p-8"
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} via-transparent to-transparent`} />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1.5">
                  <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  <span className="glass-pill text-xs flex items-center gap-1.5 text-emerald-400">
                    <Activity size={12} />
                    LIVE
                  </span>
                </div>
                <p className="text-sm font-mono text-gray-500">{project.type}</p>
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white flex items-center justify-center w-10 h-10"
                  title="View Source"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors flex items-center justify-center w-10 h-10"
                    title="View Live"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5 max-w-3xl text-sm">
              {project.desc}
            </p>

            <div className="mb-6 p-3.5 rounded-lg bg-white/5 border border-white/10 border-l-2 border-l-indigo-500">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider block mb-1">Impact</span>
              <p className="text-sm text-gray-300">{project.metrics}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span key={tech} className="glass-pill text-[11px]">
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
