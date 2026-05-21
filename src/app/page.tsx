import Hero from "@/components/ui/Hero";
import BentoGrid from "@/components/ui/BentoGrid";
import Deployments from "@/components/ui/Deployments";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center selection:bg-indigo-500/30">
      <Hero />
      <BentoGrid />
      <Deployments />
      
      {/* Secure Transmission Footer */}
      <footer className="w-full border-t border-white/5 py-12 mt-20">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-2">Open Hailing Frequencies</h4>
            <p className="text-sm text-gray-500 max-w-md">
              Currently exploring roles in global SaaS startups and remote product engineering teams. My systems are ready.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="mailto:james@yourdomain.com" className="text-sm font-mono text-gray-400 hover:text-white transition-colors">
              james@yourdomain.com
            </a>
            <a href="#" className="text-sm font-mono text-gray-400 hover:text-white transition-colors">
              [LinkedIn]
            </a>
            <a href="#" className="text-sm font-mono text-gray-400 hover:text-white transition-colors">
              [GitHub]
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
