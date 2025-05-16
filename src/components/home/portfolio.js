import { Link } from "react-router-dom";
import { FaSearchPlus } from "react-icons/fa";

const portfolios = [
  {
    id: 1,
    icon: `${process.env.PUBLIC_URL}/images/product1.jpg`,
    title: "Swim",
    description: "Illustration",
  },
  {
    id: 2,
    icon: `${process.env.PUBLIC_URL}/images/product2.jpg`,
    title: "Restaurant",
    description: "Photography",
  },
  {
    id: 3,
    icon: `${process.env.PUBLIC_URL}/images/product3.jpg`,
    title: "Taxi",
    description: "Branding",
  },
  {
    id: 4,
    icon: `${process.env.PUBLIC_URL}/images/product4.jpg`,
    title: "Taxi",
    description: "Branding",
  },
  {
    id: 5,
    icon: `${process.env.PUBLIC_URL}/images/product5.jpg`,
    title: "Taxi",
    description: "Branding",
  },
  {
    id: 6,
    icon: `${process.env.PUBLIC_URL}/images/product6.jpg`,
    title: "Taxi",
    description: "Branding",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="portfolio-text text-center wow fadeInDown">
          <h3 className="text-uppercase">portfolio</h3>
          <p>lorem ipsum lorem ipsum lorem ipsum</p>
        </div>
        <div className="portfolio-content text-center">
          <div className="row">
            {portfolios.map((portfolio) => (
              <div key={portfolio.id} className="col-sm-6 col-md-4 wow bounceIn">
                <Link>
                  <div className="card">
                    <div className="cardimg">
                      <img src={portfolio.icon} className="w-100" alt="" />
                      <div className="cardhover"></div>
                      <FaSearchPlus />
                    </div>
                    <div className="card-block">
                      <h4 className="card-title">{portfolio.title}</h4>
                      <p className="card-subtitle text-muted">
                        {portfolio.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
