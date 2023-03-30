import { framerAnimation } from "../../utils/animation";
import cv from "../../../public/Rahman-Nurudin-CV.pdf";
import portfolio from "../../../public/RahmanNurudin-Portfolio.pdf";

export const Document = ({ icons }) => {
  return (
    <framerAnimation.div
      initial={{ x: -500 }}
      animate={{ x: 0, transition: { duration: 1 }, delay: 0.5 }}
      className="text-white"
    >
      <framerAnimation.a
        href={cv}
        download="CV Rahman Nurudin"
        whileHover={{ color: "#13FF00" }}
        className="mr-20"
      >
        <icons.AiOutlineCloudDownload className="inline-block mr-2 text-3xl" />
        Download CV
      </framerAnimation.a>
      <framerAnimation.a
        href={portfolio}
        download="Portfolio Rahman Nurudin"
        whileHover={{ scale: 1.05, backgroundColor: "#efefef" }}
        className="border rounded-md bg-contrast-green text-black p-1.5 pr-4 max-w-[10rem]"
      >
        <icons.MdDownloadForOffline className="inline-block mr-2 text-2xl" />
        <span className="font-bold">Portfolio</span>
      </framerAnimation.a>
    </framerAnimation.div>
  );
};

export const ContactSection = ({ icons }) => {
  return (
    <framerAnimation.div
      initial={{ x: -500 }}
      animate={{ x: 0, transition: { duration: 1 }, delay: 0.5 }}
    >
      <ul className="flex gap-7 mt-10">
        <framerAnimation.li
          whileHover={{
            scale: 1.5,
            rotate: 360,
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.8 }}
          className="bg-gray rounded-full h-11 w-11 grid place-items-center cursor-pointer"
        >
          <a href="https://www.instagram.com/rahmannrdn/">
            <icons.AiFillInstagram className="text-3xl text-white" />
          </a>
        </framerAnimation.li>
        <framerAnimation.li
          whileHover={{
            scale: 1.5,
            rotate: 360,
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.8 }}
          className="bg-gray rounded-full h-11 w-11 grid place-items-center cursor-pointer"
        >
          <a href="https://github.com/TraFost">
            <icons.BsGithub className="text-2xl text-white" />
          </a>
        </framerAnimation.li>
        <framerAnimation.li
          whileHover={{
            scale: 1.5,
            rotate: 360,
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.8 }}
          className="bg-gray rounded-full h-11 w-11 grid place-items-center cursor-pointer"
        >
          <a href="https://www.linkedin.com/in/rahmannrdn/">
            <icons.BsLinkedin className="text-2xl text-white" />
          </a>
        </framerAnimation.li>
      </ul>
    </framerAnimation.div>
  );
};

export const ProfileDetails = () => {
  return (
    <framerAnimation.div
      initial={{ x: -500 }}
      animate={{ x: 0, transition: { duration: 1 }, delay: 0.5 }}
    >
      <h1 className="text-contrast-green text-4xl font-bold">Rahman Nurudin</h1>
      <div className="border-b-4 border-contrast-green w-2/3 relative left-24 mb-1 mt-1 hidden md:block" />
      <p className="text-white text-2xl py-2.5">Front-End Developer</p>
      <div>
        <p className="text-gray-1 text-xl pb-7">
          I love to make things, especially things that are useful for others.
        </p>
      </div>
    </framerAnimation.div>
  );
};
