import React, { useState } from 'react'
import * as C from "./styles"
import { Link, useNavigate } from "react-router-dom"
import useAuth from '../../hooks/useAuth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TextField, Button } from '@mui/material'

const SignIn = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    if (!login | !senha) {
      toast.warning("Preencha todos os campos!");
      return;
    }

    const res = await signin(login, senha);

    if (res) {
      toast.error(res)
      return;
    }

    navigate("/home");
  }

  return (
    <C.Container>
      <C.Label>E-MarketPlace</C.Label>
      <C.Content>
        <TextField
          label="Login"
          variant="outlined"
          placeholder="Digite seu Login"
          value={login}
          onChange={(e) => [setLogin(e.target.value)]}
        />
        <TextField
          label="Senha"
          variant="outlined"
          placeholder="Digite sua Senha"
          value={senha}
          type='password'
          onChange={(e) => [setSenha(e.target.value)]}
        />

        <C.labelError></C.labelError>

        <Button
          color="secondary"
          variant="contained"
          onClick={handleLogin}
        >Entrar</Button>

        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/sign-up">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
    </C.Container>
  )
}

export default SignIn;