// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-12">
      © {new Date().getFullYear()} AI Healthcare Chatbot. All Rights Reserved.
    </footer>
  );
};

export default Footer;
