import { Component } from 'react';
import "../styles/tareas.css";

import { withRouter } from "react-router-dom";


class Tareas extends Component  {

    state = {
        datos: []
    }

    async componentDidMount() {
        const res = await fetch(`/api/tareas/${localStorage.getItem('id_usuario')}`, {
            headers: {'x-access-token': localStorage.getItem('id_usuario')}
        })
        const data = await res.json()
        this.setState({datos: data})

        const hoy = new Date();

        for (let i = 0; i < data.length; i++) {
            
            const fechaTarea = new Date(`${data[i].vencimiento}`);
            let milisegundosTrascurrido = Math.abs(hoy.getTime() - fechaTarea.getTime());

            if (milisegundosTrascurrido <= 172800000) {
                alert(`Alerta La tarea ${data[i].nombre} esta proxima a vencer fecha de vencimiento: ${data[i].vencimiento}`)
               }

        }
    }

    deleteTask = (id) => {
        const newTasks = this.state.datos.filter(task => task._id !== id);
        this.setState({datos: newTasks});

        fetch('/api/eliminar_tarea' , {
            method: 'DELETE',
           headers: {
               'Content-Type': 'application/json',
       },
       body: JSON.stringify({
           id: id
           })
       })
    }

    editarTarea(id) {
        window.localStorage.setItem('editar_tarea', (id))
    }

   
    render() {
        return (
            <div className="container">
               <a href="nuevaTarea">
                   <h4>Nueva tarea</h4>
               </a> 
                   {
                       this.state.datos.map(dato => 
                           <div className="tarea" key={dato._id}>
                               <h4>
                                <img src={dato.imagenURL} height="100px" /> - 
                                   Nombre: {dato.nombre} -
                                   Prioridad: {dato.prioridad} -
                                   Vence: {dato.vencimiento}
                                   <a href="editarTarea">
                                        <button className="editar" onClick={this.editarTarea.bind(this, dato._id)} >Editar</button>
                                   </a>
                                   <button className="eliminar" onClick={this.deleteTask.bind(this, dato._id)}>x</button>
                               </h4>
                               
                           </div>
                       )
                   }  
           </div>
        );
    }
   
};

export default withRouter(Tareas); 