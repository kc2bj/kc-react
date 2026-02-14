/**
 * Embeds a Figma file, prototype, or board.
 * Pass any Figma share URL (e.g. https://www.figma.com/design/... or https://www.figma.com/proto/...).
 * Converts to Figma's embed format and renders a responsive iframe.
 */
export default function FigmaEmbed({ url, title = "Figma embed", className = "" }) {
  if (!url?.trim()) return null;

  const embedUrl = toFigmaEmbedUrl(url.trim());

  return (
    <figure className={`my-8 ${className}`}>
      <div className="relative w-full rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800/50">
        {/* 16:9 responsive container; Figma embeds work well at various sizes */}
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={embedUrl}
            title={title}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            style={{ border: "none" }}
          />
        </div>
      </div>
      {title && title !== "Figma embed" && (
        <figcaption className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 text-center">
          {title}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Converts a Figma share URL to the embed URL format.
 * Supports: design, proto, file, board, slides, deck.
 */
function toFigmaEmbedUrl(shareUrl) {
  try {
    const parsed = new URL(shareUrl);

    // Already an embed URL
    if (parsed.hostname === "embed.figma.com") {
      const embed = new URL(parsed);
      if (!embed.searchParams.has("embed-host")) {
        embed.searchParams.set("embed-host", "share");
      }
      return embed.toString();
    }

    if (parsed.hostname !== "www.figma.com" && parsed.hostname !== "figma.com") {
      return shareUrl;
    }

    // Path like /design/ABC123/Title or /proto/ABC123/...
    const pathMatch = parsed.pathname.match(/^\/(design|proto|file|board|slides|deck)\/([^/]+)(?:\/.*)?$/i);
    if (!pathMatch) return shareUrl;

    const [, type, fileKey] = pathMatch;
    const embedBase = "https://embed.figma.com";
    const embedPath = `/${type.toLowerCase()}/${fileKey}`;
    const embed = new URL(embedPath, embedBase);
    embed.searchParams.set("embed-host", "share");

    return embed.toString();
  } catch {
    return shareUrl;
  }
}
