/** ARCHIVAL SIGNAL — deterministic route metadata and machine-readable provenance for every public page. */
import { useEffect } from "react";

export const SITE_ORIGIN = "https://factorajnl-wsynrwoe.manus.space";
const SOCIAL_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030736112/PeQYVHfGpZolyVGq.jpg";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  schemaType?: "WebPage" | "AboutPage" | "ContactPage";
  noIndex?: boolean;
};

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
}

function setLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
}

export default function Seo({ title, description, path, type = "website", schemaType = "WebPage", noIndex = false }: SeoProps) {
  useEffect(() => {
    const canonical = `${SITE_ORIGIN}${path === "/" ? "" : path}`;
    document.title = title;

    setMeta('meta[name="description"]', { name: "description", content: description });
    setMeta('meta[name="robots"]', { name: "robots", content: noIndex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" });
    setMeta('meta[name="author"]', { name: "author", content: "Factora Editorial Desk" });
    setMeta('meta[property="og:title"]', { property: "og:title", content: title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: description });
    setMeta('meta[property="og:type"]', { property: "og:type", content: type });
    setMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    setMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "Factora Journal" });
    setMeta('meta[property="og:locale"]', { property: "og:locale", content: "en_US" });
    setMeta('meta[property="og:image"]', { property: "og:image", content: SOCIAL_IMAGE });
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: SOCIAL_IMAGE });
    setLink('link[rel="canonical"]', { rel: "canonical", href: canonical });
    setLink('link[rel="alternate"][hreflang="en"]', { rel: "alternate", hreflang: "en", href: canonical });
    setLink('link[rel="alternate"][hreflang="x-default"]', { rel: "alternate", hreflang: "x-default", href: canonical });

    const existing = document.getElementById("factora-route-schema");
    existing?.remove();
    const schema = document.createElement("script");
    schema.id = "factora-route-schema";
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": schemaType,
          "@id": `${canonical}#page`,
          url: canonical,
          name: title,
          description,
          inLanguage: "en",
          isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
          publisher: { "@id": `${SITE_ORIGIN}/#organization` },
          dateModified: "2026-09-05",
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: path === "/" ? [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
          ] : [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
            { "@type": "ListItem", position: 2, name: title.replace(" — Factora Journal", ""), item: canonical },
          ],
        },
      ],
    });
    document.head.appendChild(schema);
  }, [description, noIndex, path, schemaType, title, type]);

  return null;
}
