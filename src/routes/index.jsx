import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Page404 from "../pages/404";
import AdminPage from "../pages/AdminPage";
import CalendarPage from "../pages/CalendarPage";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Profile from "../pages/Profile";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/calendario" element={<CalendarPage />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/painel" element={<AdminPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default Router;
