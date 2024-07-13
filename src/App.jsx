import { useEffect, useState } from "react";
import Loader from "./app/elements/loader";
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
      <RootLayout />
    </>
  );
}

export default App;
