import React from "react";
import "./howToWeWork.scss";
import { data } from "../../../globals/data/work";

const Work = () => {
  return (
    <section className="work-section">
      <div className="container">
        <h2 className="work-title">{data.title}</h2>
      </div>
      <div className="Container">
        <div className="work-wrapper">
          <ul className="work-wrapper__content">
            {data.item.map((item, index) => (
              <li className="work-wrapper__content-item" key={index}>
                <img
                  className="work-wrapper__content-item-img"
                  src={item.icon}
                  alt={item.title}
                  width={81}
                  height={80}
                />
                <div>
                  <h3 className="work-wrapper__content-item-title">
                    {item.title}
                  </h3>
                  <p className="work-wrapper__content-item-text">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
