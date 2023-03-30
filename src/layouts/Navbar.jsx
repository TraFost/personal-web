import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavbarLists from "../components/Navbar/NavbarLists";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className={pathname !== "/" ? "hidden" : ""}>
      <nav
        className={
          isScrolled
            ? "pt-5 fixed inset-x-0 top-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm transition-all transform duration-500 ease-in-out"
            : "pt-5 fixed inset-x-0 top-0"
        }
      >
        <NavbarLists />
      </nav>
    </header>
  );
};

export default Navbar;
