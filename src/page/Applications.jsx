import ApplicationCard from "../components/ApplicationCard";

// Constantes
import { staggerContainer } from "../constants/motion_variants";

// Librerias
import { motion } from "motion/react";

const Applications = () => {
  return (
    <main className="flex flex-col items-center  w-full min-h-screen pt-32">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className=" w-full grid grid-cols-12 space-y-10 space-x-3 px-18"
      >
        <ApplicationCard
          title="RENPENTAIN"
          description="Una app de lista de tareas para que este bien haciendo lo oportuno"
          srcVideo="http://localhost:3000/video1.mp4"
        />
      </motion.section>
    </main>
  );
};

export default Applications;
