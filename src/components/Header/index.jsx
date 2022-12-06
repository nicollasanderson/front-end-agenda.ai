import { Link } from "react-router-dom";
import { BiCalendarEdit } from "react-icons/bi";
import { StyledHeader } from "./style";
import { UsedUserrovider } from "../../providers/user";
import { useState } from "react";

const Header = () => {
  const { user } = UsedUserrovider();
  const [width, setWidth] = useState(window.innerWidth);

  window.onresize = window.onload = () => {
    setWidth(window.innerWidth);
  };

  // console.log(width);

  return (
    <StyledHeader>
      <nav>
        <Link to="/">
          <h1>
            <BiCalendarEdit />
            {width < 400 ? "" : "Agenda.ai"}
          </h1>
        </Link>

        {width < 800 ? (
          <></>
        ) : (
          <ul>
            <li>
              <Link to="/calendario">Calendário</Link>
            </li>
            {user && (
              <li>
                <Link to="/perfil">Perfil</Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        )}
      </nav>
    </StyledHeader>
  );
};

export default Header;
