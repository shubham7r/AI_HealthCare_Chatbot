import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/home/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import TableOfContents from "./components/home/TableofContents";
import CardGrid from "./components/home/CardGrid";
import HeroSection from "./components/home/HeroSection";
import NavLinks from "./components/navbar/NavLinks";
import HumanMode from "./components/navbar/HumanMode";
import AboutPage from "./components/about/AboutPage";
import Aboutus from "./components/about/Aboutus";
import CardSection from "./components/about/CardSection";
import Team from "./components/about/Team";
import DashboardsPage from "./components/dashboards/DashboardsPage"; // ✅ DashboardsPage is inside the Dashboard folder
import Sidebars from "./components/dashboards/Sidebars"; // ✅ Sidebars is inside
import Promt from "./components/dashboards/Promt"; // ✅ Promt is inside the Dashboard folder 
import AuthModal from "./components/AuthModal"; // ✅ AuthModal is not inside the Dashboard folder
import GeneralMedicine from "./hospitalpage/GeneralMedicine";
import LoginModal from "./components/LoginModal"; // ✅ LoginModal is not inside the Dashboard folder
import  Contact from "./components/Contact";


// ✅ Sidebar is not inside the Dashboard folder

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/table-of-contents" element={<TableOfContents />} />
            <Route path="/cards" element={<CardGrid />} />
            <Route path="/hero-section" element={<HeroSection />} />
            <Route path="/nav-links" element={<NavLinks />} />
            <Route path="/user-controls" element={<HumanMode />} />
            <Route
              path="/hospitals/general-medicine"
              element={<GeneralMedicine />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/card-section" element={<CardSection />} />
            <Route path="/team" element={<Team />} />
            <Route path="/dashboards" element={<DashboardsPage />} />
            <Route path="/auth-modal" element={<AuthModal />} />
            <Route path="/sidebars" element={<Sidebars />} />
            <Route path="/login-modal" element={<LoginModal />} />
            <Route path="/promt" element={<Promt />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
