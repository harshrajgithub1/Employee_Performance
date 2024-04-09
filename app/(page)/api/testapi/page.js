import { connectDatabase, disconnectDatabase } from '../../../lib/mongo.js';

export default async function handler(req, res) {
  const db = await connectDatabase();
  console.log(db);
  const collection = db.collection('test'); // Change this to your collection name

  // Perform MongoDB operations here
  // For example:
  const documents = await collection.find({}).toArray();
  console.log(documents);
  // res.status(200).json(documents);

  disconnectDatabase();
}
