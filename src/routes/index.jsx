import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import SignIn from "../pages/Sign-in";
import SignUp from "../pages/Sign-up";


const Private = ({ Item }) => {
    const {signed} = useAuth();

    return signed > 0 ? <Item /> : <SignIn/>;
}

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home}/>} />
                    <Route path="/" element={<SignIn />} />
                    <Route exact path="/sign-up" element={<SignUp />} />
                    <Route path="*" element={<SignIn />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};


export default RoutesApp;