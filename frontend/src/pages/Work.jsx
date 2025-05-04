import { useEffect, useState } from "react";

export default function Work() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const apiBase = import.meta.env.VITE_API_URL;
    fetch(`${apiBase}/node/work?include=field_thumbnail_image.field_media_image`,
      {
        headers: {
          Accept: "application/vnd.api+json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const included = data.included || [];

        const getImageUrl = (mediaId) => {
          const media = included.find(
            (item) => item.type === "media--image" && item.id === mediaId
          );
          if (!media) return null;

          const fileId = media.relationships?.field_media_image?.data?.id;
          const file = included.find(
            (item) => item.type === "file--file" && item.id === fileId
          );
          return file?.attributes?.uri?.url
        ? apiBase.replace("/jsonapi", "") + file.attributes.uri.url
        : null;
        };

        const formatted = data.data.map((item) => ({
          id: item.id,
          title: item.attributes.title,
          summary:
            item.attributes.body?.summary ||
            item.attributes.body?.value ||
            "",
          description:
            item.attributes.field_description?.processed || "",
          image: getImageUrl(
            item.relationships?.field_thumbnail_image?.data?.id
          ),
          tech: item.attributes.field_tech_stack || [],
          link: item.attributes.field_project_link?.uri || null,
          linkLabel:
            item.attributes.field_project_link?.title || "Visit site",
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
            className="bg-white dark:bg-espresso-surface border border-gray-200 dark:border-espresso-border p-6 rounded-xl shadow-sm flex flex-col transition-all duration-300 hover:shadow-md hover:scale-[1.01] card-shadow"
          >
            {/* Thumbnail Image */}
            {project.image && (
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-md"
                  loading="lazy"
                />
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-espresso-text">
              {project.title}
            </h3>

            {/* Tech Stack Tags */}
            {project.tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-espresso-leaf text-white text-xs font-medium px-2 py-1 rounded-full"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            )}

            {/* Description */}
            {project.description && (
              <div
                className="text-sm text-gray-700 dark:text-espresso-muted mb-4"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            )}

            {/* Link Button */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-sm font-medium px-4 py-2 rounded bg-espresso-accent text-white hover:bg-espresso-leaf transition"
              >
                {project.linkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
