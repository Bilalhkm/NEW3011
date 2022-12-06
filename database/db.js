const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'NEW3011';

async function connect (){
    await client.connect();
    const db= await client.db(dbName);
    return db;
}

module.exports=connect;
