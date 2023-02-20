import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { UseTokenProvider } from "../../../providers/token";
import app from "../../../services/api";
import UserCard from "../../UserCard";
import { MainContent } from "./style";

const ListUsers = () => {
  const [usersData, setUsersData] = useState([]);
  const { token } = UseTokenProvider();

  const listUsersRequest = () => {
    app
      .get("/user/all", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUsersData(response.data);
      })
      .catch((err) => {
        toast.error("Sessão expirada, faça o login novamente!");
      });
  };

  useEffect(() => {
    listUsersRequest();
  }, []);

  return (
    <MainContent>
      <h2>Usuários Cadastros</h2>
      <div>
        {usersData.map((element, index) => (
          <UserCard
            key={index}
            data={element}
            listUsersRequest={listUsersRequest}
          />
        ))}
      </div>
    </MainContent>
  );
};

export default ListUsers;
