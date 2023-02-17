import { createContext, useContext, useState } from "react";

const ScheduleContext = createContext("");

export const ScheduleProvider = ({ children }) => {
  const [hasCreatedSchedule, setHasCreatedSchedule] = useState(0);

  return (
    <ScheduleContext.Provider
      value={{ hasCreatedSchedule, setHasCreatedSchedule }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};

export const UseScheduleProvider = () => useContext(ScheduleContext);
