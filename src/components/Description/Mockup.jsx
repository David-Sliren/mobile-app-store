// Librerias
import { motion } from "motion/react";

const Mockup = () => {
  return (
    <section className="relative flex-1 flex justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-[320px]"
      >
        <div className="relative  overflow-hidden w-75 aspect-[9/19.5] flex justify-center">
          <video
            className="absolute top-0 w-67 h-full object-cover "
            autoPlay
            muted
          >
            <source src="https://res.cloudinary.com/dudiot7uv/video/upload/v1773038096/video_3_osnu5t.webm" />
          </video>
        </div>
      </motion.div>
    </section>
  );
};

export default Mockup;
