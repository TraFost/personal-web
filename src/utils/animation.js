// import * as motion from "framer-motion";
import { motion } from "framer-motion";

export const framerAnimation = motion;

export const containerImgVariants = {
  initial: {
    x: 500,
  },
  onAnimate: {
    x: 0,
    transition: {
      duration: 1,
      // delay: 0.5,
      when: "beforeChildren",
    },
  },
};

export const imgVariants = {
  idleAnimations: {
    y: [20, 50, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
    },
  },
};
