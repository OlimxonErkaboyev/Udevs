import { useEffect, useState } from "react";
import Loader from "./app/elements/loader";
import ScrollToTop from "./app/elements/ScrollToTop";
import RootLayout from "./layouts/root-layout";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Aos.init();
  }, []);

  setTimeout(() => {
    setIsLoading(false);
  }, 500);
  return (
    <>
      {isLoading && <Loader />}
      <ScrollToTop />
      <RootLayout />
    </>
  );
}

export default App;
