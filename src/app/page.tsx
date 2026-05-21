import Hero from "@/components/ui/Hero";
import BentoGrid from "@/components/ui/BentoGrid";
import Experience from "@/components/ui/Experience";
import Deployments from "@/components/ui/Deployments";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center selection:bg-indigo-500/30 w-full overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="w-full border-b border-white/5 py-5 sticky top-0 bg-[#0A0A0B]/80 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider text-white">
            JK<span className="text-indigo-400">.</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-xs font-mono text-gray-400 hover:text-white transition-colors">
              [About]
            </a>
            <a href="#experience" className="text-xs font-mono text-gray-400 hover:text-white transition-colors">
              [Experience]
            </a>
            <a href="#projects" className="text-xs font-mono text-gray-400 hover:text-white transition-colors">
              [Projects]
            </a>
            <a href="mailto:jameskhele008@gmail.com" className="text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors">
              [Let's Talk]
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <BentoGrid />
      <Experience />
      <Deployments />
      
      {/* Secure Transmission Footer */}
      <footer className="w-full border-t border-white/5 py-12 mt-20">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-2">Open Hailing Frequencies</h4>
            <p className="text-sm text-gray-500 max-w-md">
              Currently open to global engineering roles and remote product-oriented startups. Let's build something scalable.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="mailto:jameskhele008@gmail.com" className="text-sm font-mono text-gray-400 hover:text-white transition-colors">
              jameskhele008@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/jameskhele" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-gray-400 hover:text-white transition-colors">
              [LinkedIn]
            </a>
            <a href="https://github.com/jameskhele" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-gray-400 hover:text-white transition-colors">
              [GitHub]
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
