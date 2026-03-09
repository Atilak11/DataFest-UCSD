import { COLORS } from "../data/constants";
import { useCountdown } from "../hooks/useCountdown";
import { CountdownUnit } from "./ui";
import { scrollTo } from "./Navbar";

const DATAFEST_DATE = "2026-04-24T17:00:00";

export function HeroSection() {
  const countdown = useCountdown(DATAFEST_DATE);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: `linear-gradient(160deg, ${COLORS.dark} 0%, #0a2744 60%, #0d3a5e 100%)`,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "120px 28px 80px",
        position: "relative", overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Glow */}
      <div style={{
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        background: `radial-gradient(circle, ${COLORS.ucsdBlue}33 0%, transparent 70%)`,
        top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 780 }}>
        {/* Badge */}
        <div style={{
          display: "inline-block", marginBottom: 20,
          padding: "6px 18px", borderRadius: 999,
          border: `1px solid ${COLORS.ucsdGold}50`,
          color: COLORS.ucsdGold, fontSize: 12, letterSpacing: 3,
          fontWeight: 600, textTransform: "uppercase",
        }}>
          ASA DataFest™ · UCSD · April 24–26, 2026
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(42px, 7vw, 86px)",
          fontWeight: 900, color: "#fff",
          lineHeight: 1.05, margin: "0 0 24px", letterSpacing: "-2px",
        }}>
          Uncover Insights.<br />
          <span style={{ color: COLORS.ucsdGold }}>Win the Weekend.</span>
        </h1>

        <p style={{ color: "#9ab8d4", fontSize: "clamp(15px,2vw,18px)", lineHeight: 1.8, maxWidth: 560, margin: "0 auto 40px" }}>
          A 48-hour data hackathon for undergraduate teams. Bring statistics, code, and creativity — leave with real-world experience and a shot at Best in Show.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
          <button
            onClick={() => scrollTo("support")}
            style={{
              background: COLORS.ucsdGold, color: "#fff", border: "none",
              borderRadius: 10, padding: "14px 32px", fontSize: 15, fontWeight: 600, cursor: "pointer",
              boxShadow: `0 4px 24px ${COLORS.ucsdGold}55`,
            }}
          >
            Sign Up Now
          </button>
          <button
            onClick={() => scrollTo("about")}
            style={{
              background: "transparent", color: "#fff",
              border: "1px solid #ffffff30",
              borderRadius: 10, padding: "14px 32px", fontSize: 15, fontWeight: 500, cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </div>

        {/* Countdown */}
        <div style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16, padding: "24px 40px",
          display: "inline-flex", alignItems: "center",
          backdropFilter: "blur(10px)",
        }}>
          <CountdownUnit n={countdown.d} label="Days" />
          <Divider />
          <CountdownUnit n={countdown.h} label="Hours" />
          <Divider />
          <CountdownUnit n={countdown.m} label="Minutes" />
          <Divider />
          <CountdownUnit n={countdown.s} label="Seconds" />
        </div>

        <div style={{ color: "#6888a0", fontSize: 12, marginTop: 10, letterSpacing: 1 }}>
          UNTIL DATAFEST 2026 BEGINS
        </div>
      </div>
    </section>
  );
}

function Divider() {
  return (
    <div style={{ color: "#ffffff30", fontSize: 40, margin: "0 12px", fontWeight: 300 }}>:</div>
  );
}
