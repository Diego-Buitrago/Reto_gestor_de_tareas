const request = require('supertest');
const dateformat = require('dateformat');
const faker = require('faker');
const app = require('../index');

describe('Prubas de los servicios de tareas y usuarios', () => {
    it('verificar al listar las tareas del usuario', async() => {
        const res = await request(app)
        .get('/api/tareas/602a9d22c26ed6d1a42c5af1')
        expect(res.statusCode).toEqual(200)
        expect(res.data)
    })

    it('prueba para registrar un nueva tarea', async() => {
        const res = await request(app)
        .post('/api/nueva_tarea')
        .send({
            id_usuario: '602a9d22c26ed6d1a42c5af1',
            nombre: faker.name.lastName(),
            prioridad: 'inportante',
            vencimiento: dateformat(faker.date.past(), "yyyy-mm-d")
        })
        expect(res.statusCode).toEqual(200)
        expect(res.data)
    })

    it('pruba para eliminar tarea', async() => {
        const res = await request(app)
        .delete('/api/eliminar_tarea')
        .send({
            id: "6031888fe1c59ee888d023ee"
        })
        expect(res.statusCode).toEqual(200)
        expect(res.data)
    })

    it('pruba para hacer login del usuario', async() => {
        const res = await request(app)
        .get('/api/login/die.ar.90@gmail.com/123456')
        expect(res.statusCode).toEqual(200)
        expect(res.data)
    })

    it('proba al registrar un nuevo usuario', async() => {
        const res = await request(app)
        .post('/api/nuevo_usuario')
        .send({
            correo: faker.internet.email(),
            contrasena: faker.internet.password()
        })
        expect(res.statusCode).toEqual(200);
        expect(res.body)
    })
})
