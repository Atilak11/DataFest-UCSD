import { COLORS, WORKSHOPS } from "../data/constants";
import { Section, SectionHeading, Tag } from "./ui";

export function CalendarSection() {
  return (
    <Section id="calendar" bg={COLORS.dark}>
      <SectionHeading
        light
        label="Calendar"
        title="Workshops & Key Dates"
        sub="Prepare for DataFest with our workshop series. Each session builds essential skills — from coding to storytelling with data."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {WORKSHOPS.map((w, i) => (
          <WorkshopRow key={i} workshop={w} />
        ))}
      </div>
    </Section>
  );
}

function WorkshopRow({ workshop: w }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "80px 80px 1fr auto",
      alignItems: "center",
      gap: 16,
      background: w.highlight
        ? `linear-gradient(90deg, ${COLORS.ucsdBlue}22, ${COLORS.ucsdGold}11)`
        : "rgba(255,255,255,0.04)",
      border: w.highlight
        ? `1px solid ${COLORS.ucsdGold}50`
        : "1px solid rgba(255,255,255,0.08)",
      borderRadius: 12,
      padding: "16px 20px",
      opacity: w.done ? 0.55 : 1,
    }}>
      {/* Date */}
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 11, color: COLORS.ucsdGold, letterSpacing: 1, textTransform: "uppercase" }}>
          {w.day}
        </div>
        <div style={{ fontWeight: 700, color: "#fff", fontSize: 15 }}>{w.date}</div>
      </div>

      {/* Org tag */}
      <Tag color={w.highlight ? COLORS.ucsdGold : "#7eb5d6"}>{w.org}</Tag>

      {/* Title + meta */}
      <div>
        <div style={{ fontWeight: 600, color: "#fff", marginBottom: 2 }}>{w.title}</div>
        <div style={{ fontSize: 12, color: "#7a9ab8" }}>{w.time} · {w.location}</div>
      </div>

      {/* Status */}
      <StatusBadge workshop={w} />
    </div>
  );
}

function StatusBadge({ workshop: w }) {
  if (w.done)      return <span style={{ fontSize: 12, color: "#4caf90", fontWeight: 600 }}>✓ Done</span>;
  if (w.highlight) return <span style={{ fontSize: 12, color: COLORS.ucsdGold, fontWeight: 600 }}>★ Event</span>;
  return               <span style={{ fontSize: 12, color: "#7a9ab8" }}>Upcoming</span>;
}
