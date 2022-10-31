
import Footer from "../../components/footer/Footer";
// import PortfolioDescription from "./PortfolioDescription";
import ScrollButton from "../../components/ScrollButton";

const Portfolio = () => {
  document.title = "Portfolio | Martha Amanda Nyalivane";
  return (
    <article className="portfolio-main">
      {/* <PortfolioDescription /> */}
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default Portfolio;
