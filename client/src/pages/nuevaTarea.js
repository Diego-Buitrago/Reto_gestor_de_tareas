import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Sidebar from '../components/sidebar';


function NuevaTarea() {

    const [nombre, setNombre]  = useState('');
    const [prioridad, setPrioridad]  = useState('');
    const [vencimiento, setvencimiento] = useState('');
    const [imagen, setImagen] = useState('');

    const $form = document.querySelector('#form');

    function save(e){

        if(nombre !== '' && prioridad !== '0' && vencimiento !== '' && imagen !== '') {
            e.preventDefault();

            const forData = new FormData($form);

            fetch(`/api/nueva_tarea/${localStorage.getItem('id_usuario')}/${nombre}/${prioridad}/${vencimiento}`, {
                method: 'POST',
                body: forData
            })
            alert('Se a guardado correctamente')
        } else {
            alert('Algo salio mal verifica que todos los campos esten llenos')
        }
    }

    function onChangeNombre(e){
        setNombre(e.target.value);
    }

    function onChangePrioridad(e){
        setPrioridad(e.target.value);
    }

    function onChangeVencimiento(e){
        setvencimiento(e.target.value);
    }
    
    function onChangeimagen(e){
        setImagen(e.target.files);
    }

    return (
        <div>
            <Sidebar />
            <div id="main-container">
                <form id="form">
                    <input type="file" accept=".png, .jpg" name="imagen" id="imagen" onChange={onChangeimagen} />
                
                    <label htmlFor="nombre" >Nombre :</label>
                    <input value={nombre} onChange={onChangeNombre} type="text" name="nombre" id="nombre" />
                    <br/>
                    <label htmlFor="prioridad">prioridad :</label>
                    <select id="prioridad" name="prioridad" value={prioridad} onChange={onChangePrioridad}>
                        <option value="0">Seleccione</option>
                        <option value="Inportante">Importante</option>
                        <option value="No inportante">No importante</option>
                    </select>
                    <br/>
                    <label htmlFor="vencimiento">Vencimiento :</label>
                    <input type="Date" id="vencimiento" name="vencimiento" value={vencimiento} onChange={onChangeVencimiento} />
                    <br/>
                    <div>
                        <button onClick={save} >Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
    
};

export default withRouter(NuevaTarea);