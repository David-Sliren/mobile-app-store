import React from "react";

const ButtonCallMini = ({ title = "", className = "" }) => {
  return (
    <button
      className={` bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-emerald-400 transition-colors cursor-pointer ${className}`}
    >
      {title}
    </button>
  );
};

export default ButtonCallMini;
