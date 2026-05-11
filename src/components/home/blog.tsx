"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/utils";
import Link from "next/link";

export function BlogSection() {
  return (
    <section className="py-24 bg-teal-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
            Health Insights
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Recent Articles & Tips
          </h2>
          <p className="text-navy-700 leading-relaxed">
            Stay informed about the latest in physiotherapy, rehabilitation, and wellness. Our blog features expert advice and recovery guides.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 gradient-teal relative overflow-hidden">
                  <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                <CardContent className="p-6">
                  <div className="text-xs text-teal-600 font-medium mb-2">{post.date}</div>
                  <h3 className="font-heading font-bold text-lg text-navy-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-navy-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/blog">
            <Button variant="outline" size="lg">View all articles</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
