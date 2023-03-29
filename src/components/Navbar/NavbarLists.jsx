import { NavLink } from "react-router-dom";

const NavbarLists = () => {
  return (
    <>
      <ul
        className={
          window.scrollY > 312
            ? `flex flex-col md:flex-row justify-center md:gap-custom text-black`
            : `flex flex-col md:flex-row justify-center md:gap-custom text-white`
        }
      >
        <NavLink to="" className="active:text-red-500">
          <li>
            {/* <div className="border-t border-contrast-green w-[0.200rem] relative left-5" /> */}
            Home
          </li>
        </NavLink>
        <li>About Me</li>
        <li>Projects</li>
        <li>Contact me</li>
      </ul>
    </>
  );
};

export default NavbarLists;
