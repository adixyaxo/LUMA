import { Link } from "react-router-dom";
import Header from "../layouts/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-(--color-bg)-[var(--color-text-primary)] overflow-hidden flex flex-col justify-center items-center relative w-full">
      <Header />

      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-16">
        <div className="mb-6 font-mono-tech text-xs tracking-widest uppercase text-(--color-text-muted) border border-(--color-border) rounded-full px-4 py-1.5 bg-(--color-surface)">
          Error 404
        </div>

        <h1 className="text-7xl md:text-9xl font-light tracking-tight leading-none mb-6 text-[#f0f0f5]">
          Signal <span className="font-serif-italic text-(--color-accent)">lost.</span>
        </h1>

        <p className="text-(--color-text-secondary) text-sm md:text-base font-light max-w-md mx-auto mb-12">
          The channel you are looking for does not exist, has been archived, or you lack the clearance to access it.
        </p>

        <Link to="/" className="btn-ghost inline-flex items-center justify-center rounded-full px-10 py-4 text-sm font-medium">
          Return to Base
        </Link>
      </div>
    </div>
  );
}
