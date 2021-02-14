const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.u1ees.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(url, {
    useUnifiedTopology: true
});

module.exports = async() => {
    await client.connect();
    return client.db(process.env.DB_NAME);
}