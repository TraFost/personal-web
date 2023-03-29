import React from "react";
import NavbarLists from "../components/Navbar/NavbarLists";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header className={pathname !== "/" ? "hidden" : "bg-gray-2"}>
      <nav className="pt-5">
        <NavbarLists />
      </nav>
    </header>
  );
};

export default Navbar;
