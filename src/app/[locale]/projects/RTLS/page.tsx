"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation"; // Importamos notFound por si el ID no existe
import { useIntl } from "react-intl";
import PDFUnlocker from "@/components/PDFUnlocker";
import { color } from "framer-motion";
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

export default function SENATIThesisPage() {
    const intl = useIntl();
      
    const params = useParams();
    const locale = (params?.locale as string) || "en";

    const embedUrl = 
    locale ==="en"
    ? "https://drive.google.com/file/d/1mefzhgw1kLcWv_gXYZDFM91Yr9Ft2sJC/preview"
    : "https://drive.google.com/file/d/1kIAQS7sMEih2p80_mLcSFAir61ZX2ewS/preview"


  return (

    <div>
        <PDFUnlocker embedUrl={embedUrl} />
    </div>
  
  );
}
