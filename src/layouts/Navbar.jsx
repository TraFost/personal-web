import React from "react";
import NavbarLists from "../components/Navbar/NavbarLists";

const Navbar = () => {
  return (
    <header className="bg-gray-2">
      <nav className="pt-5">
        <NavbarLists />
      </nav>
    </header>
  );
};

export default Navbar;
