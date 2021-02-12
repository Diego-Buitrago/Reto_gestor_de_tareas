import React from "react";
import "../styles/login.css";

import { withRouter } from "react-router-dom";


const login = () => {
    return (
        <div id="main-container">
            <form className="form">
                <label>Correo :</label>
                <input type="text" placeholder="Juan"/>
                <br/>
                <label>Contraseña :</label>
                <input type="text" placeholder="***********"/>
                <br/>
                <input type="submit"/>
                <br/>
                <a href="registrar">
                    <h4>Registrarse</h4>
                </a>
            </form>
        </div>
    );
};

export default withRouter(login); 