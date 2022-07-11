import { Route, Routes } from "react-router-dom";
import CalendarPage from "../pages/CalendarPage";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/calendario/" element={<CalendarPage />} />
    </Routes>
  );
};

export default Router;
