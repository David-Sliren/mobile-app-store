// Constantes
import { fadeInLeft } from "../../constants/motion_variants";

// Librerias
import { motion } from "motion/react";

// Utilidades
import { shortText } from "../../utils/shorts";

// Componentes
import Category from "./Category";

const PresentationApp = ({ stars, category, slogan, description }) => {
  // console.log(description.length);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInLeft}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h1 className="text-5xl lg:text-7xl font-black tracking-tightest leading-[0.9] mb-6 uppercase">
        {slogan.normal} <br />
        <span className="text-zinc-500">{slogan.born}</span>
      </h1>

      <Category numberStars={stars} title={category} />

      <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
        {shortText(description, 251)}
      </p>
    </motion.div>
  );
};

export default PresentationApp;
