import dotenv from "dotenv";
import express from 'express';
import ollama from 'ollama';

const route = express();
route.use(express.json());
dotenv.config();

const host = process.env.SERVER_HOST;
const port = process.env.OLLAMA_PORT;

//express.static('ebot');
route.use(express.static('public'));

route.post('/bot-response', async (req, res) => {
    const response = await ollama.chat({
        model: 'smollm2:360m',
        messages: [
            {
                role: 'user',
                content: req.body.userText
            }
        ]
    });

    res.json({
        reply: response.message.content
    });
})

route.get('/', (req, res) => {
    res.sendFile('index.html');
})

route.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on: ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
});