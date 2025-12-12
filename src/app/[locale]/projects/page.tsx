"use client";
import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";

const SUPPORTED_LOCALES = ["en", "es"];


// href={`/${current}/contact`}

{/*  const params = useParams() as any;
  const pathname = usePathname() ?? "/";
  const intl = useIntl();

  const current = params?.locale ?? "en";

  const pathWith = (targetLocale: string) => {
    // replace the first path segment with the target locale
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${targetLocale}`;
    // if the first segment is a supported locale, replace it; otherwise prepend
    if (SUPPORTED_LOCALES.includes(segments[0])) {
      segments[0] = targetLocale;
    } else {
      segments.unshift(targetLocale);
    }
    return `/${segments.join("/")}`;
  };*/}

// ----- 2. TAGS -----
const projectTags: Record<string, string[]> = {
  senatiInnova: ["AR", "IoT"],
  RTLS: ["RTLS", "BLE", "MQTT"],
  reverseEngineering: ["Networking", "Protocol Analysis"],
  linealTransformers: ["Next.js", "GeoGebra"],
  TinkuyhubJuntta: ["HTTP", "PHP"],
  AIAvatar: ["OpenAI", "Gradio", "HuggingFace"],
  youngaCommunique: ["Leadership"],
  academiaLideres: ["Leadership"],
  monico: ["Hardware", "CANbus", "CDL"],
  theCvGen: ["PuterAI", "Next.js"]
};

// ----- 3. ESTADOS (NUEVO) -----
// Define el texto y el color de fondo para cada estado
const projectStatus: Record<string, { text: string; color: string }> = {
  senatiInnova: { text: "Completado", color: "#10b981" }, // Verde
  RTLS: { text: "Completado", color: "#10b981" }, // Naranja
  reverseEngineering: { text: "Completado", color: "#10b981" }, // Violeta
  linealTransformers: { text: "Beta", color: "#8b5cf6" },
  TinkuyhubJuntta: { text: "Completado", color: "#10b981" },
  AIAvatar: { text: "En Progreso", color: "#f97316" }, // Naranja
  youngaCommunique: { text: "Completado", color: "#10b981" },
  academiaLideres: { text: "Completado", color: "#10b981" },
  monico: { text: "Completado", color: "#10b981" },
  theCvGen: { text: "En Progreso", color: "#f97316" }
};

const styles: { [k: string]: React.CSSProperties } = {
  page: {
    fontFamily:
      "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    color: "#e6eefc",
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 15% 10%, rgba(124,58,237,0.06), transparent 8%), radial-gradient(circle at 85% 85%, rgba(0,212,255,0.04), transparent 10%), linear-gradient(180deg,#05040a 0%, #0b0912 50%, #06030a 100%)",
    backgroundAttachment: "fixed",
  },
  hero: {
    maxWidth: 1100,
    margin: "36px auto",
    padding: "32px",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 28,
    alignItems: "start",
  },
  card: {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
    borderRadius: 12,
    padding: 20,
    boxShadow: "0 10px 30px rgba(0,0,0,0.8), 0 0 30px rgba(124,58,237,0.04)",
    border: "1px solid rgba(255,255,255,0.03)",
  },
  title: { fontSize: 26, fontWeight: 700, margin: 0, color: "#e9eefc" },
  summary: { marginTop: 14, fontSize: 15, color: "#bfcff9", lineHeight: 1.45 },
  // Estilo base para los tags inferiores
  tag: {
    fontSize: "10px",
    fontWeight: 600,
    padding: "4px 8px",
    borderRadius: "20px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  // (NUEVO) Estilo base para el Badge de Estado
  statusBadge: {
    position: "absolute",
    top: "10px",
    right: "10px",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: 700,
    color: "white",
    zIndex: 15, // Mayor que la imagen y overlay
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    backdropFilter: "blur(4px)",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  }
};

const projectKeys = [
  "senatiInnova",
  "RTLS",
  "reverseEngineering",
  "linealTransformers",
  "TinkuyhubJuntta",
  "AIAvatar"
];

{/*  "youngaCommunique",
  "academiaLideres",
  "monico",
  "theCvGen"*/}

const projectCovers: Record<string, string> = {
  senatiInnova: "/projects/senatiInnova.jpg",
  RTLS: "/projects/rtls.png",
  reverseEngineering: "/projects/reverse.jpeg",
  linealTransformers: "/projects/lineal.png",
  TinkuyhubJuntta: "/projects/juntta.png",
  AIAvatar: "/projects/ai.jpg",
  
};

{/*youngaCommunique: "/projects/younga.png",
  academiaLideres: "/projects/academia.png",
  monico: "/projects/monico.jpeg",
  theCvGen: "/projects/cvgen.png",*/}

export default function ProjectsPage() {
  const intl = useIntl();
  const [activeIndex, setActiveIndex] = useState(0);

  
const params = useParams() as any;
  const pathname = usePathname() ?? "/";


  const current = params?.locale ?? "en";

  const pathWith = (targetLocale: string) => {
    // replace the first path segment with the target locale
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${targetLocale}`;
    // if the first segment is a supported locale, replace it; otherwise prepend
    if (SUPPORTED_LOCALES.includes(segments[0])) {
      segments[0] = targetLocale;
    } else {
      segments.unshift(targetLocale);
    }
    return `/${segments.join("/")}`;
  };


  // ----- 1. RUTAS -----
  const projectRoutes: Record<string, string> = {
    senatiInnova: `/${current}/projects/senatiInnova`,
    RTLS: `/${current}/projects/RTLS`,
    reverseEngineering: `/${current}/projects/reverseEngineering`,
    linealTransformers: `/${current}/projects/linealTransformers`,
    TinkuyhubJuntta: `/${current}/projects/TinkuyhubJuntta`,
    AIAvatar: `/${current}/projects/AIAvatar`,
    
  };

{/*
  for next realeases:
  youngaCommunique: `/${current}/projects/youngaCommunique`,
    academiaLideres: `/${current}/projects/academiaLideres`,
    monico: `/${current}/projects/monico`,
    theCvGen: `/${current}/projects/theCvGen`
  */}

  // --- LÓGICA CIRCULAR ---
  const getCircularIndex = (index: number) => {
    const len = projectKeys.length;
    return ((index % len) + len) % len;
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projectKeys.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? projectKeys.length - 1 : prev - 1
    );
  };

  // --- NAVEGACIÓN CON TECLADO ---
  useEffect(() => {
      const handleKey = (e: KeyboardEvent) => {
          if (e.key === "ArrowLeft") setActiveIndex(p => p === 0 ? projectKeys.length - 1 : p - 1);
          if (e.key === "ArrowRight") setActiveIndex(p => (p + 1) % projectKeys.length);
      }
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const visibleIndices = [
    getCircularIndex(activeIndex - 1),
    activeIndex,
    getCircularIndex(activeIndex + 1),
  ];

  return (
    <div style={styles.page}>
      <main style={styles.hero}>
        <section style={{ ...styles.card, padding: 28 }}>
          <div style={{ marginBottom: 18 }}>
              <h1 style={{ ...styles.title, fontSize: 28 }}>
                {intl.formatMessage({ id: "projectsSection.title", defaultMessage: "Proyectos Destacados" })}
              </h1>
              <p style={{ ...styles.summary, marginTop: 6 }}>
                {intl.formatMessage({ id: "projectsSection.description", defaultMessage: "Usa las flechas o el teclado para navegar." })}
              </p>
          </div>

          {/* -------- PROJECTS SLIDER WRAPPER -------- */}
          <div
            style={{
              position: "relative",
              marginTop: 40,
              height: 420,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              aria-label="Previous Project"
              style={{
                position: "absolute",
                left: 10,
                zIndex: 20,
                background: "rgba(10, 10, 15, 0.6)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
                width: 48,
                height: 48,
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(4px)",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => e.currentTarget.style.background = "rgba(107, 0, 255, 0.8)"}
              onMouseOut={(e) => e.currentTarget.style.background = "rgba(10, 10, 15, 0.6)"}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              aria-label="Next Project"
              style={{
                position: "absolute",
                right: 10,
                zIndex: 20,
                background: "rgba(10, 10, 15, 0.6)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
                width: 48,
                height: 48,
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(4px)",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => e.currentTarget.style.background = "rgba(107, 0, 255, 0.8)"}
              onMouseOut={(e) => e.currentTarget.style.background = "rgba(10, 10, 15, 0.6)"}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* ---------- CARDS CONTAINER ---------- */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                width: "100%",
              }}
            >
              {visibleIndices.map((projectIndex, i) => {
                const key = projectKeys[projectIndex];
                const base = `projectsSection.projects.${key}`;
                const isCenter = i === 1;
                
                const currentTags = projectTags[key] || [];
                // Obtenemos el estado para el proyecto actual
                const currentStatus = projectStatus[key];

                return (
                  <Link
                    key={`${key}-${i}`}
                    href={projectRoutes[key] || "#"}
                    style={{
                        textDecoration: "none",
                        transform: isCenter ? "scale(1.1)" : "scale(0.9)",
                        opacity: isCenter ? 1 : 0.5,
                        zIndex: isCenter ? 10 : 1,
                        filter: isCenter ? "none" : "blur(2px) grayscale(40%)",
                        transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                        
                        minWidth: "300px",
                        maxWidth: "300px",
                        background: "linear-gradient(180deg, #16161e, #0f0f13)",
                        borderRadius: "16px",
                        border: isCenter 
                            ? "1px solid rgba(124,58,237,0.4)" 
                            : "1px solid rgba(255,255,255,0.05)",
                        boxShadow: isCenter 
                            ? "0 20px 50px rgba(0,0,0,0.7), 0 0 20px rgba(124,58,237,0.1)" 
                            : "0 4px 10px rgba(0,0,0,0.3)",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        cursor: "pointer",
                        position: "relative"
                    }}
                  >
                    {/* COVER IMAGE */}
                    <div style={{ width: "100%", height: 180, position: "relative" }}>
                      
                      {/* --- (NUEVO) BADGE DE ESTADO --- */}
                      {/* Solo se muestra si existe en el JSON projectStatus */}
                      {currentStatus && (
                        <div style={{
                          ...styles.statusBadge,
                          background: currentStatus.color // Color dinámico
                        }}>
                          {currentStatus.text}
                        </div>
                      )}

                      <Image
                        src={projectCovers[key] || "/placeholder.png"}
                        alt={key}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      {!isCenter && <div style={{position:'absolute', inset:0, background:'rgba(0,0,0,0.5)'}} />}
                    </div>

                    {/* CONTENT */}
                    <div style={{ padding: "18px", flex: 1, display: 'flex', flexDirection: 'column' }}>
                      
                      <div style={{display:'flex', justifyContent: 'space-between', alignItems:'flex-start'}}>
                        <h3 style={{ margin: 0, fontSize: 18, color: "#e9eefc", fontWeight: 700 }}>
                            {intl.formatMessage({ id: `${base}.name` })}
                        </h3>
                      </div>

                      {/* TAGS INFERIORES */}
                      {currentTags.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px', marginBottom: '8px' }}>
                              {currentTags.slice(0, 3).map((tag, idx) => ( 
                                  <span key={idx} style={{
                                      ...styles.tag,
                                      background: isCenter ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.05)",
                                      color: isCenter ? "#d8b4fe" : "#888",
                                      border: isCenter ? "1px solid rgba(124,58,237,0.2)" : "1px solid transparent"
                                  }}>
                                      {tag}
                                  </span>
                              ))}
                          </div>
                      )}

                      <p
                        style={{
                          color: "#9aa7c9",
                          marginTop: 4,
                          fontSize: 13,
                          lineHeight: 1.4,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          flex: 1
                        }}
                      >
                        {intl.formatMessage({
                          id: `${base}.description`,
                          defaultMessage: "Descripción breve del proyecto...",
                        })}
                      </p>

                      {isCenter && (
                        <div style={{
                            marginTop: 12, 
                            paddingTop: 12,
                            borderTop: '1px solid rgba(255,255,255,0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#00d4ff', 
                            fontSize: 12, 
                            fontWeight: 700
                        }}>
                            Ver Proyecto 
                            <svg style={{marginLeft: 6}} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}