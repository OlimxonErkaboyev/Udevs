import React from "react";
import "./footer.scss";
import logo from "/src/assets/images/icons/logo.svg";
import { data } from "../../../../globals/data/footer";
// import { data as tools } from "../../../../globals/data/tools";

const Footer = () => {
  const social = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.94368 21.6422C7.87954 21.6406 6.81712 21.5563 5.76599 21.3902C4.24374 21.092 2.77728 20.558 1.41952 19.8072L0 19.0292L1.5374 18.5232C3.21865 17.9702 4.24158 17.6232 5.50726 17.0892C4.86639 16.7749 4.29582 16.3338 3.83001 15.7926C3.3642 15.2513 3.01281 14.6212 2.79709 13.9402L2.43946 12.8532L2.73315 12.8982C2.48355 12.6461 2.25968 12.3697 2.06485 12.0732C1.46556 11.1867 1.16235 10.133 1.19875 9.0632L1.26568 8.1142L1.83309 8.3342C1.59283 7.88062 1.41954 7.39456 1.31863 6.8912C1.07407 5.62742 1.28092 4.31781 1.90302 3.1912L2.3975 2.2872L3.05881 3.0872C5.0187 5.52739 7.84194 7.11846 10.9426 7.5302C10.8089 6.68365 10.908 5.81664 11.2293 5.0222C11.6182 4.10737 12.287 3.33957 13.1393 2.8292C14.1383 2.22359 15.2983 1.93817 16.4639 2.0112C17.6733 2.07444 18.8249 2.54972 19.7274 3.3582C20.1344 3.24807 20.5346 3.11451 20.9262 2.9582C21.1879 2.8582 21.4856 2.7472 21.8572 2.6192L23.2218 2.1482L22.3287 4.7002C22.3877 4.7002 22.4486 4.6912 22.5115 4.6882L23.975 4.6242L23.1109 5.8072C23.061 5.8752 23.049 5.8942 23.031 5.9212C22.9611 6.0262 22.8742 6.1572 21.6884 7.7432C21.3837 8.16529 21.2357 8.68057 21.2698 9.2002C21.4005 11.0795 21.1449 12.9657 20.5186 14.7422C19.971 16.2366 19.0683 17.5751 17.8884 18.6422C16.3243 20.0036 14.4249 20.9214 12.3871 21.3002C11.254 21.5315 10.1001 21.6461 8.94368 21.6422Z"
            fill="#1b5bf7"
          />
        </svg>
      ),
      link: "https://x.com/home",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_19_219)">
            <path
              d="M18.4096 0.00978209H15.3008C11.8074 0.00978209 9.55478 2.32778 9.55478 5.91578V8.63878H6.42404C6.35981 8.63878 6.2962 8.65146 6.23687 8.6761C6.17754 8.70074 6.12364 8.73685 6.07827 8.78236C6.0329 8.82787 5.99694 8.8819 5.97245 8.94134C5.94796 9.00079 5.93542 9.06448 5.93555 9.12878V13.0748C5.93555 13.2045 5.98701 13.3289 6.07862 13.4206C6.17023 13.5123 6.29448 13.5638 6.42404 13.5638H9.55478V23.5198C9.55478 23.584 9.56741 23.6476 9.59196 23.7069C9.61651 23.7662 9.65249 23.8202 9.69785 23.8656C9.74322 23.911 9.79706 23.947 9.85633 23.9716C9.9156 23.9961 9.97912 24.0088 10.0433 24.0088H14.122C14.1862 24.0088 14.2497 23.9961 14.309 23.9716C14.3682 23.947 14.4221 23.911 14.4674 23.8656C14.5128 23.8202 14.5488 23.7662 14.5733 23.7069C14.5979 23.6476 14.6105 23.584 14.6105 23.5198V13.5638H18.2657C18.3953 13.5638 18.5195 13.5123 18.6111 13.4206C18.7027 13.3289 18.7542 13.2045 18.7542 13.0748V9.12878C18.7542 8.99883 18.7026 8.87419 18.6108 8.7823C18.519 8.69041 18.3945 8.63878 18.2647 8.63878H14.6085V6.33078C14.6085 5.22078 14.8722 4.65778 16.3167 4.65778H18.4145C18.5441 4.65778 18.6684 4.60626 18.76 4.51456C18.8516 4.42285 18.903 4.29847 18.903 4.16878V0.503782C18.9036 0.438761 18.8912 0.374283 18.8666 0.314108C18.8419 0.253932 18.8056 0.199262 18.7597 0.153283C18.7138 0.107305 18.6591 0.070937 18.599 0.0462999C18.5389 0.0216629 18.4745 0.0092491 18.4096 0.00978209Z"
              fill="#1b5bf7"
            />
          </g>
          <defs>
            <clipPath id="clip0_19_219">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      link: "https://www.facebook.com",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_19_220)">
            <path
              d="M2.76739 1.00939C2.40092 0.978607 2.03204 1.02371 1.68375 1.14188C1.33545 1.26005 1.0152 1.44876 0.742951 1.69625C0.4707 1.94374 0.252284 2.24471 0.101313 2.5804C-0.0496579 2.91609 -0.129949 3.2793 -0.134555 3.64742C-0.139162 4.01553 -0.0679868 4.38064 0.0745359 4.72001C0.217059 5.05938 0.427874 5.36573 0.693846 5.61997C0.959817 5.87421 1.27525 6.0709 1.62047 6.19777C1.9657 6.32464 2.33333 6.37897 2.70046 6.35739H2.73342C3.10239 6.38999 3.4741 6.34568 3.8251 6.22726C4.1761 6.10884 4.49877 5.91887 4.77275 5.66935C5.04673 5.41982 5.26607 5.11616 5.41693 4.77752C5.56778 4.43888 5.64689 4.07262 5.64924 3.70184C5.6516 3.33106 5.57715 2.96382 5.43061 2.62328C5.28406 2.28275 5.0686 1.97632 4.79781 1.72333C4.52702 1.47034 4.20679 1.27628 3.85732 1.1534C3.50786 1.03052 3.13674 0.981485 2.76739 1.00939Z"
              fill="#1b5bf7"
            />
            <path
              d="M0.164062 8.47168H5.30371V23.9487H0.164062V8.47168Z"
              fill="#1b5bf7"
            />
            <path
              d="M17.9223 8.10742C15.1502 8.10742 13.2911 10.7154 13.2911 10.7154V8.47043H8.15149V23.9484H13.2911V15.3054C13.2712 14.88 13.3284 14.4544 13.46 14.0494C13.6524 13.5021 14.009 13.0277 14.4811 12.691C14.9532 12.3543 15.5176 12.1718 16.0972 12.1684C17.9573 12.1684 18.7005 13.5874 18.7005 15.6684V23.9484H23.8392V15.0734C23.8352 10.3194 21.2998 8.10742 17.9223 8.10742Z"
              fill="#1b5bf7"
            />
          </g>
          <defs>
            <clipPath id="clip0_19_220">
              <rect width="24" height="24" fill="#1b5bf7" />
            </clipPath>
          </defs>
        </svg>
      ),
      link: "https://ru.linkedin.com/",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_19_221)">
            <path
              d="M11.9874 5.83594C10.7711 5.83673 9.58232 6.19846 8.5713 6.87542C7.56029 7.55237 6.77245 8.51416 6.30734 9.63922C5.84224 10.7643 5.72075 12.0021 5.95824 13.1963C6.19573 14.3904 6.78153 15.4873 7.64161 16.3483C8.50168 17.2093 9.59742 17.7957 10.7903 18.0334C11.9833 18.2712 13.2198 18.1495 14.3437 17.684C15.4676 17.2184 16.4284 16.4297 17.1046 15.4176C17.7809 14.4056 18.1422 13.2155 18.143 11.9979C18.1437 11.1885 17.9849 10.387 17.6758 9.63907C17.3667 8.89116 16.9133 8.21161 16.3416 7.63928C15.7698 7.06696 15.091 6.61309 14.3439 6.30365C13.5967 5.99422 12.796 5.83528 11.9874 5.83594ZM11.9874 15.9909C11.1971 15.9909 10.4246 15.7563 9.76747 15.3168C9.11036 14.8773 8.5982 14.2526 8.29577 13.5217C7.99333 12.7908 7.9142 11.9865 8.06838 11.2106C8.22256 10.4347 8.60313 9.72192 9.16196 9.16251C9.72079 8.6031 10.4328 8.22214 11.2079 8.0678C11.983 7.91346 12.7864 7.99267 13.5166 8.29542C14.2467 8.59817 14.8708 9.11086 15.3099 9.76866C15.7489 10.4265 15.9833 11.1998 15.9833 11.9909C15.9833 13.0518 15.5623 14.0692 14.8129 14.8194C14.0636 15.5695 13.0472 15.9909 11.9874 15.9909Z"
              fill="#1b5bf7"
            />
            <path
              d="M16.9306 0.075C14.7249 -0.025 9.26158 -0.025 7.05388 0.075C5.18844 0.0415017 3.38355 0.737876 2.02312 2.016C-0.282479 4.324 0.0122145 7.434 0.0122145 11.999C0.0122145 16.667 -0.247515 19.705 2.02312 21.978C4.33771 24.289 7.49242 23.986 11.9877 23.986C16.6069 23.986 18.2013 23.986 19.8346 23.356C22.0553 22.493 23.7305 20.506 23.8953 16.937C23.9952 14.728 23.9952 9.26 23.8953 7.05C23.6955 2.837 21.4389 0.282 16.9266 0.074L16.9306 0.075ZM20.422 20.446C18.9105 21.959 16.8137 21.824 11.9628 21.824C6.96797 21.824 4.97005 21.898 3.50358 20.431C1.82033 18.754 2.12501 16.061 2.12501 11.978C2.12501 6.453 1.5586 2.478 7.09783 2.19C8.37051 2.145 8.74512 2.13 11.9488 2.13L11.9937 2.16C17.3172 2.16 21.4938 1.602 21.7446 7.146C21.8015 8.411 21.8145 8.791 21.8145 11.993C21.8145 16.935 21.9074 18.952 20.422 20.446Z"
              fill="#1b5bf7"
            />
            <path
              d="M18.3866 7.0323C19.1805 7.0323 19.8241 6.38803 19.8241 5.5933C19.8241 4.79856 19.1805 4.1543 18.3866 4.1543C17.5927 4.1543 16.9491 4.79856 16.9491 5.5933C16.9491 6.38803 17.5927 7.0323 18.3866 7.0323Z"
              fill="#1b5bf7"
            />
          </g>
          <defs>
            <clipPath id="clip0_19_221">
              <rect width="24" height="24" fill="#1b5bf7" />
            </clipPath>
          </defs>
        </svg>
      ),
      link: "https://www.instagram.com/",
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <a className="site-footer__logo-link" href="/">
              <img
                className="site-header__logo"
                src={logo}
                alt="udevs"
                width={96}
                height={32}
              />
            </a>
          </div>
          <div className="footer-menu">
            <ul className="footer__route-list">
              <h3 className="footer__route-title">About us</h3>
              {data.aboutUs.map((item, index) => (
                <li className="footer__route-item" key={index}>
                  <a className="footer__route-link" href={item.href}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <ul className="footer__route-list">
                <h3 className="footer__route-title">Services</h3>
                {data.services.map((item, index) => (
                  <li className="footer__route-item" key={index}>
                    <a className="footer__route-link" href={item.href}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="footer__route-list">
                <h3 className="footer__route-title">Portfolio</h3>
                {data.portfolio.map((item, index) => (
                  <li className="footer__route-item" key={index}>
                    <a className="footer__route-link" href={item.href}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-socials">
            <p className="footer-socials__title">
              © 2024 Udevs. All rights reserved
            </p>
            <ul className="footer-social__list">
              {social.map((item, index) => (
                <li className="footer-social__item" key={index}>
                  <a
                    className="footer-social__link"
                    href={item.link}
                    target="_blank"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
