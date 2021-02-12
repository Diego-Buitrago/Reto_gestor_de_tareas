import React from 'react';
import { withRouter } from 'react-router-dom';

const nuevaTarea = () => {
    return (
        <div id="main-container">
            <form className="form">
                <label>Nombre :</label>
                <input type="text"/>
                <br/>
                <label>prioridad :</label>
                <select name="tipo_usuario" className="diseno-imputs">
                    <option value="0">No importante</option>
                    <option value="1">Importante</option>
                </select>
                <br/>
                <label>Vencimiento :</label>
                <input type="Date"/>
                <br/>
                <input type="submit" value="Crear"/>
            </form>
        </div>
    );
};

export default withRouter(nuevaTarea);