import { COLORS } from "../data/constants";

export function Tag({ children, color = COLORS.ucsdBlue }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "2px 10px",
      borderRadius: 999,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 1,
      textTransform: "uppercase",
      background: color + "18",
      color,
      border: `1px solid ${color}30`,
    }}>
      {children}
    </span>
  );
}

export function Section({ id, children, bg = "#fff", style = {} }) {
  return (
    <section id={id} style={{ background: bg, padding: "80px 0", ...style }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ label, title, sub, light }) {
  return (
    <div style={{ marginBottom: 48, textAlign: "center" }}>
      <div style={{
        fontSize: 11, letterSpacing: 4,
        color: light ? "#aac8e0" : COLORS.ucsdBlue,
        fontWeight: 700, textTransform: "uppercase", marginBottom: 10,
      }}>
        {label}
      </div>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "clamp(28px, 4vw, 42px)",
        fontWeight: 700,
        color: light ? "#fff" : "#1a1a2e",
        margin: "0 0 14px",
      }}>
        {title}
      </h2>
      {sub && (
        <p style={{ color: light ? "#b0c8de" : "#666", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
          {sub}
        </p>
      )}
    </div>
  );
}

export function CountdownUnit({ n, label }) {
  return (
    <div style={{ textAlign: "center", minWidth: 72 }}>
      <div style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 48, fontWeight: 700,
        color: COLORS.ucsdBlue,
        lineHeight: 1, letterSpacing: "-2px",
      }}>
        {String(n ?? 0).padStart(2, "0")}
      </div>
      <div style={{
        fontSize: 11, letterSpacing: 3, color: "#7a7a8a",
        marginTop: 4, textTransform: "uppercase",
      }}>
        {label}
      </div>
    </div>
  );
}
