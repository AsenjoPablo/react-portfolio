import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <div className="container-fluid bgwhite"></div>
      <div className="container-fluid bg-black animate__animated animate__fadeIn">
        <div id="welcome-section" className="col text-center">
          <h2>
            Hello! <br />
            I'm Pablo
          </h2>
          <span className="orange">
            <em>
              Welcome to my website <br />
            </em>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
