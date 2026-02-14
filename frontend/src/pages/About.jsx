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

      <p className="mb-4">
        I was born in the Philippines and came to America at the age of 5. I am ethnically Filipino but grew up in the American suburbs of Virginia, and became a naturalized American citizen in my late 20s.
      </p>
      <p className="mb-4">
        I am married to my wife, whom I met in college, and together we have four amazing kids ranging from 12 years to 4 years old. Family is at the heart of everything I do.
      </p>
      <p className="mb-4">
        I'm a huge Washington Commanders fan (#RaiseHail) and love the energy of game day. As a kid, I dreamed of being a Disney cartoonist and was close to joining Disney Studios during the pandemic, but a restructuring removed the position I was interviewing for.
      </p>
      <p className="mb-4">
        I enjoy the nostalgia of revisiting classic movies and miss the excitement of seeing blockbuster films on opening nights. Whether it's drawing, cheering for my team, or spending time with my family, I try to bring passion and positivity to everything I do.
      </p>

      <p className="mb-4">
        Outside of crafting digital experiences, I enjoy exploring bookstores, following the MCU, and spending time with my family — my wife, our four children, and our two dogs.
      </p>
      <p className="mb-6">
        I'm also the founder of <strong><a href="https://theiamgroup.org" target="_blank" rel="noopener noreferrer" className="text-espresso-leaf dark:text-espresso-leaf underline hover:no-underline">iAM Studios</a></strong>, a small, founder-led studio. We build calm, privacy-first software for real-world complexity.
      </p>
    </motion.section>
  );
}
