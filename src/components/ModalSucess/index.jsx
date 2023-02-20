import { DivMain } from "./style";
import { VscPass } from "react-icons/vsc";
import { Link } from "react-router-dom";

const ModalSucess = ({ data, setSucessCreate }) => {
  return (
    <DivMain>
      <div>
        <VscPass />
        {/* <VscError /> */}
        <h2>Agendamento realizado! :D</h2>
        <p>
          Seu agendamento foi realizado com sucesso! Veja seus agendamentos
          agora ou continue para um novo agendamento.
        </p>
        <div>
          <Link to="/perfil">
            <button>Meus Agendamentos</button>
          </Link>

          <button onClick={() => setSucessCreate("")}>Continuar</button>
        </div>
      </div>
    </DivMain>
  );
};

export default ModalSucess;
