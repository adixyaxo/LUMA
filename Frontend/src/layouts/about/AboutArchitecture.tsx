import SectionHead from "../SectionHead";
import IndexRow from "../IndexRow";

export default function AboutArchitecture() {
  return (
    <section className="page-container section">
      <SectionHead 
        label="System Design" 
        title="Backend" 
        emphasisWord="Excellence." 
        emphasisPosition="end"
      />
      
      <div className="flex flex-col border-t border-white/10 mt-12">
        <IndexRow 
          leftText="Stack"
          middleText="FastAPI, Python, Redis, WebSockets"
          rightText="01"
        />
        <IndexRow 
          leftText="Philosophy"
          middleText="Avoid frontend bloat via HTMX & Jinja2"
          rightText="02"
        />
        <IndexRow 
          leftText="Scale"
          middleText="Horizontal scaling with Redis Pub/Sub"
          rightText="03"
        />
      </div>
    </section>
  );
}
