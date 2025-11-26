
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

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


export const metadata: Metadata = {
  title: "Genix Portfolio",
  description: "Portfolio de desarrollo web y IoT de Genix MVP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="inter.className"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       {children}
      </body>
    </html>
  );
}
