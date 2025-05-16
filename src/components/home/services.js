const services = [
    {
        id:1,
        icon:`${process.env.PUBLIC_URL}/images/swimming.png`,
        title:'Swim',
        description: "Lorem ipsum"
    },
    {
        id:2,
        icon:`${process.env.PUBLIC_URL}/images/restaurant.png`,
        title:'Restaurant',
        description: "Lorem ipsum"
    },
    {
        id:3,
        icon:`${process.env.PUBLIC_URL}/images/taxi.png`,
        title:'Taxi',
        description: "Lorem ipsum"
    },
]
const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div
          className="services-text wow fadeInDown text-center"
          data-wow-duration="2s"
        >
          <h3 className="text-uppercase ">services</h3>
          <p>lorem ipsum lorem ipsum lorem ipsum</p>
        </div>
        <div className="services-content text-center">
          <div className="row">
            {services.map((service) => (
              <div key={service.id} className="col-sm-6 col-md-4" data-wow-duration="2s">
                <div className="item-circle">
                  <img src={service.icon} alt="" />
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
