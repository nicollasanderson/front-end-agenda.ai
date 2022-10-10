import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import app from "../../services/api";
import { DivContainer, StyledLabel } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { UseTokenProvider } from "../../providers/token";
import { UsedUserrovider } from "../../providers/user";

const LoginPage = () => {
  const schema = yup.object().shape({
    email: yup.string().required(" obrigatório").email(" inválido"),
    password: yup.string().required(" obrigatória"),
  });

  const { user, setUser } = UsedUserrovider();
  const { setToken } = UseTokenProvider();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (data) => {
    app
      .post("user/login/", data)
      .then((response) => {
        console.log(response);
        localStorage.setItem(
          "@agendaai:token",
          JSON.stringify(response.data.token)
        );
        localStorage.setItem(
          "@agendaai:user",
          JSON.stringify(response.data.user)
        );
        setToken(response.data.token);
        setUser(response.data.user);
        navigate("/calendario");
        toast.success("Logado com sucesso!");
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos!");
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
          <StyledLabel
            htmlFor="email"
            errColor={errors.email ? "red" : "black"}
          >
            E-mail {errors.email?.message}
          </StyledLabel>
          <input type="text" name="email" {...register("email")} />
          <StyledLabel
            htmlFor="password"
            errColor={errors.password ? "red" : "black"}
          >
            Senha {errors.password?.message}
          </StyledLabel>
          <input type="password" name="password" {...register("password")} />
          <motion.button
            type="submit"
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
          >
            <p>Entrar!</p>
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
