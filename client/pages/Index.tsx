import React from "react";
import { Header } from "../components/Header";
import { HomeHero } from "../components/HomeHero";
import { WhoWeAreSection } from "../components/WhoWeAreSection";
import { HomeEventsSection } from "../components/HomeEventsSection";
import { TeamMembersSection } from "../components/TeamMembersSection";
import { MentorsSection } from "../components/MentorsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-chainalchemy-dark">
      <Header />
      <main>
        <HomeHero />
        <WhoWeAreSection />
        <HomeEventsSection />
        <TeamMembersSection />
        <MentorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
