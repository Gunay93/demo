import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy;Copyright by H.G Website 2025</p>
          </div>
          <div className="col-md-6">
            <ul className="social-icons-company text-center text-md-end mt-2 mt-md-0">
              <li className="social-icon-company">
                <Link className="text-white" href="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="social-icon-company">
                <Link className="text-white" href="#">
                  <FaTwitter />
                </Link>
              </li>
              <li className="social-icon-company">
                <Link className="text-white" href="#">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="social-icon-company">
                <Link className="text-white" href="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
