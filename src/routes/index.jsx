import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import SignIn from "../pages/Sign-in";
import SignUp from "../pages/Sign-up";
import Perfil from "../pages/Perfil";
import SideMenu from "../pages/SideMenu";
import Eventos from "../pages/Eventos";
import Batalhas from "../pages/Batalhas";
import Configuracoes from "../pages/Configuracoes";
import { ToastContainer } from 'react-toastify';
import CriarBatalha from "../components/criar-batalha";

const Private = ({ Item, switchTheme }) => {
  const { signed } = useAuth();

  return signed > 0 ? <SideMenu switchTheme={switchTheme} Item={Item}/> : <SignIn />;
};

const Authy = ({ Item, switchTheme }) => {
  const { signed } = useAuth();

  return signed > 0 ? <SideMenu switchTheme={switchTheme} Item={Home}/> : <Item />;
};

const RoutesApp = () => {
  const actualTheme = localStorage.getItem("data-theme")
  const [theme, setTheme] = useState(actualTheme ?? "dark");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", theme)
  }, [theme]);

  return (
    <BrowserRouter>
      <Fragment>
        <div className="App">
          <Routes>
            <Route exact path="/home" element={<Private switchTheme={switchTheme} Item={Home} />} />
            <Route exact path="/perfil" element={<Private switchTheme={switchTheme} Item={Perfil} />} />
            <Route exact path="/eventos" element={<Private switchTheme={switchTheme} Item={Eventos} />} />
            <Route exact path="/batalhas" element={<Private switchTheme={switchTheme} Item={Batalhas} />} />
            <Route exact path="/batalhas/criar-batalha" element={<Private switchTheme={switchTheme} Item={CriarBatalha} />} />
            <Route exact path="/configuracoes" element={<Private switchTheme={switchTheme} Item={Configuracoes} />} />
            <Route path="/" element={<Authy Item={SignIn} switchTheme={switchTheme} />} />
            <Route exact path="/sign-up" element={<Authy Item={SignUp} switchTheme={switchTheme} />} />
            <Route path="*" element={<Authy Item={SignIn} switchTheme={switchTheme} />} />
          </Routes>
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
        </div>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
