import Hero from "@/components/ui/Hero";
import BentoGrid from "@/components/ui/BentoGrid";
import Experience from "@/components/ui/Experience";
import Deployments from "@/components/ui/Deployments";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center selection:bg-indigo-500/30 w-full overflow-x-hidden">
      {/* Navigation */}
      <nav className="w-full border-b border-white/5 py-5 sticky top-0 bg-[#0A0A0B]/80 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider text-white">
            JK<span className="text-indigo-400">.</span>
          </div>
          <div className="flex gap-5 items-center">
            <a href="#about" className="text-xs font-mono text-gray-400 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-xs font-mono text-gray-400 hover:text-white transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-xs font-mono text-gray-400 hover:text-white transition-colors">
              Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1P_ExKmZy_nozb6Z3pWrym1U_2gUieJkc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/20 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <BentoGrid />
      <Experience />
      <Deployments />

      {/* Tech Stack Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16 border-t border-white/5">
        <div className="mb-8">
          <h2 className="text-sm font-mono text-indigo-400 tracking-wider uppercase mb-2">Stack</h2>
          <h3 className="text-2xl font-bold text-white">Technologies I Work With</h3>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {[
            "TypeScript", "JavaScript", "Python", "Java", "SQL",
            "React", "Next.js", "Tailwind CSS",
            "Node.js", "FastAPI", "Express",
            "PostgreSQL", "MySQL", "Redis",
            "Docker", "Git", "GitHub Actions", "CI/CD", "Linux",
            "LangGraph", "ChromaDB", "RAG",
            "n8n", "Make.com", "WebSockets",
            "GCP", "Vercel",
          ].map(tech => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-gray-300 hover:border-indigo-500/30 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 py-12">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-2">Let&apos;s Connect</h4>
            <p className="text-sm text-gray-500 max-w-md">
              Open to software engineering roles — remote, India, or international relocation. Let&apos;s build something great.
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <a href="mailto:jameskhele008@gmail.com" className="text-sm font-mono text-gray-400 hover:text-white transition-colors">
              Email
            </a>
            <a href="https://www.linkedin.com/in/jameskhele" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/jameskhele" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1P_ExKmZy_nozb6Z3pWrym1U_2gUieJkc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-8 pt-6 border-t border-white/5">
          <p className="text-xs text-gray-600 text-center font-mono">
            © 2026 James Khele. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}
