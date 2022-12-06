import { useState } from "react";
import app from "../../services/api";
import { DivButton, DivDescription, DivFormContainer, FormMain } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { UseTokenProvider } from "../../providers/token";
import ModalSucess from "../ModalSucess";

const FormHoje = ({ formatedDay }) => {
  const schema = yup.object().shape({
    // scheduling_date_start: yup.string().required(""),
    // scheduling_date_end: yup.string().required(""),
    scheduling_time_start: yup.string().required(),
    scheduling_time_end: yup.string().required(),
    description: yup.string().required(),
    room: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [inicioPreenchido, setInicioPreenchido] = useState();
  const [finalPreenchido, setFinalPreenchido] = useState();
  const [blocoPreenchido, setBlocoPreenchido] = useState();
  const [salaPreenchido, setSalaPreenchido] = useState();
  const [loading, setLoading] = useState(false);
  const [roomsBlock, setRoomsBlock] = useState([]);

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
    "18:40:00",
    "18:10:00",
    "19:00:00",
    "19:50:00",
    "20:40:00",
    "20:50:00",
    "21:40:00",
    "22:30:00",
  ];
  const arrayBlocos = [1, 2, 3, 4, 5, 6, 7];

  const findRoomByBlock = (event) => {
    console.log("chegou aqui");
    setLoading(true);
    if (event.target.value !== "") {
      app
        .get(`/room/${event.target.value}/`)
        .then((response) => {
          setRoomsBlock(response.data);
          console.log(response.data);
        })
        .catch((err) => setRoomsBlock([]))
        .finally(() => {
          setLoading(false);
          setBlocoPreenchido(event.target.value);
        });
    } else {
      setRoomsBlock([]);
      setLoading(false);
    }
  };

  const { token } = UseTokenProvider();

  const submitForm = (data) => {
    data.scheduling_date_start = formatedDay;
    data.scheduling_date_end = formatedDay;
    console.log(token);
    app
      .post("/schedule/", data, {
        headers: { Authorization: `Token ${token}` },
      })
      .then()
      .catch((err) => console.log(err));
  };

  return (
    <FormMain onSubmit={handleSubmit(submitForm)}>
      <ModalSucess />
      <div>
        <DivFormContainer>
          <label
            className={errors.scheduling_time_start?.message ? "error-red" : ""}
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
              {...register("scheduling_time_end", {
                onChange: (event) => setFinalPreenchido(event.target.value),
              })}
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
              {...register("room", {
                onChange: (event) => setSalaPreenchido(event.target.value),
              })}
            >
              <option value="">Selecione uma sala</option>
              {roomsBlock.map((sala) => (
                <option key={sala} value={sala.id}>
                  {sala.name}
                </option>
              ))}
            </select>
          </label>
          {/* )} */}
        </DivFormContainer>
        <DivDescription>
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
        </DivDescription>
      </div>

      <motion.button
        type="submit"
        initial={{ scale: 1 }}
        whileHover={{ scale: 0.9 }}
        transition={{ duration: 0.1 }}
        // onClick={(event) => event.preventDefault()}
      >
        <p>Agendar!</p>
      </motion.button>
    </FormMain>
  );
};

export default FormHoje;
