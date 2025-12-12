"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation"; // Importamos notFound por si el ID no existe
import { useIntl } from "react-intl";

// 1. IMPORTA TUS JSONS
import enMessages from "@/app/locales/en/common.json";
import esMessages from "@/app/locales/es/common.json";

// --- STYLES (Mismos estilos que definimos antes) ---
const styles: { [k: string]: React.CSSProperties } = {
  page: {
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    color: "#e6eefc",
    minHeight: "100vh",
    background: "radial-gradient(circle at 15% 10%, rgba(124,58,237,0.06), transparent 8%), radial-gradient(circle at 85% 85%, rgba(0,212,255,0.04), transparent 10%), linear-gradient(180deg,#05040a 0%, #0b0912 50%, #06030a 100%)",
    backgroundAttachment: "fixed",
    paddingBottom: "80px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 28px",
    borderBottom: "1px solid rgba(255,255,255,0.04)",
    background: "linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
    position: "sticky",
    top: 0,
    backdropFilter: "blur(6px)",
    zIndex: 40,
  },
  container: { maxWidth: 1200, margin: "0 auto", padding: "40px 24px" },
  backLink: { display: "inline-flex", alignItems: "center", gap: "8px", color: "#9aa7c9", textDecoration: "none", fontSize: "14px", marginBottom: "32px", transition: "color 0.2s" },
  heroSection: { marginBottom: "48px" },
  title: { fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, margin: "0 0 16px 0", background: "linear-gradient(to right, #fff, #b0c4de)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.1 },
  shortDesc: { fontSize: "18px", color: "#bfcff9", maxWidth: "800px", lineHeight: 1.6 },
  card: { background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "16px", padding: "24px", backdropFilter: "blur(10px)" },
  sectionTitle: { fontSize: "20px", fontWeight: 600, color: "#fff", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" },
  text: { color: "#9aa7c9", lineHeight: 1.6, fontSize: "15px" },
  skillTag: { display: "inline-block", padding: "6px 12px", borderRadius: "20px", background: "rgba(124, 58, 237, 0.1)", border: "1px solid rgba(124, 58, 237, 0.2)", color: "#d8b4fe", fontSize: "13px", margin: "0 8px 8px 0" },
  achievementItem: { display: "flex", gap: "12px", alignItems: "start", marginBottom: "12px", color: "#e6eefc", fontSize: "14px" },
  stepCard: { background: "linear-gradient(180deg, rgba(20, 20, 25, 0.6), rgba(10, 10, 12, 0.6))", borderLeft: "3px solid #00d4ff", padding: "20px", borderRadius: "0 12px 12px 0", marginBottom: "20px" },
  stepTitle: { color: "#e6eefc", fontSize: "17px", fontWeight: 600, marginBottom: "8px" },
  linkBtn: { display: "inline-flex", marginTop: "12px", color: "#00d4ff", fontSize: "13px", textDecoration: "none", fontWeight: 600, alignItems: "center", gap: "5px" }
};

export default function ProjectDetailPage() {
  const intl = useIntl();
  
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const id = params?.id as string; // Esto viene de la URL (ej: 'senatiInnova')

  // 3. SELECCIONAR EL ARCHIVO DE MENSAJES
  // Tipamos como 'any' temporalmente para facilitar el acceso dinámico
  const messages: any = locale === "en" ? enMessages : esMessages;

  // 4. EXTRAER LA DATA DEL PROYECTO ESPECÍFICO
  // Accedemos a projectsSection -> projects -> [el id de la url]
  const projectData = messages.projectsSection?.projects?.reverseEngineering;

  // Si el proyecto no existe en el JSON (url inválida), mostramos 404
  if (!projectData) {
    return (
        <div style={{...styles.page, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{color: 'white'}}>Project not found</h1>
        </div>
    );
  }

  // 5. TRANSFORMACIÓN DE DATOS
  // Tus 'steps' en el JSON son un Objeto, pero React prefiere iterar Arrays.
  // Object.values() toma: { "PLC": {...}, "MQTT": {...} } y lo convierte en: [ {...}, {...} ]
  const stepsArray = projectData.steps ? Object.values(projectData.steps) : [];

  const current = params?.locale ?? "en";
  const goToProjectsPath = `/${current}/projects`;
    
  return (
    <div style={styles.page}>
      <div style={styles.container}>


    
        <Link href={goToProjectsPath} style={styles.backLink}>
          ← {intl.formatMessage({ id: "projectsSection.backToProjects", defaultMessage: "Back to " })}
        </Link>

        {/* --- HERO SECTION --- */}
        <header style={styles.heroSection}>
            <span style={{
                background: projectData.status === "Completed" ? "rgba(16, 185, 129, 0.2)" : "rgba(245, 158, 11, 0.2)",
                color: projectData.status === "Completed" ? "#34d399" : "#fbbf24",
                padding: "4px 10px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: "16px",
                display: "inline-block"
            }}>
                {projectData.status}
            </span>
            
            <h1 style={styles.title}>{projectData.name}</h1>
            <p style={styles.shortDesc}>{projectData.description}</p>
        </header>

        {/* --- MAIN GRID LAYOUT --- */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
            {/* LEFT COLUMN */}
            <div style={{ gridColumn: 'span 2' }}>
                
                {/* Placeholder Diagrama */}
                <div style={{ 
                    width: '100%', 
                    height: '300px', 
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', 
                    borderRadius: '16px', 
                    marginBottom: '32px',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.05)',
                }}>
                   {/* Aquí podrías usar projectData.coverImage si lo agregas al JSON */}
                   {/*<span style={{color: '#555', fontSize: '14px'}}>[Project Diagram / Cover Image]</span>*/}
                   <Image 
                        src="/projects/reverse.jpeg"
                        alt="this is a text"
                        width={600}
                        height={300}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '16px',
                        }}
                    />
                </div>

                {/* Challenge & Problem */}
                <section style={{ marginBottom: '40px' }}>
                    <h2 style={styles.sectionTitle}>The Challenge</h2>
                    <div style={styles.card}>
                        {/* Verificamos si existe 'problem' antes de renderizar */}
                        {projectData.problem && (
                            <p style={{...styles.text, marginBottom: '16px'}}>
                                <strong style={{color: '#fff'}}>Problem:</strong> {projectData.problem}
                            </p>
                        )}
                        <p style={styles.text}>
                            <strong style={{color: '#fff'}}>Constraint:</strong> {projectData.challenge}
                        </p>
                    </div>
                </section>

                {/* Architecture / Steps (Aquí usamos el Array Transformado) */}
                <section>
                    <h2 style={styles.sectionTitle}>Implementation Details</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {/* Iteramos sobre stepsArray */}
                        {stepsArray.map((step: any, index: number) => (
                            <div key={index} style={styles.stepCard}>
                                <h3 style={styles.stepTitle}>{step.title}</h3>
                                <p style={styles.text}>{step.description}</p>
                                {step.link && (
                                    <a href={step.link} target="_blank" rel="noreferrer" style={styles.linkBtn}>
                                        View Resource ↗
                                    </a>
                                )}
                                <Image 
                                    src={step.image}
                                    alt={step.title}
                                    width={step.width}
                                    height={step.height}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* RIGHT COLUMN: Sidebar */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Tech Stack */}
                <div style={styles.card}>
                    <h3 style={{...styles.sectionTitle, fontSize: '16px'}}>Technologies</h3>
                    <div>
                        {/* Skills es un array simple en el JSON, así que map directo */}
                        {projectData.skills?.map((skill: string) => (
                            <span key={skill} style={styles.skillTag}>{skill}</span>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div style={styles.card}>
                    <h3 style={{...styles.sectionTitle, fontSize: '16px'}}>Achievements</h3>
                    <div>
                        {projectData.achievements?.map((achievement: string, i: number) => (
                            <div key={i} style={styles.achievementItem}>
                                <span style={{color: '#fbbf24'}}>★</span>
                                <span>{achievement}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Project Metadata */}
                <div style={styles.card}>
                    <h3 style={{...styles.sectionTitle, fontSize: '16px'}}>Project Info</h3>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                        <div>
                            <span style={{display:'block', fontSize:'12px', color:'#6b7280', textTransform:'uppercase'}}>Timeline</span>
                            <span style={{color:'#e6eefc', fontSize:'14px'}}>
                                {projectData.startDate} — {projectData.endDate}
                            </span>
                        </div>
                        {projectData.collaborators && (
                            <div>
                                <span style={{display:'block', fontSize:'12px', color:'#6b7280', textTransform:'uppercase'}}>Collaborators</span>
                                <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px'}}>
                                    <div style={{width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(45deg, #6b00ff, #00d4ff)'}}></div>
                                    <div>
                                        <span style={{display:'block', color:'#e6eefc', fontSize:'14px', fontWeight: 600}}>
                                            {projectData.collaborators.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </aside>
        </div>
      </div>
    </div>
  );
}