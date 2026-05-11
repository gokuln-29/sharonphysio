import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Health & Recovery Blog",
  description: "Practical guides on physiotherapy, stroke rehabilitation, back pain, sports recovery and paediatric care from the team at Sharon Physiotherapy Madurai.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Sharon Physiotherapy Blog",
    description: "Health, recovery and rehabilitation articles from our Madurai clinic.",
    url: "/blog",
  },
};

export default function BlogIndex() {
  return (
    <>
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
              Health Insights & Recovery Guides
            </h1>
            <p className="text-lg text-navy-700 leading-relaxed">
              Evidence-based articles from our physiotherapy team to help you understand your condition and take recovery into your own hands.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-44 gradient-teal" />
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 text-xs text-navy-500 mb-3">
                    <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{post.readingMinutes} min read</span>
                  </div>
                  <h2 className="font-heading text-lg font-bold text-navy-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-navy-600 mb-6 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary"
                  >
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
