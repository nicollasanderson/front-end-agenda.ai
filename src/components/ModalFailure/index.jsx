import { VscError } from "react-icons/vsc";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UseTokenProvider } from "../../providers/token";
import { UsedUserrovider } from "../../providers/user";
import { DivMain } from "./style";

const ModalFailure = ({ setSucessCreate, data = {} }) => {
  const navigate = useNavigate();
  const { setUser } = UsedUserrovider();
  const { setToken } = UseTokenProvider();

  const handleLogout = () => {
    window.localStorage.clear();
    setUser(null);
    setToken(null);
    navigate("/login");
  };

  return (
    <DivMain>
      <div>
        <VscError />
        <h2>Agendamento não realizado! :c</h2>

        {data.status === 403 ? (
          <p className="PLink__Failure__Modal" onClick={() => handleLogout()}>
            Faça o login novamente.
          </p>
        ) : (
          <p>{data.data.message}</p>
        )}

        <div>
          <button onClick={() => setSucessCreate("")}>Continuar</button>
        </div>
      </div>
    </DivMain>
  );
};

export default ModalFailure;
