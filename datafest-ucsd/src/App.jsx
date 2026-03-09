import { Navbar }               from "./components/Navbar";
import { HeroSection }          from "./components/HeroSection";
import { AboutSection }         from "./components/AboutSection";
import { CalendarSection }      from "./components/CalendarSection";
import { RulesSection }         from "./components/RulesSection";
import { ResourceSection }      from "./components/ResourceSection";
import { AnnouncementsSection } from "./components/AnnouncementsSection";
import { PastDataFestSection }  from "./components/PastDataFestSection";
import { SupportSection }       from "./components/SupportSection";
import { Footer }               from "./components/Footer";

export default function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", color: "#1a1a2e", overflowX: "hidden" }}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <CalendarSection />
        <RulesSection />
        <ResourceSection />
        <AnnouncementsSection />
        <PastDataFestSection />
        <SupportSection />
        <Footer />
      </div>
    </>
  );
}
