import icons from "../icons";
import { framerAnimation } from "../../utils/animation";
import useScroll from "../../hooks/use-intersection";

const Skills = () => {
  const animationStart = {
    x: [-450, 0],
    transition: {
      type: "spring",
      duration: 1.5,
      bounce: 0.3,
    },
  };

  const [ref, controls] = useScroll(animationStart, 0.2);

  return (
    <framerAnimation.div ref={ref} animate={controls} className="mt-20 bg-gray">
      <ul className="flex justify-around">
        <framerAnimation.li
          whileHover={{ rotate: -360, scale: 1.2 }}
          className="grid place-items-center"
        >
          <icons.DiHtml5 className="text-[7rem] text-orange-500" />
        </framerAnimation.li>
        <framerAnimation.li
          whileHover={{ rotate: -360, scale: 1.2 }}
          className="grid place-items-center"
        >
          <icons.SiCss3 className="text-8xl text-blue-600" />
        </framerAnimation.li>
        <framerAnimation.li
          whileHover={{ rotate: -360, scale: 1.2 }}
          className="grid place-items-center"
        >
          <icons.SiTailwindcss className="text-9xl text-blue-400" />
        </framerAnimation.li>
        <framerAnimation.li
          whileHover={{ rotate: -360, scale: 1.2 }}
          className="grid place-items-center"
        >
          <icons.SiJavascript className="text-8xl text-yellow-400" />
        </framerAnimation.li>
        <framerAnimation.li
          whileHover={{ rotate: -360, scale: 1.2 }}
          className="grid place-items-center"
        >
          <icons.GrReactjs className="text-8xl text-blue-400" />
        </framerAnimation.li>
        <framerAnimation.li
          whileHover={{ rotate: -360, scale: 1.2 }}
          className="grid place-items-center"
        >
          <icons.SiRedux className="text-8xl text-purple-500" />
        </framerAnimation.li>
      </ul>
    </framerAnimation.div>
  );
};

export default Skills;
