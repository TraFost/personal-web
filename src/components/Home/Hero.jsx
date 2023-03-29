import cv from "../../../public/Rahman-Nurudin-CV.pdf";
import portfolio from "../../../public/RahmanNurudin-Portfolio.pdf";

export const Document = ({ icons }) => {
  return (
    <div className="text-white">
      <a href={cv} download="CV Rahman Nurudin" className="mr-20">
        <icons.AiOutlineCloudDownload className="inline-block mr-2 text-3xl" />
        Download CV
      </a>
      <a
        href={portfolio}
        download="Portfolio Rahman Nurudin"
        className="border rounded-md bg-contrast-green text-black p-1.5 pr-4 max-w-[10rem] hover:bg-green-600"
      >
        <icons.MdDownloadForOffline className="inline-block mr-2 text-2xl" />
        <span className="font-bold">Portfolio</span>
      </a>
    </div>
  );
};

export const ContactSection = ({ icons }) => {
  return (
    <div>
      <ul className="flex gap-7 mt-10">
        <li className="bg-gray rounded-full h-11 w-11 grid place-items-center cursor-pointer">
          <a href="https://www.instagram.com/rahmannrdn/">
            <icons.AiFillInstagram className="text-3xl text-white" />
          </a>
        </li>
        <li className="bg-gray rounded-full h-11 w-11 grid place-items-center cursor-pointer">
          <a href="https://github.com/TraFost">
            <icons.BsGithub className="text-2xl text-white" />
          </a>
        </li>
        <li className="bg-gray rounded-full h-11 w-11 grid place-items-center cursor-pointer">
          <a href="https://www.linkedin.com/in/rahmannrdn/">
            <icons.BsLinkedin className="text-2xl text-white" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export const ProfileDetails = () => {
  return (
    <>
      <h1 className="text-contrast-green text-4xl font-bold">Rahman Nurudin</h1>
      <div className="border-b-4 border-contrast-green w-2/3 relative left-24 mb-1 mt-1 hidden md:block" />
      <p className="text-white text-2xl py-2.5">Front-End Developer</p>
      <div>
        <p className="text-gray-1 text-xl pb-7">
          I love to make things, especially things that are useful for others.
        </p>
      </div>
    </>
  );
};