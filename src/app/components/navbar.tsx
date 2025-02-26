"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/components/navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Verificar montaje para evitar problemas de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  // Manejar el scroll de manera segura
  useEffect(() => {
    if (typeof window !== "undefined" && mounted) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      // Verificar posición inicial
      handleScroll();

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [mounted]);

  // Cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Renderizar un placeholder hasta que el componente esté montado
  if (!mounted) {
    return (
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}></div>
      </nav>
    );
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        {/* Logo - Icono del logo futurista */}
        <Link href="/" className={styles.navbarLogo} onClick={handleLinkClick}>
          <div className="relative">
            {/* Base del icono */}
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-500 rounded-lg transform rotate-45 shadow-2xl shadow-purple-500/50"></div>
            {/* Detalle central */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </Link>

        {/* Menú de Navegación */}
        <ul className={`${styles.navbarMenu} ${menuOpen ? styles.active : ""}`}>
          <li>
            <Link href="/" onClick={handleLinkClick}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/servicios" onClick={handleLinkClick}>
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/sobre-mi" onClick={handleLinkClick}>
              Sobre mí
            </Link>
          </li>
          <li>
            <Link href="/contacto" onClick={handleLinkClick}>
              Contacto
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={handleLinkClick}>
              Blog
            </Link>
          </li>
          {/* Botón de cierre */}
          {menuOpen && (
            <button
              className={styles.closeBtn}
              onClick={() => setMenuOpen(false)}
            >
              ✖
            </button>
          )}
        </ul>

        {/* Botón "Hablemos" */}
        <a
          href="https://wa.me/3008061344"
          className={styles.btnWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hablemos
        </a>

        {/* Botón Menú Móvil */}
        <div
          className={styles.navbarToggle}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;