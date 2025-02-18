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
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <Link href="/" className={styles.navbarLogo} onClick={handleLinkClick}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={50}
            priority
          />
        </Link>

        {/* Menú de Navegación */}
        <ul className={`${styles.navbarMenu} ${menuOpen ? styles.active : ""}`}>
          <li><Link href="/" onClick={handleLinkClick}>Inicio</Link></li>
          <li><Link href="/servicios" onClick={handleLinkClick}>Servicios</Link></li>
          <li><Link href="/sobre-mi" onClick={handleLinkClick}>Sobre mi</Link></li>
          <li><Link href="/contacto" onClick={handleLinkClick}>Contacto</Link></li>
          <li><Link href="/blog" onClick={handleLinkClick}>Blog</Link></li>
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