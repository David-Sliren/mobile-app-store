// Librerias
import { Star } from "lucide-react";

const Category = ({ title, numberStars }) => {
  const ranquin = 3;

  return (
    <div className="flex items-center gap-2 my-6">
      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-500/20">
        {title}
      </span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            fill="currentColor"
            className={`${numberStars > i ? "text-amber-400" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
