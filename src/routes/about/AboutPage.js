import { Footer } from "../../components/index.js";
import Languages from "./Languages.js";
import Stack from "./Stack.js";
import DownloadResume from "./DownloadResume.js";
import AboutMe from "./AboutMe.js";
import ScrollButton from "../../helpers/ScrollToTop";

const About = () => {
  document.title = "About | Martha Amanda Nyalivane";
  return (
    <article className="about-main">
      <AboutMe />
      <Stack />
     
      <Education />
      <Languages />
     
      <Footer />
    </article>
  );
};

export default About;
