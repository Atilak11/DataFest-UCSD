import { COLORS, ANNOUNCEMENTS } from "../data/constants";
import { Section, SectionHeading, Tag } from "./ui";

export function AnnouncementsSection() {
  return (
    <Section id="announcements" bg="#f4f8fc">
      <SectionHeading
        label="Updates"
        title="Announcements"
        sub="Stay up to date with the latest DataFest news, workshop slides, and registration info."
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        {ANNOUNCEMENTS.map((a, i) => (
          <AnnouncementCard key={i} announcement={a} />
        ))}
      </div>
    </Section>
  );
}

function AnnouncementCard({ announcement: a }) {
  const tagColor = a.tag === "Registration" ? COLORS.ucsdGold : COLORS.ucsdBlue;

  return (
    <div style={{
      background: "#fff", borderRadius: 16, padding: "24px",
      border: "1px solid #e0e8f4",
      boxShadow: "0 2px 12px rgba(0,98,155,.06)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <Tag color={tagColor}>{a.tag}</Tag>
        <span style={{ fontSize: 12, color: "#999" }}>{a.date}</span>
      </div>
      <h3 style={{ fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>{a.title}</h3>
      <p style={{ color: "#666", lineHeight: 1.7, margin: 0, fontSize: 14 }}>{a.body}</p>
    </div>
  );
}
