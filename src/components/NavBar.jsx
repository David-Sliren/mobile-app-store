import { Layers } from "lucide-react";
import ButtonCallMini from "./ButtonCallMini";
import { NavLink } from "react-router";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-zinc-950/50">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-emerald-400 rounded-lg flex items-center justify-center">
          <Layers className="text-white size-5" />
        </div>
        <span className="text-white font-black tracking-tighter text-xl uppercase">
          D_SLIREN
        </span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
        <NavLink to="/" className="hover:text-white transition-colors">
          Inicio
        </NavLink>
        <NavLink
          to="/applications"
          className="hover:text-white transition-colors"
        >
          Aplicaciones
        </NavLink>
        <NavLink to="/" className="hover:text-white transition-colors">
          Opiniones
        </NavLink>
      </div>
      <ButtonCallMini title="COMENZAR" />
    </div>
  </nav>
);

export default Navbar;
