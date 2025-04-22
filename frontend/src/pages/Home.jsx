import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <PageWrapper>
    <motion.section
      className="w-full max-w-4xl mx-auto px-6 py-16"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col sm:flex-row items-center sm:items-start gap-8"
        variants={containerVariants}
      >
        {/* Profile Image */}
        <motion.img
          src="/images/Kris_profile_photo_box.png"
          alt="Kris Celeste"
          className="w-32 h-32 rounded-full object-cover"
          variants={fadeUpVariant}
        />

        {/* Intro Text */}
        <motion.div variants={fadeUpVariant}>
          <motion.h1 className="text-4xl font-bold mb-4" variants={fadeUpVariant}>
            Hi, I'm Kris.
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300"
            variants={fadeUpVariant}
          >
            I'm a frontend developer and UX/UI designer. I turn ideas into clean, functional, and beautiful digital experiences.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
    </PageWrapper>
  );
}
