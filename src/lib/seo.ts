import { site } from "@/data/site";

export function absoluteUrl(path = "/") {
  const normalized = path.replace(/^\/+|\/+$/g, "");
  const isFile = /\.[a-z0-9]+$/i.test(normalized);
  const clean = path === "/" ? "/" : `/${normalized}${isFile ? "" : "/"}`;
  return `${site.baseUrl}${clean}`;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: absoluteUrl(),
    description: site.description,
    inLanguage: "en",
    publisher: { "@type": "Organization", name: site.name },
  };
}

export function videoGameSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: site.gameName,
    url: site.officialUrl,
    image: absoluteUrl("/gameplay-town-wide.png"),
    description: "A short adventure about helping the ghosts of Spooky Town and proving that you can be whatever you want to be.",
    applicationCategory: "Game",
    gamePlatform: ["Web browser", "Windows"],
    genre: ["Adventure", "Cozy", "Wholesome"],
    author: { "@type": "Person", name: site.developer },
    datePublished: site.published,
    inLanguage: "en",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: site.officialUrl,
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleSchema(title: string, description: string, slug: string, image = "/gameplay-town-wide.png") {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: absoluteUrl(slug),
    image: absoluteUrl(image),
    datePublished: site.published,
    dateModified: site.lastChecked,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };
}

export function howToSchema(
  name: string,
  description: string,
  path: string,
  steps: { title: string; body: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: absoluteUrl(path),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.body,
    })),
  };
}

export function trackerSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Little Troubles Task Tracker",
    url: absoluteUrl("/task-tracker/"),
    applicationCategory: "GameApplication",
    operatingSystem: "Any web browser",
    description: "A local checklist for tracking all 11 Little Troubles in Spooky Town objectives.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}
