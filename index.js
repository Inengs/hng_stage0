const express = require('express');
const port = 3000;
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.get('/details', (req, res) => {
    try {
        const email = 'inengiyeemmanuel@gmail.com';
        const dateandTimeNow = new Date().toISOString();
        const githubRepo = 'https://github.com/Inengs/hng_stage0';

        const response = {
            email: email,
            currentTime: dateandTimeNow,
            githubRepo: githubRepo,
        }

        res.status(200).json(response);
    } catch (err) {
        res.status(401).json({ error: "task failed" })
    }
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})