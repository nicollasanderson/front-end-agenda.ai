import { useState } from "react";
import { DivContainer, DivMain } from "./style";

const MakeScheduleModal = ({ setMakeScheduleModal, formatedDay }) => {
  const [buttonSelect, setButtonSelect] = useState(true);

  return (
    <DivMain onClick={() => setMakeScheduleModal(false)}>
      <DivContainer onClick={(e) => e.stopPropagation()}>
        <div>
          <h1>Faça seu agendamento!</h1>
          <div>
            {buttonSelect ? (
              <div>
                <button>Agendar para hoje</button>
                {/* <button>Repetir o agendamento de hoje</button> */}
                <button>Agendar para vários dias</button>
              </div>
            ) : (
              <></>
            )}
            <label htmlFor="startDay">Dia de inicio:</label>
            <select>
              <option value=""></option>
            </select>
            <label htmlFor="description">Descrição</label>
            <textarea name="descrição" id="description" rows="4" cols="10" />
          </div>
        </div>
      </DivContainer>
    </DivMain>
  );
};

export default MakeScheduleModal;
