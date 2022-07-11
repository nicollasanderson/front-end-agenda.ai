import { useState } from "react";
import Calendar from "react-calendar";
import DayModal from "../../components/DayModal";
import Header from "../../components/Header";
import { CalendarContainer, StyledSection } from "./style";
import "react-calendar/dist/Calendar.css";
import { lightFormat } from "date-fns";

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());
  const [dayModal, setDayModal] = useState(false);
  const [day, setDay] = useState("");
  const [formatedDate, setFormatedDate] = useState("");

  const handleDay = (value, event) => {
    const date = lightFormat(value, "yyyy-MM-dd");
    setFormatedDate(date.slice(0, 10));
    setDay(value);
    setDayModal(true);
  };

  return (
    <>
      {dayModal && (
        <DayModal
          setDayModal={setDayModal}
          day={day}
          formatedDay={formatedDate}
        />
      )}
      <Header />
      <StyledSection>
        <div>
          <button>Meus agendamentos</button>
        </div>
        <CalendarContainer>
          <Calendar
            onChange={onChange}
            value={value}
            onClickDay={handleDay}
            formatedDate={formatedDate}
          />
        </CalendarContainer>
      </StyledSection>
    </>
  );
};

export default CalendarPage;
