import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end pb-12 z-10">
      {/* Video Background */}
      <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline poster="">
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Vignette overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(2,4,10,0.6) 0%, transparent 25%, transparent 65%, #02040a 100%)" }}></div>

      {/* Blend Title Layer */}
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-10 pointer-events-none z-20" style={{ isolation: "isolate", mixBlendMode: "difference" }}>
        <h1 className="text-[20vw] md:text-[18vw] font-black tracking-tighter leading-none text-white select-none">
          LUMA
        </h1>
      </div>

      {/* Bottom Content in Hero */}
      <div className="relative z-30 w-full px-6 md:px-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pointer-events-auto">
        {/* Description */}
        <div className="max-w-110">
          <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">
            A calm, fast, and focused messaging platform.<br />
            Built for developers, designers, and small teams<br />
            who value <span className="font-serif-italic text-lg text-white/90">clarity</span> over clutter.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 relative z-50">
          <Link to="/login" className="btn-ghost inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-normal focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black">
            Log In
          </Link>
          <Link to="/signup" className="btn-filled inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-normal focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Rotating Scroll Badge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none hidden md:block text-white/60">
        <svg className="w-24 h-24 animate-spin-slow" viewBox="0 0 100 100">
          <path id="badge-curve" fill="transparent" d="M 50 12 A 38 38 0 1 1 49.9 12" />
          <text className="text-[10px] font-bold tracking-[6px] uppercase" fill="currentColor">
            <textPath href="#badge-curve">LIVE · LUMA · CHAT · </textPath>
          </text>
        </svg>
      </div>
    </section>
  );
}
