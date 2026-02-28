// Librerias
import { motion } from "motion/react";
import { Zap, Rocket, ShieldCheck } from "lucide-react";

// Constantes
import { staggerContainer } from "../constants/motion_variants";

// Components
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import CallActionCart from "../components/CallActionCart";

const Home = () => {
  return (
    <main>
      <Hero />
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <FeatureCard
            icon={Zap}
            title="Nuevas versiones"
            desc="¡Lo último que he creado! Disfruta de las funciones más recientes con una rapidez que te va a encantar en cada toque."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Versiones estables"
            desc="Tus favoritas, listas para usar. Aplicaciones probadas a fondo para que funcionen siempre perfecto."
          />
          <FeatureCard
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
