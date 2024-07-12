import { Route, Routes } from "react-router-dom";
import HomePage from "../app/components/home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={"Page not Found"} />
      <Route element={"Page not Found"} />
    </Routes>
  );
}

export default AppRoutes;
