"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";

const workExperience = [
  {
    role: "Software Engineer",
    company: "VentureSeed",
    location: "USA (Remote from India)",
    duration: "Feb 2026 – Jun 2026",
    desc: "Production SaaS engineering across two B2B platforms — DartCode AI (code-generation tool) and IntelliToggle (feature-management system).",
    bullets: [
      "Developed backend features for two B2B SaaS platforms, contributing to production releases in Agile cycles.",
      "Developed and enhanced REST APIs using Node.js (Express.js) and FastAPI, improving performance and maintainability.",
      "Optimized SQL queries and PostgreSQL execution plans, reducing p95 API response times by 35% under peak workloads.",
      "Diagnosed and resolved 15 P1/P2 production incidents using log streams and metrics to maintain 99.8% platform uptime.",
      "Collaborated with senior engineers in peer code reviews to improve code quality, maintainability, and API reliability.",
      "Containerized backend services using Docker while automating build and deployment workflows through GitHub Actions CI/CD.",
      "Wrote comprehensive automated test suites using pytest and Jest to validate system logic and maintain 90%+ unit test coverage."
    ],
    tags: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "FastAPI", "Docker", "GitHub Actions"],
  },
  {
    role: "Co-Founder & Software Engineer",
    company: "Shramic Networks Pvt. Ltd.",
    location: "Bangalore, India",
    duration: "Jun 2025 – Feb 2026",
    desc: "Database Engineering & REST API Design.",
    bullets: [
      "Designed and developed backend REST APIs and PostgreSQL database schemas supporting 500+ active users with 3NF normalization.",
      "Implemented secure token-based JWT authentication and Role-Based Access Control (RBAC) security filters to protect sensitive REST endpoints.",
      "Constructed automated CI/CD pipelines to build containerized Docker images and run automated regression test suites.",
      "Ensured database integrity by applying constraints, normalization rules, and optimizing SQL execution plans."
    ],
    tags: ["Node.js", "PostgreSQL", "GitLab CI/CD", "Linux", "REST APIs", "JWT", "3NF Normalization"],
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
