import { DivDescription } from "../FormHoje/style";
import { DivDescriptionMonth, DivMainMonth, FormMonthContainer } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { UseScheduleProvider } from "../../providers/schedules";
import app from "../../services/api";
import { motion } from "framer-motion";
import { UseTokenProvider } from "../../providers/token";
import ModalSucess from "../ModalSucess";
import ModalFailure from "../ModalFailure";

const FormAllMonth = ({ month }) => {
  const [inicioPreenchido, setInicioPreenchido] = useState();
  const [loading, setLoading] = useState(false);
  const [roomsBlock, setRoomsBlock] = useState([]);
  const [sucessCreate, setSucessCreate] = useState("");
  const [agendamentosFalha, setAgendamentosFalha] = useState([]);
  const [data, setData] = useState({});
  const { hasCreatedSchedule, setHasCreatedSchedule } = UseScheduleProvider();
  const { token } = UseTokenProvider();

  const arrayHorarios = [
    "07:00:00",
    "07:50:00",
    "08:40:00",
    "09:30:00",
    "09:50:00",
    "10:40:00",
    "11:30:00",
    "12:20:00",
    "13:20:00",
    "14:10:00",
    "15:00:00",
    "15:50:00",
    "16:10:00",
    "17:00:00",
    "17:50:00",
    "18:10:00",
    "18:40:00",
    "19:00:00",
    "19:50:00",
    "20:40:00",
    "20:50:00",
    "21:40:00",
    "22:30:00",
  ];
  const arrayBlocos = [1, 2, 3, 4, 5, 6, 7];

  const schema = yup.object().shape({
    // scheduling_date_start: yup.string().required(""),
    // scheduling_date_end: yup.string().required(""),
    scheduling_time_start: yup.string().required(),
    scheduling_time_end: yup.string().required(),
    description: yup.string().required(),
    room: yup.string().required(),
    week_day: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const findRoomByBlock = (event) => {
    setLoading(true);
    if (event.target.value !== "") {
      app
        .get(`/room/${event.target.value}/`)
        .then((response) => {
          setRoomsBlock(response.data);
        })
        .catch((err) => {
          setRoomsBlock([]);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setRoomsBlock([]);
      setLoading(false);
    }
  };

  const submitForm = (data) => {
    const arrAgendamentos = [];

    const hoje = new Date();
    let date = new Date(hoje.getFullYear(), month[1], 1);

    const firstMonthDay = new Date(hoje.getFullYear(), month[1], 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);

    while (firstMonthDay <= lastDay) {
      if (firstMonthDay >= hoje) {
        if (firstMonthDay.getDay() === Number(data.week_day)) {
          data.scheduling_date_start = firstMonthDay
            .toISOString()
            .split("T")[0];
          data.scheduling_date_end = firstMonthDay.toISOString().split("T")[0];
          const newObj = { ...data };
          delete newObj.week_day;
          arrAgendamentos.push(newObj);
        }
      }
      firstMonthDay.setDate(firstMonthDay.getDate() + 1);
    }
    console.log(arrAgendamentos);
    // hojeMais1 = date;
    if (arrAgendamentos.length > 0) {
      arrAgendamentos.forEach((element) => {
        app
          .post("/schedule/", element, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            setSucessCreate(true);
            setHasCreatedSchedule(hasCreatedSchedule + 1);
          })
          .catch((err) => {
            setData(err.response);
            agendamentosFalha.push(err.response);
            // setSucessCreate(false);
          });
      });
    }
    console.log(agendamentosFalha);
  };

  return (
    <DivMainMonth>
      {sucessCreate === true && (
        <ModalSucess setSucessCreate={setSucessCreate} />
      )}
      {sucessCreate === false && (
        <ModalFailure data={data} setSucessCreate={setSucessCreate} />
      )}
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="segunda">
            <input
              type="radio"
              id="segunda"
              name="dia_semana"
              value="1"
              {...register("week_day")}
            />
            Segunda-Feira
          </label>

          <label htmlFor="terca">
            <input
              type="radio"
              id="terca"
              name="dia_semana"
              value="2"
              {...register("week_day")}
            />
            Terça-Feira
          </label>

          <label htmlFor="quarta">
            <input
              type="radio"
              id="quarta"
              name="dia_semana"
              value="3"
              {...register("week_day")}
            />
            Quarta-Feira
          </label>

          <label htmlFor="quinta">
            <input
              type="radio"
              id="quinta"
              name="dia_semana"
              value="4"
              {...register("week_day")}
            />
            Quinta-Feira
          </label>

          <label htmlFor="sexta">
            <input
              type="radio"
              id="sexta"
              name="dia_semana"
              value="5"
              {...register("week_day")}
            />
            Sexta-Feira
          </label>
        </div>
        <div className="form_month__div">
          <div className="form_infos__div">
            <label
              className={
                errors.scheduling_time_start?.message ? "error-red" : ""
              }
            >
              Horário de início:
              <select
                name="horarioInicio"
                id="horarioInicio"
                {...register("scheduling_time_start", {
                  onChange: (event) => setInicioPreenchido(event.target.value),
                })}
              >
                <option value="">Selecione um horário</option>
                {arrayHorarios.map((horario) => (
                  <option key={horario} value={horario}>
                    {horario.slice(0, 5)}
                  </option>
                ))}
              </select>
            </label>

            <label
              className={errors.scheduling_time_end?.message ? "error-red" : ""}
            >
              Horário de finalização:
              <select
                name="horarioFinalizacao"
                id="horarioFinalizacao"
                {...register("scheduling_time_end")}
              >
                <option value="">Selecione um horário</option>

                {arrayHorarios.map((horario, index) => {
                  const indexHorario = arrayHorarios.findIndex(
                    (element) => element === inicioPreenchido
                  );
                  if (indexHorario < index) {
                    return (
                      <option key={horario + "-"} value={horario}>
                        {horario.slice(0, 5)}
                      </option>
                    );
                  }
                })}
              </select>
            </label>

            <label>
              Bloco:
              <select
                name="bloco"
                id="bloco"
                onChange={findRoomByBlock}
                disabled={loading === false ? false : true}
              >
                <option value="">Selecione um bloco</option>
                {arrayBlocos.map((bloco) => (
                  <option key={bloco} value={bloco}>
                    {bloco}
                  </option>
                ))}
              </select>
            </label>

            {/* {blocoPreenchido !== "0" && ( */}
            <label className={errors.room?.message ? "error-red" : ""}>
              Sala/Lab:
              <select
                name="sala"
                id="sala"
                disabled={loading === false ? false : true}
                {...register("room")}
              >
                <option value="">Selecione uma sala</option>
                {roomsBlock.map((sala) => (
                  <option key={sala.id} value={sala.id}>
                    {sala.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {/* )} */}
          <DivDescriptionMonth>
            <label className={errors.description?.message ? "error-red" : ""}>
              Descrição:
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                {...register("description")}
              />
            </label>
          </DivDescriptionMonth>
        </div>
        <div className="form_buton__div">
          <motion.button
            type="submit"
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            // onClick={(event) => event.preventDefault()}
          >
            <p>Agendar!</p>
          </motion.button>
        </div>
      </form>
    </DivMainMonth>
  );
};

export default FormAllMonth;
