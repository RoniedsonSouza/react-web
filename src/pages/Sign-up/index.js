import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";

const Signup = () => {
  const [login, setLogin] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [apelido, setApelido] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();
  const [disabled, setDisabled] = useState(true);

  const handleSignup = async () => {
    const res = await signup(login, apelido, nome, email, celular, senha);

    if (res === 400) {
      toast.error("Erro ao cadastrar usuário! Tente novamente mais tarde.");
    } else if (res.userExists) {
      toast.error("Usuário já existente. Por favor faça o login");
    } else {
      toast.success("Usuário Cadastrado Com Sucesso!");
      navigate("/");
    }
  };

  function isLowerCase(str) {
    return str === str.toLowerCase() && str !== str.toUpperCase();
  }

  const configuraHelpTextSenha = () => {
    var countLowerCase = 0;
    var countUperCase = 0;
    var text = "As senhas devem:";
    var letterUpercase = "\n- Conter pelo menos uma letra maiúscula";
    var letterLowercase = "\n- Conter pelo menos uma letra minúscula";
    var passwordEquals = "\n- Serem iguais";

    if (senha !== "" || senhaConfirm !== "") {
      if (senha.length < 8) text += "\n- Terem o mínimo de 8 caracteres";

      for (var i = 0; i < senha.length; i++) {
        if (isLowerCase(senha[i])) countLowerCase++;
        if (!isLowerCase(senha[i])) countUperCase++;
      }

      if (countLowerCase === 0) text += letterLowercase;
      if (countUperCase === 0) text += letterUpercase;

      if (senha !== senhaConfirm) text += passwordEquals;

      if (text === "As senhas devem:") text = "";

      if (senhaConfirm !== "" && senha === "")
        text = "Preencha o campo de senha primeiro";

      if (senha !== "" || senhaConfirm !== "") return text;
      else if (senhaConfirm === "") return text;
      else if (senha === "" && senhaConfirm !== "")
        text = "Preencha o campo de senha primeiro";
      else {
        text = "";
        return false;
      }
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (
      login &&
      nome &&
      email &&
      celular &&
      senha &&
      senhaConfirm &&
      senha === senhaConfirm
    )
      setDisabled(false);
    else {
      setDisabled(true);
    }
  }, [login, nome, email, celular, senha, senhaConfirm]);

  return (
    <C.Container>
      <C.Label>Cadastrar</C.Label>
      <C.Content>
        <TextField
          type="text"
          label="Nome"
          value={nome}
          size="small"
          onChange={(e) => [setNome(e.target.value)]}
          required
        />
        <TextField
          type="text"
          label="Apelido"
          value={apelido}
          size="small"
          onChange={(e) => [setApelido(e.target.value)]}
        />
        <TextField
          type="text"
          label="CPF"
          value={login}
          size="small"
          onChange={(e) => [setLogin(e.target.value)]}
          required
        />
        <TextField
          type="email"
          label="Email"
          value={email}
          size="small"
          onChange={(e) => [setEmail(e.target.value)]}
          required
        />

        <TextField
          type="tel"
          label="Celular"
          value={celular}
          size="small"
          onChange={(e) => [setCelular(e.target.value)]}
          required
        />
        <hr
          className="MuiDivider-root MuiDivider-fullWidth"
          style={{ width: "100%" }}
        ></hr>
        <TextField
          error={configuraHelpTextSenha()}
          type="password"
          label="Senha"
          value={senha}
          size="small"
          onChange={(e) => [setSenha(e.target.value)]}
        />
        <TextField
          error={configuraHelpTextSenha()}
          type="password"
          label="Confirme sua Senha"
          value={senhaConfirm}
          size="small"
          onChange={(e) => [setSenhaConfirm(e.target.value)]}
          helperText={configuraHelpTextSenha()}
        />
        <C.labelError></C.labelError>
        <div>
          <Button
            text="Inscrever-se"
            onClick={handleSignup}
            disabled={disabled}
          />
        </div>
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
