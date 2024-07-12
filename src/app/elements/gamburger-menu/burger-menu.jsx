import React from "react";
import "./burger-menu.scss";
import { data } from "/src/globals/data/navbar";
import { HeaderLogo } from "../../../assets/images/icons";

const BurgerMenu = ({ openBurgerMenu, setOpenBurgerMenu }) => {
  const { burger, socials } = data;
  return (
    <>
      <button
        onClick={() => setOpenBurgerMenu(true)}
        className={` ${openBurgerMenu ? "d-none" : "open-burger-btn"}`}
      >
        <span className="burger-open-icon"></span>
        <span className="burger-open-icon"></span>
        <span className="burger-open-icon"></span>
      </button>
      <div className={` ${openBurgerMenu ? "open-menu" : "burger-menu"}`}>
        <div className="burger-heder">
          <a className="site-header__logo-link" href="../../index.jsx">
            <img
              className="site-header__logo"
              src={HeaderLogo}
              alt="udevs"
              width={96}
              height={32}
            />
          </a>
          <button
            onClick={() => setOpenBurgerMenu(false)}
            className="close-burger-btn"
          >
            <span className="burger-close-icon one"></span>
            <span className="burger-close-icon two"></span>
          </button>
        </div>
        <ul className="burger-contact__list">
          {burger.map((item) => (
            <li
              className="burger-contact__item"
              onClick={() => setOpenBurgerMenu(false)}
              key={item.title}
            >
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="burger-contact">
          <a
            role="button"
            onClick={() => setOpenBurgerMenu(false)}
            className="site-header__contact-link"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <div className="burger-socials">
          <ul className="burger-social-list">
            {socials.map((item, index) => (
              <li className="burger-social__item" key={index}>
                <a href={item.link} target="_blank">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
