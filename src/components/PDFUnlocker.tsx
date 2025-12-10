"use client";

import { useState } from "react";
import { useIntl } from "react-intl";
export default function PDFUnlocker({ embedUrl }: { embedUrl: string }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const intl = useIntl()
  const handleUnlock = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Ingresa un correo válido.");
      return;
    }

    setUnlocked(true);
  };

  if (unlocked) {
    return (
      <div>
        <h3>Documento desbloqueado</h3>
        <iframe
          src={embedUrl}
          style={{ width: "100%", height: "90vh", border: "none" }}
          allow="autoplay"
        />
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400 }}>
      <h3>🔒{intl.formatMessage({id: "projectsSection.projects.RTLS.emailPrompt"})}</h3>

      <input
        type="email"
        placeholder={intl.formatMessage({id: "projectsSection.projects.RTLS.emailPlaceholder"})}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: 10, borderRadius: 6 }}
      />

      <button
        onClick={handleUnlock}
        style={{
          marginTop: 10,
          padding: 10,
          borderRadius: 6,
          background: "#6d28d9",
          color: "white",
          width: "100%"
        }}
      >
        {intl.formatMessage({id: "projectsSection.projects.RTLS.unlockButton"})}
      </button>

      {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
    </div>
  );
}
