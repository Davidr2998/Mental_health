import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import InicioSesion from "./components/InicioSesion/InicioSesion";
import MainPage from "./components/MainPage/MainPage";
import Registro from "./components/Registro/Registro";
import Dashboard from "./components/Components-Inner-app/Pages/Dashboard.js";
import Dates from './components/Components-Inner-app/Pages/Dates.js';
import Community from './components/Components-Inner-app/Pages/Community.js'

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
          <Route path="/Dates">
            <Dates />
          </Route>
          <Route path="/Community">
            <Community />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
