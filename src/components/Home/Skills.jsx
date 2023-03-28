import icons from "../icons";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="mt-20 bg-gray">
      <ul className="flex justify-around">
        <motion.li className="grid place-items-center">
          <icons.DiHtml5 className="text-[7rem] text-orange-500" />
        </motion.li>
        <motion.li className="grid place-items-center">
          <icons.SiCss3 className="text-8xl text-blue-600" />
        </motion.li>
        <motion.li className="grid place-items-center">
          <icons.SiTailwindcss className="text-9xl text-blue-400" />
        </motion.li>
        <motion.li className="grid place-items-center">
          <icons.SiJavascript className="text-8xl text-yellow-400" />
        </motion.li>
        <motion.li className="grid place-items-center">
          <icons.GrReactjs className="text-8xl text-blue-400" />
        </motion.li>
        <motion.li className="grid place-items-center">
          <icons.SiRedux className="text-8xl text-purple-500" />
        </motion.li>
      </ul>
    </div>
  );
};

export default Skills;
