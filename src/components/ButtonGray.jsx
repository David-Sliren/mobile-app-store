import React from "react";

const ButtonGray = ({ title = "", handle }) => {
  return (
    <button className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 px-8 py-4 rounded-2xl font-bold transition-all cursor-pointer">
      {title}
    </button>
  );
};

export default ButtonGray;
