import React from "react";

const InfoTech = ({ vertion, size }) => {
  return (
    <div className="pt-10 grid grid-cols-2 gap-8 border-t border-zinc-900 max-w-md">
      <div>
        <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest mb-1">
          Version
        </p>
        <p className="text-zinc-300 font-mono text-sm">{vertion}</p>
      </div>
      <div>
        <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest mb-1">
          Tamaño
        </p>
        <p className="text-zinc-300 font-mono text-sm">{size}</p>
      </div>
    </div>
  );
};

export default InfoTech;
