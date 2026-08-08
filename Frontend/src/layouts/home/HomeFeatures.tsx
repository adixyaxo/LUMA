import { Link } from "react-router-dom";
import SectionHead from "../SectionHead";
import IndexRow from "../IndexRow";

export default function HomeFeatures() {
  return (
    <section className="page-container section">
      <SectionHead
        label="Core Capabilities"
        title="We stripped away the noise. Just a pure communication"
        emphasisWord="channel."
        emphasisPosition="end"
      />

      <div className="flex flex-col border-t border-white/10 mt-12">
        <IndexRow
          leftText="01"
          middleText="Sub-millisecond real-time speed"
          rightText="WebSockets · Redis"
        />
        <IndexRow
          leftText="02"
          middleText="Absolute data isolation"
          rightText="Argon2 · JWT"
        />
        <IndexRow
          leftText="03"
          middleText="Server-rendered performance"
          rightText="HTMX · Jinja2"
        />
      </div>

      <div className="mt-12">
        <Link to="/about" className="btn-ghost inline-flex px-8 py-3 rounded-full text-sm font-medium">
          Read the Manifesto
        </Link>
      </div>
    </section>
  );
}
