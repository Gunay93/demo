const data = [
  {
    id: 1,
    icon: "/images/1.jpg",
    title: "July 2010",
    description:
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum",
  },
  {
    id: 2,
    icon: "/images/2.jpg",
    title: "July 2010",
    description:
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum",
  },
  {
    id: 3,
    icon: "/images/3.jpg",
    title: "July 2010",
    description:
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum",
  },

  {
    id: 4,
    icon: "/images/4.jpg",
    title: "July 2010",
    description:
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum",
  },
];
const About = () => {
  return (
    <section id="aboutUs">
      <div className="container">
        <div className="aboutUs-text text-center wow fadeInDown">
          <h3 className="text-uppercase">about us</h3>
          <p>lorem ipsum lorem ipsum lorem ipsum</p>
        </div>
        <div className="aboutUs-content">
          {data.map((info, index) => {
            const position = index % 2 === 0 ? "right" : "left";
            return (
              <div className="row" key={info.id}>
                <div
                  className={`col-md-4 ${
                    position === "right"
                      ? "text-end about"
                      : "offset-md-4 text-center circle-img"
                  } `}
                >
                  {position === "right" ? (
                    <>
                      <h4>{info.title}</h4>
                      <p>{info.description}</p>{" "}
                    </>
                  ) : (
                    <img src={info.icon} alt="" />
                  )}
                </div>
                <div
                  className={`col-md-4 ${
                    position === "right" ? "text-center circle-img" : "about"
                  }`}
                >
                  {position === "right" ? (
                    <img src={info.icon} alt="" />
                  ) : (
                    <>
                      <h4>{info.title}</h4>
                      <p>{info.description}</p>{" "}
                    </>
                  )}
                </div>
              </div>
            );
          })}

          {/* <div className="row">
            <div className="col-md-4 offset-md-4 text-center circle-img">
              <img src="images/2.jpg" alt=""/>
            </div>
            <div className="col-md-4 about">
              <h4>July 2010</h4>
              <h4>Our Humble Beginning</h4>
              <p>
                lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem
                ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem
                ipsumlorem ipsumlorem ipsumlorem ipsum
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 text-end about">
              <h4>July 2010</h4>
              <h4>Our Humble Beginning</h4>
              <p>
                lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem
                ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem
                ipsumlorem ipsumlorem ipsumlorem ipsum
              </p>
            </div>
            <div className="col-md-4 text-center circle-img">
              <img src="images/3.jpg" alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-4 text-center circle-img">
              <img src="images/4.jpg" alt=""/>
            </div>
            <div className="col-md-4 about">
              <h4>July 2010</h4>
              <h4>Our Humble Beginning</h4>
              <p>
                lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem
                ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem
                ipsumlorem ipsumlorem ipsumlorem ipsum
              </p>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-4 offset-md-4 circle-end">
              <div className="aboutUsEnd">
                <p className="text-center">
                  Our
                  <br /> story
                  <br />
                  Continues
                  <br />
                  ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
