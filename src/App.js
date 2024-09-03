import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/LoginPage";
import Formulario from "./components/Form";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/form" component={Formulario} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
