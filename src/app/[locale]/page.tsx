"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useIntl } from "react-intl";
import ClickSpark from "@/components/ClickSpark";

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
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
  },
  logo: { display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "inherit" },
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
    border: "1px solid rgba(255,255,255,0.03)",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 14,
    background: "linear-gradient(135deg,#07070a,#1a1421)",
    display: "block",
    marginBottom: 14,
  },
  name: { fontSize: 26, fontWeight: 700, margin: 0, color: "#e9eefc" },
  title: { fontSize: 15, color: "#9aa7c9", marginTop: 6 },
  summary: { marginTop: 14, fontSize: 15, color: "#bfcff9", lineHeight: 1.45 },
  contactBtn: {
    display: "inline-block",
    padding: "10px 14px",
    borderRadius: 8,
    background: "linear-gradient(135deg,#6b00ff,#00d4ff)",
    color: "black",
    textDecoration: "none",
    fontWeight: 700,
    marginTop: 8,
    boxShadow: "0 10px 30px rgba(106,17,203,0.18)",
  },
};

export default function HomePage() {
  const intl = useIntl();
  const params = useParams();
  const locale = (params as any)?.locale ?? "en";

  return (
    <div style={styles.page}>
      

      <main
        role="main"
        aria-labelledby="contact-heading"
        className="relative isolate min-h-screen bg-gradient-to-b from-[#03020a] via-[#070512] to-[#070014] text-white overflow-hidden flex items-center justify-center px-4 py-20"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen opacity-70">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(124,58,237,0.06),transparent_8%),radial-gradient(ellipse_at_80%_80%,rgba(0,212,255,0.04),transparent_10%)] blur-xl" />
        </div>

        <div className="w-full max-w-3xl">
          <div className="bg-gradient-to-br from-[#0b0b10]/60 to-[#0a0a0f]/55  border-white/5 rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(2,6,23,0.6)] backdrop-blur-sm">
            <header className="text-center mb-6">
              <h1 id="contact-heading" className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-[#e7e9ff] via-[#cbd9ff] to-[#bff7ff]">
                {intl.formatMessage({ id: "aboutSection.greeting" })}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">{intl.formatMessage({ id: "aboutSection.description" })}</p>
            </header>
          </div>
        </div>
      </main>
    </div>
  );
}
