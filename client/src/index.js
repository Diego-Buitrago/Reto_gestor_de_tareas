import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from "react-router-dom";
import { _login, _logout, _registrar, _tareas, _nuevaTarea, _editarTarea } from './config/path';
import PrivateRoute from './components/privateRout';
import PublicRoute from './components/publicRout';
import AuthProvider from './context/context';

//Importación de páginas
import login from "./pages/login";
import logout from "./pages/logout";
import registrar from "./pages/registrar";
import tareas from "./pages/tareas";
import nuevaTarea from "./pages/nuevaTarea";
import editarTarea from "./pages/editarTarea";

const App = () => {
  return(
    <AuthProvider>
      <BrowserRouter>
      <Switch>
        <PublicRoute exact path={_login} component={login} />
        <PrivateRoute exact path={_logout} component={logout} />
        <PublicRoute path={_registrar} component={registrar} />
        <PrivateRoute path={_tareas} component={tareas} />
        <PrivateRoute path={_nuevaTarea} component={nuevaTarea} />
        <PrivateRoute path={_editarTarea} component={editarTarea} />
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