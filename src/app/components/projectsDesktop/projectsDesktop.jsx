import React from "react";
import "./projectsDesktop.scss";

const ProjectDesktop = ({ data }) => {
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
      className="project-section"
      id="develer"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="container">
        <div className={`project-wrapper ${data?.reverse ? "reversed" : ""}`}>
          <div
            className="project-wrapper__start"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <img
              className="project-wrapper__start-img"
              data-aos="zoom-in"
              src={data.img}
              alt={data.title}
            />
          </div>
          <div className="project-wrapper__end">
            {projectTitle(data.title?.isString ? "img" : "title")}

            <span
              className="project-title__icon"
              style={{
                color: data.color_title,
                backgroundColor: data.badge_icon.bg,
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
            <p
              className="project-wrapper__end-title"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              {data.description}
            </p>
            <h3 className="project-wrapper__end-branch">{data.branch}</h3>
            <ul
              className="project-wrapper__end-list"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              {data.cards.map((item, index) => (
                <li className="project-wrapper__end-item" key={index}>
                  <img
                    className="project-wrapper__end-item-img"
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                  />
                  <p className="project-wrapper__end-item-title">
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

export default ProjectDesktop;
