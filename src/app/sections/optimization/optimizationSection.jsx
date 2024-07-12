import "./SystemsSection.scss";
import { systemImg } from "../../../assets/images/systems";
import { data } from "../../../globals/data/systemsData";

function OptimizationSection() {
  return (
    <section
      className="system-section"
      id="system"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="container">
        <h2 className="system-title">ERP systems</h2>
        <div className="system-wrapper">
          <div
            className="system-wrapper__start"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <img
              className="system-wrapper__start-img"
              src={systemImg}
              alt="System"
            />
          </div>
          <div className="system-wrapper__end">
            <p
              className="system-wrapper__end-title"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              IT Systems of any level of complexity at a convenient time for you
            </p>
            <ul
              className="system-wrapper__end-list"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              {data.map((item, index) => (
                <li className="system-wrapper__end-item" key={index}>
                  <img
                    className="system-wrapper__end-item-img"
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                  />
                  <p className="system-wrapper__end-item-title">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OptimizationSection;
