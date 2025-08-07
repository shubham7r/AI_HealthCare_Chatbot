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
import DashboardPage from "./components/Dashboard/DashboardPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Dashboard/Sidebar";

import ChatInputBar from "./components/Dashboard/ChatInputBar";
import ChatBubble from "./components/Dashboard/ChatBubble";
import LoginModal from "./components/LoginModal"; // ✅ LoginModal is not inside the Dashboard folder


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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/card-section" element={<CardSection />} />
            <Route path="/team" element={<Team />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard-content" element={<Dashboard />} />
            <Route path="/sidebar" element={<Sidebar />} />
            
            <Route path="/chat-input-bar" element={<ChatInputBar />} />
            <Route path="/chat-bubble" element={<ChatBubble />} />
            <Route path="/login-modal" element={<LoginModal />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
