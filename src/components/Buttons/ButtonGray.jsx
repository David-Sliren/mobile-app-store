import React from "react";

const ButtonGray = ({ title = "", icon = false, handle }) => {
  return (
    <button
      onClick={handle}
      className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 px-8 py-4 rounded-2xl font-bold transition-all cursor-pointer"
    >
      {icon && icon}
      {title}
    </button>
  );
};

export default ButtonGray;
