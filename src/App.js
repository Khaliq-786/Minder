import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPass from "./pages/ForgotPass";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element = {<LandingPage/>}/>
          <Route exact path="/Login" element = {<Login/>}/>
          <Route exact path="/SignUp" element = {<SignUp/>}/>
          <Route exact path="/ForgotPass" element = {<ForgotPass/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
