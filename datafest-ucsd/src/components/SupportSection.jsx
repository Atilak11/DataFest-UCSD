import { COLORS, ORGANIZERS } from "../data/constants";
import { Section, SectionHeading } from "./ui";

const INVOLVEMENT_CARDS = [
  {
    icon: "🎓",
    title: "Undergraduate Students",
    body: "Form a team of 4–5 and register to compete. Fill out the student registration form by April 22nd!!",
    cta: "Student Registration Form →",
    color: COLORS.ucsdGold,
    href: "https://urldefense.com/v3/__https://docs.google.com/forms/d/1kOKAb7jfzUvXXYfQMg3dFVdaOVjp4ihc3OO5b4ryqaY/edit__;!!Mih3wA!CmUFCGntwaooVtQtJiT0B3RlYJrOxcCUSSVypRRmDJKKThnuDzdq1yzpDsq9m5YiidWeXHMR4nTzoW2kh8c$"
  },
  {
    icon: "🧑‍🏫",
    title: "Grad Students, Faculty & Alumni",
    body: "Volunteer as a mentor! Sign up for 2-hour shifts during the event. Share your expertise and connect with talented undergrads.",
    cta: "Mentor Interest Form →",
    color: "#4caf90",
    href:"https://docs.google.com/forms/d/e/1FAIpQLSctHVU1EhQMirRkBYfP7rqzvqZqNRkVNf_yUEhxEeUo0o2LRw/viewform"
  },
  {
    icon: "🏢",
    title: "Industry Partners",
    body: "DataFest is a powerful recruiting opportunity. Watch talented students work under pressure and discover your next hire.",
    cta: "Contact Organizers →",
    color: "#7eb5d6",
  },
];

export function SupportSection() {
  return (
    <Section id="support" bg={`linear-gradient(160deg, #0d1b2a 0%, #0a2744 100%)`}>
      <SectionHeading
        light
        label="Get Involved"
        title="Join DataFest 2026"
        sub="Whether you're competing, mentoring, or organizing — there's a place for you at DataFest."
      />

      {/* Involvement cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 48 }}>
        {INVOLVEMENT_CARDS.map((c) => (
          <InvolvementCard key={c.title} card={c} />
        ))}
      </div>

      {/* Organizers panel */}
      <OrganizersPanel />
    </Section>
  );
}

function InvolvementCard({ card: c }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 20, padding: "32px 24px",
      backdropFilter: "blur(10px)",
    }}>
      <div style={{ fontSize: 36, marginBottom: 14 }}>{c.icon}</div>
      <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: 10 }}>{c.title}</h3>
      <p style={{ color: "#7a9ab8", lineHeight: 1.7, fontSize: 14, marginBottom: 20 }}>{c.body}</p>
      
      {c.href ? (
        <a
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block", textDecoration: "none",
            background: "none", border: `1px solid ${c.color}`,
            color: c.color, borderRadius: 8, padding: "10px 18px",
            fontSize: 13, fontWeight: 600, cursor: "pointer",
          }}
        >
          {c.cta}
        </a>
      ) : (
        <button style={{
          background: "none", border: `1px solid ${c.color}`,
          color: c.color, borderRadius: 8, padding: "10px 18px",
          fontSize: 13, fontWeight: 600, cursor: "pointer",
        }}>
          {c.cta}
        </button>
      )}
    </div>
  );
}

function OrganizersPanel() {
  return (
    <div style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 20, padding: "32px",
    }}>
      <h3 style={{ color: "#fff", fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 24 }}>
        Event Organizers
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        {/* Faculty */}
        <div>
          <div style={{ fontSize: 11, color: COLORS.ucsdGold, letterSpacing: 3, fontWeight: 600, textTransform: "uppercase", marginBottom: 12 }}>
            Faculty & Staff
          </div>
          {ORGANIZERS.faculty.map((f) => (
            <div key={f} style={{ color: "#9ab8d4", fontSize: 14, marginBottom: 6 }}>• {f}</div>
          ))}
        </div>

        {/* Student orgs */}
        <div>
          <div style={{ fontSize: 16, color: COLORS.ucsdGold, letterSpacing: 3, fontWeight: 600, textTransform: "uppercase", marginBottom: 12 }}>
            Student Organizations
          </div>
          {ORGANIZERS.orgs.map((org) => (
            <div key={org.name} style={{ marginBottom: 8 }}>
              <div style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>{org.name}</div>
              {org.people.map((p) => (
                <div key={p} style={{ color: "#7a9ab8", fontSize: 16 }}>↳ {p}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
