import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class EditarTarea extends Component {

    state = {
        nombre: '',
        prioridad: '',
        vencimiento: '',
        imagen: ''
    }

    async componentDidMount() {
        const res = await fetch(`/api/editar_tarea/${localStorage.getItem('editar_tarea')}`)
        const data = await res.json()
        this.setState({nombre: data[0].nombre})
        this.setState({prioridad: data[0].prioridad})
        this.setState({vencimiento: data[0].vencimiento})
    }

    save(e){
        if(this.state.nombre !== '' && this.state.prioridad !== '0' && this.state.vencimiento !== '') {

            const $form = document.querySelector('#form');

            e.preventDefault();

            const forData = new FormData($form);
            
            fetch(`/api/actualizar_tarea/${localStorage.getItem('editar_tarea')}/${localStorage.getItem('id_usuario')}/${this.state.nombre}/${this.state.prioridad}/${this.state.vencimiento}` , {
                method: 'PUT',
                body: forData
            })
            
            alert('Actualizacion correctamente')
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
                <form id="form">
                    <input type="file" accept=".png, .jpg" name="imagen" id="imagen" />
                
                    <label htmlFor="nombre" >Nombre :</label>
                    <input value={this.state.nombre} onChange={this.onChange.bind(this)} type="text" name="nombre" id="nombre" />
                    <br/>
                    <label htmlFor="prioridad">prioridad :</label>
                    <select id="prioridad" name="prioridad" onChange={this.onChange.bind(this)}>
                        <option value="0">Seleccione</option>
                        <option value="Inportante">Importante</option>
                        <option value="No inportante">No importante</option>
                    </select>
                    <br/>
                    <label htmlFor="vencimiento">Vencimiento :</label>
                    <input type="Date" id="vencimiento" name="vencimiento" value={this.state.vencimiento} onChange={this.onChange.bind(this)} />
                    <br/>
                    <div>
                    <button onClick={this.save.bind(this)}>Actualizar</button>
                    </div>
                </form>
                
            </div>
        );
    } 
};

export default withRouter(EditarTarea);