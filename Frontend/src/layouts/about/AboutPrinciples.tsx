import SectionHead from "../SectionHead";

export default function AboutPrinciples() {
  return (
    <section className="page-container section">
      <SectionHead 
        label="Design Philosophy" 
        title="Zero" 
        emphasisWord="Distractions." 
        emphasisPosition="end"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-16">
        <div className="flex flex-col">
          <h3 className="text-2xl font-light text-white/90 mb-4">No Ads, No Tracking</h3>
          <p className="text-white/50 text-base leading-relaxed font-light">
            We stripped away the noise. No ads, no tracking scripts, no unnecessary colorful badges shouting for your attention. Just a pure, unadulterated communication channel built on a solid foundation.
          </p>
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-2xl font-light text-white/90 mb-4">Tactile Interactions</h3>
          <p className="text-white/50 text-base leading-relaxed font-light">
            The system treats transitions as slow camera moves rather than snappy UI tricks. Everything feels instant, fluid, and predictable. We removed complex loading states in favor of immediate content delivery.
          </p>
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-2xl font-light text-white/90 mb-4">Absolute Security</h3>
          <p className="text-white/50 text-base leading-relaxed font-light">
            Argon2 hashing, encrypted JWT tokens, and strict authorization levels ensure your data remains yours. The architecture is designed with isolated tenants from the ground up.
          </p>
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-2xl font-light text-white/90 mb-4">Built to Evolve</h3>
          <p className="text-white/50 text-base leading-relaxed font-light">
            Luma is designed to evolve. Instead of relying on a complex frontend framework from day one, we use HTMX and Jinja2 to deliver a server-rendered, clean experience that can scale endlessly.
          </p>
        </div>
      </div>
    </section>
  );
}
