import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017'; // Your MongoDB connection URI
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let db;

const connectDatabase = async () => {
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
    console.log('MongoDB connected');
    db = client.db('Demo'); // Change this to your database name
    console.log("db:-", db);
  }
  return db;
};

const disconnectDatabase = () => {
  if (client) {
    client.close();
    console.log('MongoDB disconnected');
  }
};

export { connectDatabase, disconnectDatabase };
