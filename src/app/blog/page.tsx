// app/blog/page.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Daniel C.",
  description: "Artículos sobre SEO y marketing digital por Daniel Caicedo.",
};

interface PostData {
  title: string;
  date: string;
  excerpt?: string;
}

interface Post {
  slug: string;
  data: PostData;
}

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      data: data as PostData,
    };
  });

  // Ordenar posts por fecha descendente
  posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 gap-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="p-6 rounded-lg bg-gradient-to-br from-[#0f172a] to-[#1e293b] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,204,0.6)]"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00ffcc] to-[#ff0099] bg-clip-text text-transparent">
                {post.data.title}
              </h2>
            </Link>
            {post.data.excerpt && (
              <p className="mt-2 text-gray-300">{post.data.excerpt}</p>
            )}
            {post.data.date && (
              <p className="mt-2 text-sm text-gray-400">
                {new Date(post.data.date).toLocaleDateString()}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
