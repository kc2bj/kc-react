import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudies() {
  return (
    <motion.section
      className="w-full max-w-3xl mx-auto px-6 py-16 text-base leading-relaxed text-neutral-800 dark:text-espresso-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
      <p className="mb-10 text-espresso-muted dark:text-espresso-cream">
        Selected projects in design, web, and digital experience.
      </p>

      <ul className="space-y-6">
        {caseStudies.map((study, i) => (
          <motion.li
            key={study.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <Link
              to={`/case-studies/${study.slug}`}
              className="block p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-espresso-leaf hover:bg-espresso-leaf/5 dark:hover:bg-espresso-leaf/10 transition-colors no-underline"
            >
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-espresso-cream mb-1">
                {study.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-espresso-muted">
                {study.description}
              </p>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
