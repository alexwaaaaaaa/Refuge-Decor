import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Refuge Decor",
    };
  }

  return {
    title: `${post.title} | Refuge Decor Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.featuredImage ? [post.featuredImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Refuge Decor & Designs LLC',
      logo: 'https://refugedecor.com/favicon.svg',
    },
  };

  return (
    <div className="relative min-h-screen bg-[#F7F3EC] text-[#201D18]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main className="container-custom py-24">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-[#78716C] hover:text-[#201D18] mb-8 transition-colors"
          >
            ← Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[9px] uppercase tracking-widest text-[#6B6F4C] font-sans font-semibold">
                {post.category}
              </span>
              <span className="text-[#78716C] text-xs">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl mb-4">{post.title}</h1>
            <p className="font-sans font-light text-[#78716C] text-lg leading-relaxed">
              {post.excerpt}
            </p>
            {post.featuredImage && (
              <div className="mt-8 aspect-[16/9] relative overflow-hidden rounded-2xl">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="font-sans font-light text-[#201D18] leading-relaxed space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="font-serif text-2xl mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="font-serif text-xl mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="ml-4">
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                }
                if (paragraph.startsWith('**')) {
                  return (
                    <strong key={index} className="font-semibold">
                      {paragraph.replace(/\*\*/g, '')}
                    </strong>
                  );
                }
                return <p key={index}>{paragraph}</p>;
              })}
            </div>
          </div>

          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#D8CBB8]/25">
              <h3 className="text-sm font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase()}`}
                    className="px-3 py-1 text-xs bg-[#EFE7D8] text-[#78716C] hover:bg-[#D8CBB8] rounded-full transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
