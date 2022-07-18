import { Link } from "react-router-dom";
import { BiCalendarEdit } from "react-icons/bi";
import { StyledHeader } from "./style";

const Header = ({ user }) => {
  return (
    <StyledHeader>
      <nav>
        <Link to="/">
          <h1>
            <BiCalendarEdit />
            Agenda.ai
          </h1>
        </Link>

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
      </nav>
    </StyledHeader>
  );
};

export default Header;
