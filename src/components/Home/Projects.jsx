import firstImage from "../image/urb.png";
import secondImage from "../image/blitz.png";

const Projects = () => {
  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h6 className="text-white font-bold text-4xl">PROJECTS</h6>
        <div className="border-b-4 border-contrast-green w-1/3 mt-2" />
      </div>
      <div className="flex items-center gap-24">
        {/* container card */}
        <div className="pt-10">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-full max-w-sm dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg"
                src={firstImage}
                alt="first-project"
              />
              <div className="p-5 bg-gray text-white">
                <a href="#">
                  <h6 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                    Urban-Threads
                  </h6>
                </a>
                <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                  An e-commerce made using reactJS and pocketbase as a server &
                  database. This is a personal project that I made to learn more
                  about reactJS.
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href="https://github.com/TraFost/UrbanThreads"
                    className="flex items-center"
                  >
                    View Code
                    <svg
                      className="-mr-1 ml-2 h-4 w-4 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://urban-threads.vercel.app/"
                    className="text-black bg-contrast-green hover:bg-green-500 focus:ring-4 focus:ring-contrast-green font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second content */}
        <div className="pt-10">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-full max-w-sm dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg"
                src={secondImage}
                alt="first-project"
              />
              <div className="p-5 bg-gray text-white">
                <a href="#">
                  <h6 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                    Blitbiz
                  </h6>
                </a>
                <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                  A business marketplace made using MERN stack, this is a group
                  project that I made with my team in harisenin bootcamp. im
                  more focused on the front-end.
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href="https://github.com/aksaraicu/blitzbizfrontend"
                    className="flex items-center"
                  >
                    View Code
                    <svg
                      className="-mr-1 ml-2 h-4 w-4 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://staging.blitzbiz.id/"
                    className="text-black bg-contrast-green hover:bg-green-500 focus:ring-4 focus:ring-contrast-green font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
