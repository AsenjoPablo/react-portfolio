const ProjectSection = () => {
  return (
    <div id="all-projects-container" className="row text-center">
      <div className="subcontainer animate__animated animate__fadeIn">
        <div id="projects-header" className="col-lg-12 text-center">
          <h2>
            Here are some of my <span className="orange">projects</span>
          </h2>
        </div>

        <div className="row animate__animated animate__slideInRight faster">
          <div className="col-lg-4 project-container">
            <a
              href="https://github.com/AsenjoPablo/first-node-web"
              target="_blank"
            >
              <div className="card">
                <div className="card-body">
                  <img
                    className="fit-img"
                    src="img\projects\node-backend.png"
                    alt="backend"
                  />
                  <h3 className="card-title">Basic NodeJS</h3>
                  <p className="card-text">NodeJS</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-4 project-container">
            <a
              href="https://github.com/AsenjoPablo/React-Native-Movie-Tracker"
              target="_blank"
            >
              <div className="card">
                <div className="card-body">
                  <img
                    className="fit-img"
                    src="img/projects/movietracker.jpeg"
                    alt="movie tracker"
                  />
                  <h3 className="card-title">Movie Tracker</h3>
                  <p className="card-text">React Native</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-4 project-container">
            <a
              href="https://github.com/AsenjoPablo/android-calculator"
              target="_blank"
            >
              <div className="card">
                <div className="card-body">
                  <img
                    className="fit-img"
                    src="img/projects/android-calculator.png"
                    alt="calculator"
                  />
                  <h3 className="card-title">Android Calculator</h3>
                  <p className="card-text">Java (AndroidSt)</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
