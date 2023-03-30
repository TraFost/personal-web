import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useScroll = (animationStart, time = 0) => {
  const { ref, inView } = useInView({ threshold: time });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start(animationStart);
    }
  }, [inView, controls]);
  return [ref, controls]; // return the element and the controls so we can use it in other components
};

export default useScroll;
