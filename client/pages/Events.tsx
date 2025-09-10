import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { EventsGrid } from "../components/EventsGrid";
import { Footer } from "../components/Footer";

export default function Events() {
  return (
    <div className="min-h-screen bg-chainalchemy-dark">
      <Header />
      <main>
        <HeroSection />
        <EventsGrid />
      </main>
      <Footer />
    </div>
  );
}
