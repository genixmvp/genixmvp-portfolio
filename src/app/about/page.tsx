'use client';
import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { hover } from "framer-motion";

export default function AboutPage(): React.ReactElement {
    const fake = {
        name: "Carolina Navarro",
        title: "Full‑Stack Engineer & Designer",
        location: "Lima, PE",
        email: "genix.mvp@gmail.com",
        phone: "(+51) 9834‑53381",
        summary:
            "I build delightful, accessible web experiences. I love turning complex problems into simple, intuitive interfaces and working across the stack — from design systems to APIs and server infrastructure.",
        stats: {
            yearsExperience: 1.5,
            projects: 5,
            clients: 3,
        },
        skills: [
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "GraphQL",
            "Postgres",
            "Tailwind CSS",
            "Figma",
        ],
        experience: [
            {
                company: "Bright Labs",
                role: "Senior Frontend Engineer",
                period: "2022 — Present",
                blurb: "Lead the web product team building shared component libraries and design systems used by multiple product orgs.",
            },
            {
                company: "Studio Nova",
                role: "Frontend Engineer",
                period: "2019 — 2022",
                blurb: "Implemented new product features, performance improvements and accessibility upgrades across customer facing apps.",
            },
        ],
        education: [
            {
                school: "State University",
                degree: "B.Sc. in Computer Science",
                period: "2015 — 2019",
            },
        ],
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
            <header style={styles.header}>
                <Link href="/" style={styles.logo}>
                    <Image
                        src="/images/black-cat/catnt.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="rounded-md object-cover"
                    />
                    <span style={{ fontWeight: 600, color: '#e6eefc' }}>Genix MVP</span>
                </Link>

                <nav style={styles.nav} aria-label="Main navigation">
                    <Link href="/" style={styles.navLink}>
                        Home
                    </Link>
                    <Link href="/about" style={styles.navLink}>
                        About
                    </Link>
                    <Link href="/projects" style={styles.navLink}>
                        Projects
                    </Link>
                    <Link href="/certificates" style={styles.navLink}>
                        Certificates
                    </Link>
                    <Link href="/services" style={styles.navLink}>
                        Services
                    </Link>
                    <Link href="/contact" style={styles.navLink}>
                        Contact
                    </Link>
                </nav>
            </header>

            <main style={styles.hero}>
                <section style={styles.card}>
                    <div style={{ display: "flex", gap: 18 }}>
                        <div>
                            <div style={styles.avatar} aria-hidden />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h1 style={styles.name}>{fake.name}</h1>
                            <div style={styles.title}>{fake.title} — {fake.location}</div>
                            <p style={styles.summary}>{fake.summary}</p>

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
                                    <div style={styles.statLabel}>Clients</div>
                                </div>
                            </div>

                            <div style={{ marginTop: 18 }}>
                                <h3 style={styles.sectionTitle}>Key skills</h3>
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
                        <h3 style={styles.sectionTitle}>Short bio</h3>
                        <p style={{ color: "#334155", lineHeight: 1.5, marginTop: 8 }}>
                            I’m a generalist who enjoys building end-to-end product experiences. Recently focused on performance,
                            accessibility, and building design systems for cross-team reuse. I mentor engineers, collaborate with
                            product teams, and ship small, iterative wins that move metrics.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 18 }}>
                        <div>
                            <h4 style={{ margin: 0, fontSize: 13, color: "#0f172a" }}>Contact</h4>
                            <ul style={{ paddingLeft: 0, listStyle: "none", marginTop: 8 }}>
                                <li style={{ fontSize: 14, color: "#475569" }}>{fake.email}</li>
                                <li style={{ fontSize: 14, color: "#475569", marginTop: 6 }}>{fake.phone}</li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ margin: 0, fontSize: 13, color: "#0f172a" }}>Availability</h4>
                            <div style={{ marginTop: 8, color: "#475569", fontSize: 14 }}>Open to new freelance and full‑time roles.</div>
                            <Link href="/contact" style={styles.contactBtn}>
                                Get in touch
                            </Link>
                        </div>
                    </div>
                </section>

                <aside style={styles.aside}>
                    <div style={styles.card}>
                        <h3 style={{ marginTop: 0, ...styles.sectionTitle }}>Recent experience</h3>
                        <ul style={styles.list}>
                            {fake.experience.map((e) => (
                                <li style={styles.listItem} key={e.company}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                        <div>
                                            <div style={{ fontWeight: 700 }}>{e.role}</div>
                                            <div style={{ color: "#475569", fontSize: 13 }}>{e.company}</div>
                                        </div>
                                        <div style={{ fontSize: 12, color: "#94a3b8" }}>{e.period}</div>
                                    </div>
                                    <div style={{ marginTop: 10, color: "#334155", fontSize: 14 }}>{e.blurb}</div>
                                </li>
                            ))}
                        </ul>

                        <h4 style={{ marginTop: 14, fontSize: 13, color: "#0f172a" }}>Education</h4>
                        <ul style={{ paddingLeft: 0, listStyle: "none", marginTop: 8 }}>
                            {fake.education.map((ed) => (
                                <li key={ed.school} style={{ marginBottom: 8, color: "#475569" }}>
                                    <div style={{ fontWeight: 700 }}>{ed.degree}</div>
                                    <div style={{ fontSize: 13 }}>{ed.school} — <span style={{ color: "#94a3b8" }}>{ed.period}</span></div>
                                </li>
                            ))}
                        </ul>

                        <div style={{ marginTop: 12 }}>
                            <h4 style={{ margin: 0, fontSize: 13, color: "#0f172a" }}>Links</h4>
                            <ul style={{ paddingLeft: 0, listStyle: "none", marginTop: 8, display: "flex", gap: 10 }}>
                                <li><a href="#" style={{ color: "#0ea5a9", textDecoration: "none", fontSize: 13 }}>GitHub</a></li>
                                <li><a href="#" style={{ color: "#0ea5a9", textDecoration: "none", fontSize: 13 }}>LinkedIn</a></li>
                                <li><a href="#" style={{ color: "#0ea5a9", textDecoration: "none", fontSize: 13 }}>Dribbble</a></li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginTop: 18, padding: "14px", borderRadius: 12, background: "linear-gradient(180deg, rgba(124,58,237,0.04), rgba(0,212,255,0.02))", border: '1px solid rgba(255,255,255,0.03)' }}>
                        <strong style={{ display: "block", marginBottom: 6, color: '#e6eefc' }}>Availability</strong>
                        <div style={{ color: "#d6e7ff", fontSize: 13 }}>
                            Currently available for new projects starting January. Open to remote or hybrid roles.
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}