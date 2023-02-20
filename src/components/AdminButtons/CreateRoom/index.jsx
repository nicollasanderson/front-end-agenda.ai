import CustomInput from "../../CustomInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UseTokenProvider } from "../../../providers/token";
import { useState } from "react";
import { toast } from "react-toastify";
import app from "../../../services/api";
import { MainContent } from "./style";
import { motion } from "framer-motion";
import { BiTimeFive } from "react-icons/bi";

const CreateRoom = () => {
  const schema = yup.object().shape({
    // scheduling_date_start: yup.string().required(""),
    // scheduling_date_end: yup.string().required(""),
    block: yup.string().required(" obrigatório"),
    name: yup.string().required(" obrigatório"),
    room_type: yup.string().required(" obrigatório"),
  });
  const { token } = UseTokenProvider();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleCreateRoom = (data) => {
    console.log(data);
    setLoading(true);
    app
      .post("/room/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Sala criada!");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao criar sala!");
        setLoading(false);
      });
  };

  return (
    <MainContent>
      <h2>Criar sala de aula</h2>
      <div>
        <form onSubmit={handleSubmit(handleCreateRoom)}>
          <CustomInput
            errors={errors}
            inputName="Nome da sala"
            register={register}
            registerName="name"
          />
          <div>
            <label htmlFor="room_type">
              Tipo da Sala
              <select
                name="room_type"
                id="room_type"
                {...register("room_type")}
              >
                <option value=""></option>
                <option value="Laboratório">Laboratório</option>
                <option value="Sala de Aula">Sala de Aula</option>
              </select>
            </label>
            <label htmlFor="block">
              Bloco
              <select name="block" id="block" {...register("block")}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </label>
          </div>
          <motion.button
            type="submit"
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
          >
            {loading ? <BiTimeFive /> : <p>Criar!</p>}
          </motion.button>
        </form>
      </div>
    </MainContent>
  );
};

export default CreateRoom;
