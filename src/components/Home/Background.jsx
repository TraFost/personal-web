const Background = () => {
  return (
    <>
      <div className="bg-gray">
        <div className="flex flex-col md:flex-row items-center justify-evenly pt-16">
          <div>
            <h3 className="text-white font-bold text-2xl pb-3 md:pb-8">
              Education
            </h3>
            {/* date */}
            <div>
              {/* education */}
              <div className="pb-5 md:pb-11">
                <p className="text-white text-sm font-semibold">
                  July 2017 - May 2020
                </p>
                <p className="text-contrast-green font-medium text-md">
                  Teknik Komputer dan Jaringan
                </p>
                <p className="text-gray-1 text-sm">
                  SMKN 1 Kabupaten Tangerang
                </p>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">
                  November 2021 - Current
                </p>
                <p className="text-contrast-green font-medium text-md">
                  Teknik Informatika (Employee Class)
                </p>
                <p className="text-gray-1 text-sm">
                  Universitas Muhammadiyah Tangerang
                </p>
              </div>
            </div>
          </div>
          <div className="pr-[5.3rem] md:pr-0 pt-5 md:pt-0">
            <h4 className="text-white font-bold text-2xl pb-3 md:pb-8">Jobs</h4>
            {/* date */}
            <div>
              {/* jobs*/}
              <div className="pb-5 md:pb-12">
                <p className="text-white text-sm font-semibold">
                  November 2020 - April 2021
                </p>
                <p className="text-contrast-green font-medium text-md">
                  Operator
                </p>
                <p className="text-gray-1 text-sm">PT.Hitoshi Buana Perkasa</p>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">
                  April 2021 - June 2022
                </p>
                <p className="text-contrast-green font-medium text-md">
                  Operator Machine Press
                </p>
                <p className="text-gray-1 text-sm">PT.HTM Indonesia </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-1 relative font-bold pt-12 text-5xl right-[7.2rem] sm:right-[14.6rem] sm:text-8xl md:pt-8 opacity-20 ">
          <span>ABOUT ME</span>
        </p>
      </div>
    </>
  );
};

export default Background;
