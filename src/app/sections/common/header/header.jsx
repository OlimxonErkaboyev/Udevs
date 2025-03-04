import "./header.scss";
import { HeaderLogo } from "../../../../assets/images/icons";
import Navbar from "./navbar/navbar";
import BurgerMenu from "../../../elements/gamburger-menu/burger-menu";
import { useState } from "react";

function Header() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  return (
    <header className="site-header">
      <div className="container">
        <div
          className="site-header__wrapper"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <a className="site-header__logo-link" href="#">
            <img
              className="site-header__logo"
              src={HeaderLogo}
              alt="udevs"
              width={96}
              height={32}
            />
          </a>
          <Navbar />
          <button
            onClick={() => setOpenBurgerMenu(true)}
            className={` ${openBurgerMenu ? "d-none" : "open-burger-btn"}`}
          >
            <span className="burger-open-icon"></span>
            <span className="burger-open-icon"></span>
            <span className="burger-open-icon"></span>
          </button>
        </div>
        {/* Modal */}
        <BurgerMenu
          openBurgerMenu={openBurgerMenu}
          setOpenBurgerMenu={setOpenBurgerMenu}
        />
      </div>
    </header>
  );
}

export default Header;
