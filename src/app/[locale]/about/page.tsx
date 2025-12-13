"use client";
import React, { useState } from "react";
import { IntlProvider, useIntl } from "react-intl";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import enMessages from "@/app/locales/en/common.json"
import esMessages from"@/app/locales/es/common.json"
import { Weight } from "lucide-react";

export default function AboutPage(): React.ReactElement {

    //Definir los mensajes provenientes del json respectivo
    const params = useParams();
    const locale = params.locale as string;
    const messages = locale === "en" ? enMessages :esMessages;
        
    const intl = useIntl();

    // Acceso a los roles completos
    const rolesObj = messages.aboutSection.roles.current;
    const rolesArray = Object.values(rolesObj);

    // Obtener categorías únicas
    const allCategories = Array.from(
        new Set(
            rolesArray.flatMap((role) => role.categories )
        )
    );

    // Obtener modalidades únicas
    const allModalities = Array.from(
        new Set(
            rolesArray.flatMap((role) => role.modality )
        )
    );
    
    // Estado para filtros (Multiselect)
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedModalities, setSelectedModalities] = useState<string[]>([]);
    
    // Alternar categorías
    const toggleCategory = (cat: string) => {
        setSelectedCategories((prev) =>
            prev.includes(cat)
            ? prev.filter((c) => c !== cat)
            : [...prev, cat]
        );
    };

    // Alternar modalidades
    const toggleModality = (mod: string) => {
        setSelectedModalities((prev) =>
            prev.includes(mod)
            ? prev.filter((m) => m !== mod)
            : [...prev, mod]
        );
    };


    // Lógica de filtrado real
    const filteredRoles = rolesArray.filter((role) => {
        const matchesCategories =
            selectedCategories.length === 0 ||
            selectedCategories.every((cat) => role.categories.includes(cat));

        const matchesModalities =
            selectedModalities.length === 0 ||
            selectedModalities.every((mod) => role.modality.includes(mod));

        return matchesCategories && matchesModalities;
        });

    const fake = {
        name: "Carolina Navarro",
        title: "Technician & Engineer ",
        location: "Lima, PE",
        email: "genix.mvp@gmail.com",
        phone: "(+51) 9834‑53381",
        summary:
            "I build delightful, accessible web experiences. I love turning complex problems into simple, intuitive interfaces and working across the stack — from design systems to APIs and server infrastructure.",
        stats: {
            yearsExperience: 1.5,
            projects: 5,
            clients: 100,
        },
        skills: [
            "IoT",
            "Embedded",
            "Telemetry",
            "Reverse-Engineering",
            "Networking",
            "Project Management"
        ]
    };

    
    const styles: { [k: string]: React.CSSProperties } = {
        page: {
            fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
            color: "#e6eefc",
            minHeight: "100vh",
            background: "radial-gradient(circle at 15% 10%, rgba(124,58,237,0.06), transparent 8%), radial-gradient(circle at 85% 85%, rgba(0,212,255,0.04), transparent 10%), linear-gradient(180deg,#05040a 0%, #0b0912 50%, #06030a 100%)",
            backgroundAttachment: 'fixed'
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
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)'
        },
        logo: { display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "inherit" },
        logoDot: { width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg,#6b00ff,#00d4ff)", boxShadow: '0 6px 20px rgba(106,17,203,0.18)', display: "inline-block" },
        nav: { display: "flex", gap: 16, alignItems: "center" },
        navLink: { textDecoration: "none", color: "#dbe9ff", fontSize: 15 },
        hero: {
            maxWidth: 1100,
            margin: "36px auto",
            padding: "32px",
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            gap: 28,
            alignItems: "start",
        },
        card: {
            background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
            borderRadius: 12,
            padding: 20,
            boxShadow: "0 10px 30px rgba(0,0,0,0.8), 0 0 30px rgba(124,58,237,0.04)",
            border: '1px solid rgba(255,255,255,0.03)'
        },
        avatar: { width: 120, height: 120, borderRadius: 14, background: "linear-gradient(135deg,#07070a,#1a1421)", display: "block", marginBottom: 14, boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.6), 0 10px 30px rgba(0,0,0,0.65)' },
        name: { fontSize: 26, fontWeight: 700, margin: 0, color: '#e9eefc' },
        title: { fontSize: 15, color: "#9aa7c9", marginTop: 6 },
        summary: { marginTop: 14, fontSize: 15, color: "#bfcff9", lineHeight: 1.45 },
        statsRow: { display: "flex", gap: 14, marginTop: 18 },
        stat: { flex: 1, background: 'linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02))', padding: 12, borderRadius: 10, textAlign: "center", border: '1px solid rgba(255,255,255,0.03)' },
        statNum: { fontSize: 18, fontWeight: 700, margin: 0, color: '#fff' },
        statLabel: { fontSize: 12, color: "#9aa7c9", marginTop: 4 },
        sectionTitle: { fontSize: 16, margin: 0, fontWeight: 700, color: "#e6eefc" },
        chips: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 },
        chip: {
            padding: "6px 10px",
            background: "linear-gradient(90deg, rgba(124,58,237,0.06), rgba(0,212,255,0.03))",
            borderRadius: 999,
            fontSize: 13,
            color: "#dbe9ff",
            border: '1px solid rgba(124,58,237,0.12)'
        },
        list: { margin: 0, padding: 0, listStyle: "none", marginTop: 12 },
        listItem: { padding: "10px 0", borderBottom: "1px dashed rgba(255,255,255,0.03)" },
        aside: { position: "relative" },
        contactBtn: {
            display: "inline-block",
            padding: "10px 14px",
            borderRadius: 8,
            background: "linear-gradient(135deg,#6b00ff,#00d4ff)",
            color: "black",
            textDecoration: "none",
            fontWeight: 700,
            marginTop: 8,
            boxShadow: '0 10px 30px rgba(106,17,203,0.18)'
        },
    };

    return (
        <div style={styles.page}>
            {/* Header/layout is provided at the locale layout level — page should only render its content */}

            <main style={styles.hero}>
                <section style={styles.card}>
                    <div style={{ display: "flex", gap: 18 }}>
                        <div>
                            <div style={styles.avatar}>
                                <Image
                                    src="/purple_profile.jpeg"
                                    alt={intl.formatMessage({ id: 'aboutSection.avatarAlt', defaultMessage: 'Photo of Carolina Navarro' })}
                                    width={120}
                                    height={120}
                                    style={{ width: '120px', height: '120px', borderRadius: 14, objectFit: 'cover', display: 'block' }}
                                />
                            </div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <h1 style={styles.name}>{intl.formatMessage({ id: 'aboutSection.short_greeting', defaultMessage: "Hello! I'm Carolina Celeste Navarro Aldoradin" })}</h1>
                            <div style={styles.title}>{fake.location}</div>
                            <div style={styles.title}>{intl.formatMessage({ id: 'aboutSection.full_name.title', defaultMessage: "Full" })} - {intl.formatMessage({ id: 'aboutSection.full_name.value', defaultMessage: "Full" })}</div>                            
                            <p style={styles.summary}>{intl.formatMessage({ id: 'aboutSection.technical_profile', defaultMessage: "I am a technician/engineer from Peru, passionate about creating innovative solutions through technology. I enjoy exploring new technologies and improving my skills through continuous learning." })}</p>

                            <div style={styles.statsRow}>
                                <div style={styles.stat}>
                                    <p style={styles.statNum}>{fake.stats.yearsExperience}+</p>
                                    <div style={styles.statLabel}>Years Experience</div>
                                </div>
                                <div style={styles.stat}>
                                    <p style={styles.statNum}>{fake.stats.projects}</p>
                                    <div style={styles.statLabel}>Projects</div>
                                </div>
                                <div style={styles.stat}>
                                    <p style={styles.statNum}>{fake.stats.clients}</p>
                                    <div style={styles.statLabel}>Certificates</div>
                                </div>
                            </div>

                            <div style={{ marginTop: 18 }}>
                                <h3 style={styles.sectionTitle}>{intl.formatMessage({ id: 'aboutSection.key_skills_title', defaultMessage: 'MY DEFAULT.' })}</h3>
                                <div style={styles.chips}>
                                    {fake.skills.map((s) => (
                                        <span key={s} style={styles.chip}>
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: 20 }}>
                            <h3 style={styles.sectionTitle}>{intl.formatMessage({ id: 'aboutSection.title', defaultMessage: 'About Me' })}</h3>
                            <p style={{ color: "#334155", lineHeight: 1.5, marginTop: 8 }}>
                                {intl.formatMessage({id: "aboutSection.aboutMe"})}
                            </p>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <h3 style={styles.sectionTitle}>{intl.formatMessage({ id: 'aboutSection.keyAchievements.title', defaultMessage: 'Title' })}</h3>
                    </div>
                    {/*Aquí se listan los logros clave*/}
                    <div>
                        <div style={{ marginTop: 20 }}>    
                            <div style={{ padding: "12px", borderRadius: 10, background: "rgba(255,255,255,0.06)",
                                marginBottom: 10, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "8px"}}>
                                <h5 style={{ color: "#fbbf24", margin: 0 }}>★</h5>
                                <p style={{ margin: 0, color: "#ffffffff", fontSize:14 }}>
                                    {intl.formatMessage({ id: "aboutSection.keyAchievements.achievement1", defaultMessage: ""})}
                                </p>
                            </div>
                        </div>
                        <div style={{ marginTop: 20 }}>    
                            <div style={{ padding: "12px", borderRadius: 10, background: "rgba(255,255,255,0.06)",
                                marginBottom: 10, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "8px"}}>
                                <h5 style={{ color: "#fbbf24", margin: 0 }}>★</h5>
                                <p style={{ margin: 0,  color: "#ffffffff", fontSize:14 }}>
                                    {intl.formatMessage({ id: "aboutSection.keyAchievements.achievement2", defaultMessage: ""})}
                                </p>
                            </div>
                        </div>
                        <div style={{ marginTop: 20 }}>    
                            <div style={{ padding: "12px", borderRadius: 10, background: "rgba(255,255,255,0.06)",
                                marginBottom: 10, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "8px"}}>
                                <h5 style={{ color: "#fbbf24", margin: 0 }}>★</h5>
                                <p style={{ margin: 0,  color: "#ffffffff", fontSize:14 }}>
                                    {intl.formatMessage({ id: "aboutSection.keyAchievements.achievement3", defaultMessage: ""})}
                                </p>
                            </div>
                        </div>
                        <div style={{ marginTop: 20 }}>    
                            <div style={{ padding: "12px", borderRadius: 10, background: "rgba(255,255,255,0.06)",
                                marginBottom: 10, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "8px"}}>
                                <h5 style={{ color: "#fbbf24", margin: 0 }}>★</h5>
                                <p style={{ margin: 0,  color: "#ffffffff", fontSize:14 }}>
                                    {intl.formatMessage({ id: "aboutSection.keyAchievements.achievement4", defaultMessage: ""})}
                                </p>
                            </div>
                        </div>
                        <div style={{ marginTop: 20 }}>    
                            <div style={{ padding: "12px", borderRadius: 10, background: "rgba(255,255,255,0.06)",
                                marginBottom: 10, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "8px"}}>
                                <h5 style={{ color: "#fbbf24", margin: 0 }}>★</h5>
                                <p style={{ margin: 0,  color: "#ffffffff", fontSize:14 }}>
                                    {intl.formatMessage({ id: "aboutSection.keyAchievements.achievement5", defaultMessage: ""})}
                                </p>
                            </div>
                        </div>
                        <div style={{ marginTop: 20 }}>    
                            <div style={{ padding: "12px", borderRadius: 10, background: "rgba(255,255,255,0.06)",
                                marginBottom: 10, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "8px"}}>
                                <h5 style={{ color: "#fbbf24", margin: 0 }}>★</h5>
                                <p style={{ margin: 0,  color: "#ffffffff", fontSize:14 }}>
                                    {intl.formatMessage({ id: "aboutSection.keyAchievements.achievement6", defaultMessage: ""})}
                                </p>
                            </div>
                        </div>
                        <div style={{ marginTop: 20 }}>    
                            <div style={{ padding: "12px", borderRadius: 10, background: "rgba(255,255,255,0.06)",
                                marginBottom: 10, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "8px"}}>
                                <h5 style={{ color: "#fbbf24", margin: 0 }}>★</h5>
                                <p style={{ margin: 0,  color: "#ffffffff", fontSize:14 }}>
                                    {intl.formatMessage({ id: "aboutSection.keyAchievements.achievement7", defaultMessage: ""})}
                                </p>
                            </div>
                        </div>
                        <div style={{ marginTop: 20 }}>    
                            <div style={{ padding: "12px", borderRadius: 10, background: "rgba(255,255,255,0.06)",
                                marginBottom: 10, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "8px"}}>
                                <h5 style={{ color: "#fbbf24", margin: 0 }}>★</h5>
                                <p style={{ margin: 0,  color: "#ffffffff", fontSize:14 }}>
                                    {intl.formatMessage({ id: "aboutSection.keyAchievements.achievement8", defaultMessage: ""})}
                                </p>
                            </div>
                        </div>
                        <div style={{ marginTop: 20 }}>    
                            <div style={{ padding: "12px", borderRadius: 10, background: "rgba(255,255,255,0.06)",
                                marginBottom: 10, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "8px"}}>
                                <h5 style={{ color: "#fbbf24", margin: 0 }}>★</h5>
                                <p style={{ margin: 0,  color: "#ffffffff", fontSize:14 }}>
                                    {intl.formatMessage({ id: "aboutSection.keyAchievements.achievement9", defaultMessage: ""})}
                                </p>
                            </div>
                        </div>
                        <div style={{ marginTop: 20 }}>    
                            <div style={{ padding: "12px", borderRadius: 10, background: "rgba(255,255,255,0.06)",
                                marginBottom: 10, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "8px"}}>
                                <h5 style={{ color: "#fbbf24", margin: 0 }}>★</h5>
                                <p style={{ margin: 0,  color: "#ffffffff", fontSize:14 }}>
                                    {intl.formatMessage({ id: "aboutSection.keyAchievements.achievement10", defaultMessage: ""})}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 18 }}>
                        <div>
                            <h2 style={{ margin: 0, fontSize: 13, color: "#ffffffff" }}>{intl.formatMessage({ id: 'aboutSection.autViam.title', defaultMessage: 'Quote.' })}</h2>
                            <div style={{ marginTop: 8, color: "#475569", fontSize: 14 }}>{intl.formatMessage({ id: 'aboutSection.autViam.quote', defaultMessage: 'I dont know why you are seeing this' })}</div>
                        </div>
                    </div>
                </section>

                <aside>
                    <div style={{ marginTop: 18, padding: "14px", borderRadius: 12, background: "linear-gradient(180deg, rgba(124,58,237,0.04), rgba(0,212,255,0.02))", border: '1px solid rgba(255,255,255,0.03)' }}>
                        <strong style={{ display: "block", marginBottom: 6, color: '#480395ff' }}>{intl.formatMessage({ id: 'aboutSection.availability_title', defaultMessage: 'MY DEDAULT.' })}</strong>
                        <div style={{ color: "#d6e7ff", fontSize: 13 }}>
                            {intl.formatMessage({ id: 'aboutSection.availability', defaultMessage: 'MY DEDAULT.' })}
                        </div>
                    </div >
                    <div style={{ display: "flex", gap: "16px", marginTop: "12px" }}>                        
                        <a
                            href="/cv/CV_ES.pdf"
                            download
                            style={styles.contactBtn}
                            >
                            {intl.formatMessage({ id: "aboutSection.downloadButtonES", defaultMessage: "Download" })}
                        </a>
                        <a
                            href="/cv/CV_EN.pdf"
                            download
                            style={styles.contactBtn}
                            >
                            {intl.formatMessage({ id: "aboutSection.downloadButtonEN", defaultMessage: "Download" })}
                        </a>
                    </div>
                    <div> 
                                        <section style={styles.card}>
                    {/* TU CÓDIGO SIGUE IGUAL */}  
                    
                    <div style={{ marginTop: 20 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700 }}>
                            {intl.formatMessage({id: "aboutSection.roles.title"})}
                        </h3>

                        {/* SELECT MULTIPLE */}
                        <div style={{ marginTop: 20, marginBottom: 10 }}>
                        <h3 style={{ marginBottom: 8, color: "#dbe9ff", fontWeight: 600 }}>
                            {intl.formatMessage({id: "aboutSection.roles.filters.filterCat"})}
                        </h3>

                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {allCategories.map((cat) => {
                            const active = selectedCategories.includes(cat);

                            return (
                                <button
                                key={cat}
                                onClick={() => toggleCategory(cat)}
                                style={{
                                    padding: "6px 12px",
                                    borderRadius: 20,
                                    border: active ? "2px solid #6b00ff" : "1px solid #889",
                                    background: active
                                    ? "linear-gradient(135deg,#6b00ff,#00d4ff)"
                                    : "rgba(255,255,255,0.05)",
                                    color: active ? "black" : "#dbe9ff",
                                    fontSize: 13,
                                    cursor: "pointer",
                                    transition: "0.15s",
                                }}
                                >
                                {cat}
                                </button>
                            );
                            })}
                        </div>
                        <h3 style={{ marginBottom: 8, color: "#dbe9ff", fontWeight: 600 }}>
                            {intl.formatMessage({id: "aboutSection.roles.filters.filterMod"})}
                        </h3>

                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {allModalities.map((mod) => {
                                const active = selectedModalities.includes(mod);

                                return (
                                    <button
                                    key={mod}
                                    onClick={() => toggleModality(mod)}
                                    style={{
                                        padding: "6px 12px",
                                        borderRadius: 20,
                                        border: active ? "2px solid #6b00ff" : "1px solid #889",
                                        background: active
                                        ? "linear-gradient(135deg,#6b00ff,#00d4ff)"
                                        : "rgba(255,255,255,0.05)",
                                        color: active ? "black" : "#dbe9ff",
                                        fontSize: 13,
                                        cursor: "pointer",
                                        transition: "0.15s",
                                    }}
                                    >
                                    {mod}
                                    </button>
                                );
                            })}
                        </div>
                        </div>

                        {/* MOSTRAR ROLES FILTRADOS */}
                        <div style={{ marginTop: 20 }}>
                            {filteredRoles.map((role, idx) => (
                                <div
                                key={idx}
                                style={{
                                    padding: "12px",
                                    borderRadius: 10,
                                    background: "rgba(255,255,255,0.06)",
                                    marginBottom: 10,
                                    border: "1px solid rgba(255,255,255,0.08)",
                                }}
                                >
                                <h4 style={{ margin: 0, color: "#fff" }}>{role.name}</h4>

                                <div style={{ fontSize: 13, color: "#9aa7c9", marginTop: 4 }}>
                                    {role.categories.join(" • ")}
                                </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
                      
                        
                    </div>
                    <div>
                        
                    </div>
                   
                </aside>
            </main>
        </div>
    );
}