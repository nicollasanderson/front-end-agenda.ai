import { DivContainer } from "./style";

const ScheduleCard = ({ schedule }) => {
  return (
    <DivContainer initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
      <h4>{schedule.user.first_name}</h4>
      <p>Sala: {schedule.room.name}</p>
      <p>Bloco: {schedule.room.block}</p>
      <p>{`Início as ${schedule.scheduling_start}`}</p>
      <p>{`Fim as ${schedule.scheduling_end}`}</p>
    </DivContainer>
  );
};

export default ScheduleCard;
