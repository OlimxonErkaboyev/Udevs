import "./servicesSection.scss";
import { data } from "../../../globals/data/services";

function ServicesSection() {
  return (
    <section className="services" id="direction">
      <div className="container">
        <div className="services-wrapper">
          <h2
            className="services-wrapper__title"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Our services
          </h2>
          <ul
            className="services-card__list"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {data.map((service, index) => (
              <li className="services-card__item" key={index}>
                <img src={service.icon} alt={service.title} />
                <p className="services-card__title">{service.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
