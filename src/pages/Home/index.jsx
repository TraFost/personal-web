import React from "react";
import { MdDownloadForOffline } from "react-icons/md";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Home = () => {
  return (
    <main className="bg-gray-2">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 lg:grid-rows-2">
        <div className="row-span-2 md:self-center md:justify-self-end">
          <h1 className="text-contrast-green text-4xl font-bold">
            Rahman Nurudin
          </h1>
          <div className="border-b-4 border-contrast-green w-2/3 relative left-24 mb-1 mt-1" />
          <p className="text-white text-2xl py-2.5">Front-End Developer</p>
          <div className="min-w-[400px]">
            <p className="text-gray-1 text-xl pb-7">
              I love to make things, especially things that are useful for
              others.
            </p>
          </div>
          <div className="text-white">
            <button className="mr-20">
              <AiOutlineCloudDownload className="inline-block mr-2 text-3xl" />
              Download CV
            </button>

            <button className="border rounded-md bg-contrast-green text-black p-1 w-1/4 hover:bg-green-600">
              <MdDownloadForOffline className="inline-block mr-2 text-3xl" />
              <span className="font-bold">Portfolio</span>
            </button>
          </div>
        </div>
        <div className="row-span-2">
          <figure>
            <img src={"../../public/mee.png"} alt="creator" />
          </figure>
        </div>
      </div>
    </main>
  );
};

export default Home;
