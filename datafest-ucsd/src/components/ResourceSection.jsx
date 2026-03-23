import { COLORS } from "../data/constants";
import { Section, SectionHeading, Tag } from "./ui";

export function ResourceSection() {
  return (
    <Section id="resources" bg={COLORS.dark}>
      <SectionHeading
        light
        label="Resources"
        title="Workshop Slides & Materials"
        sub="Download or view slides from each workshop to prepare for DataFest 2026."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <SlideCard slide={{
          title: "Workshop 1 Slides",
          description: "UES - Basics of R & Stata + Data Viz Intro",
          file: "/slides/workshop1.pdf",
          preview: "/slides/workshop1preview.png",
          date: "Jan 16",
          org: "UES",
        }} />
        <SlideCard slide={{
          title: "Workshop 2 Slides",
          description: "SIG - DataFest 2026 Info Meeting",
          file: "/slides/WorkshopTwo.pdf",
          preview: "/slides/WorkshopTwoPrev.png",
          date: "Jan 30",
          org: "All",
        }} />
        <SlideCard slide={{
          title: "Workshop 3 Slides",
          description: "Intro to Machine Learning",
          file: "/slides/workshop3.pdf",
          preview: "/slides/workshop3prev.png",
          date: "Feb 13",
          org: "TQT × SIG",
        }} />
      </div>

      <div style={{
        marginTop: 40,
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 16, padding: "24px 28px",
        display: "flex", alignItems: "center", gap: 16,
      }}>
        <div style={{ fontSize: 28 }}>📬</div>
        <div>
          <div style={{ fontWeight: 600, color: "#fff", marginBottom: 4 }}>More slides coming soon</div>
          <div style={{ fontSize: 14, color: "#7a9ab8" }}>
            Slides from upcoming workshops will be posted here after each session. Check back after each event.
          </div>
        </div>
      </div>
    </Section>
  );
}

function SlideCard({ slide }) {
  const isAvailable = !!slide.file;

  return (
    <div style={{
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 2px 12px rgba(0,98,155,.06)",
      opacity: isAvailable ? 1 : 0.6,
      display: "flex",
      flexDirection: "row",
      width: "100%",
    }}>
      <div style={{
        background: isAvailable
          ? `linear-gradient(135deg, ${COLORS.ucsdBlue}, #0a3d6b)`
          : "#c0c0c0",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        {slide.preview ? (
          <img
            src={slide.preview}
            alt={`${slide.title} preview`}
            style={{
              width: 140,
              height: 180,
              objectFit: "contain",
              borderRadius: 4,
              display: "block",
            }}
          />
        ) : (
          <div style={{ fontSize: 32 }}>📄</div>
        )}
      </div>

      <div style={{
        padding: "20px 28px",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <div style={{ fontSize: 12, color: "#7a9ab8" }}>{slide.date}</div>
          <Tag color={isAvailable ? COLORS.ucsdGold : "#888"}>
            {slide.org}
          </Tag>
        </div>
        <h3 style={{ fontWeight: 700, color: "#fff", marginBottom: 6, fontSize: 18 }}>
          {slide.title}
        </h3>
        <p style={{ fontSize: 14, color: "#9ab8d4", lineHeight: 1.6, margin: "0 0 20px" }}>
          {slide.description}
        </p>

        {isAvailable ? (
          <div style={{ display: "flex", gap: 10 }}>
            <a
              href={slide.file}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 28px",
                textAlign: "center",
                display: "inline-block",
                textDecoration: "none",
                background: COLORS.ucsdBlue,
                color: "#fff",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              View Slides
            </a>
            <a
              href={slide.file}
              download
              style={{
                padding: "10px 28px",
                textAlign: "center",
                display: "inline-block",
                textDecoration: "none",
                background: "none",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Download
            </a>
          </div>
        ) : (
          <div style={{
            textAlign: "center", padding: "10px 0",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            fontSize: 13, color: "#7a9ab8", fontWeight: 600,
          }}>
            Slides Not Yet Available
          </div>
        )}
      </div>
    </div>
  );
}