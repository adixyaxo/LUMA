import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 h-16 pointer-events-none bg-transparent">
      {/* Left: Wordmark & Role */}
      <Link to="/" className="flex flex-col text-white/90 pointer-events-auto focus:outline-none focus:text-white group">
        <span className="text-sm font-bold tracking-widest leading-tight group-hover:text-white transition-colors">LUMA</span>
        <span className="text-[10px] text-white/50 tracking-wider uppercase font-mono-tech mt-0.5">Unified Messaging</span>
      </Link>

      {/* Right: Navigation Links */}
      <nav className="flex items-center gap-6 md:gap-10 text-xs font-medium tracking-widest uppercase text-white/60 pointer-events-auto">
        <Link to="/" className="nav-link py-1 hover:text-white/90 transition-colors focus:outline-none focus:text-white">Home</Link>
        <Link to="/about" className="nav-link py-1 hover:text-white/90 transition-colors focus:outline-none focus:text-white">About</Link>
        <a href="https://github.com/luma" target="_blank" rel="noreferrer" className="nav-link py-1 hover:text-white/90 transition-colors focus:outline-none focus:text-white" aria-label="GitHub Repository">GitHub</a>
        <Link to="/login" className="nav-link py-1 hover:text-white/90 transition-colors focus:outline-none focus:text-white">Log In</Link>
      </nav>
    </header>
  );
}
