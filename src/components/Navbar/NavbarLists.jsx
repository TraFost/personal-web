import { framerAnimation } from "../../utils/animation";

const NavbarLists = () => {
  return (
    <>
      <ul
        className={
          window.scrollY > 600
            ? `flex flex-col md:flex-row justify-center md:gap-custom text-black`
            : `flex flex-col md:flex-row justify-center md:gap-custom text-white`
        }
      >
        <framerAnimation.li
          whileTap={{ scale: 0.8, transition: { duration: 0.2 }, y: 10 }}
          className="active:text-contrast-green"
        >
          <framerAnimation.a href="#home-section">Home</framerAnimation.a>
        </framerAnimation.li>
        <framerAnimation.li
          whileTap={{ scale: 0.8, transition: { duration: 0.2 }, y: 10 }}
          className="active:text-contrast-green"
        >
          <a href="#about-section">About Me</a>
        </framerAnimation.li>
        <framerAnimation.li
          whileTap={{ scale: 0.8, transition: { duration: 0.2 }, y: 10 }}
          className="active:text-contrast-green"
        >
          <a href="#project-section">Projects</a>
        </framerAnimation.li>
        <framerAnimation.li
          whileTap={{ scale: 0.8, transition: { duration: 0.2 }, y: 10 }}
          className="active:text-contrast-green"
        >
          <a href="#contact-section">Contact Me</a>
        </framerAnimation.li>
      </ul>
    </>
  );
};

export default NavbarLists;
