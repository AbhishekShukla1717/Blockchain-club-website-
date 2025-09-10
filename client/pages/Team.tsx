import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <div className="min-h-screen bg-chainalchemy-dark">
      <Header />
      <main className="px-4 lg:px-[151px] py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-audiowide text-white mb-8">
            <span className="text-white">CHAIN</span>
            <span className="text-chainalchemy-cyan">ALCHEMY</span>
            <span className="text-white"> TEAM</span>
          </h1>
          <p className="text-white/68 font-montserrat text-lg mb-8">
            This page is coming soon. Our team section will showcase the brilliant minds behind ChainAlchemy.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-chainalchemy-cyan font-montserrat hover:text-white transition-colors"
          >
            ← Back to Events
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
