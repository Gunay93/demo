import { Link } from "react-router-dom";

const Cover = () => {
  return (
    <section id="cover">
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12">
            <h2>Wellcome to my new website!</h2>
          </div>
          <div className="col-sm-12">
            <h1 className="text-uppercase wow bounceIn">
              it's nice to meet you
            </h1>
          </div>
          <div className="col-sm-12">
            <Link href="#">
              <button
                type="button"
                className="btn text-uppercase btn-primary btn-lg"
              >
                tell me more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
