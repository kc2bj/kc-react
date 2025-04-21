import { useEffect, useState } from "react";

export default function Work() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://localhost:53395/jsonapi/node/work", {
      headers: {
        Accept: "application/vnd.api+json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.data.map((item) => ({
          id: item.id,
          title: item.attributes.title,
          description: item.attributes.body?.summary || item.attributes.body?.value || "No description",
        }));
        setProjects(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch work content:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading work...</div>;
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-10">Selected Work</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-espresso-surface border border-gray-200 dark:border-espresso-border p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
          >
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-espresso-text">
              {project.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-espresso-muted">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
