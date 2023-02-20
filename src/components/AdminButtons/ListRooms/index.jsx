import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { UseTokenProvider } from "../../../providers/token";
import app from "../../../services/api";
import RoomCard from "../../RoomCard";
import { MainContent } from "./style";

const ListRooms = () => {
  const { token } = UseTokenProvider();
  const [roomData, setRoomData] = useState([]);

  const listRoomsRequest = () => {
    app
      .get("/rooms/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setRoomData(response.data);
      })
      .catch((err) => {
        toast.error("Sessão expirada, faça o login novamente!");
      });
  };

  useEffect(() => {
    listRoomsRequest();
  }, []);

  return (
    <MainContent>
      <h2>Salas</h2>
      <div>
        {roomData.map((element, index) => (
          <RoomCard
            key={index}
            listRoomsRequest={listRoomsRequest}
            data={element}
          />
        ))}
      </div>
    </MainContent>
  );
};

export default ListRooms;
