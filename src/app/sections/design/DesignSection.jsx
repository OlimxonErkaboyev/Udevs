import "./DesignSection.scss";
import { data } from "../../../globals/data/design";
import { designImg } from "../../../assets/images/design";

function Design() {
  const { design, technologies } = data;
  return (
    <section
      className="design-section"
      id="design"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="container">
        <h2 className="design-title">UI / UX design</h2>
        <div className="design-wrapper">
          <div className="design-wrapper__start">
            <p className="design-wrapper__start-title">
              Our company takes a human-centered approach to design
            </p>
            <ul
              className="design-wrapper__start-list"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              {design.map((item, index) => (
                <li className="design-wrapper__start-item" key={index}>
                  <img
                    className="design-wrapper__start-item-img"
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                  />
                  <p className="design-wrapper__start-item-title">
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
            <div className="design-wrapper__start-tech">
              <h3 className="design-wrapper__start-tech-title">Technologies</h3>
              <ul
                className="design-wrapper__start-tech-list"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                {technologies.map((item, index) => (
                  <li className="design-wrapper__start-tech-item" key={index}>
                    <img
                      className="design-wrapper__start-tech-item-img"
                      src={item.icon}
                      alt={item.title}
                      width={56}
                      height={56}
                    />
                    <p className="design-wrapper__start-tech-item-title">
                      {item.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="design-wrapper__end" data-aos="zoom-in">
            <img
              className="design-wrapper__start-tech-img"
              src={designImg}
              alt="Design"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Design;
