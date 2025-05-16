import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    icon: "/images/creative-market.jpg",
  },
  {
    id: 2,
    icon: "/images/designmodo.jpg",
  },
  {
    id: 3,
    icon: "/images/envato.jpg",
  },
  {
    id: 4,
    icon: "/images/themeforest.jpg",
  },
];
const Partner = () => {
  return (
    <section id="partners">
      <div className="container">
        <div className="row text-center">
          {data.map((partner) => (
            <div key={partner.id} className="col-sm-6 col-md-4 col-lg-3 d-inline-block mb-3 mb-lg-0">
              <Link href="#">
                <img
                  className="img-fluid wow bounceIn"
                  src={partner.icon}
                  alt=""
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Partner;
