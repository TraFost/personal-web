const Background = () => {
  return (
    <>
      <div className="bg-gray">
        <div className="flex items-center justify-evenly pt-16">
          <div>
            <h3 className="text-white font-bold text-2xl pb-8">Education</h3>
            {/* date */}
            <div>
              {/* education */}
              <div className="pb-11">
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
          <div>
            <h4 className="text-white font-bold text-2xl pb-8">Jobs</h4>
            {/* date */}
            <div>
              {/* jobs*/}
              <div className="pb-12">
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
        <p className="text-gray-1 relative right-[14.6rem] text-8xl opacity-20 font-bold pt-6">
          ABOUT ME
        </p>
      </div>
    </>
  );
};

export default Background;
