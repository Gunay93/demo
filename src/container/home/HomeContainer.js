import Cover from "../../components/home/cover";
import Services from "../../components/home/services";
import Portfolio from "../../components/home/portfolio";
import About from "../../components/home/about";
import Team from "../../components/home/team";
import Partner from "../../components/home/partner";
import Contact from "../../components/home/contact";

const HomeContainer = () => {
  return (
    <>
      <Cover />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Partner />
      <Contact />
    </>
  );
};

export default HomeContainer;
