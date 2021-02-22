import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Registrase extends Component {

    state = {
        correo: '',
        contrasena: ''
    }

    save(e){
        if(this.state.correo !== '' && this.state.contrasena !== '') {
            
            fetch('/api/nuevo_usuario' , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                correo: this.state.correo,
                contrasena: this.state.contrasena
                })
            })
            alert('Usuario registrado')

            fetch('/api/send_mail', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  to: this.state.correo,
                  subject: 'Bienvenida al gestor de tareas',
                  username: this.state.correo,
                  password: this.state.contrasena
                }),
              });

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
                <h2>Crea un usuario</h2>
                <form className="form">
                    <label htmlFor="correo">Correo :</label>
                    <input value={this.state.correo} onChange={this.onChange.bind(this)} type="text" name="correo" id="correo"/>
                    <br/>
                    <label htmlFor="contrasena">Contraseña :</label>
                    <input value={this.state.contrasena} onChange={this.onChange.bind(this)} type="password" name="contrasena" id="contrasena" />
                    <br/>
                    <button onClick={this.save.bind(this)}>Guardar</button>
                </form>
                <a href="/">
                    <h4>Login</h4>
                </a>
            </div>
        );
    }
};

export default withRouter(Registrase);