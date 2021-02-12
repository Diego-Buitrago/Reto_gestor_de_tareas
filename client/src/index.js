import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

//Importación de páginas
import login from "./pages/login"
import registrar from "./pages/registrar";
import tareas from "./pages/tareas";
import nuevaTarea from "./pages/nuevaTarea";

const App = () => {
  return(
    <BrowserRouter>
      <Route exact path="/" component={login} />
      <Route path="/registrar" component={registrar} />
      <Route path="/tareas" component={tareas} />
      <Route path="/nuevaTarea" component={nuevaTarea} />
    </BrowserRouter>
  ) 
}


ReactDOM.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
  document.getElementById("root")
);



  