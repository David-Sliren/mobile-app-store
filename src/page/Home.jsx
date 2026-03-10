// Librerias
import { motion } from "motion/react";
import { Zap, Rocket, ShieldCheck } from "lucide-react";

// Constantes
import { staggerContainer } from "../constants/motion_variants";

// Components
import Presentation from "../components/Home/Presentation";
import FeatureCard from "../components/Home/FeatureCard";
import CallActionCart from "../components/Home/CallActionCart";

const Home = () => {
  return (
    <main>
      <Presentation />
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <FeatureCard
            icon={ShieldCheck}
            title="Versiones estables"
            desc="Tus favoritas, listas para usar. Aplicaciones probadas a fondo para que funcionen siempre perfecto."
          />

          <FeatureCard
            isSoon={true}
            icon={Zap}
            title="Nuevas versiones"
            desc="¡Lo último que he creado! Disfruta de las funciones más recientes con una rapidez que te va a encantar en cada toque."
          />

          <FeatureCard
            isSoon={true}
            icon={Rocket}
            title="Versiones beta"
            desc="Sé parte del proceso. Prueba antes que nadie mis experimentos y ayúdame a mejorarlos con tus ideas..."
          />
        </motion.div>
      </section>

      <CallActionCart />
    </main>
  );
};

export default Home;
