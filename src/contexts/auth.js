import { createContext, useEffect, useState } from "react";
import authService from "../services/authService";
import AxiosService from "../services/AxiosService";


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    const usersStorage = localStorage.getItem("userName");

    if (userToken && usersStorage) {
      setUser(usersStorage);
    }

    setLoading(false);
  }, []);

  const signin = async (login, password) => {
      const response = await authService.Login({ userName: login, password: password });

      if(!response.erro){
        localStorage.setItem('token', response.token);
        localStorage.setItem('userName', response.user.userName);

        AxiosService.createAxiosInstance().defaults.headers.Authorization = `Bearer ${response.token}`

        setUser(response.user.userName);
        setLoading(true);
      } else {
        return "Usuário ou Senha Incorretos!!"
      }
  };

const signup = (login, password) => {
  // const usersStorage = JSON.parse(localStorage.getItem("userName"));

  // const hasUser = usersStorage?.filter((user) => user.login === login);

  // if (hasUser?.length) {
  //   return "Já tem uma conta com esse Login";
  // }

  // let newUser;

  // if (usersStorage) {
  //   newUser = [...usersStorage, { login, password }];
  // } else {
  //   newUser = [{ login, password }];
  // }

  // localStorage.setItem("userName", JSON.stringify(newUser));

  return;
};

const signout = () => {
  setUser(null);
  localStorage.removeItem("token");
  localStorage.removeItem("userName");
  AxiosService.createAxiosInstance().defaults.headers.Authorization = null;
  setLoading(null);
};

return <AuthContext.Provider
  value={{ user, signed: !!user, signin, signup, signout, loading }}>{children}</AuthContext.Provider>;
}
