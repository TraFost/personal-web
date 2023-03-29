import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer
      className={
        pathname !== "/" ? "hidden" : "bg-gray-2 text-white text-center"
      }
    >
      <p>© 2023 - Rahman Nurudin All rights reserved</p>
    </footer>
  );
};

export default Footer;
