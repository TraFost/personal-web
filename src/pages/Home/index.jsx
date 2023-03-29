import {
  AboutMe,
  Background,
  Skills,
  Projects,
  ContactForm,
} from "../../components/Home";
import {
  Document,
  ContactSection,
  ProfileDetails,
} from "../../components/Home/Hero";
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
        <div className="md:row-span-1 lg:row-span-2">
          <figure className="ml-10">
            <img src={"../../mee.png"} alt="creator" />
          </figure>
        </div>
      </div>
      <Skills />
      <AboutMe />
      <Background />
      <Projects />
      <ContactForm />
    </main>
  );
};

export default Home;
