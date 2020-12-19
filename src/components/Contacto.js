import "../styles/About.css";

// imagenes
import email from "../img/email.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import twitter from "../img/twitter.svg";

const Contacto = () => {
  return (
    <div id="social-media-top" className="animate__animated animate__fadeIn">
      <div id="social-media" className="container">
        <div id="header-media" className="row text-center">
          <div id="title-media" className="row">
            <h2>
              Let's work <span className="orange">together</span>!
            </h2>
          </div>

          <div id="message-media" className="row">
            <p>
              I would love to learn a bit more about you. <br />
              Feel free to contact me through any of these!
            </p>
          </div>
        </div>

        <div id="media-links-container" className="row text-center">
          <div className="media-link col-lg">
            <a href="https://www.linkedin.com/in/pablo-asenjo-83950498/">
              <div className="logo">
                <img src={linkedin} alt="linkedin logo" />
              </div>
              <div className="logo-name">LinkedIn</div>
            </a>
          </div>

          <div className="media-link col-lg">
            <a href="https://github.com/AsenjoPablo">
              <div className="logo">
                <img src={github} alt="github logo" />
              </div>
              <div className="logo-name">Github</div>
            </a>
          </div>

          <div className="media-link col-lg">
            <a href="https://twitter.com/codigoPablo">
              <div className="logo">
                <img src={twitter} alt="twitter logo" />
              </div>
              <div className="logo-name">Twitter</div>
            </a>
          </div>

          <div className="media-link col-lg">
            <a href="mailto:asenjo.serrano@gmail.com">
              <div className="logo">
                <img src={email} alt="email logo" />
              </div>
              <div className="logo-name">Email</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
