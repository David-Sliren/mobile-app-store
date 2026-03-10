// Librerias
import QRCode from "react-qr-code";
import { motion } from "motion/react";

const Qr = ({ qrValue, className, qrConfig }) => {
  return (
    <motion.div
      initial={{ rotateZ: -25, opacity: 0 }}
      animate={{ rotateZ: 0, opacity: 1 }}
      exit={{ translateY: 10, scale: 0.9, opacity: 0 }}
      className={className}
    >
      <QRCode {...qrConfig} value={qrValue} />
    </motion.div>
  );
};

export default Qr;
