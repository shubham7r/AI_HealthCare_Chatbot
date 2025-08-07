// src/components/navbar/Navbar.jsx
import React from "react";
import NavLinks from "./NavLinks";
import HumanMode from "./HumanMode";

const Navbar = () => {
  return (
    <nav className="bg-[#0c1324] text-white px-6 py-3 flex items-center justify-between rounded-t-lg sticky top-0 w-full z-50">
      
      <NavLinks />
      <HumanMode />
    </nav>
  );
};

export default Navbar;
// src/components/navbar/NavLinks.jsx
 




