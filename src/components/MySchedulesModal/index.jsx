import { useEffect } from "react";
import { useState } from "react";
import { UseTokenProvider } from "../../providers/token";
import { UsedUserrovider } from "../../providers/user";
import app from "../../services/api";
import ExitButton from "../ExitButton";
import ScheduleCard from "../ScheduleCard";
import { DivBackground } from "./style";

const MySchedulesModal = ({ setMySchedulesModal }) => {
  const { user } = UsedUserrovider();
  const { token } = UseTokenProvider();
  const [scheduleList, setScheduleList] = useState([]);

  const listRequest = () => {
    app
      .get(`/schedule/${user.id}/user/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setScheduleList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    listRequest();
  }, []);

  return (
    <DivBackground onClick={() => setMySchedulesModal(false)}>
      <div>
        <ExitButton />
        <div>
          <h1>Meus Agendamentos</h1>
          <div>
            {scheduleList.map((element, index) => (
              <ScheduleCard key={index} schedule={element} />
            ))}
          </div>
        </div>
      </div>
    </DivBackground>
  );
};

export default MySchedulesModal;
