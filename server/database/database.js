const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI, {
    useUnifiedTopology: true
});

module.exports = async() => {
    await client.connect();
    return client.db(process.env.DB_NAME);
}