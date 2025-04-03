import fs from "fs/promises";
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

// Define el tipo para los parámetros
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Función auxiliar para obtener la ruta completa del post
const getPostFilePath = async (slug: string) => {
  const postsDirectory = path.join(process.cwd(), "posts");
  return path.join(postsDirectory, `${slug}.md`);
};

// Función para limpiar el contenido de tokens no deseados y eliminar numeración redundante en encabezados
const cleanMarkdownContent = (content: string): string => {
  return content
    // Elimina tokens de referencia, por ejemplo: ![ref1] o [ref1]
    .replace(/!\[ref\d*\]/g, "")
    .replace(/\[ref\d*\]/g, "")
    // Elimina numeración redundante al inicio de línea seguida de un encabezado
    .replace(/^\s*\d+\.\s*(#+)/gm, '$1');
};

// Genera metadatos SEO dinámicos
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const filePath = await getPostFilePath(slug);

  try {
    const fileContents = await fs.readFile(filePath, "utf8");
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
  } catch (error) {
    return {
      title: "Página no encontrada",
      description: "El post que buscas no existe.",
    };
  }
}

// Página principal del post con mejoras en UX/UI
export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const filePath = await getPostFilePath(slug);

  try {
    await fs.access(filePath);
  } catch {
    notFound();
  }

  const fileContents = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // Limpieza del contenido markdown para eliminar tokens no deseados y numeración redundante
  const cleanContent = cleanMarkdownContent(content);

  // Datos estructurados JSON-LD para SEO
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
      <Navbar />

      <article className="container mx-auto px-4 max-w-4xl mt-16 pb-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {data.date && (
          <p className="text-center text-sm text-gray-600 mb-8">
            Publicado el {new Date(data.date).toLocaleDateString()}
          </p>
        )}

        <div className="prose prose-sm md:prose-lg lg:prose-xl max-w-none mx-auto text-gray-800">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkRehype]}
            rehypePlugins={[rehypeRaw]}
            components={{
              // Renderizado personalizado para iframes
              iframe: ({ src, title, ...props }) => (
                <div className="relative w-full aspect-video my-8 overflow-hidden rounded-lg shadow-lg border border-gray-200">
                  <iframe
                    src={src as string}
                    title={title || "Embedded Video"}
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                    {...props}
                  />
                </div>
              ),
              // Renderizado personalizado para imágenes usando Next.js Image
              img: ({ src, alt }) => (
                <Image
                  src={src as string}
                  alt={alt as string}
                  width={500} // Ajusta esto al tamaño real de tu imagen
                  height={250} // Ajusta esto al tamaño real de tu imagen
                  className="rounded-lg shadow-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 mx-auto"
                  loading="lazy"
                  unoptimized
                />
              ),

              
              
              
              
              // Estilo personalizado para párrafos
              p: ({ children, ...props }) => (
                <p className="my-4 text-gray-800 leading-relaxed" {...props}>
                  {children}
                </p>
              ),
              // Estilo personalizado para enlaces
              a: ({ href, children, ...props }) => (
                <a
                  href={href as string}
                  className="text-blue-600 hover:text-blue-500 transition duration-300"
                  {...props}
                >
                  {children}
                </a>
              ),
              // Estilo personalizado para tablas
              table: ({ children }) => (
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse border border-gray-300 text-left">
                    {children}
                  </table>
                </div>
              ),

              th: ({ children }) => (
                <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-semibold text-gray-700">
                  {children}
                </th>
              ),

              td: ({ children }) => (
                <td className="border border-gray-300 px-4 py-2 text-gray-600">{children}</td>
              ),
              // Encabezados con estilos mejorados para una buena UX
              h1: ({ children, ...props }) => (
                <h1 className="mt-8 mb-4 text-5xl font-extrabold text-gray-900" {...props}>
                  {children}
                </h1>
              ),
              h2: ({ children, ...props }) => (
                <h2 className="mt-6 mb-3 text-4xl font-bold text-gray-800" {...props}>
                  {children}
                </h2>
              ),
              h3: ({ children, ...props }) => (
                <h3 className="mt-5 mb-2 text-3xl font-semibold text-gray-700" {...props}>
                  {children}
                </h3>
              ),
            }}
          >
            {cleanContent}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
