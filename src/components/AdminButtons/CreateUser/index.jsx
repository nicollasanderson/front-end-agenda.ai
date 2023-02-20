import { MainContent } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomInput from "../../CustomInput";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import app from "../../../services/api";
import { toast } from "react-toastify";
import { UseTokenProvider } from "../../../providers/token";

const CreateUser = () => {
  const schema = yup.object().shape({
    // scheduling_date_start: yup.string().required(""),
    // scheduling_date_end: yup.string().required(""),
    email: yup.string().email(" inválido").required(" obrigatório"),
    first_name: yup.string().required(" obrigatório"),
    last_name: yup.string().required(" obrigatório"),
    password: yup.string().required(" obrigatória"),
  });
  const { token } = UseTokenProvider();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleCreateUser = (data) => {
    data.is_professor = true;
    console.log(data);
    setLoading(true);
    app
      .post("/user/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Usuário cadastrado!");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.email[0].includes("already")) {
          toast.error("Erro ao criar usuário, email já existe!");
        } else {
          toast.error("Erro ao criar usuário!");
        }
        setLoading(false);
      });
  };

  return (
    <MainContent>
      <h2>Criar usuário</h2>
      <div>
        <form onSubmit={handleSubmit(handleCreateUser)}>
          <CustomInput
            errors={errors}
            inputName="Nome"
            register={register}
            registerName="first_name"
          />
          <CustomInput
            errors={errors}
            inputName="Sobrenome"
            register={register}
            registerName="last_name"
          />
          <CustomInput
            errors={errors}
            inputName="E-mail"
            type="email"
            register={register}
            registerName="email"
          />
          <CustomInput
            errors={errors}
            inputName="Senha"
            type="password"
            register={register}
            registerName="password"
          />
          <motion.button
            type="submit"
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
          >
            {loading ? <BiTimeFive /> : <p>Cadastrar!</p>}
          </motion.button>
        </form>
      </div>
    </MainContent>
  );
};

export default CreateUser;
