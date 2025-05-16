import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesajınız gönderildi!");
  };
  return (
    <section id="contactUs">
      <div className="container">
        <div className="contact-text text-center wow fadeInDown">
          <h3 className="text-uppercase text-white">Contact Us</h3>
          <p>lorem ipsum lorem ipsum</p>
        </div>
        <div className="contact-content">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-element">
                  <input
                    className="golden-form-element text-uppercase"
                    type="text"
                    id="name"
                    placeholder="your name*"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-element">
                  <input
                    className="golden-form-element text-uppercase"
                    type="email"
                    id="email"
                    placeholder="your email*"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-element">
                  <input
                    className="golden-form-element text-uppercase"
                    type="text"
                    id="subject"
                    placeholder="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-element">
                  <textarea
                    className="golden-form-element text-uppercase"
                    id="message"
                    placeholder="your message*"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="form-element w-auto">
                <input
                  className="text-uppercase btn btn-primary btn-lg"
                  type="submit"
                  id="submit"
                  name="submit"
                  value="send message"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
