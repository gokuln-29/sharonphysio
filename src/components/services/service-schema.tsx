import { siteConfig } from "@/lib/utils";

// Breadcrumb + Service markup for a service page. Links to the clinic entity declared on the home page (#clinic).
// Deliberately contains no ratings, reviews or outcome claims.
export function ServiceSchema({ title, description, path }: { title: string; description: string; path: string }) {
  const url = `${siteConfig.url}${path}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
          { "@type": "ListItem", position: 3, name: title, item: url },
        ],
      },
      {
        "@type": "Service",
        name: title,
        description,
        url,
        serviceType: "Physiotherapy",
        provider: { "@id": `${siteConfig.url}/#clinic` },
        areaServed: { "@type": "City", name: siteConfig.city },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
