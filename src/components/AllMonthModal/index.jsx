import ExitButton from "../ExitButton";
import FormAllMonth from "../FormAllMonth";
import { AllMonthMainDiv, ModalContainer } from "./style";

const AllMonthModal = ({ setMonthModal, month, formatedDay }) => {
  return (
    <AllMonthMainDiv onClick={() => setMonthModal(false)}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ExitButton onClick={() => setMonthModal(false)} />
        <div>
          <h1>Agendamento para o mês inteiro</h1>
          <h2 className="month__display">{month[0]}</h2>
          <h2>Dia da semana a repetir</h2>
          <FormAllMonth month={month} />
        </div>
      </ModalContainer>
    </AllMonthMainDiv>
  );
};

export default AllMonthModal;
