import { useState } from "react";
import FormHoje from "../FormHoje";

import { DivButton } from "../FormHoje/style";
import {
  DivContainer,
  DivForm,
  DivMain,
  FormContainer,
  MainContent,
} from "./style";

const MakeScheduleModal = ({ setMakeScheduleModal, formatedDay, dayName }) => {
  const [buttonSelect, setButtonSelect] = useState(true);
  const [typeSchedule, setTypeSchedule] = useState("");

  const dataAtual = new Date(formatedDay);
  dataAtual.setDate(dataAtual.getDate() + 1);
  const dataFormatada = dataAtual.toLocaleDateString("pt-BR");

  return (
    <DivMain onClick={() => setMakeScheduleModal(false)}>
      <DivContainer onClick={(e) => e.stopPropagation()}>
        <div>
          <h1>Faça seu agendamento!</h1>
          <MainContent>
            <h2>Escolha o tipo de agendamento</h2>
            <h3>
              {dayName} - {dataFormatada}{" "}
            </h3>
            <div>
              <button
                className="button__make__schedule"
                onClick={() => setTypeSchedule("hoje")}
              >
                Agendar para esse dia
              </button>
              <button
                className="button__make__schedule"
                onClick={() => setTypeSchedule("mesDia")}
              >
                Para o mês inteiro nesse dia
              </button>
              <button
                className="button__make__schedule"
                onClick={() => setTypeSchedule("livre")}
              >
                Escolha livre
              </button>
            </div>
          </MainContent>

          <FormContainer>
            {typeSchedule === "" ? (
              <></>
            ) : typeSchedule === "hoje" ? (
              <FormHoje formatedDay={formatedDay} />
            ) : typeSchedule === "mesDia" ? (
              <>mes dia</>
            ) : typeSchedule === "livre" ? (
              <>livre</>
            ) : (
              <></>
            )}
          </FormContainer>
        </div>
      </DivContainer>
    </DivMain>
  );
};

export default MakeScheduleModal;

// {buttonSelect ? (
//   <div>
//     <button>Agendar para hoje</button>
//     {/* <button>Repetir o agendamento de hoje</button> */}
//     <button>Agendar para vários dias</button>
//   </div>
// ) : (
//   <></>
// )}
// <label htmlFor="startDay">Dia de inicio:</label>
// <select>
//   <option value=""></option>
// </select>
// <label htmlFor="description">Descrição</label>
// <textarea name="descrição" id="description" rows="4" cols="10" />
