import { useState } from "react";
import { CardDivMain, DivDeleteButton } from "./style";
import { BsFillTrashFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import app from "../../services/api";
import { toast } from "react-toastify";
import { UseTokenProvider } from "../../providers/token";

const UserCard = ({ data, listUsersRequest }) => {
  const { token } = UseTokenProvider();
  const [loading, setLoading] = useState(false);

  const deleteRequest = () => {
    setLoading(true);
    app
      .delete(`/user/${data.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Sala excluída!");
        listUsersRequest();
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Erro ao exluir, faça o login novamente!");
        setLoading(false);
      });
  };

  return (
    <CardDivMain>
      <div>
        <h2>
          {data.first_name} {data.last_name}
        </h2>
        <div>
          <p>Email: {data.email}</p>
          <DivDeleteButton onClick={() => deleteRequest()}>
            {loading ? <BiTimeFive /> : <BsFillTrashFill />}
          </DivDeleteButton>
        </div>
      </div>
    </CardDivMain>
  );
};

export default UserCard;
