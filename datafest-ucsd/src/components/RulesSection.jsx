import { useState } from "react";
import { COLORS, RULES, FAQS } from "../data/constants";
import { Section, SectionHeading } from "./ui";

export function RulesSection() {
  return (
    <Section id="rules" bg="#fff">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
        <RulesList />
        <FaqAccordion />
      </div>
    </Section>
  );
}

function RulesList() {
  return (
    <div>
      <SectionHeading label="Rules" title="Official Competition Rules" />
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {RULES.map((rule, i) => (
          <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{
              minWidth: 28, height: 28, borderRadius: 8,
              background: COLORS.ucsdBlue, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, fontWeight: 700, flexShrink: 0,
            }}>
              {i + 1}
            </div>
            <p style={{ margin: 0, color: "#444", lineHeight: 1.65, fontSize: 15 }}>{rule}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: COLORS.ucsdBlue, fontWeight: 700, textTransform: "uppercase", marginBottom: 10 }}>
          FAQ
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 700, color: "#1a1a2e", margin: 0 }}>
          Got Questions?
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {FAQS.map((item, i) => (
          <AccordionItem
            key={i}
            item={item}
            isOpen={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
          />
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div
      onClick={onToggle}
      style={{
        border: "1px solid #e0e0ee",
        borderRadius: 12,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: isOpen ? "0 4px 20px rgba(0,98,155,.12)" : "none",
        transition: "box-shadow .2s",
      }}
    >
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "18px 22px",
        background: isOpen ? "#f0f7ff" : "#fafafa",
      }}>
        <span style={{ fontWeight: 600, color: "#1a1a2e" }}>{item.q}</span>
        <span style={{
          fontSize: 20, color: COLORS.ucsdBlue,
          transform: isOpen ? "rotate(45deg)" : "none",
          transition: "transform .2s",
        }}>
          +
        </span>
      </div>
      {isOpen && (
        <div style={{
          padding: "16px 22px", color: "#555", lineHeight: 1.7,
          borderTop: "1px solid #e0e0ee", background: "#fff",
        }}>
          {item.a}
        </div>
      )}
    </div>
  );
}
