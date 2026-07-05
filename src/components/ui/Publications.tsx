"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

export default function Publications() {
  return (
    <section id="publications" className="w-full max-w-5xl mx-auto px-4 py-20 border-t border-white/5">
      <div className="mb-12">
        <h2 className="text-sm font-mono text-indigo-400 tracking-wider uppercase mb-2">Publications</h2>
        <h3 className="text-2xl font-bold text-white">Academic Research</h3>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden glass-panel p-8"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500/20 to-transparent" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
              <BookOpen className="text-indigo-400" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white leading-snug">
                Design and Implementation of a Constraint-Satisfaction Scheduling Engine for Academic Examinations
              </h4>
              <p className="text-xs font-mono text-indigo-400 mt-2 uppercase tracking-wide">
                International Journal of Computer Science & Engineering (IJCSE) · Vol. 13, No. 2, 2025
              </p>
            </div>
          </div>

          <a
            href="https://github.com/jameskhele/EXAMINER"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs font-mono text-white whitespace-nowrap"
          >
            View Paper Link
            <ExternalLink size={12} />
          </a>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed max-w-3xl pl-0 md:pl-16">
          This paper documents the design methodologies, constraint propagation algorithms, and backtracking solvers implemented for the <strong>EXAMINER</strong> scheduling project. It analyzes heuristic efficiency, search space reduction, and validation techniques used to produce optimal examination timetables under complex academic constraints.
        </p>
      </motion.div>
    </section>
  );
}
