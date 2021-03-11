import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './connect-db';

let port = 7000;
let app = express();

app.listen(port,console.log(`Server listening on port ${port}`));

app.use(
    cors(),
    bodyParser.urlencoded({}),
    bodyParser.json()
);

export const addNewTask = async task=> {
    let db =  await connectDB();
    let collection = db.collection(`tasks`);
    await collection.insertOne(task);
}

export const updateTask = async task=> {
    let { id, group, isComplete, name } = status;
    let db = await connectDB();
    let collection = db.collection(`tasks`);

    if (group) {
        await collection.updateOne({id}, {$set: {group}})
    }

    if (name) {
        await collection.updateOne({id}, {$set: {name}})
    }

    if (isComplete !== undefined) {
        await collection.updateOne({id}, {$set: {isComplete}})
    }
}

app.post('/task/new', async (req, res) => {
    let task = req.body.task;
    await addNewTask(task);
    res.status(200).send();
});

app.post('/task/update', async (req, res) => {
    let task = req.body.task;
    await addNewTask(task);
    res.status(200).send();
});
