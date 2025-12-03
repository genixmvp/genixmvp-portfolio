"use client";
import { useEffect } from "react";

/**
 * ClickSpark: crea y anima un elemento DOM en el punto donde el usuario hace click.
 * No depende de Tailwind ni de estilos globales. Se limpia automáticamente.
 */
export default function ClickSpark() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // crear elemento
      const el = document.createElement("div");

      // tamaño del spark
      const size = 100;

      // estilos base (posición fija sobre todo)
      Object.assign(el.style, {
        position: "fixed",
        left: `${e.clientX - size / 2}px`,
        top: `${e.clientY - size / 2}px`,
        width: `${size}px`,
        height: `${size}px`,
        pointerEvents: "none",
        borderRadius: "50%",
        zIndex: "99999",
        transform: "scale(0)",
        opacity: "0.85",
        mixBlendMode: "screen",
        // fondo radial para darle ese brillo cyan->purple
        background:
          "radial-gradient(circle at 30% 30%, rgba(0,212,255,0.95) 0%, rgba(124,58,237,0.9) 40%, rgba(124,58,237,0.05) 60%, transparent 70%)",
        filter: "blur(6px)",
        transition:
          "transform 420ms cubic-bezier(.2,.9,.3,1), opacity 420ms cubic-bezier(.2,.9,.3,1), filter 420ms ease",
      });

      document.body.appendChild(el);

      // Forzar frame para que la transición se aplique
      requestAnimationFrame(() => {
        el.style.transform = "scale(1.8)";
        el.style.opacity = "0";
        el.style.filter = "blur(10px)";
      });

      // eliminar elemento luego de la animación
      setTimeout(() => {
        try {
          el.remove();
        } catch (err) {
          /* ignore */
        }
      }, 520);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return null; // no render visible de React; trabajamos con DOM directo
}
