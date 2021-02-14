import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NuevaTarea extends Component {

    state = {
        nombre: '',
        prioridad: '',
        vencimiento: ''
    }

    save(e){
        if(this.state.nombre != '' && this.state.prioridad != '0' && this.state.vencimiento != '') {
            
            fetch('/api/nueva_tarea' , {
                 method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: this.state.nombre,
                prioridad: this.state.prioridad,
                vencimiento: this.state.vencimiento
                })
            })
            alert('Se a guardado correctamente')
        } else {
            alert('Algo salio mal verifica que todos los campos esten llenos')
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }   

    render() {
        return (
            <div id="main-container">
                
                <label htmlFor="nombre" >Nombre :</label>
                <input value={this.state.nombre} onChange={this.onChange.bind(this)} type="text" name="nombre" id="nombre" />
                <br/>
                <label htmlFor="prioridad">prioridad :</label>
                <select id="prioridad" name="prioridad" value={this.state.prioridad} onChange={this.onChange.bind(this)}>
                    <option value="0">Seleccione</option>
                    <option value="Inportante">Importante</option>
                    <option value="No inportante">No importante</option>
                </select>
                <br/>
                <label htmlFor="vencimiento">Vencimiento :</label>
                <input type="Date" id="vencimiento" name="vencimiento" value={this.state.vencimiento} onChange={this.onChange.bind(this)} />
                <br/>
                <div>
                <button onClick={this.save.bind(this)}>Guardar</button>
                </div>
                
            </div>
        );
    } 
};

export default withRouter(NuevaTarea);