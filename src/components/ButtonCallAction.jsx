import React from "react";

const ButtonCallAction = ({ title = "", handle }) => {
  return (
    <button className="bg-white text-black px-10 py-4 rounded-2xl font-black hover:scale-105 transition-transform cursor-pointer">
      {title}
    </button>
  );
};

export default ButtonCallAction;
