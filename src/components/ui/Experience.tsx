"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";

const workExperience = [
  {
    role: "Software Engineer",
    company: "VentureSeed",
    location: "USA (Remote from India)",
    duration: "Feb 2026 – Present",
    desc: "Production SaaS engineering across two B2B platforms — DartCode AI (code-generation tool) and IntelliToggle (feature-management system).",
    bullets: [
      "Shipped 12 production features end-to-end, owning technical design, implementation, testing, deployment, and post-release monitoring.",
      "Designed and deployed 10 production REST APIs with idempotent writes and connection pooling, cutting p95 response latency by 35%.",
      "Resolved 15 P1/P2 production incidents within SLA, improving monthly platform uptime from 99.2% to 99.8%.",
      "Reviewed pull requests daily across a 4-timezone distributed team, maintaining weekly deployment cadence via GitHub CI/CD."
    ],
    tags: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "GitHub Actions"],
  },
  {
    role: "Full-Stack Developer",
    company: "Shramic Networks",
    location: "Bangalore, India",
    duration: "Feb 2026 – May 2026",
    desc: "Built a community platform and agricultural SaaS application from zero to production.",
    bullets: [
      "Architected and shipped the platform from scratch, reaching 500+ users in the first month with zero critical defects at launch.",
      "Designed PostgreSQL schemas for 12 entities, built JWT/RBAC authentication, and delivered an admin dashboard with real-time analytics."
    ],
    tags: ["React", "Node.js", "PostgreSQL", "REST APIs", "JWT"],
  },
  {
    role: "Freelance Software Engineer",
    company: "International Clients",
    location: "US & UK (Remote)",
    duration: "2025 – Present",
    desc: "Contract product delivery for international clients with 100% on-time delivery track record.",
    bullets: [
      "Delivered 5 production web applications, leading client consultations, software architecture, deployment, and SLA-backed maintenance.",
      "Achieved Lighthouse 96 and sub-1.2s LCP on shevynrobert.net using Next.js SSR and zero-downtime CI/CD via Vercel."
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel", "CI/CD"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-5xl mx-auto px-4 py-20 border-t border-white/5">
      <div className="mb-12">
        <h2 className="text-sm font-mono text-indigo-400 tracking-wider uppercase mb-2">Experience</h2>
        <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
      </div>

      <div className="relative border-l border-white/10 pl-6 md:pl-8 ml-4 flex flex-col gap-12">
        {workExperience.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0B] border-2 border-indigo-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <div>
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  {job.role}
                  <span className="text-sm font-normal text-indigo-400">@ {job.company}</span>
                </h4>
                <p className="text-xs text-gray-500 font-mono mt-1">{job.location}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 w-fit">
                <Calendar size={12} />
                {job.duration}
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed max-w-3xl">
              {job.desc}
            </p>

            <ul className="flex flex-col gap-2 mb-5 max-w-3xl">
              {job.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="text-sm text-gray-400 flex items-start gap-2 leading-relaxed">
                  <ChevronRight size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {job.tags.map(tag => (
                <span key={tag} className="glass-pill text-[11px]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
