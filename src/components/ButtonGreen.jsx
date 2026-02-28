import { ChevronRight } from "lucide-react";
import React from "react";

const ButtonGreen = ({ title, handle }) => {
  return (
    <button className="bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer">
      {title}
      <ChevronRight size={18} />
    </button>
  );
};

export default ButtonGreen;
