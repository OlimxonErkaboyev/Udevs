import "./ClientsSection.scss";
import { data } from "../../../globals/data/clients";

function Clients() {
  const { right, left } = data;
  return (
    <section className="clients-section" id="clients">
      <div className="container">
        <h2 className="clients-title">Our clients</h2>
      </div>
      <div className="clients-wrapper">
        <div className="clients-wrapper__slide-right">
          {[...Array(3)].map((_, index) => (
            <ul className="clients-wrapper__slide-right-box" key={index}>
              {right.map((img, index) => (
                <li
                  className="clients-wrapper__slide-right__min-box"
                  key={index}
                >
                  <div className="clients-wrapper__slide-right-box__img">
                    <img
                      className="clients-wrapper__slide-right-img"
                      src={img}
                      alt="hi"
                    />
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="clients-wrapper__slide-left">
          {[...Array(3)].map((_, index) => (
            <ul className="clients-wrapper__slide-left-box" key={index}>
              {left.map((img, index) => (
                <li
                  className="clients-wrapper__slide-left__min-box"
                  key={index}
                >
                  <div className="clients-wrapper__slide-left-box__img">
                    <img
                      className="clients-wrapper__slide-left-img"
                      src={img}
                      alt="hi"
                    />
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
