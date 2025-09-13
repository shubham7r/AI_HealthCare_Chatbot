import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/home/HomePage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import TableOfContents from "./components/home/TableofContents";
import CardGrid from "./components/home/CardGrid";
import HeroSection from "./components/home/HeroSection";
import NavLinks from "./components/navbar/NavLinks";
import AboutPage from "./components/about/AboutPage";
import Aboutus from "./components/about/Aboutus";
import CardSection from "./components/about/CardSection";
import Team from "./components/about/Team";
import DashboardsPage from "./components/dashboards/DashboardsPage";
import Sidebars from "./components/dashboards/Sidebars";
import Promt from "./components/dashboards/Promt";
import AuthModal from "./components/AuthModal";
import GeneralMedicine from "./hospitalpage/GeneralMedicine";
import Ayurveda from "./hospitalpage/Ayurveda";
import LoginModal from "./components/auth/LoginModal";
import Contact from "./components/Contact";
import Bones from "./hospitalpage/Bones";
import MentalHealth from "./hospitalpage/MentalHealth";
import Dermatology from "./hospitalpage/Dermatology";
import Cardiology from "./hospitalpage/Cardiology";
import Dental from "./hospitalpage/Dental";
import Orthopedics from "./hospitalpage/Orthopedics";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Hospital pages */}
            <Route path="/hospitals/mental-health" element={<MentalHealth />} />
            <Route path="/hospitals/bones" element={<Bones />} />
            <Route path="/hospitals/dermatology" element={<Dermatology />} />
            <Route
              path="/hospitals/general-medicine"
              element={<GeneralMedicine />}
            />
            <Route path="/hospitals/ayurveda" element={<Ayurveda />} />
            <Route path="/hospitals/cardiology" element={<Cardiology />} />
            <Route path="/hospitals/dental" element={<Dental />} />
            <Route path="/hospitals/orthopedics" element={<Orthopedics />} />

            {/* Core pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />

            {/* Home sections */}
            <Route path="/table-of-contents" element={<TableOfContents />} />
            <Route path="/cards" element={<CardGrid />} />
            <Route path="/hero-section" element={<HeroSection />} />
            <Route path="/nav-links" element={<NavLinks />} />

            {/* About pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/card-section" element={<CardSection />} />
            <Route path="/team" element={<Team />} />

            {/* Dashboards */}
            <Route path="/dashboards" element={<DashboardsPage />} />
            <Route path="/sidebars" element={<Sidebars />} />
            <Route path="/promt" element={<Promt />} />

            {/* Modals */}
            <Route path="/auth-modal" element={<AuthModal />} />
            <Route path="/login-modal" element={<LoginModal />} />
          </Routes>
        </main>

        
      </div>
    </Router>
  );
}

export default App;
