import React from 'react';
import { withRouter } from 'react-router-dom';

const registrase = () => {
    return (
        <div id="main-container">
            <form className="form">
                <label>Correo :</label>
                <input type="text" placeholder="Juan"/>
                <br/>
                <label>Contraseña :</label>
                <input type="text" placeholder="***********"/>
                <br/>
                <input type="submit" value="Registrarse"/>
            </form>
        </div>
    );
};

export default withRouter(registrase);