import { motion } from "motion/react";
import ButtonCallAction from "../Buttons/ButtonCallAction";

const CallActionCart = () => {
  return (
    <section className="py-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-12 rounded-[3rem] bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 relative overflow-hidden"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Tienes una idea? Hagámosla realidad
          </h2>
          <p className="text-zinc-500 mb-10 max-w-xl mx-auto">
            Esa app que imaginas está más cerca de lo que crees. Te acompaño en
            cada paso para transformar tu idea en una experiencia real, fluida y
            lista para que todos empiecen a usarla.
          </p>
          <ButtonCallAction title="¡Cuéntame tu idea!" />
        </motion.div>
      </div>
    </section>
  );
};

export default CallActionCart;
