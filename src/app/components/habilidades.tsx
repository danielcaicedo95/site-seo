"use client";

import { 
  FaLightbulb, 
  FaUsers, 
  FaChartLine, 
  FaComments, 
  FaCogs, 
  FaBullseye, 
  FaSearch, 
  FaCode, 
  FaLaptopCode, 
  FaChartBar, 
  FaRobot, 
  FaGlobe, 
  FaMobileAlt 
} from "react-icons/fa";
import { motion } from "framer-motion";

const habilidades = [
  {
    categoria: "Habilidades Blandas",
    items: [
      { icon: <FaUsers />, titulo: "Liderazgo y gestión de equipos", descripcion: "Capacidad para liderar y coordinar equipos multidisciplinarios, garantizando la entrega de proyectos puntuales y con alta calidad." },
      { icon: <FaChartLine />, titulo: "Análisis estratégico", descripcion: "Fuerte enfoque en la toma de decisiones fundamentadas mediante análisis exhaustivo para diseñar estrategias digitales efectivas." },
      { icon: <FaCogs />, titulo: "Resolución de problemas", descripcion: "Habilidad para identificar y solucionar desafíos técnicos y estratégicos de manera efectiva y eficiente." },
      { icon: <FaComments />, titulo: "Comunicación efectiva", descripcion: "Facilidad para transmitir conceptos complejos de manera comprensible, colaborando con equipos técnicos y no técnicos." },
      { icon: <FaLightbulb />, titulo: "Pensamiento innovador", descripcion: "Enfoque creativo para la optimización de procesos y generación de soluciones tecnológicas disruptivas." },
      { icon: <FaBullseye />, titulo: "Orientación a resultados", descripcion: "Compromiso con la mejora continua y el logro de objetivos mediante el monitoreo constante de KPIs." },
    ],
  },
  {
    categoria: "Habilidades Técnicas",
    items: [
      { icon: <FaSearch />, titulo: "SEO y optimización digital", descripcion: "Especialista en posicionamiento orgánico multilingüe, con experiencia en herramientas como Ahrefs, SemRush, Screaming Frog, MOZ y Google Analytics." },
      { icon: <FaCode />, titulo: "Desarrollo web", descripcion: "Amplia experiencia en tecnologías como HTML, CSS, JavaScript, Python, React, Django, Next.js, Liquid y plataformas CMS como Drupal, WordPress, TinaCMS y Shopify." },
      { icon: <FaLaptopCode />, titulo: "Optimización técnica web", descripcion: "Dominio de Core Web Vitals, velocidad de carga, diseño responsive y mejora de la experiencia del usuario." },
      { icon: <FaChartBar />, titulo: "Publicidad digital", descripcion: "Gestión de campañas en Facebook Ads y Google Ads, optimización de ROI y análisis de resultados." },
      { icon: <FaRobot />, titulo: "Automatización y analítica", descripcion: "Implementación de automatización con IA y manejo de herramientas colaborativas como Git y GitHub." },
      { icon: <FaGlobe />, titulo: "Multilenguaje", descripcion: "Optimización de contenidos y estrategias digitales en español, inglés, francés, italiano, alemán y catalán." },
      { icon: <FaCogs />, titulo: "Automatización de SEO", descripcion: "Desarrollo de herramientas SEO con inteligencia artificial para diagnósticos técnicos y análisis de contenido." },
      { icon: <FaMobileAlt />, titulo: "ASO (App Store Optimization)", descripcion: "Estrategias avanzadas para mejorar el posicionamiento de aplicaciones en tiendas digitales." },
    ],
  },
];

export default function Habilidades() {
  return (
    <section className="py-12 px-6 text-gray-200">
      <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">Habilidades</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {habilidades.map((categoria, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, delay: index * 0.2, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-4">{categoria.categoria}</h3>
            <div className="space-y-4">
              {categoria.items.map((habilidad, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-900 hover:bg-gray-700 transition duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl text-purple-400">{habilidad.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-200">{habilidad.titulo}</h4>
                    <p className="text-sm text-gray-300">{habilidad.descripcion}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
