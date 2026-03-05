import React from "react";

// constanst
import { fadeIn } from "../constants/motion_variants";

// Librerias
import { motion } from "motion/react";

const ApplicationCard = ({
  title = "",
  description = "",
  handle,
  srcVideo,
  typeVideo = "video/mp4",
}) => {
  return (
    <motion.article
      variants={fadeIn}
      className="col-span-full sm:col-span-6 lg:col-span-4 xl:lg:col-span-3"
    >
      <div className="relative w-55 aspect-[9/18] m-auto border-5 border-white/70 rounded-4xl overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-2 rounded-2xl bg-black z-20" />
        <div className="relative bg-black size-full border-4 border-black rounded-3xl overflow-hidden ">
          <video
            className="absolute -top-4 object-cover z-10"
            autoPlay
            loop
            playsInline
            muted
          >
            <source src={srcVideo} type={typeVideo} />
          </video>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-y-2 max-w-80 mx-auto">
        <span className="inline-block text-sm text-slate-50 text-center text-pretty font-semibold leading-tight">
          {title}
        </span>

        <p className="text-sm text-center text-slate-50/60 font-normal">
          {description}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handle}
          className="inline-flex items-center will-change-transform transform-gpu transition-all duration-150 ease-in-out  active:scale-[0.99] underline-offset-4 hover:underline  text-slate-50/80 hover:text-slate-50 justify-center h-8 px-3 max-w-60 rounded-xl cursor-pointer"
        >
          <div className=" transform-gpu will-change-transform text-sm font-medium tracking-tight justify-center text-center">
            Mostrar más
          </div>
        </button>
      </div>
    </motion.article>
  );
};

export default ApplicationCard;
