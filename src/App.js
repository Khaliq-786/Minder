import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element = {<LandingPage/>}/>
          <Route exact path="/Login" element = {<Login/>}/>
          <Route exact path="/SignUp" element = {<SignUp/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
