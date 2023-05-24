import React, { useState } from 'react'
import * as C from "./styles"
import { Link, useNavigate } from "react-router-dom"
import useAuth from '../../hooks/useAuth'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TextField } from '@mui/material'
import Button from '../../components/Button'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import LinearProgress from '@mui/material/LinearProgress';

const SignIn = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    if (!login | !senha) {
      toast.warning("Preencha todos os campos!");
      return;
    }

    const res = await signin(login, senha);
  
    if (!res.token) {
      toast.error(res.response.message)
      setLoading(false);
      return;
    }

    setLoading(false);
    navigate("/home");
  };

  const handleBattle = () => {

  };

  return (
    <C.Container>
      <Box sx={{ width: '100%', top: '-1px', position: 'absolute' }}>
          {loading ? <LinearProgress color="inherit" /> : null}
      </Box>
      <C.Label>R.A.P</C.Label>
      <C.Content>
        <TextField
          label="Login"
          variant="outlined"
          placeholder="Digite seu Login"
          value={login}
          size="small"
          onChange={(e) => [setLogin(e.target.value)]}
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        />
        <TextField
          label="Senha"
          variant="outlined"
          placeholder="Digite sua Senha"
          value={senha}
          type='password'
          size="small"
          onChange={(e) => [setSenha(e.target.value)]}
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <KeyOutlinedIcon />
            </InputAdornment>
          ),
        }}
        />

        <C.labelError></C.labelError>
        <Box sx={{ width: '100%' }}></Box>
        
        <Grid container spacing={1}>
          <Grid item md={6}>
            <Button
              text="Entrar"
              variant="contained"
              onClick={handleLogin}
            />
          </Grid>
          <Grid item md={6}>
            <Button
              text="Batalha Rápida"
              variant="contained"
              disabled={true}
              onClick={handleBattle}
            />
          </Grid>
        </Grid>

        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/sign-up">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  )
}

export default SignIn;