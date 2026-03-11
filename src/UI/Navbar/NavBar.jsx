import { useState } from "react";

// Librerias
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence, animate } from "motion/react";
import { Layers, Menu } from "lucide-react";

// Constants
import { fadeIn, fadeInLeft } from "../../constants/motion_variants";

// componentes
import ButtonCallMini from "../../components/Buttons/ButtonCallMini";
import IconButton from "../../components/Buttons/IconButton";
import NavButton from "./NavButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleFixeMenu() {
    setIsOpen(!isOpen);
    // setTimeout(() => setIsOpen(false), 10000);
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-emerald-400 rounded-lg flex items-center justify-center">
              <Layers className="text-white size-5" />
            </div>
            <span className="text-white font-black tracking-tighter text-xl uppercase">
              D_SLIREN
            </span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400 ">
            <NavButton to="/#store" title="Inicio" />
            <NavButton to="/applications" title="Aplicaciones" />

            <NavLink to="/" className="hover:text-white transition-colors">
              Opiniones
            </NavLink>
          </div>
          <div className="flex justify-center items-center ">
            <Link to="/#contact">
              <ButtonCallMini title="CONTACTAR" className="hidden sm:flex" />
            </Link>
            <IconButton
              icon={Menu}
              className="sm:hidden w-full h-full"
              handle={handleFixeMenu}
            />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            exit={{ opacity: 0 }}
            className={`fixed top-16 right-0 bg-zinc-950/50 border border-white/5 rounded-bl-md border-t-0 backdrop-blur-md w-fit h-fit p-2 flex flex-col justify-center items-center gap-4 text-sm font-medium text-zinc-400 z-50`}
          >
            <NavButton to="/#store" title="Inicio" />
            <NavButton to="/applications" title="Aplicaciones" />

            <NavLink to="/" className="hover:text-white transition-colors">
              Opiniones
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
