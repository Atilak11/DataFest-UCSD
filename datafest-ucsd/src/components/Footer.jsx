import { NAV_LINKS } from "../data/constants";
import { scrollTo } from "./Navbar";

export function Footer() {
  return (
    <footer style={{
      background: "#060e1a",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "32px 28px",
      display: "flex", flexDirection: "column", alignItems: "center",
      gap: 10, textAlign: "center",
    }}>
      <div style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontWeight: 700, fontSize: 18 }}>
        ASA DataFest™ @ UC San Diego 2026
      </div>
      <div style={{ color: "#4a6a8a", fontSize: 13 }}>
        Hosted by UCSD Dept. of Economics & Dept. of Cognitive Science · In collaboration with SIG, UES, TQT & DS3
      </div>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center", marginTop: 4 }}>
        {NAV_LINKS.map((l) => (
          <button
            key={l.id}
            onClick={() => scrollTo(l.id)}
            style={{ background: "none", border: "none", color: "#4a6a8a", fontSize: 12, cursor: "pointer" }}
          >
            {l.label}
          </button>
        ))}
      </div>
      <div style={{ color: "#4a6a8a", fontSize: 20, marginTop: 8 }}>
        Built with  ❤️  by Aditya Kalita and Justin James from the UCSD SIG - R&D Team · © 2026
      </div>
    </footer>
  );
}
