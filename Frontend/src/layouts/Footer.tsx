import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden text-[#f0f0f5] border-t border-[rgba(255,255,255,0.08)] mt-auto bg-linear-to-b from-[#000000] to-[#111111]">
      <div className="grainy-overlay"></div>
      <div className="page-container relative z-10 py-16 md:py-24">
        {/* Top: Large Display Heading & Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <h2 className="text-display font-light tracking-tight leading-none max-w-2xl text-[#f0f0f5]">
            Let's build<br />
            <span className="font-serif-italic text-accent">something.</span>
          </h2>

          <div className="flex flex-col gap-6 md:min-w-75">
            <a href="mailto:support@luma.dev" className="group flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-4 hover:border-white/30 transition-colors focus:outline-none">
              <span className="text-body-sm font-light text-white/80 group-hover:text-white transition-colors">support@luma.dev</span>
              <span className="text-xs text-white/30 group-hover:text-white/70 transition-colors uppercase tracking-widest font-mono-tech">Email</span>
            </a>
            <a href="https://github.com/luma" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-4 hover:border-white/30 transition-colors focus:outline-none">
              <span className="text-body-sm font-light text-white/80 group-hover:text-white transition-colors">github.com/luma</span>
              <span className="text-xs text-white/30 group-hover:text-white/70 transition-colors uppercase tracking-widest font-mono-tech">GitHub</span>
            </a>
          </div>
        </div>

        {/* Bottom: Meta Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest uppercase font-mono-tech text-white/30 pt-8 border-t border-[rgba(255,255,255,0.04)]">
          <div className="flex gap-8">
            <span className="text-white/50">LUMA</span>
            <span>Unified Messaging Protocol</span>
          </div>
          <div className="flex gap-8">
            <Link to="/about" className="hover:text-white/70 transition-colors">About</Link>
            <Link to="/login" className="hover:text-white/70 transition-colors">Log In</Link>
          </div>
          <div className="flex gap-8">
            <span>© 2026 LUMA</span>
            <span>MIT License</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
