import { Component } from 'react';
import "../styles/tareas.css";

import { withRouter } from "react-router-dom";


class Tareas extends Component  {

    state = {
        datos: []
    }

    async componentDidMount() {
        const res = await fetch(`/api/tareas/${localStorage.getItem('id_usuario')}`)
        const data = await res.json()
        this.setState({datos: data})
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
                                   Nombre: {dato.nombre} -
                                   Prioridad: {dato.prioridad} -
                                   Vence: {dato.vencimiento}
                                   <button className="editar">Editar</button>
                                   <button className="eliminar">x</button>
                               </h4>
                               
                           </div>
                       )
                   }  
           </div>
        );
    }
   
};

export default withRouter(Tareas); 