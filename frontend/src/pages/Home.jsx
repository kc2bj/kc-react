import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import React from 'react';
import profileImg from '/images/Kris_profile_photo_box.png';

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

const badgeStyle = {
  display: 'inline-block',
  marginRight: '1rem',
  marginBottom: '1rem',
  verticalAlign: 'middle',
};

// Add pulse animation styles
const pulseRing = `
  relative
  before:content-[''] before:absolute before:inset-0 before:rounded-full
  before:ring-4 before:ring-espresso-leaf before:animate-pulse-slow
`;

// Add custom animation to global styles if not present
// @layer utilities {
//   @keyframes pulse-slow {
//     0%, 100% { opacity: 1; box-shadow: 0 0 0 0 #4C653A44; }
//     50% { opacity: 0.5; box-shadow: 0 0 0 12px #4C653A00; }
//   }
//   .animate-pulse-slow {
//     animation: pulse-slow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//   }
// }

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
          {/* Profile Image with Green Pulse Ring */}
          <div className="flex justify-center mb-8">
            <div className="w-40 h-40">
              <img
                src={profileImg}
                alt="Kris Celeste profile"
                className="w-40 h-40 object-cover rounded-full relative z-10"
              />
            </div>
          </div>

          {/* Intro Text */}
          <motion.div variants={fadeUpVariant} className="w-full">
            <motion.h1 className="text-4xl font-bold mb-4" variants={fadeUpVariant} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              Hi, I'm Kris.
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300"
              variants={fadeUpVariant}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm a frontend developer and UX/UI designer. I turn ideas into clean, functional, and beautiful digital experiences.
            </motion.p>
            {/* Animated Divider */}
            <motion.hr
              className="my-8 border-t-2 w-1/6 border-yellow-800"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ transformOrigin: 'left' }}
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </PageWrapper>
  );
}
