import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import "../globals.css";
import IntlProviderWrapper from "../IntlProviderWrapper";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import ClickSpark from "@/components/ClickSpark";
import Cursor from "@/components/Cursor";
import { Inter } from 'next/font/google';
import { MusicProvider } from '@/context/MusicContext';
import BackgroundMusic from '@/components/BackgroundMusic';
const SUPPORTED_LOCALES = ["en", "es"];

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio website",
};

export default async function LocaleRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // params may be a Promise in newer Next.js runtime signatures — await it below
  params?: Promise<{ locale?: string }> | { locale?: string };
}) {
  // params can be a promise in the app router (sync dynamic APIs RFC). Ensure it's unwrapped.
  const resolvedParams = (params && (await params)) || undefined;
  // Use the provided locale if present and supported; otherwise fall back to the default locale
  let locale = resolvedParams?.locale;
  if (!locale || !SUPPORTED_LOCALES.includes(locale)) {
    locale = "en";
  }

  // Ruta => /src/app/locales/en/common.json
  const messagesPath = path.join(
    process.cwd(),
    "src",
    "app",
    "locales",
    locale,
    "common.json"
  );

  // Read messages and flatten nested JSON into dot-delimited keys because
  // react-intl expects a flat map: { 'header.home': 'Home' }
  let messages: Record<string, string> = {};

  if (fs.existsSync(messagesPath)) {
    const raw = JSON.parse(fs.readFileSync(messagesPath, "utf8"));

    const flatten = (obj: any, prefix = ""): void => {
      Object.keys(obj).forEach((key) => {
        const value = obj[key];
        const nextKey = prefix ? `${prefix}.${key}` : key;
        if (value && typeof value === "object" && !Array.isArray(value)) {
          flatten(value, nextKey);
        } else {
          // ensure string values
          messages[nextKey] = typeof value === "string" ? value : String(value);
        }
      });
    };

    flatten(raw);
  }

  // Nested layouts must not render <html> or <body> — keep those in the root layout only.
  // server-side debug element: shows the locale and how many messages were loaded
  // (helps confirm server is reading the right locale file for each path)
  const debugAttr = { 'data-locale': locale, 'data-messages-count': String(Object.keys(messages).length) };

  return (
  <div {...debugAttr} style={{ display: "contents" }}>
    
    {/* ClickSpark va AQUÍ, antes del IntlProvider */}
    <ClickSpark />
    <Cursor />
    
    <IntlProviderWrapper locale={locale} messages={messages}>
      <MusicProvider>
        <BackgroundMusic />
        <Header />
        {children}
      </MusicProvider>
    </IntlProviderWrapper>
  </div>
);

}
