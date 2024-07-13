import "./ToolsSection.scss";
import { useState } from "react";
import { data } from "../../../globals/data/tools";

function Tools() {
  const { tools, categories } = data;
  const [category, setCategory] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function changeCategory(selectedCategory, category) {
    if (selectedCategory === category) {
      setIsChecked(!isChecked);
      setCategory(selectedCategory);
    } else {
      setIsChecked(true);
      setCategory(selectedCategory);
    }
  }

  return (
    <section className="tools-section" id="tools">
      <div className="container">
        <div className="tools-wrapper">
          <h2 className="tools-wrapper__title">Tools</h2>
          <ul className="tools-wrapper__check-list">
            {categories.map((item, id) => (
              <li
                key={id}
                onClick={() => changeCategory(item.name, category)}
                className={`tools-wrapper__check-list-item   ${
                  item.name === category && isChecked ? "active" : ""
                }`}
              >
                <span className="circle-indicator"></span>
                <p className="tools-wrapper__category">{item.label}</p>
              </li>
            ))}
          </ul>
          <ul className="tools-wrapper__icon-list">
            {tools.map((item, index) => (
              <li
                key={index}
                className={`tools-wrapper__icon-item ${
                  !isChecked || item.category === category ? "selected" : ""
                } ${item.category}`}
              >
                <img
                  className="tools-wrapper__icon-img"
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                />
                <p className="tools-wrapper__icon-title">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Tools;
