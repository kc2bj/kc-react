// src/components/PageLoader.jsx
import { motion } from "framer-motion";

export default function PageLoader({ message = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <motion.img
        src="/images/KC_markv2.svg"
        alt="Loading Logo"
        className="w-20 h-20 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <motion.p
        className="text-lg font-semibold text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {message}
      </motion.p>
    </div>
  );
}
