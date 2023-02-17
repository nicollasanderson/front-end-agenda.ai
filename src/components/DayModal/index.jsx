import { DivButtons, DivContainer, NoneScheduleP, StyledDiv } from "./style";
import { getDay } from "date-fns";
import { useEffect, useState } from "react";
import app from "../../services/api";
import ScheduleCard from "../ScheduleCard";
import MakeScheduleModal from "../MakeScheduleModal";
import { UsedUserrovider } from "../../providers/user";
import ExitButton from "../ExitButton";

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
  const [makeScheduleModal, setMakeScheduleModal] = useState(false);
  const [weekDay, setWeekDay] = useState("");
  const { user } = UsedUserrovider();

  const handleModal = () => {
    setDayModal(false);
  };

  useEffect(() => {
    setWeekDay(getDay(day));
    verifyDay();
  }, []);

  const handleMakeSchedule = () => {
    setMakeScheduleModal(true);
  };

  const verifyDay = () => {
    app
      .get(`schedule/${formatedDay}/date/`)
      .then((response) => {
        console.log(response);
        setDaySchedules(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {makeScheduleModal && (
        <MakeScheduleModal
          setMakeScheduleModal={setMakeScheduleModal}
          formatedDay={formatedDay}
          dayName={daysName[weekDay]}
        />
      )}
      <StyledDiv onClick={handleModal}>
        <DivContainer onClick={(e) => e.stopPropagation()}>
          <div>
            <ExitButton onClick={() => setDayModal(false)} />
            <h2>{`Agendamentos do dia ${formatedDay.slice(8, 10)} - ${
              daysName[weekDay]
            }`}</h2>
            <DivButtons>
              {user && (
                <button
                  onClick={handleMakeSchedule}
                  className="button__make__schedule"
                >
                  Agendar para esse dia
                </button>
              )}
            </DivButtons>
            <div>
              {daySchedules.length > 0 ? (
                daySchedules.map((schedule, index) => (
                  <ScheduleCard
                    key={index}
                    schedule={schedule}
                    verifyDay={verifyDay}
                  />
                ))
              ) : (
                <NoneScheduleP>Nenhum agendamento realizado</NoneScheduleP>
              )}
            </div>
          </div>
        </DivContainer>
      </StyledDiv>
    </>
  );
};

export default DayModal;
