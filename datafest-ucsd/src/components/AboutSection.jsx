import { COLORS } from "../data/constants";
import { Section, SectionHeading } from "./ui";

const FEATURE_CARDS = [
  { icon: "📊", title: "Real-World Data",    body: "Every year, a complex dataset from a real organization is revealed at the start of the competition. No previews, no prep — just your team and your skills." },
  { icon: "🤝", title: "Expert Mentorship",  body: "Graduate students, faculty, alumni, and industry professionals roam the floor throughout the competition, ready to advise and guide your team." },
  { icon: "🏆", title: "Awards & Recognition", body: "Teams present to a panel of judges on the final day. Top teams earn awards including Best in Show, Best Visualization, and more." },
  { icon: "🌐", title: "National Community", body: "Founded at UCLA in 2011 with 30 students, DataFest now involves 500+ students across dozens of elite universities nationwide." },
];

const SCHEDULE = [
  { day: "Day 1 · Apr 24", location: "Price Center East Ballroom", note: "Check-in starts late afternoon" },
  { day: "Day 2 · Apr 25", location: "Malk Hall 5th Floor",        note: "Full competition day" },
  { day: "Day 3 · Apr 26", location: "Malk Hall 5th Floor",        note: "Presentations & awards by early afternoon" },
];

export function AboutSection() {
  return (
    <Section id="about" bg="#fafafa">
      <SectionHeading
        label="What is DataFest?"
        title="The Premier Undergraduate Data Challenge"
        sub="ASA DataFest™ is a nationally recognized, multi-day competitive hackathon where teams tackle a complex real-world dataset — and compete for recognition from academics and industry leaders."
      />

      {/* Feature cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, marginBottom: 48 }}>
        {FEATURE_CARDS.map((c) => (
          <div key={c.title} style={{
            background: "#fff", borderRadius: 16, padding: "28px 24px",
            border: "1px solid #e8e8f0",
            boxShadow: "0 2px 12px rgba(0,0,0,.04)",
          }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>{c.icon}</div>
            <h3 style={{ fontWeight: 700, marginBottom: 8, color: "#1a1a2e" }}>{c.title}</h3>
            <p style={{ color: "#666", lineHeight: 1.7, margin: 0, fontSize: 14 }}>{c.body}</p>
          </div>
        ))}
      </div>

      {/* Detail grid */}
      <div style={{
        background: `linear-gradient(135deg, ${COLORS.ucsdBlue}08, ${COLORS.ucsdGold}08)`,
        border: `1px solid ${COLORS.ucsdBlue}20`,
        borderRadius: 20, padding: "36px",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32,
      }}>
        <ScheduleBlock />
        <HostedByBlock />
        <EligibilityBlock />
      </div>
    </Section>
  );
}

function ScheduleBlock() {
  return (
    <div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, marginBottom: 16, color: COLORS.ucsdBlue }}>
        📅 Schedule
      </h3>
      {SCHEDULE.map(({ day, location, note }) => (
        <div key={day} style={{ marginBottom: 14 }}>
          <div style={{ fontWeight: 600, fontSize: 14 }}>{day}</div>
          <div style={{ fontSize: 13, color: COLORS.ucsdBlue }}>{location}</div>
          <div style={{ fontSize: 12, color: "#888" }}>{note}</div>
        </div>
      ))}
    </div>
  );
}

function HostedByBlock() {
  return (
    <div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, marginBottom: 16, color: COLORS.ucsdBlue }}>
        🏫 Hosted By
      </h3>
      <p style={{ color: "#555", lineHeight: 1.8, fontSize: 14, margin: 0 }}>
        DataFest 2026 @ UCSD is jointly hosted by the <strong>Department of Economics</strong> and the{" "}
        <strong>Department of Cognitive Science</strong>, in collaboration with student organizations including the{" "}
        <strong>Sustainable Investment Group</strong>, UES, TQT, and DS3.
      </p>
    </div>
  );
}

function EligibilityBlock() {
  return (
    <div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, marginBottom: 16, color: COLORS.ucsdBlue }}>
        ✅ Eligibility
      </h3>
      <ul style={{ color: "#555", fontSize: 14, lineHeight: 2, paddingLeft: 18, margin: 0 }}>
        <li>Undergraduate students only</li>
        <li>Teams of 4–5 from the same school</li>
        <li>Must have been enrolled at least one quarter in 2025–26</li>
        <li>Open to all majors and skill levels</li>
      </ul>
    </div>
  );
}
