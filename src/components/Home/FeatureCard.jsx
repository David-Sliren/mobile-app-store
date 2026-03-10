import { motion } from "motion/react";
import { fadeIn } from "../../constants/motion_variants";

const FeatureCard = ({ icon: Icon, title, desc, isSoon = false }) => (
  <motion.button
    disabled={isSoon}
    variants={fadeIn}
    className={`relative p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 transition-colors group ${isSoon ? "cursor-not-allowed" : "cursor-pointer"}`}
  >
    {isSoon && (
      <div className="absolute top-4 right-4 size-fit bg-emerald-500/6 flex items-center justify-center border border-emerald-500/20 px-2 rounded-full group-hover:bg-emerald-500/10  transition-colors text-md sm:text-sm md:text-md xl:text-lg text-emerald-500 font-semibold">
        Proximamente
      </div>
    )}
    <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 transition-colors">
      <Icon className="text-emerald-500 size-6" />
    </div>
    <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
    <p className="text-zinc-500 leading-relaxed text-sm">{desc}</p>
  </motion.button>
);

export default FeatureCard;
