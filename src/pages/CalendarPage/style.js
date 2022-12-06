import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  .schedules__quantity {
    background-color: red;
    color: white;
    text-align: center;
    border-radius: 10px;
    margin: 0 auto;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CalendarContainer = styled.div`
  max-width: 700px;
  width: 90%;

  .react-calendar__tile {
    height: 80px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 5px;
    color: #0000ff;
    font-weight: bold;
    transition: 0.5s;

    &:hover {
      background-color: #0000ff;
      color: white;
    }
  }
  .day-has_schedule__blue {
    background-color: blue;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  .react-calendar__navigation__label {
    width: 200px;
    height: 50px;
    flex-grow: 0 !important;
    background-color: white;
    border: 1px solid #0000ff;
    margin: 0 5px;
    border-radius: 5px;
  }

  .react-calendar__navigation__arrow {
    width: 50px;
    background-color: white;
    border: 1px solid #0000ff;
    margin: 0 5px;
    border-radius: 5px;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    abbr {
      text-decoration: none;
    }
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 10px 0;
  }
  .react-calendar__month-view__days__day--weekend {
    color: red;
    &:hover {
      color: white;
      background-color: red;
    }
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #ccc;
  }
  .react-calendar__tile--now {
    background-color: #9d00fe;
    color: white;
  }

  @media (max-width: 330px) {
    /* margin-bottom: 100px; */
  }
`;

export const ButtonsDiv = styled.div`
  button {
    width: 190px;
    height: 50px;
    background-color: white;
    border: 3px solid #0000ff;
    border-radius: 5px;
    color: #0000ff;
    font-weight: bold;
    transition: 0.5s;
    margin: 0 5px;

    &:hover {
      background-color: #0000ff;
      color: white;
    }

    @media (max-width: 330px) {
      margin-top: 350px;
    }
  }
`;
