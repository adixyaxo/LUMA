import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-(--color-bg) text-(--color-text-primary) m-0 p-0 flex flex-col relative items-center justify-center overflow-x-hidden">

      <Header />

      {/* Main Form Area */}
      <main className="w-full max-w-md px-6 z-20 mt-16 md:mt-0">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full h-16 flex items-center justify-center gap-6 z-50 text-[10px] text-(--color-text-muted) tracking-widest uppercase font-mono-tech pb-4">
        <span>LUMA Digital</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
