import React, { useState } from "react";
import { data } from "../../../../../globals/data/navbar";

const Navbar = () => {
  const { navbar } = data;
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <nav className="site-header__navbar">
        <ul className="site-header__navbar-list">
          {navbar.map((nav, index) =>
            !nav.options ? (
              <li
                key={index}
                className={`site-header__navbar-item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleItemClick(index)}
              >
                <a className="site-header__navbar-link" href={nav.href}>
                  {nav.title}
                </a>
              </li>
            ) : (
              <li key={index} className="site-header__navbar-item">
                <div className="site-header__dropdown">
                  <button className="site-header__dropbtn">
                    {nav.title}
                    <img
                      className="site-header__dropdown-arrow"
                      src={nav.img}
                      alt="down-arrow"
                    />
                  </button>
                  <ul
                    className={`${
                      nav.classList
                        ? nav.classList
                        : "site-header__dropdown-list"
                    }`}
                  >
                    {nav.dropTitle ? (
                      <p
                        className="site-header__dropdown-services site-header__dropdown-title"
                        aria-disabled
                      >
                        {nav?.dropTitle}
                      </p>
                    ) : (
                      ""
                    )}
                    {nav.options.map((option, index) => (
                      <li className="site-header__dropdown-item" key={index}>
                        <a
                          className={`site-header__dropdown-link ${
                            nav?.class || ""
                          }`}
                          href={option.href}
                        >
                          <img src={option.img} alt="Phone" />
                          <span className="site-header__dropdown-title">
                            {option?.title}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          )}
          <div className="site-header__navbar-contact">
            <a className="site-header__contact-link" href="#contact">
              Contact
            </a>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
