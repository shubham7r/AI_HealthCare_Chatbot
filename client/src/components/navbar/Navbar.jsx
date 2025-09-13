import React from "react";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <nav className="bg-[#0c1324] text-white px-6 py-3 flex items-center justify-between rounded-t-lg sticky top-0 w-full z-50">
      <NavLinks />
      <UserMenu />
    </nav>
  );
};

export default Navbar;
