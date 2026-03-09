import { COLORS, NAV_LINKS } from "../data/constants";
import { useScrollSpy } from "../hooks/useScrollSpy";

const sectionIds = NAV_LINKS.map((l) => l.id);

export function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const active = useScrollSpy(sectionIds);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(255,255,255,0.97)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #e8e8f0",
      padding: "0 28px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: 140,
    }}>
      {/* Logo */}
      <div
        style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
        onClick={() => scrollTo("home")}
      >
        <div style={{
          width: 90, height: 90, borderRadius: 12,
          background: `linear-gradient(135deg, ${COLORS.ucsdBlue}, ${COLORS.ucsdGold})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 900, color: "#fff", fontSize: 24, letterSpacing: "-0.5px",
        }}>
          DF
        </div>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 18, color: COLORS.dark, lineHeight: 1 }}>
            DataFest
          </div>
          <div style={{ fontSize: 15, color: COLORS.ucsdBlue, letterSpacing: 2, textTransform: "uppercase" }}>
            UC San Diego · 2026
          </div>
        </div>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        {NAV_LINKS.map((l) => (
          <button
            key={l.id}
            onClick={() => scrollTo(l.id)}
            style={{
              background: active === l.id ? "#e8f3fb" : "transparent",
              border: "none", cursor: "pointer",
              padding: "6px 12px", borderRadius: 8,
              fontWeight: active === l.id ? 600 : 400,
              color: active === l.id ? COLORS.ucsdBlue : "#555",
              fontSize: 22, transition: "all .15s",
            }}
          >
            {l.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo("support")}
          style={{
            marginLeft: 8,
            background: COLORS.ucsdBlue, color: "#fff",
            border: "none", borderRadius: 8,
            padding: "8px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer",
          }}
        >
          Register →
        </button>
      </div>
    </nav>
  );
}
