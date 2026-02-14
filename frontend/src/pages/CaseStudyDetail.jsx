import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getCaseStudyBySlug } from "../data/caseStudies";
import FigmaEmbed from "../components/FigmaEmbed";

const blockClasses = {
  paragraph: "mb-4 text-neutral-800 dark:text-espresso-cream leading-relaxed",
  heading2: "text-2xl font-bold mt-10 mb-4 text-neutral-900 dark:text-espresso-cream",
  heading3: "text-xl font-semibold mt-8 mb-3 text-neutral-900 dark:text-espresso-cream",
  list: "list-disc pl-6 mb-4 space-y-1 text-neutral-800 dark:text-espresso-cream",
  listOrdered: "list-decimal pl-6 mb-4 space-y-1 text-neutral-800 dark:text-espresso-cream",
};

function CaseStudyBlock({ block, index }) {
  if (block.type === "heading") {
    const Tag = block.level === 3 ? "h3" : "h2";
    const className = block.level === 3 ? blockClasses.heading3 : blockClasses.heading2;
    return (
      <Tag key={index} className={className}>
        {block.text}
      </Tag>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p key={index} className={blockClasses.paragraph + (block.preformatted ? " whitespace-pre-line font-mono text-sm" : "")}>
        {block.text}
      </p>
    );
  }

  if (block.type === "link" && block.url) {
    return (
      <p key={index} className="mt-6 mb-4">
        <a
          href={block.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-espresso-leaf px-5 py-2.5 text-white font-medium no-underline hover:opacity-90 transition"
        >
          {block.text || "Visit site"}
        </a>
      </p>
    );
  }

  if (block.type === "list") {
    const Tag = block.ordered ? "ol" : "ul";
    const className = block.ordered ? blockClasses.listOrdered : blockClasses.list;
    return (
      <Tag key={index} className={className}>
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </Tag>
    );
  }

  if (block.type === "figma" && block.url) {
    return (
      <FigmaEmbed
        key={index}
        url={block.url}
        title={block.title}
      />
    );
  }

  if (block.type === "image" && block.url) {
    return (
      <figure key={index} className="my-8">
        <div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800/50">
          <img
            src={block.url}
            alt={block.alt ?? ""}
            className="w-full h-auto object-contain"
          />
        </div>
        {block.caption && (
          <figcaption className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 text-center">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return null;
}

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return (
      <motion.section
        className="w-full max-w-3xl mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <p className="mb-4">Case study not found.</p>
        <Link to="/case-studies" className="text-espresso-leaf underline">
          Back to Case Studies
        </Link>
      </motion.section>
    );
  }

  const blocks = Array.isArray(study.blocks) ? study.blocks : [];

  return (
    <motion.article
      className="w-full max-w-3xl mx-auto px-6 py-16 text-base text-neutral-800 dark:text-espresso-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link
        to="/case-studies"
        className="inline-flex items-center gap-1 text-sm text-espresso-leaf hover:underline mb-6 no-underline"
      >
        ← Case Studies
      </Link>

      <h1 className="text-4xl font-bold mb-6 text-neutral-900 dark:text-espresso-cream">
        {study.title}
      </h1>
      {study.description && (
        <p className="text-lg text-neutral-600 dark:text-espresso-cream/90 mb-8">
          {study.description}
        </p>
      )}

      <div className="case-study-content">
        {blocks.map((block, index) => (
          <CaseStudyBlock key={index} block={block} index={index} />
        ))}
      </div>
    </motion.article>
  );
}
