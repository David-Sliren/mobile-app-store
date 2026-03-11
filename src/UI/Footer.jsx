import { Layers, Twitter, Github } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-zinc-900 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <a
          href="https://www.tiktok.com/@sliren.dev"
          target="_blank"
          className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default"
        >
          <Layers size={20} className="text-white" />
          <span className="text-white font-bold tracking-tighter">
            D_SLIREN
          </span>
        </a>
        <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">
          © 2026 D_Sliren Inc.
        </p>
        <div className="flex gap-4">
          <a href="https://x.com/D_Sliren">
            <Twitter className="text-zinc-500 hover:text-emerald-400 cursor-pointer size-5 transition-colors" />
          </a>

          <a href="https://github.com/David-Sliren" target="_blank">
            <Github className="text-zinc-500 hover:text-white cursor-pointer size-5 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
