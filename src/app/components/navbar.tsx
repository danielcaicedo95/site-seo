"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Manejar el scroll de manera eficiente
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <Link href="/" className={styles.navbarLogo}>
          <Image
            src="/images/logo.png" // Usa WebP para optimización
            alt="Logo"
            width={120}
            height={50}
            priority // Mejora el LCP
          />
        </Link>

        {/* Menú de Navegación */}
        <ul className={`${styles.navbarMenu} ${menuOpen ? styles.active : ""}`}>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/servicios">Servicios</Link></li>
          <li><Link href="/sobre-mi">Sobre mi</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
          <li><Link href="/blog">Blog</Link></li>
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
        <div className={styles.navbarToggle} onClick={() => setMenuOpen(!menuOpen)}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;