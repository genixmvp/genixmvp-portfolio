"use client";
import React, { useState } from "react";
import { useIntl } from "react-intl";
import { useParams, notFound } from "next/navigation";
// --- Styles & Data Keys ---
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
  card: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
    borderRadius: 12,
    padding: 24,
    boxShadow: "0 10px 30px rgba(0,0,0,0.8), 0 0 30px rgba(124,58,237,0.04)",
    border: "1px solid rgba(255,255,255,0.03)",
    marginBottom: 24,
  },
  name: { fontSize: 26, fontWeight: 700, margin: 0, color: "#e9eefc" },
  title: { fontSize: 15, color: "#9aa7c9", marginTop: 6 },
  summary: { marginTop: 14, fontSize: 15, color: "#bfcff9", lineHeight: 1.45 },
  sectionTitle: { fontSize: 20, margin: "0 0 16px 0", fontWeight: 700, color: "#e6eefc" },
  contactBtn: {
    display: "inline-block",
    padding: "10px 24px",
    borderRadius: 8,
    background: "linear-gradient(135deg,#6b00ff,#00d4ff)",
    color: "black",
    textDecoration: "none",
    fontWeight: 700,
    marginTop: 8,
    border: 'none',
    cursor: 'pointer',
    boxShadow: "0 10px 30px rgba(106,17,203,0.18)",
    textAlign: 'center'
  },
  input: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8,
    padding: '12px 16px',
    color: 'white',
    width: '100%',
    marginBottom: 10,
    outline: 'none',
  },
  refGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 16,
    marginTop: 20
  },
  refCard: {
    background: 'rgba(255,255,255,0.015)',
    border: '1px solid rgba(255,255,255,0.03)',
    borderRadius: 8,
    padding: 16
  }
};

// Keys to iterate through the references in the JSON
const referenceKeys = [
    'ref1', 'ref2', 'ref3', 'ref4', 'ref5', 'ref6', 'ref7', 'ref8', 'ref9', 'ref10'
];

export default function ContactPage() {
  const intl = useIntl();
  
  // --- Unlock Logic State ---
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUnlock = async () => {
    setError("");

    // Basic Regex Validation for Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

   /*
    try {
        const res = await fetch("/api/verify-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message);
    } catch (err: any) {
        setLoading(false);
        setError("Verification failed.");
        return;
    }
    */

    // Simulating network delay for better UX
    setTimeout(() => {
        setLoading(false);
        setUnlocked(true);
    }, 800);
  };
  const params = useParams();
  const current = params?.locale ?? "en";
  const goToProjectsPath = `/${current}/projects`;

  return (
    <div style={styles.page}>
      <main
        role="main"
        aria-labelledby="contact-heading"
        className="relative isolate min-h-screen px-4 py-20 flex flex-col items-center"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen opacity-70">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(124,58,237,0.06),transparent_8%),radial-gradient(ellipse_at_80%_80%,rgba(0,212,255,0.04),transparent_10%)] blur-xl" />
        </div>

        <div className="w-full max-w-4xl">
          <header className="text-center mb-10">
            <h1 id="contact-heading" className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-[#e7e9ff] via-[#cbd9ff] to-[#bff7ff]">
              {intl.formatMessage({ id: "contactSection.title", defaultMessage: "Contact Me" })}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              {intl.formatMessage({ id: "contactSection.description", defaultMessage: "Feel free to reach out." })}
            </p>
          </header>

          {/* --- Main Contact Info Card --- */}
          <div style={styles.card}>
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
               {/* Avatar Placeholder */}
               <div style={{ width: 100, height: 100, borderRadius: '50%', background: "linear-gradient(135deg,#6b00ff,#00d4ff)", display: "flex", alignItems:"center", justifyContent:"center", fontWeight:700, fontSize: 32, color:'white', flexShrink: 0 }}>
                    
                    <img src="/images/black-cat/blackcat.jpg" alt="" style={{width: 100, height:100, borderRadius:'50%'}} />
               </div>
               
               <div className="flex-1 text-center md:text-left w-full">
                  <h2 style={styles.name}>{intl.formatMessage({ id: "contactSection.data.name", defaultMessage: "Carolina Celeste Navarro Aldoradin" })}</h2>
                  <div style={{ ...styles.title, color: '#00d4ff' }}>{intl.formatMessage({ id: "contactSection.data.location", defaultMessage: "La Molina, Lima - Peru" })}</div>
                  
                  <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <div className="bg-white/5 px-4 py-3 rounded-lg text-sm text-slate-300 flex-1 text-center sm:text-left">
                          <span className="opacity-50 block text-xs mb-1">{intl.formatMessage({id: "contactSection.data.primaryEmail"})}</span>
                          cnava.aldoradin@gmail.com
                      </div>
                      <div className="bg-white/5 px-4 py-3 rounded-lg text-sm text-slate-300 flex-1 text-center sm:text-left">
                          <span className="opacity-50 block text-xs mb-1">{intl.formatMessage({id: "contactSection.data.emailDev"})}</span>
                          genix.mvp@gmail.com
                      </div>
                      <div className="bg-white/5 px-4 py-3 rounded-lg text-sm text-slate-300 flex-1 text-center sm:text-left">
                          <span className="opacity-50 block text-xs uppercase mb-1">{intl.formatMessage({id: "contactSection.data.phoneNumber"})}</span>
                          +51 983 453 381
                      </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
  
                    <a 
                      href={`mailto:${intl.formatMessage({ id: "contactSection.data.email1", defaultMessage:"cnava.aldoradin@gmail.com" })}`} 
                      style={{ ...styles.contactBtn, display: 'flex', alignItems: 'center', gap: 8 }}
                    >
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {intl.formatMessage({ id: "contactSection.data.message", defaultMessage: "Message" })}
                    </a>

                    {/* Botón de LinkedIn */}
                    <a 
                      href={`https://${intl.formatMessage({ id: "contactSection.data.linkedIn", defaultMessage: "linkedin.com" })}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ ...styles.contactBtn, display: 'flex', alignItems: 'center', gap: 8 }}
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.41-.77 1.47-1.5 2.5-1.5 2.21 0 4 1.79 4 4v6z"/>
                      </svg>
                      LinkedIn
                    </a>

                    {/* Botón de GitHub */}
                    <a 
                      href={`https://${intl.formatMessage({ id: "contactSection.data.gitHub", defaultMessage: "github.com" })}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ ...styles.contactBtn, display: 'flex', alignItems: 'center', gap: 8 }}
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.12 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
                      </svg>
                      GitHub
                    </a>

                  </div>
               </div>
            </div>
          </div>

          {/* --- References Section (Locked) --- */}
          <div style={styles.card}>
            <h3 style={styles.sectionTitle}>{intl.formatMessage({ id: "contactSection.references.title", defaultMessage: "References" })}</h3>
            <p style={{ ...styles.summary, marginTop: 0, marginBottom: 20 }}>
                {intl.formatMessage({ id: "contactSection.references.free", defaultMessage: "Feel free to reach out to any of the following references." })}
            </p>

            {!unlocked ? (
                // --- LOCKED STATE ---
                <div className="bg-white/5 rounded-xl p-8 text-center backdrop-blur-sm">
                    <div className="text-4xl mb-4">🔒</div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                        {intl.formatMessage({ id: "contactSection.references.description", defaultMessage: "Unlock references" })}
                    </h4>
                    <div className="max-w-xs mx-auto mt-4">
                        <input 
                            type="email" 
                            placeholder={intl.formatMessage({ id: "contactSection.references.input_placeholder", defaultMessage: "Enter your email" })}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                        />
                        <button 
                            onClick={handleUnlock}
                            disabled={loading}
                            style={{ ...styles.contactBtn, width: '100%', marginTop: 0, opacity: loading ? 0.7 : 1 }}
                        >
                            {loading ? "Verifying..." : intl.formatMessage({ id: "contactSection.references.button_text", defaultMessage: "Get References" })}
                        </button>
                    </div>
                    {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
                </div>
            ) : (
                // --- UNLOCKED STATE ---
                <div className="animate-in fade-in zoom-in duration-500">
                     <p style={{fontSize: 13, color: '#00d4ff', marginBottom: 16, borderLeft: '3px solid #00d4ff', paddingLeft: 10}}>
                        {intl.formatMessage({ id: "contactSection.references.notice", defaultMessage: "Notice the languages spoken." })}
                     </p>
                     
                     <div style={styles.refGrid}>
                        {referenceKeys.map((key) => (
                            <div key={key} style={styles.refCard}>
                                <div style={{ fontWeight: 600, color: '#e6eefc', fontSize: 16 }}>
                                    {intl.formatMessage({ id: `contactSection.references.people.${key}.name`, defaultMessage: 'Name' })}
                                </div>
                                <div style={{ fontSize: 13, color: '#9aa7c9', marginTop: 4, fontStyle: 'italic', minHeight: 40 }}>
                                    {intl.formatMessage({ id: `contactSection.references.people.${key}.position`, defaultMessage: 'Position' })}
                                </div>
                                <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '12px 0' }} />
                                
                                <div style={{ fontSize: 13, color: '#bfcff9', marginBottom: 6 }}>
                                    📞 {intl.formatMessage({ id: `contactSection.references.people.${key}.phone`, defaultMessage: '-' })}
                                </div>
                                <div style={{ fontSize: 13, color: '#bfcff9', marginBottom: 12, wordBreak: 'break-all' }}>
                                    ✉️ {intl.formatMessage({ id: `contactSection.references.people.${key}.email`, defaultMessage: '-' })}
                                </div>
                                
                                {/* Languages Badge */}
                                <div className="flex gap-2 mt-auto">
                                   <span className="text-[10px] uppercase tracking-wider bg-blue-500/10 text-blue-300 px-2 py-1 rounded">
                                      {/* Note: Arrays in react-intl JSON need to be treated as strings or custom handled. Assuming string here for safety */}
                                      {intl.formatMessage({ id: `contactSection.references.people.${key}.languages_spoken` })}
                                   </span>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}