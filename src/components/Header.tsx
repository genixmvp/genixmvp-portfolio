"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useIntl } from "react-intl";

const SUPPORTED_LOCALES = ["en", "es"];

export default function Header() {
  const params = useParams() as any;
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
  };

  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 28px", borderBottom: "1px solid rgba(255,255,255,0.04)", background: "linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))", position: "sticky", top: 0, backdropFilter: "blur(6px)", zIndex: 40 }}>
      <Link href={`/${current}`} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "inherit" }}>
        <img src="/images/black-cat/catnt.png" alt="logo" width={44} height={44} style={{ borderRadius: 8 }} />
        <span style={{ fontWeight: 600, color: "#e6eefc" }}>Genix MVP</span>
      </Link>

      <nav style={{ display: "flex", gap: 16, alignItems: "center" }} aria-label="Main navigation">
        <Link href={`/${current}`} style={{ textDecoration: "none", color: "#dbe9ff", fontSize: 15 }}>{intl.formatMessage({ id: "header.home" })}</Link>
        <Link href={`/${current}/about`} style={{ textDecoration: "none", color: "#dbe9ff", fontSize: 15 }}>{intl.formatMessage({ id: "header.about" })}</Link>
        <Link href={`/${current}/projects`} style={{ textDecoration: "none", color: "#dbe9ff", fontSize: 15 }}>{intl.formatMessage({ id: "header.projects" })}</Link>
        <Link href={`/${current}/certificates`} style={{ textDecoration: "none", color: "#dbe9ff", fontSize: 15 }}>{intl.formatMessage({ id: "header.certificates" })}</Link>
        <Link href={`/${current}/services`} style={{ textDecoration: "none", color: "#dbe9ff", fontSize: 15 }}>{intl.formatMessage({ id: "header.services" })}</Link>
        <Link href={`/${current}/contact`} style={{ textDecoration: "none", color: "#dbe9ff", fontSize: 15 }}>{intl.formatMessage({ id: "header.contact" })}</Link>

        {/* language switcher - adjacent to contact */}
        <div style={{ display: "flex", gap: 6, marginLeft: 8 }}>
          <Link href={pathWith("en")} style={{ padding: "6px 8px", borderRadius: 6, background: current === "en" ? "#6b00ff" : "transparent", color: current === "en" ? "#fff" : "#dbe9ff", textDecoration: "none", fontWeight: 600 }}>EN</Link>
          <Link href={pathWith("es")} style={{ padding: "6px 8px", borderRadius: 6, background: current === "es" ? "#6b00ff" : "transparent", color: current === "es" ? "#fff" : "#dbe9ff", textDecoration: "none", fontWeight: 600 }}>ES</Link>
        </div>
      </nav>
    </header>
  );
}
