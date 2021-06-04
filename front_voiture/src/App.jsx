import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/loginPage";
import RegisterPage from "./Pages/registerPage";
import HomePage from "./Pages/homePage";
import CarPage from "./Pages/carPage";
import CarEditPage from "./Pages/carEditPage";

function App() {
  return (
    <BrowserRouter>
    	<Switch>
    		<Route exact path='/' component={HomePage} />
    		<Route exact path="/login" component={LoginPage}/>
    		<Route exact path="/register" component={RegisterPage}/>
    		<Route path="/car/:id" component={CarPage}/>
    		<Route exact path="/new" component={CarEditPage}/>
    	</Switch>
    </BrowserRouter>
  );
}

export default App;
