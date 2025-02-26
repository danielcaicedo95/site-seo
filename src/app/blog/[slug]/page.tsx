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

// 📌 Definir el tipo de los parámetros
interface PageProps {
  params: Promise<{ slug: string }>;
}

// 📌 Generar metadata SEO dinámica
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params; // Usar `await` para acceder a `params`
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${slug}.md`);

  // Verificar si el archivo existe
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

// 📌 Página del post con diseño profesional y responsivo
export default async function PostPage({ params }: PageProps) {
  const { slug } = await params; // Usar `await` para acceder a `params`
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${slug}.md`);

  // Verificar si el archivo existe
  if (!fs.existsSync(filePath)) {
    notFound(); // Mostrar página 404 si el archivo no existe
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // 🛠 Datos estructurados JSON-LD
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

  // Agregar FAQ Schema si hay preguntas
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
    <div>
      {/* 📌 Navbar */}
      <Navbar />

      {/* 📌 Contenedor principal del artículo */}
      <article className="container mx-auto px-4 max-w-4xl mt-16">
        {/* 📌 Datos estructurados JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        {/* 📌 Título con fondo futurista */}
        <div className="w-full mb-8 p-6 rounded-lg bg-gradient-to-r from-purple-900 to-blue-900 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {data.title}
          </h1>
        </div>

        {/* 📌 Fecha */}
        {data.date && (
          <p className="text-center text-sm text-gray-600 mb-8">
            Publicado el {new Date(data.date).toLocaleDateString()}
          </p>
        )}

        {/* 📌 Contenido del post con diseño profesional y responsivo */}
        <div className="prose prose-sm md:prose-lg max-w-none mx-auto text-[#333333]">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkRehype]}
            rehypePlugins={[rehypeRaw]}
            components={{
              iframe: ({ node, ...props }) => {
                if (!node || !("properties" in node)) return null;
                return (
                  <div className="relative w-full aspect-video my-8 overflow-hidden rounded-lg shadow-lg border-2 border-gray-200">
                    <iframe
                      src={node.properties?.src as string}
                      className="w-full h-full rounded-lg"
                      title="Video"
                      frameBorder="0"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                );
              },
              img: ({ node, ...props }) => {
                if (!node || !("properties" in node)) return null;
                return (
                  <div className="my-8 flex justify-center">
                    <Image
                      src={node.properties?.src as string}
                      alt={node.properties?.alt as string}
                      width={800}
                      height={450}
                      className="rounded-lg shadow-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                );
              },
              p: ({ node, children }) => {
                if (node && "children" in node && Array.isArray(node.children)) {
                  const firstChild = node.children[0];
                  if ("tagName" in firstChild && firstChild.tagName === "img") {
                    return <>{children}</>;
                  }
                }
                return <p className="text-[#333333]">{children}</p>;
              },
              a: ({ node, ...props }) => (
                <a
                  className="text-blue-600 hover:text-blue-500 transition duration-300"
                  {...props}
                />
              ),
              h1: ({ node, ...props }) => (
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-3" {...props} />
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