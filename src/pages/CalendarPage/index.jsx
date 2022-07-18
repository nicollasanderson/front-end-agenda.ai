import { useState } from "react";
import Calendar from "react-calendar";
import DayModal from "../../components/DayModal";
import { ButtonsDiv, CalendarContainer, StyledSection } from "./style";
import { isWeekend, lightFormat } from "date-fns";

const CalendarPage = ({ user }) => {
  const [value, onChange] = useState(new Date());
  const [dayModal, setDayModal] = useState(false);
  const [day, setDay] = useState("");
  const [formatedDate, setFormatedDate] = useState("");

  const handleDay = (value, event) => {
    const isWknd = isWeekend(value);
    if (!isWknd) {
      const date = lightFormat(value, "yyyy-MM-dd");
      setFormatedDate(date.slice(0, 10));
      setDay(value);
      setDayModal(true);
    }
  };

  const handleDayHasSchedule = ({ activeStartDate, date, view }) => {
    const formatedDate = lightFormat(date, "yyyy-MM-dd");
  };
  console.log(user);
  return (
    <>
      {dayModal && (
        <DayModal
          setDayModal={setDayModal}
          day={day}
          formatedDay={formatedDate}
        />
      )}
      <StyledSection>
        <ButtonsDiv>{user && <button>Meus agendamentos</button>}</ButtonsDiv>
        <CalendarContainer>
          <Calendar
            onChange={onChange}
            value={value}
            onClickDay={handleDay}
            tileClassName={handleDayHasSchedule}
            tileContent={() => {}}
            calendarType={"US"}
          />
        </CalendarContainer>
      </StyledSection>
    </>
  );
};

export default CalendarPage;
