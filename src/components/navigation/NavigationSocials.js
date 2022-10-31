// import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
// import Github from "../../assets/images/socials/github-pink.svg";
// import Codepen from "../../assets/images/socials/codepen-pink.svg";
const NavigationSocials = () => {
  return (
    <section className="social-media">
      <a
        href="https://www.linkedin.com/in/martha-amanda-nyalivane-a132b7232/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/manda21"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github" />
      </a>
      
    </section>
  );
};

export default NavigationSocials;
