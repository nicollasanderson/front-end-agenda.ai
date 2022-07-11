import { DivContainer, NoneScheduleP, StyledDiv } from "./style";
import { getDay, isWeekend } from "date-fns";
import { useEffect, useState } from "react";
import app from "../../services/api";
import ScheduleCard from "../ScheduleCard";

const DayModal = ({ setDayModal, day, formatedDay }) => {
  const [daySchedules, setDaySchedules] = useState("");
  const [daysName] = useState([
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]);
  const [weekDay, setWeekDay] = useState("");
  const [room, setRoom] = useState("");

  const handleModal = () => {
    setDayModal(false);
  };

  useEffect(() => {
    setWeekDay(getDay(day));
    console.log(isWeekend(day));
    verifyDay();
  }, []);

  const verifyDay = () => {
    app
      .get(`schedule/${formatedDay}/`)
      .then((response) => {
        console.log(response);
        setDaySchedules(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledDiv onClick={handleModal}>
      <DivContainer onClick={(e) => e.stopPropagation()}>
        <div>
          <h2>{`Agendamentos do dia ${formatedDay.slice(8, 10)} - ${
            daysName[weekDay]
          }`}</h2>
          <div>
            {daySchedules.length > 0 ? (
              daySchedules.map((schedule) => (
                <ScheduleCard schedule={schedule} />
              ))
            ) : (
              <NoneScheduleP>Nenhum agendamento realizado</NoneScheduleP>
            )}
          </div>
        </div>
      </DivContainer>
    </StyledDiv>
  );
};

export default DayModal;
