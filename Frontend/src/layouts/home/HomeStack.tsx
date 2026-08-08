import SectionHead from "../SectionHead";

export default function HomeStack() {
  return (
    <section className="page-container section pb-32">
      <SectionHead 
        label="Stack" 
        title="Backend" 
        emphasisWord="First." 
        emphasisPosition="end"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="card bg-surface p-10 border border-white/5 flex flex-col justify-between min-h-[320px]">
          <div className="grainy-overlay"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="font-mono-tech text-xs uppercase tracking-widest text-white/40 mb-8">Asynchronous Base</div>
            <div>
              <h3 className="text-2xl font-light text-white/90 mb-4">FastAPI & Python</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                Built with modern asynchronous Python. We focus on backend engineering excellence over complex frontend frameworks.
              </p>
            </div>
          </div>
        </div>
        
        <div className="card bg-surface p-10 border border-white/5 flex flex-col justify-between min-h-[320px]">
          <div className="grainy-overlay"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="font-mono-tech text-xs uppercase tracking-widest text-white/40 mb-8">Persistence</div>
            <div>
              <h3 className="text-2xl font-light text-white/90 mb-4">MongoDB & Redis</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                High-performance document storage coupled with Redis Pub/Sub for instant message broadcasting across clusters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
