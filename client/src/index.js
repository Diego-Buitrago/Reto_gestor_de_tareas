import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from "react-router-dom";
import { _login, _registrar, _tareas, _nuevaTarea } from './config/path';
import PrivateRoute from './components/privateRout';
import PublicRoute from './components/publicRout';
import AuthProvider from './context/context';

//Importación de páginas
import login from "./pages/login"
import registrar from "./pages/registrar";
import tareas from "./pages/tareas";
import nuevaTarea from "./pages/nuevaTarea";

const App = () => {
  return(
    <AuthProvider>
      <BrowserRouter>
      <Switch>
        <PublicRoute exact path={_login} component={login} />
        <PublicRoute path={_registrar} component={registrar} />
        <PrivateRoute path={_tareas} component={tareas} />
        <PrivateRoute path={_nuevaTarea} component={nuevaTarea} />
      </Switch>
    </BrowserRouter>
    </AuthProvider>
    
  ) 
}

ReactDOM.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
  document.getElementById("root")
); 