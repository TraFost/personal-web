import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLists = () => {
  return (
    <>
      <ul className="flex flex-col md:flex-row justify-center md:gap-custom text-white">
        <li className="active:text-contrast-green">Home</li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Contact me</li>
      </ul>
    </>
  );
};

export default NavbarLists;
