// components/LoadingScreen.tsx
"use client";

import { useEffect, useState } from "react";
import FuturisticLogo from "@/app/components/futuristicLogo";
import styles from "./loadingScreen.module.css";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular un tiempo de carga (por ejemplo, 3 segundos)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.loadingContainer}>
      {/* Logo completo con efecto de firma */}
      <FuturisticLogo />
    </div>
  );
};

export default LoadingScreen;