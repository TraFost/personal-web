import { framerAnimation } from "../../utils/animation";
import useScroll from "../../hooks/use-intersection";

const AboutMe = () => {
  const animationStart = {
    x: [500, 0],
    transition: {
      type: "tween",
      duration: 1,
      bounce: 0.3,
    },
  };

  const [ref, controls] = useScroll(animationStart, 0.2);

  return (
    <div id="about-section" className="bg-gray-2 lg:h-screen flex">
      <framerAnimation.div
        ref={ref}
        animate={controls}
        className="text-center flex flex-col justify-center items-center"
      >
        <div className="pb-12 pt-10 lg:pt-0">
          <framerAnimation.span
            whileHover={{ opacity: 0.5, cursor: "pointer" }}
            className="relative left-[42.5rem]   font-bold text-8xl text-gray-1 opacity-20"
          >
            ABOUT ME
          </framerAnimation.span>
          <div>
            <h2 className="text-white text-4xl font-bold">ABOUT ME</h2>
            <div className="border-b-4 border-contrast-green w-[12%] relative left-[14rem] rounded-full mt-2" />
          </div>
        </div>
        <div className="text-gray-1 max-w-[50%] text-xl font-medium">
          <p>
            I'm <span className="text-contrast-green">Rahman Nurudin</span>, I'm
            <span className="text-contrast-green"> 20</span> years old and I
            live in{" "}
            <span className="text-contrast-green">Tangerang, Panongan</span>. I
            love Front-end development, and I'm passionate about interfaces,
            from their creation to development. I like to learn more and more
            about the area, challenges that take me out of my comfort zone are
            the best. and i can't wait to be able to land my first job as a{" "}
            <span className="text-contrast-green">Front-end developer</span>.
          </p>
          <p className="pt-10">
            I recently graduated from{" "}
            <span className="text-contrast-green">
              harisenin fullstack developer bootcamp
            </span>
            , and currently learning more about{" "}
            <span className="text-contrast-green">React.js and Next.js</span>{" "}
            and i've developed a few projects using React.js which you can see
            in my portfolio.
          </p>
        </div>
      </framerAnimation.div>
    </div>
  );
};

export default AboutMe;
