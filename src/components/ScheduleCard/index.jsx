import { useState } from "react";
import { UsedUserrovider } from "../../providers/user";
import app from "../../services/api";
import { DivContainer, DivDeleteButton } from "./style";
import { BsFillTrashFill } from "react-icons/bs";
import { UseTokenProvider } from "../../providers/token";
import { UseScheduleProvider } from "../../providers/schedules";
import { toast } from "react-toastify";

const ScheduleCard = ({ schedule, verifyDay = () => {} }) => {
  const [className, setClassName] = useState("blue__coming__schedule");
  const { token } = UseTokenProvider();
  const { hasCreatedSchedule, setHasCreatedSchedule } = UseScheduleProvider();

  const scheduleDate = new Date(schedule.scheduling_time_start);
  const { user } = UsedUserrovider();

  if (scheduleDate <= Date.now()) {
    setClassName("red__past_schedule");
  }

  const deleteRequest = () => {
    app
      .delete(`/schedule/${schedule.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        verifyDay();
        setHasCreatedSchedule(hasCreatedSchedule + 1);
        toast.success("Agendamento excluído!");
      })
      .catch((err) => {
        toast.error("Erro ao exluir, faça o login novamente!");
      });
  };

  return (
    <>
      <DivContainer
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        className={className}
      >
        <div className="containerInfos">
          <h4>{schedule.user.first_name}</h4>
          <p>
            Local: {schedule.room.name} - Bloco {schedule.room.block}
          </p>
          <p>
            {`Início as ${schedule.scheduling_time_start}`} -
            {`Fim as ${schedule.scheduling_time_end}`}
          </p>
          <br />
          <p>{schedule.description}</p>
        </div>
        {schedule?.user?.id === user?.id && (
          <DivDeleteButton onClick={() => deleteRequest()}>
            <BsFillTrashFill />
          </DivDeleteButton>
        )}
      </DivContainer>
    </>
  );
};

export default ScheduleCard;
