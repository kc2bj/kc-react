// src/components/Loader.jsx
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900 text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.img
        src="/images/KC_markv2.svg"
        alt="Kris Celeste Logo"
        className="w-16 h-16"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
