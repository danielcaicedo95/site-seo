"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "../styles/components/cms.css";  
interface CmsItem {
  key: string;
  name: string;
  description: string;
  image: string;
}

const cmsData: CmsItem[] = [
  { key: "shopify", name: "Shopify", description: "Plataforma de comercio líder.", image: "/images/cms/shopify.png" },
  { key: "wordpress", name: "WordPress", description: "El CMS más popular del mundo.", image: "/images/cms/wordpress.png" },
  { key: "drupal", name: "Drupal", description: "Flexible y potente para proyectos complejos.", image: "/images/cms/drupal.png" },
  { key: "prestashop", name: "PrestaShop", description: "Comercio electrónico de código abierto.", image: "/images/cms/prestashop.png" },
  { key: "vtex", name: "VTEX", description: "Diseñada para empresas globales.", image: "/images/cms/vtex.png" },
  { key: "magento", name: "Magento", description: "Robusta y escalable para empresas.", image: "/images/cms/magento.png" },
  { key: "joomla", name: "Joomla", description: "Ideal para sitios dinámicos.", image: "/images/cms/joomla.png" },
  { key: "wix", name: "Wix", description: "Constructor de sitios con herramientas intuitivas.", image: "/images/cms/wix.png" },
];

const Cms = () => {
  const [activeItems, setActiveItems] = useState<Set<string>>(new Set());
  const cmsRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Función que asigna referencias correctamente
  const setCmsRef = useCallback((el: HTMLDivElement | null, index: number) => {
    if (el) {
      cmsRefs.current[index] = el;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const newActiveItems = new Set<string>();

      cmsRefs.current.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            newActiveItems.add(cmsData[index].key);
          }
        }
      });

      if (newActiveItems.size !== activeItems.size) {
        setActiveItems(newActiveItems);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar en carga inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeItems]);

  return (
    <section className="cms" itemScope itemType="https://schema.org/SoftwareApplication">
      <h2 className="text-3xl font-bold text-black" itemProp="name">
        Expertos en los CMS más populares
      </h2>
      <p itemProp="description" className="text-gray-900">
        Hemos trabajado con las plataformas más utilizadas en el mundo. Nos adaptamos a cualquier CMS.
      </p>

      <div className="cms-grid grid grid-cols-2 gap-4 md:grid-cols-4">
        {cmsData.map((cms, index) => (
          <motion.div
            key={cms.key}
            ref={(el) => setCmsRef(el, index)}
            itemScope
            itemType="https://schema.org/SoftwareApplication"
            className={`cms-item rounded-xl p-4 shadow-lg transition-all ${
              activeItems.has(cms.key) ? "bg-gray-800 scale-105" : "bg-gray-700"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Image 
              src={cms.image} 
              alt={cms.name} 
              width={100} 
              height={100} 
              itemProp="image" 
              loading="lazy" 
              className="w-auto h-auto"
            />
            <div className="cms-info mt-2">
              <h3 itemProp="name" className="text-xl font-bold text-[#00ffcc]">
                {cms.name}
              </h3>
              <p itemProp="description" className="text-sm text-[#cccccc]">
                {cms.description}
              </p>
              <motion.a
                href="#"
                className="ver-mas text-blue-400 underline"
                whileHover={{ scale: 1.1 }}
                aria-label={`Más información sobre ${cms.name}`}
              >
                Ver más
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="cms-adaptamos mt-4 text-center text-gray-900">
        Nos adaptamos a cualquier CMS. ¡Tu proyecto en las mejores manos!
      </p>
    </section>
  );
};

export default Cms;
