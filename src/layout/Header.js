import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" href="#">
        <img src="/images/logo.png" alt="" />
      </Link>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav text-uppercase">
          <li className="nav-item">
            <a className="nav-link" href="#cover">
              home<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">
              services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#aboutUs">
              about
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contactUs">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;