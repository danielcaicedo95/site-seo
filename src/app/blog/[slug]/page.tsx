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

// 📌 Definir el tipo de los parámetros
interface PageProps {
  params: { slug: string };
}

// 📌 Obtener los slugs de los posts
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");

  // Verificar si la carpeta existe
  if (!fs.existsSync(postsDirectory)) {
    console.error("La carpeta 'posts' no existe.");
    return [];
  }

  const filenames = fs.readdirSync(postsDirectory);

  // Verificar si hay archivos en la carpeta
  if (filenames.length === 0) {
    console.error("No hay archivos en la carpeta 'posts'.");
    return [];
  }

  return filenames.map((filename) => ({ slug: filename.replace(/\.md$/, "") }));
}

// 📌 Generar metadata SEO dinámica
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${params.slug}.md`);

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
    alternates: { canonical: `https://daniseo.site/blog/${params.slug}` },
    openGraph: {
      title: data.title,
      description: data.excerpt,
      images: data.coverImage ? [{ url: `https://daniseo.site${data.coverImage}` }] : [],
      type: "article",
      publishedTime: data.date,
    },
  };
}

// 📌 Página del post con diseño futurista
export default async function PostPage({ params }: PageProps) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${params.slug}.md`);

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
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://daniseo.site/blog/${params.slug}` },
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
    <article className="container mx-auto px-4 max-w-4xl">
      {/* 📌 Datos estructurados JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* 📌 Portada a pantalla completa */}
      <div className="relative w-full h-[60vh] mb-8 overflow-hidden">
        {data.coverImage && (
          <Image
            src={data.coverImage}
            alt={data.title}
            fill
            className="object-cover brightness-90"
            priority
          />
        )}
        <h1 className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white text-center bg-gradient-to-r from-purple-800/50 to-blue-800/50 px-6 leading-snug">
          {data.title}
        </h1>
      </div>

      {/* 📌 Fecha */}
      {data.date && (
        <p className="text-center text-sm text-gray-400 mb-8">
          {new Date(data.date).toLocaleDateString()}
        </p>
      )}

      {/* 📌 Contenido del post con diseño futurista */}
      <div className="prose prose-invert max-w-none mx-auto text-lg leading-relaxed">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkRehype]}
          rehypePlugins={[rehypeRaw]}
          components={{
            iframe: ({ node, ...props }) => {
              if (!node || !("properties" in node)) return null;
              return (
                <div className="relative w-full h-64 md:h-96 my-8 overflow-hidden rounded-lg shadow-lg border-2 border-purple-500/50">
                  <iframe
                    src={node.properties?.src as string}
                    className="w-full h-full rounded-lg"
                    title="Video"
                    frameBorder="0"
                    allowFullScreen
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
                    className="rounded-lg shadow-lg border-2 border-purple-500/50 hover:border-cyan-500/50 transition-all duration-300"
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
              return <p className="text-gray-300">{children}</p>;
            },
            a: ({ node, ...props }) => (
              <a
                className="text-cyan-400 hover:text-cyan-300 transition duration-300"
                {...props}
              />
            ),
            h1: ({ node, ...props }) => (
              <h1 className="text-4xl font-bold text-purple-400 mb-6" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-3xl font-bold text-blue-400 mb-4" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-2xl font-bold text-purple-300 mb-3" {...props} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}