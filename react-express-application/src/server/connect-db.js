import { MongoClient } from 'mongodb';
const mongo_uri = `mongodb://localhost:27017/myorganizer`;
let db = null;

export async function connectDB(){
    if (db) return db;
    let client = await MongoClient.connect(mongo_uri, { useNewUrlParser: true });
    db = client.db();
    console.log("Got DB", db)
    return db;
}
// connectDB();

