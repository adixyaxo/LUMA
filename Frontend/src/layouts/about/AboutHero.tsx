export default function AboutHero() {
  return (
    <section className="relative w-full border-b border-white/5 overflow-hidden">
      <div className="grainy-overlay"></div>
      
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-full max-w-2xl h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="page-container section min-h-[70vh] flex flex-col justify-center pt-32 pb-24 relative z-10">
        <div className="max-w-4xl">
          <span className="font-mono-tech text-[10px] uppercase tracking-widest text-white/50 mb-6 block border-l border-accent pl-4">
            System Architecture v2.0
          </span>
          <h1 className="text-display font-light tracking-tight leading-none text-[#f0f0f5]">
            Engineered for <br /><span className="font-serif-italic text-accent">Clarity.</span>
          </h1>
          <p className="text-lg text-white/50 mt-12 max-w-2xl font-light leading-relaxed">
            A modern, lightweight, real-time messaging platform. Designed around simplicity, extreme performance, and boundless extensibility. We believe that communication tools should get out of the way.
          </p>
          <p className="text-lg text-white/50 mt-6 max-w-2xl font-light leading-relaxed">
            In an era of bloated interfaces and inescapable notifications, LUMA returns to the fundamentals. We have eliminated superficial features, heavy client-side state management, and intrusive tracking. The result is a platform where latency is measured in microseconds and user focus remains uninterrupted.
          </p>
          
          <div className="flex flex-wrap gap-12 md:gap-24 mt-16 pt-12 border-t border-white/5">
             <div className="flex flex-col">
               <span className="text-display text-3xl font-light text-[#f0f0f5]">&lt; 1ms</span>
               <span className="font-mono-tech text-[10px] tracking-widest text-white/40 uppercase mt-2">Message Latency</span>
             </div>
             <div className="flex flex-col">
               <span className="text-display text-3xl font-light text-[#f0f0f5]">Zero</span>
               <span className="font-mono-tech text-[10px] tracking-widest text-white/40 uppercase mt-2">Telemetry & Ads</span>
             </div>
             <div className="flex flex-col">
               <span className="text-display text-3xl font-light text-[#f0f0f5]">100%</span>
               <span className="font-mono-tech text-[10px] tracking-widest text-white/40 uppercase mt-2">Open Source</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
