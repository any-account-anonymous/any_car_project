import React from "react";
import {Switch, Route, Link } from "react-router-dom";
import "./styles/bootstrap.min.css";
import "./styles/common.css";
import LoginPage from "./Pages/loginPage";
import RegisterPage from "./Pages/registerPage";
import HomePage from "./Pages/homePage";
import CarPage from "./Pages/carPage";
import CarEditPage from "./Pages/carEditPage";

function App() {
  return (
    <div className="App">
        <div className="container-fluid">
            <nav>
              <ul>
                <li>
                  <Link to={'/'}> Acceuil </Link>
                </li>
                <li>
                  <Link to={'/login'}> Se Connecter </Link>
                </li>
                <li>
                  <Link to={'/register'}> S'enregistrer </Link>
                </li>
              </ul>
            </nav>
        	<Switch>
        		<Route exact path='/' component={HomePage} />
        		<Route exact path="/login" component={LoginPage}/>
        		<Route exact path="/register" component={RegisterPage}/>
        		<Route exact path="/car/:id" component={CarPage}/>
        		<Route exact path="/new" component={CarEditPage}/>
        	</Switch>
        </div>
    </div>
  );
}

export default App;
