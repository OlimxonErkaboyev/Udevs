import { useLocation } from "react-router-dom";
import Header from "../app/sections/common/header/header";
import AppRoutes from "../routing/app-routes";
import '../index.scss'

export default function RootLayout() {
  const currentpath = useLocation().pathname;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="page-wraper">
        {!currentpath?.startsWith("/error") && <Header />}

        {/* CONTENT START */}
        <div className="page-content">
          <AppRoutes />
        </div>
        {/* CONTENT END */}

        {/* {!currentpath?.startsWith("/error") && <Footer />} */}

        {/* BUTTON TOP START */}
        <button className="scroltop" onClick={scrollToTop}>
          <span onClick={scrollToTop}>top</span>
        </button>
      </div>
    </>
  );
}
