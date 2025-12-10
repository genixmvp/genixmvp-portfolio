"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useIntl } from "react-intl";
import { Provider } from "@/components/ui/provider";
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
};

export default function HomePage() {
  const intl = useIntl();
  const params = useParams();

  return (
    <div style={styles.page}>
      
      {/* CSS Styles & Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scanline-move {
          0% { top: -10%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        
        /* Loop de 10 segundos para el efecto tecleado */
        @keyframes text-reveal-loop {
          0% { width: 0; opacity: 1; }
          20% { width: 100%; opacity: 1; } /* Escribe (2s) */
          85% { width: 100%; opacity: 1; } /* Mantiene visible (6.5s) */
          95% { opacity: 0; }              /* Desvanece (1s) */
          100% { width: 0; opacity: 0; }   /* Reset (0.5s) */
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        .scan-bar {
          animation: scanline-move 3s linear infinite;
        }
        
        .typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: text-reveal-loop 10s cubic-bezier(0.22, 1, 0.36, 1) infinite;
          vertical-align: bottom;
        }
        
        .blinking-cursor::after {
          content: '|';
          animation: blink 1s infinite;
          color: #00B4FF;
          margin-left: 2px;
        }
      `}} />

      <main
        role="main"
        className="relative isolate min-h-screen text-white overflow-hidden flex items-center justify-center px-4 py-10"
      >
        {/* Background Gradients */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen opacity-70">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(124,58,237,0.06),transparent_8%),radial-gradient(ellipse_at_80%_80%,rgba(0,212,255,0.04),transparent_10%)] blur-xl" />
        </div>

        {/* --- MAIN DASHBOARD CONTAINER --- */}
        <div className="text-center relative
                        bg-black/60                  
                        rounded-3xl p-6 sm:p-10
                        shadow-[0_0_80px_rgba(0,180,255,0.1)]       
                        backdrop-blur-md
                        w-full max-w-4xl"> {/* Aumenté un poco el ancho para dar espacio al texto */}

          {/* --- FUTURISTIC GIF HUD FRAME --- */}
          <div className="relative mx-auto w-full group">
            
            {/* The Skewed Wrapper Frame */}
            <div className="relative p-1 transform skew-x-[-2deg] bg-[#050a14] border border-[#00B4FF]/20">
                
                {/* Corners Decorativos */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#00B4FF]/50 z-50"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#00B4FF]/50 z-50"></div>
                
                {/* Label "System Live" (Fuera del overlay, en el marco) */}
                <div className="absolute top-0 right-0 transform translate-y-[-140%] flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                    <span className="text-[12px] tracking-[0.2em] text-[#00B4FF] uppercase font-mono font-extrabold shadow-cyan-500/50">System Live</span>
                </div>

                {/* --- CONTENEDOR RELATIVO DE IMAGEN Y TEXTO --- */}
                <div className="relative overflow-hidden min-h-[600px] flex items-center justify-center">
                    
                    {/* 1. LAYER FONDO: La Imagen GIF */}
                    <img
                        src={"https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZXZpZHZ1ZXkwcHpjZ3QybGFka2RtOGhzNzdscTYxMjJ6bG9zYTNmZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vBzOoyWjILSetTtHyL/giphy.gif"}
                        alt="Cyberpunk Hero"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
                    />
                    
                    {/* 2. LAYER MEDIO: Efectos de Escaneo */}
                    <div className="scan-bar absolute left-0 top-0 w-full h-[20%] bg-gradient-to-b from-transparent via-[#00B4FF]/10 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-0 z-10 pointer-events-none opacity-30"
                         style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.06), rgba(0, 0, 255, 0.14))', backgroundSize: '100% 4px, 6px 100%' }}>
                    </div>

                    {/* 3. LAYER SUPERIOR: El Texto (Overlay) */}
                    {/* z-30 asegura que esté encima de la imagen y scanlines */}
                    <header className="relative z-30 flex flex-col items-center justify-center p-4 w-full">
                        
                        <div className="inline-block relative mb-4">
                           {/* Fondo oscuro detrás del texto para legibilidad */}
                           <div className="absolute inset-0 bg-black/40 blur-xl -z-10"></div>
                           
                           <h1 className="typewriter blinking-cursor text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent 
                                          bg-gradient-to-tr from-[#ffffff] via-[#00B4FF] to-[#0070f3] 
                                          drop-shadow-[0_2px_10px_rgba(0,180,255,0.8)]
                                          font-mono tracking-tight py-2">
                              {intl.formatMessage({ id: "aboutSection.short_greeting" })}
                           </h1>
                        </div>

                        <p className="mt-2 text-sm sm:text-base 
                                      text-[#d1f7ff] font-mono tracking-wide                           
                                      max-w-md mx-auto
                                      drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">                       
                            {intl.formatMessage({ id: "aboutSection.description" })}
                        </p>
                    </header>

                </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}