const express = require('express');
const port = process.env.PORT || 3000;
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    try {
        const email = 'inengiyeemmanuel@gmail.com';
        const dateandTimeNow = new Date().toISOString();
        const githubRepo = 'https://github.com/Inengs/hng_stage0';

        const response = {
            email: email,
            current_datetime: dateandTimeNow,
            github_url: githubRepo,
        }

        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ error: "task failed" })
    }
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})