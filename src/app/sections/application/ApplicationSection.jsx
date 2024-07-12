import "./ApplicationSection.scss";
import { data } from "../../../globals/data/mobileApplication";
import { appImg } from "../../../assets/images/mobileApplication";

function ApplicationSection() {
  const { applications, technologies } = data;
  return (
    <section
      className="application-section"
      id="application"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="container">
        <h2 className="application-title">
          Development of mobile applications
        </h2>
        <div className="application-wrapper">
          <div className="application-wrapper__start">
            <p className="application-wrapper__start-title">
              In collaboration with startups, we have learned how to create a
              creative and functional user interface for mobile applications.
            </p>
            <ul
              className="application-wrapper__start-list"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              {applications.map((app, index) => (
                <li className="application-wrapper__start-item" key={index}>
                  <img
                    className="application-wrapper__start-item-img"
                    src={app.icon}
                    alt="Apple"
                    width={56}
                    height={56}
                  />
                  <p className="application-wrapper__start-item-title">
                    {app.title}
                  </p>
                </li>
              ))}
            </ul>
            <div className="application-wrapper__start-tech">
              <h3 className="application-wrapper__start-tech-title">
                Technologies
              </h3>
              <ul
                className="application-wrapper__start-tech-list"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                {technologies.map((technique, index) => (
                  <li
                    className="application-wrapper__start-tech-item"
                    key={index}
                  >
                    <img
                      className="application-wrapper__start-tech-item-img"
                      src={technique.icon}
                      alt={technique.title}
                      width={56}
                      height={56}
                    />
                    <p className="application-wrapper__start-tech-item-title">
                      {technique.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="application-wrapper__end"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <img
              className="application-wrapper__start-tech-item-img"
              src={appImg}
              alt="Application"
              width={500}
              height={472}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplicationSection;
