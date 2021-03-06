import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import InicioSesion from "./components/InicioSesion/InicioSesion";
import MainPage from "./components/MainPage/MainPage";
import Registro from "./components/Registro/Registro";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Ingreso">
            <InicioSesion />
          </Route>
          <Route path="/Registro">
            <Registro />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
