import { COLORS } from "../data/constants";
import { Section, SectionHeading } from "./ui";

export function PastDataFestSection() {
  return (
    <Section id="past" bg="#fff">
      <SectionHeading
        label="History"
        title="Past DataFest Highlights"
        sub="UCSD students have competed at DataFest events and proven they can hang with the best. Here's a look at where we've been."
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        <UCLA2025Card />
        <HistoryCard />
      </div>
    </Section>
  );
}

function UCLA2025Card() {
  return (
    <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #e0e8f4", boxShadow: "0 4px 20px rgba(0,0,0,.06)" }}>
      <div style={{ background: `linear-gradient(135deg, ${COLORS.ucsdBlue}, #0a3d6b)`, padding: "28px 24px", color: "#fff" }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#9ab8d4", marginBottom: 8, textTransform: "uppercase" }}>
          SIG × UCSD @ UCLA
        </div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, margin: 0 }}>DataFest 2025</h3>
      </div>
      <div style={{ padding: "24px" }}>
        <p style={{ color: "#555", lineHeight: 1.7, margin: "0 0 16px", fontSize: 14 }}>
          The Sustainable Investment Group proudly sent a representative UCSD team to UCLA DataFest 2025. The team tackled a commercial real estate dataset and built a Vector Auto-Regressive (VAR) model to forecast optimal business locations.
        </p>
        <div style={{ background: "#f4f8fc", borderRadius: 10, padding: "14px 16px" }}>
          <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 6, color: COLORS.ucsdBlue }}>
            Team: Statistically SIGnificant (B16)
          </div>
          <div style={{ fontSize: 12, color: "#666" }}>
            Andrew Yang · Devan Velji · Sahas Goli · Steven Xu · Pranay Jha
          </div>
        </div>
      </div>
    </div>
  );
}

function HistoryCard() {
  return (
    <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #e0e8f4", boxShadow: "0 4px 20px rgba(0,0,0,.06)" }}>
      <div style={{ background: `linear-gradient(135deg, #0a3d6b, ${COLORS.ucsdGold}cc)`, padding: "28px 24px", color: "#fff" }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#fce8b2", marginBottom: 8, textTransform: "uppercase" }}>
          About the Competition
        </div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, margin: 0 }}>ASA DataFest™ History</h3>
      </div>
      <div style={{ padding: "24px" }}>
        <p style={{ color: "#555", lineHeight: 1.7, margin: "0 0 12px", fontSize: 14 }}>
          Founded at UCLA in 2011 with just 30 students analyzing LAPD arrest records, DataFest is now a nationally sponsored event by the American Statistical Association, drawing 500+ participants.
        </p>
        <p style={{ color: "#555", lineHeight: 1.7, margin: 0, fontSize: 14 }}>
          Participating schools include Duke, Princeton, Dartmouth, UNC, NC State, Emory, Smith, and many others — with UCSD joining the movement in 2026.
        </p>
      </div>
    </div>
  );
}
