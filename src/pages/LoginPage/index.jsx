import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import app from "../../services/api";
import { DivContainer } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { UseTokenProvider } from "../../providers/token";
import { UsedUserrovider } from "../../providers/user";
import CustomInput from "../../components/CustomInput";
import { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const schema = yup.object().shape({
    email: yup.string().required(" obrigatório").email(" inválido"),
    password: yup.string().required(" obrigatória"),
  });

  const [loading, setLoading] = useState(false);

  const { user, setUser } = UsedUserrovider();
  const { setToken } = UseTokenProvider();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (data) => {
    setLoading(true);
    app
      .post("/user/login/", data)
      .then((response) => {
        localStorage.setItem(
          "@agendaai:token",
          JSON.stringify(response.data.access)
        );
        setToken(response.data.access);
        setUser(jwtDecode(response.data.access));
        navigate("/calendario");
        toast.success("Logado com sucesso!");
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos!");
        setLoading(false);
      });
  };

  useEffect(() => {
    if (user) {
      navigate("/calendario");
    }
  });

  return (
    <DivContainer>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
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
            {loading ? <BiTimeFive /> : <p>Entrar!</p>}
          </motion.button>
        </form>
        <p>
          Não possui conta? {<Link to="/contato">Entre em contato</Link>} e
          solicite seu acesso!
        </p>
      </div>
    </DivContainer>
  );
};

export default LoginPage;
