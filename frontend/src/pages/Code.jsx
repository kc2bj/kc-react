import { useEffect, useState } from "react";
import "../styles/contributions.css";

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
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-10">GitHub Contributions</h2>

      <div className="contribution-grid">
        {contributions.map((day, index) => (
          <div
            key={index}
            className={`circle ${getLevelClass(day.count)}`}
            title={`${day.count} contributions on ${day.date}`}
          />
        ))}
      </div>
    </section>
  );
}

function getLevelClass(count) {
  if (count === 0) return "level-0";
  if (count < 3) return "level-1";
  if (count < 6) return "level-2";
  if (count < 10) return "level-3";
  return "level-4";
}
