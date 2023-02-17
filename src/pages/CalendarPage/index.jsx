import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import DayModal from "../../components/DayModal";
import { ButtonsDiv, CalendarContainer, StyledSection } from "./style";
import { isWeekend, lightFormat, getMonth } from "date-fns";
import app from "../../services/api";
import { UsedUserrovider } from "../../providers/user";
import AllMonthModal from "../../components/AllMonthModal";
import { UseScheduleProvider } from "../../providers/schedules";
// import { UseTokenProvider } from "../../providers/token";

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());
  const [dayModal, setDayModal] = useState(false);
  const [monthModal, setMonthModal] = useState(false);
  const [day, setDay] = useState("");
  const [formatedDate, setFormatedDate] = useState("");
  const [allSchedules, setAllSchedules] = useState([]);
  const { hasCreatedSchedule } = UseScheduleProvider();
  const options = { month: "long" };
  const hoje = new Date();
  const [month, setMonth] = useState([
    new Intl.DateTimeFormat("pt-BR", options).format(hoje),
    hoje.getMonth(),
  ]);

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

  const onActiveStartDateChange = ({
    action,
    activeStartDate,
    value,
    view,
  }) => {
    const mes = new Intl.DateTimeFormat("pt-BR", options).format(
      activeStartDate
    );
    const thisDate = new Date(activeStartDate);
    setMonth([mes, thisDate.getMonth()]);
  };

  const callAllSchedules = () => {
    app
      .get("/schedule/all/")
      .then((response) => {
        setAllSchedules(response.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    callAllSchedules();
  }, []);

  useEffect(() => {
    callAllSchedules();
  }, [hasCreatedSchedule]);

  const hojeFormatado = lightFormat(hoje, "yyyy-MM-dd");
  const hojeFixed = new Date(hojeFormatado + " 00:00:00");

  const handleDayHasSchedule = ({ activeStartDate, date, view }) => {
    const formatedDate = lightFormat(date, "yyyy-MM-dd");
    // console.log(date);
    if (date >= hojeFixed) {
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

      {monthModal && (
        <AllMonthModal
          setMonthModal={setMonthModal}
          month={month}
          formatedDay={formatedDate}
        />
      )}

      <StyledSection>
        <span></span>
        <ButtonsDiv>
          {user && (
            <>
              <button>Meus agendamentos</button>
              <button
                onClick={() => setMonthModal(true)}
                className="button__make__schedule"
              >
                Agendar para o mês inteiro
              </button>
            </>
          )}
        </ButtonsDiv>
        <CalendarContainer>
          <Calendar
            onActiveStartDateChange={onActiveStartDateChange}
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
