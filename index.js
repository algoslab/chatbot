import dotenv from "dotenv";
import express from 'express';

const route = express();
dotenv.config();

const host = process.env.OLLAMA_HOST;
const port = process.env.OLLAMA_PORT;

//express.static('ebot');
route.use(express.static('views'));

route.get('/', (req, res) => {
    res.sendFile('index.html');
})

route.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on: ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
});