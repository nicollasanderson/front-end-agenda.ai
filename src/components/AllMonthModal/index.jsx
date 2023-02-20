import { useState } from "react";
import ExitButton from "../ExitButton";
import FormAllMonth from "../FormAllMonth";
import ModalFailure from "../ModalFailure";
import ModalSucess from "../ModalSucess";
import { AllMonthMainDiv, ModalContainer } from "./style";

const AllMonthModal = ({ setMonthModal, month, formatedDay }) => {
  const [sucessCreate, setSucessCreate] = useState("");
  const [data, setData] = useState({});

  return (
    <AllMonthMainDiv onClick={() => setMonthModal(false)}>
      {sucessCreate === true && (
        <ModalSucess setSucessCreate={setSucessCreate} />
      )}
      {sucessCreate === false && (
        <ModalFailure data={data} setSucessCreate={setSucessCreate} />
      )}
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ExitButton onClick={() => setMonthModal(false)} />
        <div>
          <h1>Agendamento para o mês inteiro</h1>
          <h2 className="month__display">{month[0]}</h2>
          <h2>Dia da semana a repetir</h2>
          <FormAllMonth
            month={month}
            setSucessCreate={setSucessCreate}
            setData={setData}
          />
        </div>
      </ModalContainer>
    </AllMonthMainDiv>
  );
};

export default AllMonthModal;
