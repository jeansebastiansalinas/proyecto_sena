import { useState, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";

const words = [
  { en: "Hello",     es: "Hola" },
  { en: "Thank you", es: "Gracias" },
  { en: "Goodbye",   es: "Adiós" },
  { en: "Please",    es: "Por favor" },
  { en: "Water",     es: "Agua" },
  { en: "English",   es: "Inglés" },
];

function FlashCard() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % words.length);
        setVisible(true);
      }, 280);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      position: "absolute", left: "50%", top: "50%",
      animation: "bobCenter 3s ease-in-out infinite",
      zIndex: 20,
    }}>
      <div style={{
        background: "#fff",
        border: "3px solid #58CC02",
        borderRadius: "24px",
        padding: "18px 24px",
        boxShadow: "0 8px 0 #46A302",
        textAlign: "center",
        minWidth: "165px",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.92)",
        transition: "opacity 0.25s ease, transform 0.25s ease",
      }}>
        <span style={{
          display: "block",
          fontFamily: "'Nunito', sans-serif",
          fontSize: "26px",
          fontWeight: 900,
          color: "#3C3C3C",
          letterSpacing: "-0.5px",
        }}>
          {words[idx].en}
        </span>
        <span style={{
          display: "block",
          fontFamily: "'Nunito', sans-serif",
          fontSize: "14px",
          fontWeight: 700,
          color: "#58CC02",
          marginTop: "4px",
        }}>
          {words[idx].es}
        </span>
        <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginTop: "10px" }}>
          {words.map((_, i) => (
            <div key={i} style={{
              width: "10px", height: "10px", borderRadius: "50%",
              background: i < idx ? "rgba(88,204,2,0.4)" : i === idx ? "#58CC02" : "#e0e0e0",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div
      style={{
        fontFamily: "'Nunito', sans-serif",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {/* ANIMACIONES GLOBALES */}
      <style>{`
        @keyframes float1 { 0%,100%{transform:translateY(0px) rotate(-8deg)} 50%{transform:translateY(-12px) rotate(-8deg)} }
        @keyframes float2 { 0%,100%{transform:translateY(0px) rotate(6deg)} 50%{transform:translateY(-16px) rotate(6deg)} }
        @keyframes float3 { 0%,100%{transform:translateY(0px) rotate(-5deg)} 50%{transform:translateY(-10px) rotate(-5deg)} }
        @keyframes float4 { 0%,100%{transform:translateY(0px) rotate(10deg)} 50%{transform:translateY(-14px) rotate(10deg)} }
        @keyframes bobCenter { 0%,100%{transform:translate(-50%,-50%) scale(1)} 50%{transform:translate(-50%,-58%) scale(1.02)} }
        @keyframes orbit { 0%{transform:rotate(0deg) translateX(130px) rotate(0deg)} 100%{transform:rotate(360deg) translateX(130px) rotate(-360deg)} }
        @keyframes shimmer { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @keyframes popIn { 0%{transform:scale(0);opacity:0} 100%{transform:scale(1);opacity:1} }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 48px",
        borderBottom: "2px solid #e5e5e5",
        flexShrink: 0,
      }}>
        {/* LOGO */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/logo-sena.png"
            alt="Sena Learn English"
            style={{ height: "44px", width: "auto" }}
          />
          <span style={{
            fontSize: "22px",
            fontWeight: 900,
            color: "#58CC02",
            letterSpacing: "-0.5px",
          }}>
            SENA LEARN ENGLISH
          </span>
        </div>

        {/* BOTONES NAV */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={() => setShowLogin(true)}
            style={{
              border: "2px solid #e5e5e5",
              background: "#fff",
              color: "#1CB0F6",
              fontWeight: 800,
              fontSize: "14px",
              padding: "10px 24px",
              borderRadius: "14px",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => setShowRegister(true)}
            style={{
              border: "none",
              background: "#58CC02",
              color: "#fff",
              fontWeight: 800,
              fontSize: "14px",
              padding: "12px 26px",
              borderRadius: "14px",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              boxShadow: "0 4px 0 #46A302",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Empieza gratis
          </button>
        </div>
      </nav>

      {/* HERO */}
      <div style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "0 48px",
        maxWidth: "100%",
        overflow: "hidden",
      }}>

        {/* ILUSTRACIÓN IZQUIERDA */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <div style={{ position: "relative", width: "420px", height: "420px" }}>

            {/* Anillo orbital decorativo */}
            <div style={{
              position: "absolute", left: "50%", top: "50%",
              width: "260px", height: "260px", margin: "-130px",
              border: "1.5px dashed #e8f5d0", borderRadius: "50%", zIndex: 1,
            }} />

            {/* Puntos orbitando */}
            {[
              { color: "#58CC02", delay: "0s" },
              { color: "#1CB0F6", delay: "-2.6s" },
              { color: "#FFC800", delay: "-5.3s" },
            ].map((d, i) => (
              <div key={i} style={{
                position: "absolute", left: "50%", top: "50%",
                width: "10px", height: "10px", borderRadius: "50%",
                margin: "-5px", background: d.color, zIndex: 2,
                animation: "orbit 8s linear infinite",
                animationDelay: d.delay,
              }} />
            ))}

            {/* FLASHCARD CENTRAL ANIMADA */}
            <FlashCard />

            {/* Personajes flotantes */}
            {[
              { emoji: "👩‍🎓", name: "Sara",   bg: "#FFD0D0", nameBg: "#58CC02", top: "20px",   left: "30px",  anim: "float1 4s ease-in-out infinite",   delay: "0s" },
              { emoji: "👨‍💻", name: "Carlos", bg: "#D0E8FF", nameBg: "#1CB0F6", top: "15px",   right: "25px", anim: "float2 3.5s ease-in-out infinite", delay: "-1s" },
              { emoji: "👧",   name: "María",  bg: "#D0FFE8", nameBg: "#58CC02", bottom: "30px", left: "20px",  anim: "float3 4.5s ease-in-out infinite", delay: "-0.5s" },
              { emoji: "🧑‍🏫", name: "Prof.",  bg: "#FFF0D0", nameBg: "#FF9600", bottom: "25px", right: "20px", anim: "float4 3.8s ease-in-out infinite", delay: "-2s" },
            ].map((c, i) => (
              <div key={i} style={{
                position: "absolute",
                display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
                zIndex: 10,
                top: c.top, left: c.left, bottom: c.bottom, right: c.right,
                animation: c.anim, animationDelay: c.delay,
              }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "50%",
                  background: c.bg, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "28px",
                  border: "3px solid #fff", boxShadow: "0 4px 8px rgba(0,0,0,0.12)",
                }}>{c.emoji}</div>
                <span style={{
                  fontFamily: "'Nunito', sans-serif", fontSize: "11px", fontWeight: 800,
                  color: "#fff", background: c.nameBg, padding: "2px 8px", borderRadius: "20px",
                }}>{c.name}</span>
              </div>
            ))}

            {/* Burbuja izquierda */}
            <div style={{
              position: "absolute", top: "90px", left: "0px", zIndex: 15,
              background: "#fff", border: "2px solid #58CC02", borderRadius: "20px",
              padding: "8px 12px", fontFamily: "'Nunito', sans-serif", fontWeight: 800,
              fontSize: "13px", color: "#3B6D11", whiteSpace: "nowrap",
              boxShadow: "0 4px 0 rgba(0,0,0,0.06)",
              animation: "float2 5s ease-in-out infinite", animationDelay: "-1.5s",
            }}>
              "Good morning!" ✓
            </div>

            {/* Burbuja derecha */}
            <div style={{
              position: "absolute", top: "80px", right: "0px", zIndex: 15,
              background: "#fff", border: "2px solid #1CB0F6", borderRadius: "20px",
              padding: "8px 12px", fontFamily: "'Nunito', sans-serif", fontWeight: 800,
              fontSize: "13px", color: "#0a6fa3", whiteSpace: "nowrap",
              boxShadow: "0 4px 0 rgba(0,0,0,0.06)",
              animation: "float1 4.2s ease-in-out infinite", animationDelay: "-0.8s",
            }}>
              🔥 Lección 3
            </div>

            {/* XP Badge */}
            <div style={{
              position: "absolute", bottom: "110px", left: "0px", zIndex: 15,
              background: "#FFC800", border: "2px solid #e6b400", borderRadius: "12px",
              padding: "5px 10px", fontFamily: "'Nunito', sans-serif", fontWeight: 900,
              fontSize: "13px", color: "#5a4500", boxShadow: "0 3px 0 #c8a000",
              animation: "float3 3.6s ease-in-out infinite", animationDelay: "-1.2s",
            }}>⚡ +15 XP</div>

            {/* Streak Badge */}
            <div style={{
              position: "absolute", bottom: "100px", right: "0px", zIndex: 15,
              background: "#FF9600", border: "2px solid #e08000", borderRadius: "12px",
              padding: "5px 10px", fontFamily: "'Nunito', sans-serif", fontWeight: 900,
              fontSize: "13px", color: "#fff", boxShadow: "0 3px 0 #c07000",
              animation: "float4 4s ease-in-out infinite", animationDelay: "-0.3s",
            }}>🔥 7 días</div>

            {/* Iconos flotantes */}
            {[
              { icon: "✅", top: "175px", left: "55px",  delay: "0.2s", size: "22px" },
              { icon: "⭐", top: "165px", right: "50px", delay: "0.8s", size: "18px" },
              { icon: "🏆", bottom: "155px", left: "90px", delay: "0.5s", size: "16px" },
            ].map((ic, i) => (
              <div key={i} style={{
                position: "absolute", fontSize: ic.size, zIndex: 15,
                top: ic.top, left: ic.left, right: ic.right, bottom: ic.bottom,
                animation: `popIn 0.5s ease ${ic.delay} both, shimmer 2s ${parseFloat(ic.delay) + 0.5}s ease-in-out infinite`,
              }}>{ic.icon}</div>
            ))}

          </div>
        </div>

        {/* CTA DERECHA */}
        <div style={{
          display: "flex", flexDirection: "column",
          justifyContent: "center", padding: "0 24px 0 0",
        }}>
          <h1 style={{
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 900,
            color: "#3C3C3C",
            lineHeight: 1.15,
            marginBottom: "28px",
            letterSpacing: "-0.5px",
          }}>
            ¡La forma divertida, efectiva y gratis de aprender un idioma!
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "360px" }}>
            <button
              onClick={() => setShowRegister(true)}
              style={{
                background: "#58CC02", color: "#fff",
                border: "none", borderBottom: "4px solid #46A302",
                fontWeight: 800, fontSize: "16px", padding: "16px",
                borderRadius: "16px", cursor: "pointer",
                textTransform: "uppercase", letterSpacing: "1px",
                fontFamily: "'Nunito', sans-serif", width: "100%",
              }}
            >
              Empieza ahora
            </button>
            <button
              onClick={() => setShowLogin(true)}
              style={{
                background: "#fff", color: "#1CB0F6",
                border: "2px solid #e0e0e0", borderBottom: "4px solid #ccc",
                fontWeight: 800, fontSize: "16px", padding: "14px",
                borderRadius: "16px", cursor: "pointer",
                textTransform: "uppercase", letterSpacing: "1px",
                fontFamily: "'Nunito', sans-serif", width: "100%",
              }}
            >
              Ya tengo una cuenta
            </button>
          </div>
        </div>
      </div>

      {/* MODAL LOGIN */}
      {showLogin && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
            display: "flex", justifyContent: "center", alignItems: "center", zIndex: 50,
          }}
          onClick={(e) => e.target === e.currentTarget && setShowLogin(false)}
        >
          <Login
            onClose={() => setShowLogin(false)}
            onSwitch={() => { setShowLogin(false); setShowRegister(true); }}
          />
        </div>
      )}

      {/* MODAL REGISTER */}
      {showRegister && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
            display: "flex", justifyContent: "center", alignItems: "center", zIndex: 50,
          }}
          onClick={(e) => e.target === e.currentTarget && setShowRegister(false)}
        >
          <Register
            onClose={() => setShowRegister(false)}
            onSwitch={() => { setShowRegister(false); setShowLogin(true); }}
          />
        </div>
      )}
    </div>
  );
}