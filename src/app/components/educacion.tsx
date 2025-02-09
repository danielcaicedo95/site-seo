"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educaciones = [
  {
    titulo: "Universidad de Caldas",
    subtitulo: "Ingeniería de Sistemas y Computación",
    descripcion:
      "Enfoque en desarrollo de software, optimización de sistemas y gestión de proyectos tecnológicos. Participación en proyectos académicos relacionados con inteligencia artificial y desarrollo web.",
  },
  {
    titulo: "Explore Emerging Tech",
    subtitulo: "IBM - Credencial verificable",
    descripcion:
      "Certificación en tecnologías emergentes, incluyendo blockchain, inteligencia artificial y cloud computing.",
    enlace: "https://www.credly.com/badges/143e6831-092f-4265-a954-e9abb714e50d",
  },
  {
    titulo: "Cybersecurity Fundamentals",
    subtitulo: "IBM - Credencial verificable",
    descripcion:
      "Fundamentos de ciberseguridad, incluyendo protección de datos, gestión de riesgos y mejores prácticas de seguridad.",
    enlace: "https://skills.yourlearning.ibm.com/credential/CREDLY-b8810a57-2c5a-4bbc-81f1-9bfc649ad13d",
  },
  {
    titulo: "Inteligencia Artificial en la Práctica",
    subtitulo: "IBM - Credencial verificable",
    descripcion:
      "Certificación en aplicaciones prácticas de inteligencia artificial, incluyendo machine learning y procesamiento de datos.",
    enlace: "https://skills.yourlearning.ibm.com/certificate/ILB-ZKVJNXYZKMZXEWGN",
  },
  {
    titulo: "Desarrollo Web",
    subtitulo: "Google Activate - Credencial verificable",
    descripcion:
      "Certificación en desarrollo web, incluyendo HTML, CSS, JavaScript y diseño responsive.",
    enlace: "https://learndigital.withgoogle.com/activate/validate-certificate-code",
  },
  {
    titulo: "Fundamentos SEO",
    subtitulo: "Semrush Academy - Credencial verificable",
    descripcion:
      "Certificación en estrategias de SEO, incluyendo investigación de palabras clave, optimización on-page y análisis de competencia.",
    enlace: "https://static.semrush.com/academy-prod/certificate/11521951/UpDWTMqFd7NBb.png",
  },
  {
    titulo: "Fundamentos de Marketing de Contenidos",
    subtitulo: "Semrush Academy - Credencial verificable",
    descripcion:
      "Certificación en creación y gestión de estrategias de contenido para mejorar el engagement y el tráfico orgánico.",
    enlace: "https://static.semrush.com/academy/certificates/368b9a3d81/danielealcedo_1.pdf",
  },
  {
    titulo: "JavaScript",
    subtitulo: "Sololearn - Credencial verificable",
    descripcion:
      "Certificación en programación con JavaScript, incluyendo manipulación del DOM y desarrollo de aplicaciones interactivas.",
    enlace: "https://www.sololearn.com/Certificate/CT-LLQFCT2H/png",
  },
  {
    titulo: "React & Redux",
    subtitulo: "Sololearn - Credencial verificable",
    descripcion:
      "Certificación en desarrollo de aplicaciones web con React y Redux, incluyendo gestión de estado y componentes funcionales.",
    enlace: "https://www.sololearn.com/Certificate/CT-XTTWV6BS/jpg",
  },
  {
    titulo: "Git & GitHub",
    subtitulo: "Platzi - Credencial verificable",
    descripcion:
      "Certificación en control de versiones y colaboración en proyectos utilizando Git y GitHub.",
    enlace: "https://platzi.com/p/kpeeez/cursor/2405-git-github-appsco/diploma/detalle/",
  },
  {
    titulo: "Programación Básica",
    subtitulo: "Platzi - Credencial verificable",
    descripcion:
      "Certificación en fundamentos de programación, incluyendo lógica de programación y estructuras de datos.",
    enlace: "https://platzi.com/p/kpeeez/cursor/1193-basica-appsco/diploma/detalle/",
  },
];

const Educacion = () => {
  const [activo, setActivo] = useState<number | null>(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 }); // Ajustamos el amount para activar antes

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="educacion px-6 py-12 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text mb-8">
        Educación
      </h2>

      <div className="space-y-4" ref={ref}>
        {educaciones.map((edu, index) => (
          <motion.div
            key={index}
            className="relative p-6 rounded-xl bg-gray-800 shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }} // Reducimos el desplazamiento inicial
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{
              duration: 0.4, // Reducimos la duración de la animación
              delay: index * 0.1, // Reducimos el delay entre elementos
              ease: "easeOut",
            }}
            onClick={() => setActivo(activo === index ? null : index)}
          >
            <div className="flex items-center gap-4">
              <FaGraduationCap className="text-2xl text-purple-400" />
              <div>
                <h3 className="text-xl font-semibold text-purple-400">
                  {edu.titulo}
                </h3>
                <p className="text-sm text-gray-400">{edu.subtitulo}</p>
              </div>
            </div>
            {activo === index && (
              <motion.p
                className="mt-4 text-gray-300 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }} // Animación más rápida
              >
                {edu.descripcion}
                {edu.enlace && (
                  <a
                    href={edu.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline ml-2"
                  >
                    Ver credencial
                  </a>
                )}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>

      {/* JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Certification",
            "name": "Certificaciones y Educación de Daniel Caicedo",
            "provider": {
              "@type": "Organization",
              "name": "Universidad de Caldas e Instituciones Varias",
            },
            "hasPart": educaciones.map((edu) => ({
              "@type": "EducationalOccupationalCredential",
              "name": edu.titulo,
              "description": edu.descripcion,
              "url": edu.enlace || "",
            })),
          }),
        }}
      />
    </section>
  );
};

export default Educacion;