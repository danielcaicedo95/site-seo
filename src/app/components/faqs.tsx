"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // Importa motion aquí
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ = ({ faqs }: FAQProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 py-12 px-6">
      {/* Datos estructurados para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Título */}
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text mb-8">
        Preguntas Frecuentes
      </h2>

      {/* Lista de preguntas y respuestas */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-lg"
            onClick={() => toggleFAQ(index)}
          >
            {/* Pregunta */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-purple-400">
                {faq.question}
              </h3>
              {activeIndex === index ? (
                <Minus className="text-blue-400" size={24} />
              ) : (
                <Plus className="text-blue-400" size={24} />
              )}
            </div>

            {/* Respuesta */}
            {activeIndex === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-gray-300"
              >
                {faq.answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;