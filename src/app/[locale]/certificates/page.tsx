"use client"
import Link from "next/link";
import Image from "next/image";

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

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/carolina-celeste-navarro-aldoradin",
        icon: (
            <svg width="24" height="24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.41-.77 1.47-1.5 2.5-1.5 2.21 0 4 1.79 4 4v6z"/>
            </svg>
        ),
    },
    {
        name: "GitHub",
        url: "https://github.com/genixmvp",
        icon: (
            <svg width="24" height="24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.12 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
            </svg>
        ),
    },
];

export default function CertificatesPage() {
    return (
        <div style={styles.page}>
            {/* header provided by layout */}
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
            
            
 
         <main role="main" aria-labelledby="contact-heading" className="relative isolate min-h-screen bg-gradient-to-b from-[#03020a] via-[#070512] to-[#070014] text-white overflow-hidden flex items-center justify-center px-4 py-20">
            {/* subtle background textures */}

            
             
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen opacity-70">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(124,58,237,0.06),transparent_8%),radial-gradient(ellipse_at_80%_80%,rgba(0,212,255,0.04),transparent_10%)] blur-xl" />
            </div>

            <div className="w-full max-w-3xl">
                <div className="bg-gradient-to-br from-[#0b0b10]/60 to-[#0a0a0f]/55  border-white/5 rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(2,6,23,0.6)] backdrop-blur-sm">
                    <header className="text-center mb-6">
                        <h1 id="contact-heading" className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-[#e7e9ff] via-[#cbd9ff] to-[#bff7ff]">Contact Me</h1>
                        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">Feel free to reach out for collaborations, questions or to say hello — I usually respond within 48 hours.</p>
                    </header>

                    <div>
                        <h2 style={{ margin: 0, fontSize: 20, color: '#e6eefc' }}>Certificates</h2>
                        <p style={{ marginTop: 8, color: '#bfcff9' }}>A selection of earned certificates and course completions.</p>

                        <ul style={{ marginTop: 14 }}>
                            <li>Full Stack Web Development — Example Institute</li>
                            <li>React & Advanced Patterns — Example Academy</li>
                            <li>Introduction to Embedded Systems — Example University</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        </div>
    );
}