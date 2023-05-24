import { createContext, useState, useEffect } from "react";
import authService from "../services/authService";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  const signin = async (login, password) => {
    setLoading(true);
    const response = await authService.Login({
      userName: login,
      password: password,
    });

    if (response.token) {
      localStorage.setItem("token", response.token);
      setLogged(true);
      setLoading(false);
      return { logged: logged, token: response.token };
    } else {
      setLoading(false);
      return { logged: logged, response };
    }
  };

  const signup = async (login, apelido, nome, email, celular, password) => {
    try {
      const response = await authService.Cadastrar({
        nome: nome,
        apelido: apelido,
        email: email,
        phoneNumber: celular,
        userName: login,
        password: password,
      });

      return response;
    } catch (e) {
      return e.response.status;
    }
  };

  const signout = async () => {
    await authService.DeslogarUsuario({});
    setLogged(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ signed: logged, signin, signup, signout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
