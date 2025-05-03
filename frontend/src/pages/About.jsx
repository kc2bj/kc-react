import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="w-full max-w-3xl mx-auto px-6 py-16 text-base leading-relaxed text-neutral-800 dark:text-espresso-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6">About Me</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-neutral-700 dark:text-espresso-accent">
          Signature Strengths by StrengthsFinder®
        </h3>
        <p className="italic text-sm text-neutral-600 dark:text-espresso-muted">
          Arranger | Responsibility | Relator | Achiever | Positivity
        </p>
      </div>

      <p className="mb-4">
        I’m a UI/UX Designer and Developer based in Charlottesville, VA, currently leading design and development initiatives in central Virginia. With over 15 years of combined experience in design, development, and communications, I specialize in creating user-centered digital solutions and implementing them with clean, efficient code.
      </p>

      <p className="mb-4">
        My career spans agency, in-house, and entrepreneurial roles, including founding The iAM Group, where I led a team providing brand and digital solutions for non-profit organizations. My technical expertise includes UX design, frontend development, and Drupal implementation, complemented by a background in marketing communications and brand strategy.
      </p>

      <p className="mb-4">
        I hold a BA in Graphic Design from George Mason University (2010), where I began my freelance practice serving both commercial and non-profit clients. This early entrepreneurial experience laid the foundation for my holistic approach to digital solutions.
      </p>

      <p className="mb-6">
        Outside of crafting digital experiences, I enjoy exploring bookstores, following the MCU, and spending time with my family — my wife, our four children, and our two dogs.
      </p>
    </motion.section>
  );
}
