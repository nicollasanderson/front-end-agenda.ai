import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateRoom from "../../components/AdminButtons/CreateRoom";
import CreateUser from "../../components/AdminButtons/CreateUser";
import ListRooms from "../../components/AdminButtons/ListRooms";
import ListUsers from "../../components/AdminButtons/ListUsers";
import { UsedUserrovider } from "../../providers/user";
import { ContainerPanel, SectionMain } from "./style";

const AdminPage = () => {
  const [buttonSelect, setButtonSelect] = useState("");

  const { user } = UsedUserrovider();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.is_admin) {
      navigate("/calendario");
    }
  });

  return (
    <SectionMain>
      <ContainerPanel>
        <div>
          <h1>Bem-vindo(a) de volta {user.first_name}</h1>
          <div className="buttons__holder">
            <button onClick={() => setButtonSelect("CreateUser")}>
              Criar Usuário
            </button>
            <button onClick={() => setButtonSelect("CreateRoom")}>
              Criar Sala
            </button>
            <button onClick={() => setButtonSelect("ListUser")}>
              Listar Usuários
            </button>
            <button onClick={() => setButtonSelect("ListRoom")}>
              Listar Salas
            </button>
          </div>
          <div className="main__content">
            {buttonSelect === "CreateUser" && <CreateUser />}
            {buttonSelect === "CreateRoom" && <CreateRoom />}
            {buttonSelect === "ListUser" && <ListUsers />}
            {buttonSelect === "ListRoom" && <ListRooms />}
          </div>
        </div>
      </ContainerPanel>
    </SectionMain>
  );
};

export default AdminPage;
