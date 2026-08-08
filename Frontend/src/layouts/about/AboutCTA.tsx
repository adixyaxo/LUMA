import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section className="page-container section pb-32">
      <div className="card bg-surface p-12 md:p-24 border border-white/5 flex flex-col items-center text-center">
        <h3 className="text-3xl md:text-5xl font-light mb-8 text-[#f0f0f5]">
          Ready to join the <span className="font-serif-italic text-accent">collective?</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Link to="/login" className="btn-ghost inline-flex px-10 py-4 rounded-full text-sm font-medium">
            Log In
          </Link>
          <Link to="/signup" className="btn-filled inline-flex px-10 py-4 rounded-full text-sm font-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
}
