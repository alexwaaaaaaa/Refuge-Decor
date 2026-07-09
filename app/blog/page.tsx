import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllBlogPosts, getAllCategories } from "@/lib/blog";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Refuge Decor",
  description: "Design tips, inspiration, and insights from the Refuge Decor team about West Texas interior design and staging.",
  openGraph: {
    title: "Blog | Refuge Decor",
    description: "Design tips, inspiration, and insights from the Refuge Decor team about West Texas interior design and staging.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Refuge Decor",
    description: "Design tips, inspiration, and insights from the Refuge Decor team about West Texas interior design and staging.",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getAllCategories();

  return (
    <div className="relative min-h-screen bg-[#F7F3EC] text-[#201D18]">
      <Navbar />
      <main className="container-custom py-24">
        <div className="mb-16">
          <span className="eyebrow block mb-4">JOURNAL</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Design Journal</h1>
          <p className="text-muted-text text-lg max-w-3xl">
            Insights, inspiration, and practical advice for creating beautiful West Texas interiors.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            href="/blog"
            className="px-4 py-2 text-xs uppercase tracking-wider font-semibold bg-[#201D18] text-[#F7F3EC] rounded-full"
          >
            All
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-4 py-2 text-xs uppercase tracking-wider font-semibold bg-[#EFE7D8] text-[#78716C] hover:bg-[#D8CBB8] rounded-full transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-text text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-[#EFE7D8] rounded-2xl overflow-hidden border border-[#D8CBB8]/25 hover:shadow-lg transition-shadow duration-300">
                  {post.featuredImage && (
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[9px] uppercase tracking-widest text-[#6B6F4C] font-sans font-semibold">
                        {post.category}
                      </span>
                      <span className="text-[#78716C] text-xs">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl text-[#201D18] mb-3 group-hover:text-[#6B6F4C] transition-colors">
                      {post.title}
                    </h2>
                    <p className="font-sans font-light text-[#78716C] text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-xs font-semibold text-[#201D18] group-hover:text-[#6B6F4C] transition-colors">
                      Read More →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
