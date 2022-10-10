import { useState } from "react";
import { UsedUserrovider } from "../../providers/user";
import { DivContainer } from "./style";

const ScheduleCard = ({ schedule }) => {
  const [className, setClassName] = useState("blue__coming__schedule");

  const scheduleDate = new Date(schedule.scheduling_time_start);
  const { user } = UsedUserrovider();

  if (scheduleDate <= Date.now()) {
    setClassName("red__past_schedule");
  }

  return (
    <>
      <DivContainer
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        className={className}
      >
        <h4>{schedule.user.first_name}</h4>
        <p>
          Local: {schedule.room.name} - Bloco {schedule.room.block}
        </p>
        <p></p>
        <p>
          {`Início as ${schedule.scheduling_time_start}`} -
          {`Fim as ${schedule.scheduling_time_end}`}
        </p>
        <br />
        <p>{schedule.description}</p>
      </DivContainer>
    </>
  );
};

export default ScheduleCard;
