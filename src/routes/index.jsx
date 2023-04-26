import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import SignIn from "../pages/Sign-in";
import SignUp from "../pages/Sign-up";
import Perfil from "../pages/Perfil";
import SideMenu from "../pages/SideMenu";

const Private = ({ Item, switchTheme }) => {
  const { signed } = useAuth();

  return signed > 0 ? <SideMenu switchTheme={switchTheme} Item={Item}/> : <SignIn />;
};

const RoutesApp = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(defaultDark ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Fragment>
        <div className="App">
          <Routes>
            <Route exact path="/home" element={<Private switchTheme={switchTheme} Item={Home} />} />
            <Route exact path="/perfil" element={<Private switchTheme={switchTheme} Item={Perfil} />} />
            <Route path="/" element={<SignIn />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<SignIn />} />
          </Routes>
        </div>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
