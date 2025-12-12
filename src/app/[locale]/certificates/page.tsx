"use client";
import React from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

// ----- CONFIGURACIÓN -----
// REEMPLAZA ESTO con tu enlace PÚBLICO de Notion.
// Debe ser el enlace que obtienes al "Publicar en la web" (ej. https://usuario.notion.site/...)
const notionEmbedUrl = "https://luxuriant-activity-4bf.notion.site/ebd/23da752d01a180e981e8d39fc5518670?v=23da752d01a1802396dd000cb5f152a3"; 

const styles: { [k: string]: React.CSSProperties } = {
  page: {
    fontFamily:
      "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    color: "#e6eefc",
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 15% 10%, rgba(124,58,237,0.06), transparent 8%), radial-gradient(circle at 85% 85%, rgba(0,212,255,0.04), transparent 10%), linear-gradient(180deg,#05040a 0%, #0b0912 50%, #06030a 100%)",
    backgroundAttachment: "fixed",
    display: "flex",
    flexDirection: "column",
  },
  hero: {
    maxWidth: 1300, // Contenedor más amplio
    width: "90%",
    margin: "36px auto",
    padding: "0 20px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 28,
  },
  headerCard: {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
    borderRadius: 12,
    padding: "24px 32px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.8), 0 0 30px rgba(124,58,237,0.04)",
    border: "1px solid rgba(255,255,255,0.05)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 24, fontWeight: 700, margin: 0, color: "#e9eefc" },
  summary: { marginTop: 6, fontSize: 14, color: "#bfcff9", lineHeight: 1.45 },
  
  // Contenedor específico para el Iframe
  iframeContainer: {
    position: "relative",
    width: "100%",
    flex: 1, 
    minHeight: "80vh", // Altura generosa para la página completa
    background: "#191919", 
    borderRadius: 16,
    overflow: "hidden",
    border: "1px solid rgba(124,58,237,0.3)", 
    boxShadow: "0 0 40px rgba(0,0,0,0.5)",
  },
  backBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "#9aa7c9",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
    transition: "color 0.2s",
    cursor: "pointer"
  }
};

export default function NotionEmbedPage() {
  const intl = useIntl();

  return (
    <div style={styles.page}>
      <main style={styles.hero}>
        
        {/* --- HEADER SECTION --- */}
        <section style={styles.headerCard}>
          <div>
            <h1 style={styles.title}>
              {intl.formatMessage({
                id: "certificatesSection.title",
                defaultMessage: "Certificates",
              })}
            </h1>
            <p style={styles.summary}>
              {intl.formatMessage({
                id: "certificatesSection.description",
                defaultMessage: "Contenido completo de Notion incrustado directamente.",
              })}
            </p>
          </div>

          <Link href="/" style={styles.backBtn}>
             {/* Icono Flecha Atrás */}
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
             </svg>
             <span>{intl.formatMessage({ id:"certificatesSection.goBackButton", defaultMessage: "Volver"})}</span>
          </Link>
        </section>

        {/* --- IFRAME CONTAINER --- */}
        <section style={styles.iframeContainer}>
          <iframe
            src={notionEmbedUrl}
            style={{
              width: "100%",
              height: "600",
              border: "none",
            position: "absolute",   
            top: 0,
            left: 0,
            right: 0
            }}
             width="100%" height="600" 
            title="Notion Page Embed"
            allow="clipboard-write"
            loading="lazy"
          />
        </section>

      </main>
    </div>
  );
}