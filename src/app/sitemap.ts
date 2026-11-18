import type { MetadataRoute } from "next";
import { blogPosts, siteConfig } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about/`, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/services/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/stroke-rehabilitation/` },
    { url: `${base}/services/sports-injury-rehabilitation/` },
    { url: `${base}/services/back-neck-pain/` },
    { url: `${base}/services/knee-pain/` },
    { url: `${base}/services/post-surgery-rehabilitation/` },
    { url: `${base}/services/arthritis-treatment/` },
    { url: `${base}/services/womens-fitness-care/` },
    { url: `${base}/services/cerebral-palsy-management/` },
    { url: `${base}/services/manual-therapy/` },
    { url: `${base}/contact/`, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/privacy/`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms/`, changeFrequency: "yearly", priority: 0.3 },
  ];
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}/`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));
  return [
    ...staticRoutes,
    { url: `${base}/blog/`, changeFrequency: "weekly", priority: 0.6 },
    ...blogRoutes,
  ];
}
