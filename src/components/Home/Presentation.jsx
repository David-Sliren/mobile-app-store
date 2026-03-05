import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { fadeIn } from "../../constants/motion_variants";
import LastVersion from "./LastVersion";
import ButtonGreen from "../Buttons/ButtonGreen";
import ButtonGray from "../Buttons/ButtonGray";
import { Link } from "react-router";

const Presentation = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    {/* Contenedor de Resplandor (Glow Effect) */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />

    <div className="max-w-4xl mx-auto text-center">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <LastVersion />
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tightest mb-8 leading-[0.9]">
          TIENDA {""}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-500">
            SLIREN
          </span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Esta es la plataforma definitiva para ver y probar mis aplicaciones
          moviles de primera mano.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/applications">
            <ButtonGreen title="Ver Aplicaciones" />
          </Link>

          <a
            href="https://david-sliren.github.io/Mi-Portafolio/"
            target="_blank"
          >
            <ButtonGray title="Sobre mi" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Presentation;
