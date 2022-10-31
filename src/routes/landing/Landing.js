import AboutPreview from "./AboutPreview";
import HeaderPreview from "./HeaderPreview";
import ContactPreview from "./ContactPreview";
import { Footer } from "../../components";
import ScrollButton from "../../components/ScrollButton";

const Mainpage = () => {
  document.title = "Martha Amanda Nyalivane | Personal Portfolio";
  return (
    <article className="main-page">
      <HeaderPreview />
      <AboutPreview />
      <PortfolioPreview />
      <ContactPreview />
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default Mainpage;
