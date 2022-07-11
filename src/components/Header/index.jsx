import { Link } from "react-router-dom";
import { BiCalendarEdit } from "react-icons/bi";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <h1>
          <BiCalendarEdit />
          Agenda.ai
        </h1>
        <ul>
          <li>
            <Link to="/calendario">Calendário</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
