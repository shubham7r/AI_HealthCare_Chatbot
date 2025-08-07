import { ShieldCheck, CalendarDays, Clock3 } from "lucide-react";
import TableOfContents from "./TableofContents";
import CardGrid from "./CardGrid";
import HeroSection from "./HeroSection";
import Footer from "../Footer";


function HomePage() {
  return (
    <div className="m-0 p-0">
      {/* Hero Section */}
      <div>
        <HeroSection />
        
      </div>
      {/* Table of Contents Section */}
      <div>
        <TableOfContents />
      </div>

      {/* Cards Section */}
      <div>
        <CardGrid />
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default HomePage;
