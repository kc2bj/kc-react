import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getCaseStudyBySlug } from "../data/caseStudies";
import FigmaEmbed from "../components/FigmaEmbed";

function CaseStudyImage({ url, alt, caption }) {
  const [failed, setFailed] = useState(false);
  const base = import.meta.env.BASE_URL ?? "/";
  const src = url.startsWith("http") ? url : base.replace(/\/$/, "") + url;

  if (failed) {
    return (
      <figure className="my-8">
        <div className="rounded-lg overflow-hidden border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center min-h-[200px]">
          <p className="text-sm text-amber-800 dark:text-amber-200 p-4 text-center">
            Image unavailable. Add <code className="font-mono bg-amber-100 dark:bg-amber-900/50 px-1 rounded">{url.split("/").pop()}</code> to <code className="font-mono bg-amber-100 dark:bg-amber-900/50 px-1 rounded">public/images/</code>.
          </p>
        </div>
        {caption && (
          <figcaption className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 text-center">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="my-8">
      <div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800/50">
        <img
          src={src}
          alt={alt ?? ""}
          className="w-full h-auto object-contain"
          onError={() => setFailed(true)}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

const blockClasses = {
  paragraph: "mb-4 text-neutral-800 dark:text-espresso-cream leading-relaxed",
  heading2: "text-2xl font-bold mb-4 text-neutral-900 dark:text-espresso-cream",
  heading2First: "text-2xl font-bold mt-0 mb-4 text-neutral-900 dark:text-espresso-cream",
  heading3: "text-xl font-semibold mt-6 mb-3 text-neutral-900 dark:text-espresso-cream",
  list: "list-disc pl-6 mb-4 space-y-1 text-neutral-800 dark:text-espresso-cream",
  listOrdered: "list-decimal pl-6 mb-4 space-y-1 text-neutral-800 dark:text-espresso-cream",
};

/** Split blocks into sections by level-2 headings. Each section is [blocks]. */
function getSections(blocks) {
  const sections = [];
  let current = [];
  for (const block of blocks) {
    if (block.type === "heading" && block.level === 2) {
      if (current.length) sections.push(current);
      current = [block];
    } else {
      current.push(block);
    }
  }
  if (current.length) sections.push(current);
  return sections;
}

/** Section is full width if it contains any figma or image block. */
function isFullWidthSection(sectionBlocks) {
  return sectionBlocks.some((b) => b.type === "figma" || b.type === "image");
}

function CaseStudyBlock({ block, index, isFirstInSection }) {
  if (block.type === "heading") {
    const Tag = block.level === 3 ? "h3" : "h2";
    const className =
      block.level === 3
        ? blockClasses.heading3
        : isFirstInSection
          ? blockClasses.heading2First
          : blockClasses.heading2;
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
      <CaseStudyImage
        key={index}
        url={block.url}
        alt={block.alt}
        caption={block.caption}
      />
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
  const sections = getSections(blocks);

  return (
    <motion.article
      className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-base text-neutral-800 dark:text-espresso-cream"
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
        <p className="text-lg text-neutral-600 dark:text-espresso-cream/90 mb-10">
          {study.description}
        </p>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 lg:gap-y-12 case-study-content">
        {sections.map((sectionBlocks, sectionIndex) => {
          const fullWidth = isFullWidthSection(sectionBlocks);
          return (
            <div
              key={sectionIndex}
              className={
                fullWidth
                  ? "lg:col-span-2 min-w-0"
                  : "min-w-0 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-800/30 p-6 lg:p-8"
              }
            >
              {sectionBlocks.map((block, blockIndex) => (
                <CaseStudyBlock
                  key={blockIndex}
                  block={block}
                  index={blockIndex}
                  isFirstInSection={blockIndex === 0}
                />
              ))}
            </div>
          );
        })}
      </div>
    </motion.article>
  );
}
