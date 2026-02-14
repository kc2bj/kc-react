import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Code() {
  const [contributions, setContributions] = useState([]);
  const [recap, setRecap] = useState(null);

  useEffect(() => {
    fetch("/.netlify/functions/github-contributions")
      .then((res) => res.json())
      .then((data) => {
        setContributions(data.contributions || []);
        setRecap(data.recap ?? null);
      })
      .catch((err) =>
        console.error("Error fetching GitHub data:", err)
      );
  }, []);

  const weeks = groupByWeeks(contributions);

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
      {weeks.map((week, wi) => (
        <motion.div
          key={`week-${wi}`}
          className="flex flex-col gap-1"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: wi * 0.02, duration: 0.3 }}
        >
          {week.map((day, di) => (
            <motion.div
            key={`${wi}-${di}`}
            className="circle"
            title={
              day
                ? `${new Date(day.date).toLocaleDateString(undefined, {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })} — ${day.count} contribution${day.count !== 1 ? "s" : ""}`
                : ""
            }
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.4 }}
            transition={{ delay: di * 0.005, type: "spring", stiffness: 200 }}
            style={{
              backgroundColor: day?.color || "#e5e7eb",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              cursor: "pointer", // optional for hover affordance
            }}
          />          
          ))}
        </motion.div>
      ))}
      </div>

      <div className="mt-10 bg-neutral-100 dark:bg-espresso-surface p-6 rounded-lg shadow-sm dark:shadow-none">
        <h3 className="text-2xl font-semibold mb-2 text-black dark:text-espresso-text">
          Code Contribution Recap
        </h3>
        <ul className="text-sm text-gray-700 dark:text-espresso-muted leading-relaxed list-disc ml-5 space-y-2">
          {recap ? (
            <>
              <li>
                <strong>{recap.totalContributions.toLocaleString()} contributions</strong> in the past year
                {recap.repositoryCount > 0 && (
                  <> across <strong>{recap.repositoryCount} repositories</strong></>
                )}
              </li>
              <li>
                <strong>{recap.commitPercent}% Commits</strong>
                {recap.pullRequestPercent > 0 && <> · <strong>{recap.pullRequestPercent}% Pull Requests</strong></>}
                {recap.issuePercent > 0 && <> · <strong>{recap.issuePercent}% Issues</strong></>}
                {" "}– feature development & collaboration
              </li>
            </>
          ) : (
            <li>
              <strong>Contributions</strong> in the past year — breakdown loads from GitHub when available
            </li>
          )}
          <li>
            Tech stack includes <strong>Drupal</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Vite</strong>, <strong>Acquia</strong>, <strong>Netlify</strong>
          </li>
          <li>
            Strengths: UX-first frontend architecture, design system integration, and headless CMS strategy
          </li>
        </ul>
      </div>

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

function getLevel(count) {
  if (count === 0) return 0;
  if (count < 3) return 1;
  if (count < 6) return 2;
  if (count < 10) return 3;
  return 4;
}

function groupByWeeks(data) {
  const weeks = Array(53)
    .fill(null)
    .map(() => Array(7).fill(null));

  data.forEach((day) => {
    const date = new Date(day.date);
    const dayOfWeek = date.getUTCDay(); // Sunday = 0
    const week = getWeekNumber(date) - 1;

    if (weeks[week] && typeof dayOfWeek === "number") {
      weeks[week][dayOfWeek] = day;
    }
  });

  return weeks;
}

function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}
