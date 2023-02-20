import { DivCardRoom, DivDeleteButton, DivHolder } from "./style";
import { BsFillTrashFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import app from "../../services/api";
import { toast } from "react-toastify";
import { UseTokenProvider } from "../../providers/token";
import { useState } from "react";

const RoomCard = ({ data, listRoomsRequest }) => {
  const { token } = UseTokenProvider();
  const [loading, setLoading] = useState(false);

  const deleteRequest = () => {
    setLoading(true);
    app
      .delete(`/room/${data.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Sala excluída!");
        listRoomsRequest();
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Erro ao exluir, faça o login novamente!");
        setLoading(false);
      });
  };

  return (
    <DivCardRoom initial={{ scale: 1 }} whileHover={{ scale: 1.02 }}>
      <h2>{data.name}</h2>
      <DivHolder>
        <div>
          <p>Bloco {data.block}</p>
          <p>{data.room_type}</p>
        </div>
        <div>
          <DivDeleteButton onClick={() => deleteRequest()}>
            {loading ? <BiTimeFive /> : <BsFillTrashFill />}
          </DivDeleteButton>
        </div>
      </DivHolder>
    </DivCardRoom>
  );
};

export default RoomCard;
