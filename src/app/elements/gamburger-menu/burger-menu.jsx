import React from "react";
import "./burger-menu.scss";
import { data } from "/src/globals/data/navbar.js";
import { HeaderLogo } from "../../../assets/images/icons";

const BurgerMenu = ({ openBurgerMenu, setOpenBurgerMenu }) => {
  const { burger } = data;
  console.log(openBurgerMenu);
  return (
    <>
      <button
        onClick={() => setOpenBurgerMenu(true)}
        className={` ${openBurgerMenu ? "d-none" : "open-burger-btn"}`}
      >
        asdas
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
            close
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
      </div>
    </>
  );
};

export default BurgerMenu;
