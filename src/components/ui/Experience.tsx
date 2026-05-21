"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, ChevronRight } from "lucide-react";

const workExperience = [
  {
    role: "Frontend Developer Intern",
    company: "VenturSeed",
    location: "USA (Remote)",
    duration: "Feb 2026 – Present",
    desc: "Architecting modules for Intellitoggle and Technidox, two high-impact US enterprise SaaS products. Optimizing frontend state architectures, standardizing clean reactive components, and designing automated delivery pipelines.",
    bullets: [
      "Optimized Nuxt.js and Vue.js page rendering speeds, increasing Core Web Vitals score by 35%.",
      "Built resilient automated rollback systems inside GitLab CI/CD, eliminating critical deployment errors.",
      "Engineered decoupled UI elements to integrate dynamic, multi-language configurations seamlessly."
    ],
    tags: ["Nuxt.js", "Vue.js", "Dart", "GitLab CI/CD", "Twig"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Shramic Networks",
    location: "Remote",
    duration: "Feb 2026 – May 2026",
    desc: "Developed end-to-end backend API models and database systems for a high-traffic regional networking application.",
    bullets: [
      "Engineered high-concurrency Node.js endpoints, guaranteeing clean multi-client transaction loops.",
      "Refactored complex MySQL database schemas, reducing query response latencies by 25%.",
      "Standardized RESTful API architectures with secure validation layers, reducing security exceptions."
    ],
    tags: ["Node.js", "MySQL", "Express", "REST APIs", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-5xl mx-auto px-4 py-20 border-t border-white/5">
      <div className="mb-12">
        <h2 className="text-sm font-mono text-indigo-400 tracking-wider uppercase mb-2">Professional Journey</h2>
        <h3 className="text-2xl font-bold text-white">Operational Experience</h3>
      </div>

      <div className="relative border-l border-white/10 pl-6 md:pl-8 ml-4 flex flex-col gap-12">
        {workExperience.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0B] border-2 border-indigo-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
            </div>

            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
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

            {/* Job Description */}
            <p className="text-gray-400 text-sm mb-4 leading-relaxed max-w-3xl">
              {job.desc}
            </p>

            {/* Bullet points */}
            <ul className="flex flex-col gap-2 mb-6 max-w-3xl">
              {job.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="text-xs text-gray-400 flex items-start gap-2 leading-relaxed">
                  <ChevronRight size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {job.tags.map(tag => (
                <span key={tag} className="glass-pill text-[10px]">
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
