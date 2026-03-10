import React from "react";

const ButtonCallAction = ({ title = "", icon, handle }) => {
  return (
    <button className="bg-white flex items-center justify-center gap-3 text-black px-10 py-4 rounded-2xl font-black hover:scale-105 hover:bg-emerald-500 transition-transform cursor-pointer">
      {icon && icon}
      {title}
    </button>
  );
};

export default ButtonCallAction;
