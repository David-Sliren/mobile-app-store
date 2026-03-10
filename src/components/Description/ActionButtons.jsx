import { useState } from "react";

// Constantes
import { fadeIn } from "../../constants/motion_variants";
import { DEFAULT_CONFIG } from "../../constants/qrConfig";

// Librerias
import { AnimatePresence, motion } from "motion/react";
import { Download, Share2 } from "lucide-react";

// Components
import ButtonCallAction from "../Buttons/ButtonCallAction";
import ButtonGray from "../Buttons/ButtonGray";
import Qr from "../../UI/qr-code/Qr";

const ActionButtons = ({ download, share, name }) => {
  const [isChangeQr, setIsChangeQr] = useState(false);

  function shredApp() {
    setIsChangeQr(!isChangeQr);
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="relative flex flex-wrap gap-4 pt-4 items-center justify-start w-fit"
    >
      <a href={download} download={`${name}.apk`} target="_blank">
        <ButtonCallAction title="DESCARGAR APP" icon={<Download size={20} />} />
      </a>

      <ButtonGray icon={<Share2 size={18} />} handle={shredApp} />
      <AnimatePresence>
        {isChangeQr && (
          <Qr
            qrValue={share}
            qrConfig={DEFAULT_CONFIG}
            className="absolute -top-60 left-0 sm:-top-12 sm:left-[110%] bg-emerald-900 sm:bg-emerald-900 rounded-2xl text-center p-4 overflow-hidden z-10 "
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ActionButtons;
