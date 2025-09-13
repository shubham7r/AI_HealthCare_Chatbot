import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const hospitalCategories = [
    "Ayurveda",
    "Bones",
    "Mental Health",
    "Dermatology",
    "Cardiology",
    "Dental",
    "Orthopedics",
    "General Medicine",
  ];

  return (
    <>
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
          alt="AI Logo"
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="font-bold text-lg">AI HEALTHCARE CHATBOT</span>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-6 text-md font-semibold relative items-center">
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-400 transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-400 transition">
          Contact
        </Link>
        <Link to="/dashboards" className="hover:text-blue-400 transition">
          Dashboards
        </Link>

        {/* Hospitals Hover Dropdown */}
        <div className="relative group">
          <button className="hover:text-blue-400 transition">Hospitals</button>
          <div className="absolute top-full mt-2 w-48 max-h-64 overflow-y-auto bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-20">
            {hospitalCategories.map((category, index) => (
              <Link
                key={index}
                to={`/hospitals/${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="block px-4 py-2 hover:bg-gray-100 transition w-full text-left"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavLinks;
