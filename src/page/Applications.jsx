import ApplicationCard from "../components/Application/ApplicationCard";

// Constantes
import { staggerContainer } from "../constants/motion_variants";
import { apps } from "../constants/dataOfApps";

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
        {apps.map((item, i) => (
          <ApplicationCard
            key={i}
            title={item.name}
            description={item.description_Breve}
            srcVideo={item.video_presentation}
          />
        ))}
      </motion.section>
    </main>
  );
};

export default Applications;
