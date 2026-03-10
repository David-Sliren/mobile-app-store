import { motion } from "motion/react";

const CopiedNotification = ({ text }) => {
  return (
    <motion.div
      initial={{ translateY: -100 }}
      animate={{ translateY: 0 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      exit={{ translateY: -100 }}
      className="fixed top-0 left-0 bg-emerald-200/40 flex justify-center items-center h-15 w-full backdrop-blur-md border-b border-emerald-400/50 z-50"
    >
      <span className="text-xl font-bold text-center uppercase tracking-wide">
        {text} copiado en el porta papeles
      </span>
    </motion.div>
  );
};

export default CopiedNotification;
