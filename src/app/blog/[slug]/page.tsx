import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/home/cta";
import { blogPosts, siteConfig } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.isoDate,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.isoDate,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/Logo.webp` },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <article className="pt-32 pb-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-navy-600 hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-navy-500 mb-8">
            <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" />{post.readingMinutes} min read</span>
          </div>
          <div className="h-56 sm:h-72 rounded-3xl gradient-teal mb-10" />

          <div className="space-y-6 text-navy-700 leading-relaxed">
            {post.content.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h2 className="font-heading text-xl sm:text-2xl font-semibold text-navy-900 mt-8 mb-3">
                    {block.heading}
                  </h2>
                )}
                <p>{block.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-teal-50 border border-teal-200">
            <p className="text-sm text-navy-700 mb-4">
              Have a question about your condition or want a personalised assessment?
            </p>
            <Link href="/contact#book">
              <Button>Book an appointment</Button>
            </Link>
          </div>
        </div>
      </article>

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
