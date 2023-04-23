import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [login, setLogin] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    // if (!login | !loginConf | !senha) {
    //   setError("Preencha todos os campos");
    //   return;
    // } else if (login !== loginConf) {
    //   setError("Os logins não são iguais");
    //   return;
    // }

    const res = signup(login, senha);

    if (res) {
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <C.Label>Cadastrar</C.Label>
      <C.Content>
      <Input
          type="Nome"
          placeholder="Digite seu Nome"
          value={nome}
          onChange={(e) => [setNome(e.target.value)]}
        />
        <Input
          type="CPF"
          placeholder="Digite seu CPF"
          value={login}
          onChange={(e) => [setLogin(e.target.value)]}
        />
        <Input
          type="Email"
          placeholder="Digite seu CPF"
          value={email}
          onChange={(e) => [setEmail(e.target.value)]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value)]}
        />
        <Input
          type="password"
          placeholder="Confirme sua Senha"
          value={senhaConfirm}
          onChange={(e) => [setSenhaConfirm(e.target.value)]}
        />
        <C.labelError></C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;