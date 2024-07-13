import React from "react";
import "./projectsMobile.scss";
import { deleverImg, deliveryIcon } from "../../../assets/images/projects";

const ProjectMobile = ({ data }) => {
  function projectTitle(item) {
    if (item === "title") {
      return (
        <h2
          className="mobile__project-title"
          style={{ color: data.color_title }}
        >
          {data.title}
        </h2>
      );
    } else {
      return (
        <img
          className="mobile__project-title"
          src={data.title.img}
          alt={data.badge_icon.title}
          width={292}
          height={64}
          style={{ marginBottom: "30px" }}
        />
      );
    }
  }
  return (
    <section
      className="mobile__project-section"
      id={data.path}
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="container">
        <div className="mobile__project-wrapper">
          <div className="mobile__project-top">
            {projectTitle(data.title?.isString ? "img" : "title")}
            <span
              className="mobile__project-title__icon"
              style={{
                color: data?.color_title,
                backgroundColor: data?.badge_icon?.bg,
              }}
            >
              <img
                src={data.badge_icon.img}
                alt={data.badge_icon.title}
                width={25}
                height={25}
              />
              {data.badge_icon.title}
            </span>
          </div>
          <div
            className="mobile__project-middle"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <img
              className="mobile__project-middle__img"
              data-aos="zoom-in"
              src={data.img}
              alt={data.title}
            />
          </div>
          <div className="mobile__project-end">
            <p
              className="mobile__project-end__title"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              {data.description}
            </p>
            <h3 className="mobile__project-end__branch">{data.branch}</h3>
            <ul
              className="mobile__project-end__list"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              {data.cards.map((item, index) => (
                <li className="mobile__project-end__item" key={index}>
                  <img
                    className="mobile__project-end__item-img"
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                  />
                  <p className="mobile__project-end__item-title">
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectMobile;
