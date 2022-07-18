import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Page404 from "../pages/404";
import CalendarPage from "../pages/CalendarPage";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Profile from "../pages/Profile";

const Router = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@agendaai:user")) || null
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@agendaai:user")) || null
  );

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <LoginPage user={user} setToken={setToken} setUser={setUser} />
          }
        />
        <Route
          path="/calendario"
          element={<CalendarPage token={token} user={user} />}
        />
        <Route
          path="/perfil"
          element={
            <Profile
              token={token}
              user={user}
              setToken={setToken}
              setUser={setUser}
            />
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default Router;
