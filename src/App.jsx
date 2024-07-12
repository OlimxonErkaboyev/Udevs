import { useState } from "react";
import Loader from "./app/elements/loader";
import ScrollToTop from "./app/elements/ScrollToTop";
import RootLayout from "./layouts/root-layout";

function App() {
  const [isLoading, setIsLoading] = useState(true);

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
