import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    icon: "/images/person1.jpg",
    fullname: "Gunay H",
    position: "Front-End Programmer",
  },
  {
    id: 2,
    icon: "/images/person2.jpg",
    fullname: "Lorem ipsum",
    position: "Front-End Programmer",
  },
  {
    id: 3,
    icon: "/images/person3.png",
    fullname: "Lorem ipsum 2",
    position: "Front-End Programmer",
  },
];
const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <div className="team-text text-center wow fadeInDown">
          <h3 className="text-uppercase">Our team</h3>
          <p>lorem ipsum lorem ipsum</p>
        </div>
        <div className="team-content">
          <div className="row text-center">
            {data.map((info) => (
              <div key={info.id} className="col-sm-6 col-md-4">
                <div className="team-circle">
                  <img src={info.icon} alt="" />
                </div>
                <h4>{info.fullname}</h4>
                <h5>{info.position}</h5>
                <ul className="social-icons">
                  <li className="social-icon">
                    <Link href="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li className="social-icon">
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li className="social-icon">
                    <Link href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            ))}

            {/* <div className="col-md-4">
              <div className="team-circle">
                <img src="images/person2.jpg" alt="" />
              </div>
              <h4>Leyla Memmedova</h4>
              <h5>Designer</h5>
              <ul className="social-icons">
                <li className="social-icon">
                  <Link href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li className="social-icon">
                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li className="social-icon">
                  <Link href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <div className="team-circle">
                <img src="images/person3.png" alt="" />
              </div>
              <h4>Rafiq Huseynov</h4>
              <h5>Photographer</h5>
              <ul className="social-icons">
                <li className="social-icon">
                  <Link href="gfh">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li className="social-icon">
                  <Link href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="row text-center">
            <p>
              lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem lorem ipsum lorem ipsum ipsumlorem ipsum lorem ipsum
              lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem lorem
              ipsum lorem ipsum ipsumlorem ipsum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
