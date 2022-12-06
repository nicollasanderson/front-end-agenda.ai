import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import DayModal from "../../components/DayModal";
import { ButtonsDiv, CalendarContainer, StyledSection } from "./style";
import { isWeekend, lightFormat, getMonth } from "date-fns";
import app from "../../services/api";
import { UsedUserrovider } from "../../providers/user";
// import { UseTokenProvider } from "../../providers/token";

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());
  const [dayModal, setDayModal] = useState(false);
  const [day, setDay] = useState("");
  const [formatedDate, setFormatedDate] = useState("");
  const [allSchedules, setAllSchedules] = useState([]);

  const handleDay = (value, event) => {
    const isWknd = isWeekend(value);
    if (!isWknd) {
      const date = lightFormat(value, "yyyy-MM-dd");
      setFormatedDate(date.slice(0, 10));
      setDay(value);
      setDayModal(true);
    }
  };

  const { user } = UsedUserrovider();
  // const { token } = UseTokenProvider();

  useEffect(() => {
    app
      .get("/schedule/all/")
      .then((response) => {
        setAllSchedules(response.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleDayHasSchedule = ({ activeStartDate, date, view }) => {
    const formatedDate = lightFormat(date, "yyyy-MM-dd");

    if (getMonth(date) === getMonth(Date.now())) {
      let quantity = 0;
      for (let i = 0; i < allSchedules.length; i++) {
        if (allSchedules[i].scheduling_date_start === formatedDate) {
          quantity++;
        }
      }
      return (
        <>
          {quantity > 0 && (
            <>
              <br />
              <h5 className="schedules__quantity">{quantity}</h5>
            </>
          )}
        </>
      );
    }
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

      <StyledSection>
        <span></span>
        <ButtonsDiv>
          {user && (
            <>
              <button>Meus agendamentos</button>
            </>
          )}
        </ButtonsDiv>
        <CalendarContainer>
          <Calendar
            onChange={onChange}
            value={value}
            onClickDay={handleDay}
            tileContent={handleDayHasSchedule}
            calendarType={"US"}
          />
        </CalendarContainer>
      </StyledSection>
    </>
  );
};

export default CalendarPage;
