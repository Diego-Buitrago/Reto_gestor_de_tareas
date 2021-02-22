import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import useAuthContext from '../hooks/useContext'

import "../styles/login.css";

function Login() {

    const {login} = useAuthContext();
    const [correo, setCorreo]  = useState('');
    const [contrasena, setContrasena] = useState('');

    async function save(e){
        if(correo !== '' && contrasena !== '') {
            
            const res = await fetch(`/api/login/${correo}/${contrasena}`)
            const data = await res.json()
            if (data.length > 0) {
                window.localStorage.setItem('id_usuario', data)
                login(); 
            } else {
                alert('Usuario o clave INVALIDA')
            }
        } else {
            alert('Algo salio mal verifica que todos los campos esten llenos')
        }
    }

    function onChangeCorreo(e){
        setCorreo(e.target.value);
    }

    function onChangeContrasena(e){
        setContrasena(e.target.value);
    } 

    return (
        <div id="main-container">
                
            <label htmlFor="correo">Correo :</label>
            <input value={correo} onChange={onChangeCorreo} type="text" name="correo" id="correo"/>
            <br/>
            <label htmlFor="contrasena">Contraseña :</label>
            <input value={contrasena} onChange={onChangeContrasena} type="password" name="contrasena" id="contrasena" />
            <br/>
            <button onClick={save}>Enviar</button>
            <br/>
            <a href="registrar">
                <h4>Registrarse</h4>
            </a>
        </div>
    );
    
};

export default withRouter(Login); 