import { motion } from "motion/react";
import { fadeIn } from "../../constants/motion_variants";

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    variants={fadeIn}
    className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 transition-colors group cursor-pointer"
  >
    <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 transition-colors">
      <Icon className="text-emerald-500 size-6" />
    </div>
    <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
    <p className="text-zinc-500 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

export default FeatureCard;
