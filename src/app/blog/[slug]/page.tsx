import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/navbar";

// Define the type for the parameters
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${slug}.md`);

  // If the post file does not exist, return metadata for a 404 page
  if (!fs.existsSync(filePath)) {
    return {
      title: "Página no encontrada",
      description: "El post que buscas no existe.",
    };
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: data.title ? `${data.title} | Blog` : "Blog Post",
    description: data.excerpt || "Un artículo de nuestro blog.",
    alternates: { canonical: `https://daniseo.site/blog/${slug}` },
    openGraph: {
      title: data.title,
      description: data.excerpt,
      images: data.coverImage ? [{ url: `https://daniseo.site${data.coverImage}` }] : [],
      type: "article",
      publishedTime: data.date,
    },
  };
}

// Main post page component with enhanced UX/UI for mobile and desktop
export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${slug}.md`);

  // If the file doesn't exist, show the 404 page
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // Structured JSON-LD data for SEO
  const structuredData: any = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    image: data.coverImage ? `https://daniseo.site${data.coverImage}` : undefined,
    datePublished: data.date,
    author: { "@type": "Person", name: "Daniel Caicedo" },
    description: data.excerpt,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://daniseo.site/blog/${slug}` },
  };

  // Add FAQ Schema if FAQs are provided
  if (data.faqs) {
    structuredData.mainEntity = {
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq: any) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    };
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main article container */}
      <article className="container mx-auto px-4 max-w-4xl mt-16 pb-16">
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Nota: El título del post se usa únicamente en el metadata. */}

        {/* Publication Date */}
        {data.date && (
          <p className="text-center text-sm text-gray-600 mb-8">
            Publicado el {new Date(data.date).toLocaleDateString()}
          </p>
        )}

        {/* Post Content with responsive and well-spaced design */}
        <div className="prose prose-sm md:prose-lg lg:prose-xl max-w-none mx-auto text-gray-800">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkRehype]}
            rehypePlugins={[rehypeRaw]}
            components={{
              // Custom rendering for iframes
              iframe: ({ node, ...props }) => {
                if (!node || !("properties" in node)) return null;
                return (
                  <div className="relative w-full aspect-video my-8 overflow-hidden rounded-lg shadow-lg border border-gray-200">
                    <iframe
                      src={node.properties?.src as string}
                      className="w-full h-full rounded-lg"
                      title="Embedded Video"
                      frameBorder="0"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                );
              },
              // Custom rendering for images using Next.js Image component
              img: ({ node, ...props }) => {
                if (!node || !("properties" in node)) return null;
                return (
                  <div className="my-8 flex justify-center">
                    <Image
                      src={node.properties?.src as string}
                      alt={node.properties?.alt as string}
                      width={800}
                      height={450}
                      className="rounded-lg shadow-lg border border-gray-200 hover:border-gray-300 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                );
              },
              // Custom paragraph styling
              p: ({ node, children }) => {
                if (node && "children" in node && Array.isArray(node.children)) {
                  const firstChild = node.children[0];
                  if ("tagName" in firstChild && firstChild.tagName === "img") {
                    return <>{children}</>;
                  }
                }
                return <p className="my-4 text-gray-800 leading-relaxed">{children}</p>;
              },
              // Custom link styling
              a: ({ node, ...props }) => (
                <a
                  className="text-blue-600 hover:text-blue-500 transition duration-300"
                  {...props}
                />
              ),
              // Headings styling (evitando renderizar el título principal si ya se usó en metadata)
              h1: ({ node, ...props }) => (
                // Omitir el h1 principal para no duplicar el título
                <></>
              ),
              h2: ({ node, ...props }) => (
                <h2 className="mt-6 mb-3 text-2xl md:text-3xl font-bold text-gray-800" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="mt-5 mb-2 text-xl md:text-2xl font-bold text-gray-800" {...props} />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
