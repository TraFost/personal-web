import * as section from "../../components/Home";
import {
  Document,
  ContactSection,
  ProfileDetails,
} from "../../components/Home/Hero";
import * as motion from "../../utils/animation";
import icons from "../../components/icons";

const Home = () => {
  return (
    <main className="bg-gray-2 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 lg:grid-rows-2">
        <div className="row-span-2 md:self-center md:justify-self-end md:mt-40 md:ml-12">
          <ProfileDetails />
          <Document icons={icons} />
          <ContactSection icons={icons} />
        </div>
        {/* hero img */}
        <motion.framerAnimation.div
          variants={motion.containerImgVariants}
          initial="initial"
          animate="onAnimate"
          className="md:row-span-1 lg:row-span-2"
        >
          <figure className="ml-10">
            <motion.framerAnimation.img
              variants={motion.imgVariants}
              animate="idleAnimations"
              whileHover={{
                opacity: 0.5,
              }}
              src={"../../mee.png"}
              alt="creator"
            />
          </figure>
        </motion.framerAnimation.div>
      </div>
      <section.Skills />
      <section.AboutMe />
      <section.Background />
      <section.Projects />
      <section.ContactForm />
    </main>
  );
};

export default Home;
