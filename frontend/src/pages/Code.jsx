import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Code() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/github-contributions")
      .then((res) => res.json())
      .then((data) => {
        setContributions(data.contributions || []);
      })
      .catch((err) => console.error("Error fetching GitHub data:", err));
  }, []);

  const monthLabels = getMonthLabels(contributions);

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

      <div className="relative overflow-x-auto">
        {/* X-Axis Month Labels */}
        <div className="absolute -top-5 left-8 flex text-xs text-gray-500 dark:text-gray-400">
          {monthLabels.map((label, idx) => (
            <span
              key={idx}
              className="absolute"
              style={{ left: `${label.index * 12}px` }}
            >
              {label.month}
            </span>
          ))}
        </div>

        {/* Y-Axis Weekday Labels + Grid */}
        <div className="flex">
          <div className="flex flex-col justify-between mr-2 text-xs text-gray-500 dark:text-gray-400">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>

          <div className="contribution-grid">
            {contributions.map((day, i) => (
              <motion.div
                key={i}
                className={`circle level-${getLevel(day.count)}`}
                title={`${new Date(day.date).toLocaleDateString(undefined, {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })} — ${day.count} contribution${day.count !== 1 ? "s" : ""}`}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.003 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Recap */}
      <div className="mt-10 bg-neutral-100 dark:bg-espresso-surface p-6 rounded-lg shadow-sm dark:shadow-none">
        <h3 className="text-2xl font-semibold mb-2 text-black dark:text-espresso-text">
          Code Contribution Recap
        </h3>
        <ul className="text-sm text-gray-700 dark:text-espresso-muted leading-relaxed list-disc ml-5 space-y-2">
          <li><strong>784 contributions</strong> in the past year across 8 repositories</li>
          <li><strong>69% Commits</strong>, <strong>31% Pull Requests</strong> – feature development & collaboration</li>
          <li>Top repositories:
            <ul className="list-disc ml-6">
              <li><a href="https://github.com/uvarc/rc-website" className="text-blue-600 dark:text-espresso-accent hover:underline" target="_blank" rel="noopener noreferrer">@uvarc/rc-website</a></li>
              <li><a href="https://github.com/uva-its-cacsdrupal/uvasf" className="text-blue-600 dark:text-espresso-accent hover:underline" target="_blank" rel="noopener noreferrer">@uva-its-cacsdrupal/uvasf</a></li>
              <li><a href="https://github.com/kc2bj/personal-website" className="text-blue-600 dark:text-espresso-accent hover:underline" target="_blank" rel="noopener noreferrer">@kc2bj/personal-website</a></li>
            </ul>
          </li>
          <li>Tech stack includes <strong>Drupal</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Vite</strong>, <strong>Acquia</strong>, <strong>Netlify</strong></li>
          <li>Strengths: UX-first frontend architecture, design system integration, and headless CMS strategy</li>
        </ul>
      </div>

      {/* Legend */}
      <div className="mt-8 flex items-center gap-3 text-sm text-gray-500 dark:text-espresso-muted">
        <span>Less</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <div key={level} className={`circle level-${level}`} />
          ))}
        </div>
        <span>More</span>
      </div>

      {/* Footer Note */}
      <div className="mt-10 text-sm text-gray-600 dark:text-espresso-muted">
        <p>
          Data is updated daily. Contribution levels reflect commit, PR, and issue activity. View full activity on{" "}
          <a
            href="https://github.com/kc2bj"
            className="underline hover:text-blue-500 dark:hover:text-espresso-accent"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>.
        </p>
      </div>
    </motion.section>
  );
}

// Determine contribution level class
function getLevel(count) {
  if (count === 0) return 0;
  if (count < 3) return 1;
  if (count < 6) return 2;
  if (count < 10) return 3;
  return 4;
}

// Extract labels for the X-axis
function getMonthLabels(contributions) {
  const labels = [];
  let lastMonth = "";

  contributions.forEach((day, index) => {
    const month = new Date(day.date).toLocaleString("default", { month: "short" });

    if (month !== lastMonth && (labels.length === 0 || index - labels[labels.length - 1].index > 14)) {
      labels.push({ month, index });
      lastMonth = month;
    }
  });

  return labels;
}
