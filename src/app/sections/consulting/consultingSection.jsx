import "./consultingSection.scss";
import { data } from "../../../globals/data/consulting";
import { ConsultingImg } from "../../../assets/images/consulting";

function ConsultingSection() {
  return (
    <section
      className="consult-section"
      id="consult"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="container">
        <h2 className="consult-title">IT consulting</h2>
        <div className="consult-wrapper">
          <div className="consult-wrapper__start">
            <p className="consult-wrapper__start-title">
              We can improve the qualifications of your employees thereby
              increasing the efficiency of your company
            </p>
            <ul
              className="consult-wrapper__start-list"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              {data.map((item, index) => (
                <li className="consult-wrapper__start-item" key={index}>
                  <img
                    className="consult-wrapper__start-item-img"
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                  />
                  <p className="consult-wrapper__start-item-title">
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="consult-wrapper__end" data-aos="zoom-in">
            <img
              className="consult-wrapper__start-tech-img"
              src={ConsultingImg}
              alt="IT Consulting"
              width={500}
              height={313}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultingSection;
