export default function AboutOpenSource() {
  return (
    <section className="page-container section">
      <div className="card bg-surface p-12 md:p-16 border border-white/5 relative overflow-hidden flex flex-col md:flex-row gap-12 items-start justify-between">
        <div className="grainy-overlay"></div>
        <div className="relative z-10 md:w-1/2">
          <span className="font-mono-tech text-[10px] uppercase tracking-widest text-white/40 mb-6 block">
            The Collective
          </span>
          <h3 className="text-3xl md:text-5xl font-light text-[#f0f0f5] leading-tight mb-8">
            Built in the <span className="font-serif-italic text-accent">open.</span>
          </h3>
          <p className="text-white/50 text-base leading-relaxed font-light mb-8">
            We believe privacy-respecting communication tools should be open to scrutiny. The entire LUMA protocol and application layer is licensed under MIT, allowing developers worldwide to inspect, modify, and host their own instances.
          </p>
          <a href="https://github.com/luma" target="_blank" rel="noreferrer" className="btn-ghost inline-flex px-8 py-3 rounded-full text-sm font-medium">
            View Repository
          </a>
        </div>
        
        <div className="relative z-10 md:w-1/2 flex flex-col gap-6 w-full mt-8 md:mt-0">
          <div className="border-l border-white/10 pl-6 py-2">
            <div className="text-white/90 text-xl font-light mb-1">MIT License</div>
            <div className="text-white/40 text-sm">Free for commercial and personal use.</div>
          </div>
          <div className="border-l border-white/10 pl-6 py-2">
            <div className="text-white/90 text-xl font-light mb-1">Self-Hostable</div>
            <div className="text-white/40 text-sm">Deploy via Docker in under 5 minutes.</div>
          </div>
          <div className="border-l border-white/10 pl-6 py-2">
            <div className="text-white/90 text-xl font-light mb-1">Community Driven</div>
            <div className="text-white/40 text-sm">Open to pull requests and feature proposals.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
