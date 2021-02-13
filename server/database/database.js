const { MongoClient } = require('mongodb');

const dbName = 'db_tareas';
const url = 'mongodb+srv://diego:19901989@cluster0.u1ees.mongodb.net/db_tareas?retryWrites=true&w=majority';

const client = new MongoClient(url, {
    useUnifiedTopology: true
});

module.exports = async() => {
    await client.connect();
    return client.db(dbName);
}