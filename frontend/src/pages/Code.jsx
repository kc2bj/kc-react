import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Code() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    fetch('/.netlify/functions/github-contributions')
      .then(res => res.json())
      .then(data => {
        setContributions(data.contributions || []);
      })
      .catch(err => console.error("Error fetching GitHub data:", err));
  }, []);

  return (
    <motion.section
      className="w-full max-w-6xl mx-auto px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6">GitHub Contributions</h2>
      <p className="mb-10 text-espresso-muted dark:text-espresso-cream text-sm leading-relaxed max-w-2xl">
        This visualization shows my open-source activity over the past year. Each dot represents daily contributions. Data is pulled live from the GitHub GraphQL API.
      </p>

      <div className="contribution-grid">
        {contributions.map((day, i) => (
          <motion.div
            key={i}
            className={`circle level-${getLevel(day.count)}`}
            title={`${new Date(day.date).toLocaleDateString(undefined, {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })} — ${day.count} contribution${day.count !== 1 ? 's' : ''}`}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.003 }}
          />
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3 text-sm text-gray-500 dark:text-espresso-muted">
        <span>Less</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <div key={level} className={`circle level-${level}`} />
          ))}
        </div>
        <span>More</span>
      </div>

      <div className="mt-10 text-sm text-gray-600 dark:text-espresso-muted">
        <p>
          Data is updated daily. Contribution levels reflect commit, PR, and issue activity. View full activity on{" "}
          <a href="https://github.com/kc2bj" className="underline hover:text-blue-500 dark:hover:text-espresso-accent" target="_blank" rel="noreferrer">
            GitHub
          </a>.
        </p>
      </div>
    </motion.section>
  );
}

function getLevel(count) {
  if (count === 0) return 0;
  if (count < 3) return 1;
  if (count < 6) return 2;
  if (count < 10) return 3;
  return 4;
}
